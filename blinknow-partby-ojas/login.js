document.querySelector('.button').addEventListener('click', async () => {
  const phone = document.querySelector('.num').value.trim();
  const password = document.querySelector('.pass').value.trim();

  if (!phone || !password) {
    alert("Please enter both phone number and password.");
    return;
  }

  try {
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone, password })
    });

    const result = await response.json();

    if (result.success) {
      alert("Login successful!");
      window.location.href = "blinknow.html"; // Redirect on success
    } else {
      alert(result.message || "Login failed.");
    }
  } catch (err) {
    console.error("Error logging in:", err);
    alert("Something went wrong. Please try again.");
  }
});
