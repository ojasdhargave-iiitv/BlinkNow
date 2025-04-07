// location.js
document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const deliveryTimeEl = document.getElementById('deliveryTime');
    const currentAddressEl = document.getElementById('currentAddress');
    const useCurrentLocationBtn = document.getElementById('useCurrentLocation');
    const changeLocationBtn = document.getElementById('changeLocation');
    const locationModal = document.getElementById('locationModal');
    const locationSearch = document.getElementById('locationSearch');
    const locationResults = document.getElementById('locationResults');
    const closeModal = document.querySelector('.close-modal');
    
    // Current location data
    let currentLocation = {
        address: 'IIIT Vadodara, Gandhinagar, Gujarat, India',
        coordinates: null
    };
    
    // Initialize
    initLocation();
    
    // Event listeners
    useCurrentLocationBtn.addEventListener('click', function(e) {
        e.preventDefault();
        getCurrentLocation();
        locationModal.style.display = 'none';
    });
    
    changeLocationBtn.addEventListener('click', function(e) {
        e.preventDefault();
        locationModal.style.display = 'flex';
    });
    
    closeModal.addEventListener('click', function() {
        locationModal.style.display = 'none';
    });
    
    locationModal.addEventListener('click', function(e) {
        if (e.target === locationModal) {
            locationModal.style.display = 'none';
        }
    });
    
    // Search locations when typing
    let searchTimeout;
    locationSearch.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        const query = this.value.trim();
        
        if (query.length > 2) {
            searchTimeout = setTimeout(() => {
                searchLocations(query);
            }, 300);
        }
    });
    
    // Initialize location
    function initLocation() {
        // Try to get from localStorage first
        const savedLocation = localStorage.getItem('deliveryLocation');
        if (savedLocation) {
            currentLocation = JSON.parse(savedLocation);
            updateDeliveryInfo();
            return;
        }
        
        // Otherwise try to detect
        getCurrentLocation();
    }
    
    // Get current location using browser geolocation
    function getCurrentLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;
                    currentLocation.coordinates = { lat: latitude, lng: longitude };
                    
                    try {
                        // Call your backend to get address from coordinates
                        const response = await fetch('/api/location/current', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                lat: latitude,
                                lng: longitude
                            })
                        });
                        
                        const data = await response.json();
                        
                        if (response.ok) {
                            currentLocation.address = data.address;
                            localStorage.setItem('deliveryLocation', JSON.stringify(currentLocation));
                            updateDeliveryInfo();
                            estimateDeliveryTime();
                        } else {
                            throw new Error(data.error || 'Failed to get address');
                        }
                    } catch (error) {
                        console.error('Error getting address:', error);
                        currentLocation.address = 'Location detected (address unavailable)';
                        updateDeliveryInfo();
                    }
                },
                (error) => {
                    console.error('Geolocation error:', error);
                    currentLocation.address = 'Location access denied';
                    updateDeliveryInfo();
                }
            );
        } else {
            currentLocation.address = 'Geolocation not supported';
            updateDeliveryInfo();
        }
    }
    
    // Search for locations using backend API
    async function searchLocations(query) {
        try {
            const response = await fetch(`/api/location/search?query=${encodeURIComponent(query)}`);
            const data = await response.json();
            
            if (response.ok) {
                displayLocationResults(data);
            } else {
                throw new Error(data.error || 'Search failed');
            }
        } catch (error) {
            console.error('Location search error:', error);
            locationResults.innerHTML = '<div class="location-result">Error searching locations</div>';
        }
    }
    
    // Display search results
    function displayLocationResults(results) {
        locationResults.innerHTML = '';
        
        if (results.length === 0) {
            locationResults.innerHTML = '<div class="location-result">No results found</div>';
            return;
        }
        
        results.forEach(result => {
            const div = document.createElement('div');
            div.className = 'location-result';
            div.textContent = result.description;
            div.addEventListener('click', () => {
                selectLocation(result);
            });
            locationResults.appendChild(div);
        });
    }
    
    // Handle location selection
    async function selectLocation(location) {
        // In a real app, you would need to get coordinates for this location
        // For now we'll just use the description
        currentLocation = {
            address: location.description,
            coordinates: null // Would be set in a real implementation
        };
        
        localStorage.setItem('deliveryLocation', JSON.stringify(currentLocation));
        updateDeliveryInfo();
        estimateDeliveryTime();
        locationModal.style.display = 'none';
    }
    
    // Update UI with current location
    function updateDeliveryInfo() {
        currentAddressEl.textContent = currentLocation.address;
    }
    
    // Estimate delivery time from backend
    async function estimateDeliveryTime() {
        try {
            const response = await fetch('/api/delivery/estimate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    address: currentLocation.address,
                    coordinates: currentLocation.coordinates
                })
            });
            
            const data = await response.json();
            
            if (response.ok) {
                deliveryTimeEl.textContent = data.message;
            } else {
                throw new Error(data.error || 'Estimation failed');
            }
        } catch (error) {
            console.error('Delivery estimation error:', error);
            deliveryTimeEl.textContent = 'Delivery time unavailable';
        }
    }
});