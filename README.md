# indee-assignment  netlify link - https://indeeassignment.netlify.app/


1. **HTML Structure:**
   - The HTML contains a form for the login interface with fields for username/email, password, and a login button. There's also a container div (`loginDataDisplay`) where we'll display the stored login data.

2. **JavaScript Code:**
   - The JavaScript code starts with an event listener for the `DOMContentLoaded` event, ensuring that the JavaScript runs after the HTML content has been fully loaded.
   - Inside this event listener, we first select the login form element using `getElementById`.
   - We attach an event listener to the login form for the `submit` event. When the form is submitted, the callback function is executed.
   - Inside the submit event listener, we prevent the default form submission behavior using `event.preventDefault()`. This prevents the page from reloading when the form is submitted.
   - We then retrieve the values entered by the user in the username and password fields using `getElementById`.
   - Next, we create an object (`userData`) to store the username and password.
   - We convert this object into a JSON string using `JSON.stringify` and save it to localStorage using `localStorage.setItem`.
   - After storing the data, we call the `displayLoginData` function to display the stored login data on the web page.
   - The `displayLoginData` function retrieves the stored data from localStorage using `localStorage.getItem`.
   - It then checks if any data is stored. If data exists, it parses the JSON string back into an object using `JSON.parse`.
   - Finally, it updates the content of the `loginDataDisplay` div with the stored username/email and password.

3. **Execution Flow:**
   - When the user enters their username/email and password and clicks the login button, the form is submitted.
   - JavaScript prevents the default form submission behavior and retrieves the entered values.
   - It then stores these values in localStorage as a JSON string.
   - After storing the data, it retrieves and displays the stored login data on the web page.

4. **How to Run:**
   - To run this code, simply copy the HTML, CSS, and JavaScript code into separate files (`index.html`, `style.css`, `script.js`), ensuring they are in the same directory.
   - Open the `index.html` file in a web browser, and you should see the login form.
   - Enter a username/email and password, and click the login button.
   - The entered data will be stored in localStorage, and the stored data will be displayed below the form.

This code demonstrates storing and displaying login data using localStorage in a web browser.

Netlify link - https://indeeassignment.netlify.app/
