# Software Development Form

This basic web form was created as coursework for my 'Software Devlopment and Design' module in my second year of university. The focus of this form and coursework ws to implement good software design by 
focusing on input validation alongside good UX standards.
</br>
</br>
This form includes name, age, date of birth, country and email address as inputs in various forms, through the use of HTML, CSS and Javascript. The system valididates it is in a correct format depending on the data
inputs and types. It also validates the form before it can be submitted and saved into a plain text file with a dictionary-like layout.

Through Javascript, the form validates the data entered. Each validation is listed here:
* Date of birth had a pre set range of 1925-2025 in the HTML file
* Country was a pre set list in the HTML file
* Name input must be characters, not numbers through Javascript function
* Age input must be in range of 1-100 and a numerical through Javascript functions
* Email address must be in the format ^[^\s@]+@[^\s@]+\.[^\s@]+$ as a pattern regex in Javascript function
* Users must check T&Cs box before submission
* Submission and save can only take place if all validations are completed

### Webform Layout 
<img width="1494" alt="Screenshot 2025-03-26 at 02 26 43" src="https://github.com/user-attachments/assets/19beeebd-bbf7-4bbf-8373-51370afdb0fa" />
</br>

### Text File Format
<img width="514" alt="Screenshot 2025-03-26 at 02 39 39" src="https://github.com/user-attachments/assets/54647dac-2950-4603-b045-42691d4a7912" />

