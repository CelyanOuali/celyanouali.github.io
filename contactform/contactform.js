jQuery(document).ready(function($) {
  "use strict";
  // Contact Form Submission
  $('form.contactForm').submit(function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    var form = $(this); // Reference to the form element

    // Define the parameters for emailjs.sendForm
    emailjs.initiate('yMMakr9KQLEBwbkJb');
    var serviceID = 'service_i58p4dg';
    var templateID = 'template_vnvsnrc';
    var options = {}; // You can optionally specify additional options here

    // Use emailjs.sendForm to send the form data
    emailjs.sendForm(serviceID, templateID, form[0], options)
      .then(function(response) {
        // Handle success response
        console.log('Form submitted successfully:', response);
        $("#sendmessage").addClass("show");
        $("#errormessage").removeClass("show");
        form[0].reset(); // Reset the form fields
      }, function(error) {
        // Handle error response
        console.error('Form submission failed:', error);
        $("#sendmessage").removeClass("show");
        $("#errormessage").addClass("show");
        $('#errormessage').html("Error: " + error);
      });
  });
});
