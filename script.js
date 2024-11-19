// Handle contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    const responseMessage = document.getElementById('responseMessage');
    
    // Basic form validation
    if (name === "" || email === "" || message === "") {
      responseMessage.innerHTML = "Please fill out all fields!";
      responseMessage.style.color = "red";
      return;
    }
  
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      responseMessage.innerHTML = "Please enter a valid email address!";
      responseMessage.style.color = "red";
      return;
    }
  
    responseMessage.innerHTML = "Thank you for your message!";
    responseMessage.style.color = "green";
  });
  