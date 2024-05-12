document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const forgotPasswordLink = document.getElementById('forgotPassword');

  loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Validate username/email and password
    if (usernameInput.value.trim() === '') {
      alert('Please enter your username or email.');
      return;
    }

    if (passwordInput.value.trim() === '') {
      alert('Please enter your password.');
      return;
    }

    // If remember me is checked, save the login credentials (not implemented in this example)
    
    // Simulate login process (show success message)
    alert('Login successful!');
  });

  forgotPasswordLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    alert('Forgot Password?'); // Open an alert (you can implement forgot password functionality here)
  });
});
