// // validation.js
document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form submission
    
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");
  
    // Password validation pattern (at least one letter, one number, one special char, and 8+ characters)
    const pattern = /^(?=.[A-Za-z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
    if (pattern.test(password)) {
      errorMessage.textContent = "";  // Clear any previous error message
      alert("Password is valid! Form can be submitted.");
      // You can submit the form here if needed, e.g.:
      // document.getElementById("signup-form").submit();
    } else {
      errorMessage.textContent = alert("Password must be at least 8 characters long, contain at least one letter, one number, and one special character.");
    }
  });
  
// // search
      // Predefined string to search within
    // const predefinedText = "I love programming with JavaScript, Java, and Python.";

    // Get the button and result elements
    const searchButton = document.getElementById("btn");
    const resultElement = document.getElementById("result");

    // Function to handle the search
    searchButton.addEventListener("click", function() {
      const searchTerm = document.getElementById("search-term").value.trim();

      // Check if the input field is empty
      if (searchTerm === "") {
        resultElement.textContent = alert("Please enter a search term.");
        resultElement.classList.add("error");
        return;
      }
// get entire text content of the document
    const documentText