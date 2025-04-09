function checklogin() {
    
    let phone = document.getElementById("phone").value.trim();
    let pass = document.getElementById("pass").value.trim();
    let msg = document.getElementById("message");

   
    console.log("Login clicked", phone, pass);

  
    fetch("data.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load JSON");
            }
            return response.json();
        })
        .then(data => {
            let found = false;

            for (let user of data) {
                if (user.phone === phone && user.pass === pass) {
                    found = true;
                    break;
                }
            }

          
            if (found) {
                msg.textContent = " Login successful!";
                msg.style.color = "green";
            } else {
                msg.textContent = " Wrong phone or password!";
                msg.style.color = "red";
            }
        })
        .catch(error => {
            console.error("Fetch error:", error);
            msg.textContent = " Couldn't load user data!!!";
            msg.style.color = "orange";
        });
}
