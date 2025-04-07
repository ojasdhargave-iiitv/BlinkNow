// location.js
const deliveryLocationInput = document.getElementById('deliveryLocationInput');

function updateDeliveryInfo() {

    const deliveryInput = document.getElementById('deliveryLocationInput');
    currentAddressEl.textContent = currentLocation.address;
    deliveryInput.value = currentLocation.address;
}
function selectLocation(location) {
    currentLocation = {
        address: location.display_name,
        coordinates: {
            lat: parseFloat(location.lat),
            lng: parseFloat(location.lon)
        }
    };
    
    localStorage.setItem('deliveryLocation', JSON.stringify(currentLocation));
    updateDeliveryInfo();
    estimateDeliveryTime();
    locationModal.style.display = 'none';
}
deliveryLocationInput.addEventListener('click', function() {
    locationModal.style.display = 'flex';
    locationSearch.focus();
});
document.getElementById('deliveryLocationInput').addEventListener('click', function() {
    document.getElementById('locationModal').style.display = 'flex';
});



document.addEventListener('DOMContentLoaded', function() {
    const deliveryTimeEl = document.getElementById('deliveryTime');
    const currentAddressEl = document.getElementById('currentAddress');
    const useCurrentLocationBtn = document.getElementById('useCurrentLocation');
    const changeLocationBtn = document.getElementById('changeLocation');
    const locationModal = document.getElementById('locationModal');
    const locationSearch = document.getElementById('locationSearch');
    const locationResults = document.getElementById('locationResults');
    const closeModal = document.querySelector('.close-modal');
    
    let currentLocation = {
        address: 'IIIT Vadodara, Gandhinagar, Gujarat, India',
        coordinates: null
    };
    initLocation();

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

    let searchTimeout;
    locationSearch.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        const query = this.value.trim();
        
        if (query.length > 2) {
            searchTimeout = setTimeout(() => {
                searchLocations(query);
            }, 300);
        } else {
            locationResults.innerHTML = '';
        }
    });
    
    function initLocation() {
        const savedLocation = localStorage.getItem('deliveryLocation');
        if (savedLocation) {
            currentLocation = JSON.parse(savedLocation);
            updateDeliveryInfo();
            estimateDeliveryTime();
            return;
        }
        
        updateDeliveryInfo();
        estimateDeliveryTime();
    }
    
    function getCurrentLocation() {
        deliveryTimeEl.textContent = 'Detecting your location...';
        
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;
                    currentLocation.coordinates = { lat: latitude, lng: longitude };
                    
                    try {
                        const response = await fetch(
                            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
                        );
                        
                        const data = await response.json();
                        
                        if (data.address) {
                            const addressParts = [];
                            if (data.address.road) addressParts.push(data.address.road);
                            if (data.address.suburb) addressParts.push(data.address.suburb);
                            if (data.address.city) addressParts.push(data.address.city);
                            if (data.address.state) addressParts.push(data.address.state);
                            if (data.address.country) addressParts.push(data.address.country);
                            
                            currentLocation.address = addressParts.join(', ');
                            localStorage.setItem('deliveryLocation', JSON.stringify(currentLocation));
                            updateDeliveryInfo();
                            estimateDeliveryTime();
                        } else {
                            throw new Error('Address not found in response');
                        }
                    } catch (error) {
                        console.error('Error getting address:', error);
                        currentLocation.address = 'Current location (address unavailable)';
                        updateDeliveryInfo();
                        estimateDeliveryTime();
                    }
                },
                (error) => {
                    console.error('Geolocation error:', error);
                    currentLocation.address = 'Location access denied';
                    updateDeliveryInfo();
                    estimateDeliveryTime();
                }
            );
        } else {
            currentLocation.address = 'Geolocation not supported';
            updateDeliveryInfo();
            estimateDeliveryTime();
        }
    }
    
    //api
    async function searchLocations(query) {
        locationResults.innerHTML = '<div class="location-result">Searching...</div>';
        
        try {
            //OpenStreetMap Nominatim API for geocoding
            const response = await fetch(
                `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&addressdetails=1`
            );
            const data = await response.json();
            
            if (data.length > 0) {
                displayLocationResults(data);
            } else {
                locationResults.innerHTML = '<div class="location-result">No results found</div>';
            }
        } catch (error) {
            console.error('Location search error:', error);
            locationResults.innerHTML = '<div class="location-result">Error searching locations</div>';
        }
    }
    
    function displayLocationResults(results) {
        locationResults.innerHTML = '';
        
        results.forEach(result => {
            const div = document.createElement('div');
            div.className = 'location-result';
            let displayName = result.display_name;
            if (displayName.length > 60) {
                displayName = displayName.substring(0, 60) + '...';
            }
            
            div.textContent = displayName;
            div.addEventListener('click', () => {
                selectLocation(result);
            });
            locationResults.appendChild(div);
        });
    }
    
    function selectLocation(location) {
        currentLocation = {
            address: location.display_name,
            coordinates: {
                lat: parseFloat(location.lat),
                lng: parseFloat(location.lon)
            }
        };
        
        localStorage.setItem('deliveryLocation', JSON.stringify(currentLocation));
        updateDeliveryInfo();
        estimateDeliveryTime();
        locationModal.style.display = 'none';
    }

    function updateDeliveryInfo() {
        currentAddressEl.textContent = currentLocation.address;
    }
    
    function estimateDeliveryTime() {
        const deliveryTimes = [
            "Delivering in 8 minutes",
            "Delivering in 10 minutes",
            "Delivering in 15 minutes",
            "Delivering in 20 minutes"
        ];
        const randomTime = deliveryTimes[Math.floor(Math.random()*deliveryTimes.length)];
        deliveryTimeEl.textContent = randomTime;
    }
});