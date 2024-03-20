jQuery(document).ready(function($) {
  "use strict";

  // Contact Form Submission
  $('form.contactForm').submit(function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    var form = $(this); // Reference to the form element
    var formData = form.serialize(); // Serialize form data to send via AJAX

    // AJAX POST request to send form data
    $.ajax({
      type: "POST",
      url: "https://api.emailjs.com/api/v1.0/email/send", // URL for EmailJS API endpoint
      data: formData, // Form data to be sent
      success: function(response) {
        // Handle successful response from the server
        console.log("Form submitted successfully:", response);
        $("#sendmessage").addClass("show");
        $("#errormessage").removeClass("show");
        form[0].reset(); // Reset the form fields
      },
      error: function(xhr, status, error) {
        // Handle error response from the server
        console.error("Form submission failed:", error);
        $("#sendmessage").removeClass("show");
        $("#errormessage").addClass("show");
        $('#errormessage').html("Error: " + error);
      }
    });
  });

});
