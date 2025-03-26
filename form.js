// check if  firstname inputs valid 
function checkFullNameInput(){
    var fullnameInput = document.getElementById("fullname").value // gets fullname value from html
    if (!isNaN(fullnameInput)) { // if not charactrs
        document.getElementById('fullnameresult').innerHTML = 'Please enter characters' // displys message in div tag under the input
        document.getElementById("fullname").value = "" // clears input box so user can re enter
    }
    else {
        // input has valid characters and can be used as a valid name input
        document.getElementById('fullnameresult').innerHTML = 'Name input is valid';
    } 
 }

  //check age input
function checkAgeInput(){
  var ageInput = document.getElementById("age").value.trim(); // Get age input from html
  var parsedAgeFloat = parseFloat(ageInput); // parse from string to float
    
        // Check if the input is a number and not empty and not 0
    if (ageInput === "" || isNaN(parsedAgeFloat || ageInput == 0)) { 
      document.getElementById('ageresult').innerHTML = 'Please enter a valid number for age'; }  // displays message in div tag under input box in html
    else {
      document.getElementById('ageresult').innerHTML = 'Age input is valid'; // displays message in div tag box under input
     }
 }

// checks if email matches a valid format of text then @ symbol with a full stop in a regex
function validateEmail() {
     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // regex pattern of email format - [^\s@] means anything but spaces or an @ symbol are allowed before email @ symbol
     // @ symbol is reuired before same condition as username applies, then a full stop is required before domain extension
     var emailInput = document.getElementById("email").value // assigns email value to new variable
    if (emailPattern.test(emailInput)){ // if email matches regex format
        document.getElementById('emailresult').innerHTML = "Email input is valid" }// displays in div tag
    else {
        document.getElementById('emailresult').innerHTML = "Please enter a valid input" // displays in div tag
        document.getElementById("email").value = "" // clears input so user can reenter
     }
    
}


// checks to see if age input is within valid range of 1-100
function checkAgeRange(){
    var ageRangeInput = document.getElementById("age").value // gets value of age
    var parseAge = parseFloat(ageRangeInput) // parses from string to float
    if (parseAge < 1 || parseAge > 100){ // if age is out of range 1-100
        document.getElementById('ageresult').innerHTML = "Age input is out of range" // displays in div tag
        document.getElementById("age").value = "" // clears input so user cn reenter
    }
    else {
        document.getElementById('ageresult').innerHTML = "Age input is valid"  // displays in div tag
    }
}

// function to save data into a txt file
function saveForm(){
        // checks of t and cs agree too
   if (!validateCheckbox()) {
        return false; // stops form being submitted if checkbox is not checked
        }
   const fullname = document.getElementById('fullname').value; // gets all input values
   const age = document.getElementById('age').value;
   const dob = document.getElementById('dateofbirth').value;
   const email = document.getElementById('email').value;
   const country =document.getElementById('country').value;
   const data = `Name: ${fullname}\nAge: ${age}\nDate of Birth: ${dob}\nEmail: ${email}\nCountry: ${country}`; // template to text file

   const blob = new Blob([data], { type: 'text/plain' }); // holds data in plain text file
   const link = document.createElement('a'); 
   link.href = URL.createObjectURL(blob); // creation of link to download
   link.download = 'webform.txt'; // declares download file name

   link.click() // once clicked, file downloaded to user's device

   return false;
}

// function to chek if checkbox was ticked
function validateCheckbox() {
    const checkbox = document.getElementById('agree'); // gets checkbox function

    // check if the checkbox is tixed
    if (!checkbox.checked) {
        alert('You must agree to the terms and conditions.');
        return false;  // stops form submission
    }
    return true;  // allows form submission
}
