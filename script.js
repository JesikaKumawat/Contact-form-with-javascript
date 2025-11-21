document.getElementById("contactform").addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let messageError = document.getElementById("messageError");
    let successMessage = document.getElementById("successMessage");

    let isValid = true;

    // clear previous messages
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";

    // name validation
   if (name === "") {
    nameError.textContent = "Name is required.";
    isValid = false;
   } else if (name.length < 3) {
    nameError.textContent = "Name must be at least 3 characters.";
    isValid = false;
   }

    // email validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === "") {
        emailError.textContent = "Email is required.";
        isValid = false;
    }  else if (!email.match(emailPattern)) {
        emailError.textContent = "Enter a valid email address.";
        isValid = false;
    }

    // messgae validation
    if (message === "") {
        messageError.textContent = "Message cannot be empty.";
        isValid = false; 
    } else if (message.length < 10) {
        messageError.textContent = "Message must be at least 10 characters.";
        isValid = false;
    }

    // success message
    if (isValid) {
        successMessage.textContent = "Form submitted successfully!";
        document.getElementById("contactform").reset();
    }
});