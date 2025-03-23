// Theme Toggle
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// Show Form
function startForm(type) {
    document.getElementById('patient-form').classList.remove('hidden');
    document.getElementById('form-title').innerText = `Fill ${type} Details`;
}

// Form Submission with Validation
document.getElementById("patient-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();

    // Validation
    if (name === "" || email === "" || phone === "") {
        alert("All fields are required!");
        return;
    }

    if (!/^\d{10}$/.test(phone)) {
        alert("Enter a valid 10-digit phone number!");
        return;
    }

    // Store data in localStorage
    const patientData = { name, email, phone };
    localStorage.setItem("patientInfo", JSON.stringify(patientData));

    // Show success message
    document.getElementById("success-message").classList.remove("hidden");

    // Clear form
    document.getElementById("patient-form").reset();

    // Hide form after submission
    setTimeout(() => {
        document.getElementById("patient-form").classList.add("hidden");
        document.getElementById("success-message").classList.add("hidden");
    }, 3000);
});
