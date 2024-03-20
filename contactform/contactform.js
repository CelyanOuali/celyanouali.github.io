jQuery(document).ready(function($) {
  "use strict";

  // Contact Form Submission
  $('form.contactForm').submit(function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    var form = $(this); // Reference to the form element

    // Create a new FormData object and append form data
    var formData = new FormData(form[0]);
    formData.append('service_id', 'service_i58p4dg'); // Service ID of the service
    formData.append('template_id', 'template_vnvsnrc'); // Template ID of the email
    formData.append('user_id', 'IhLLWYFXuc77f69_f'); // Public Key of the account
    formData.append('from_name', form.find("input[name='name']").val()); // Sender's name
    formData.append('from_email', form.find("input[name='email']").val()); // Sender's email

    // Make AJAX request to EmailJS API
    $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
        type: 'POST',
        data: formData,
        contentType: false, // auto-detection
        processData: false // no need to parse formData to string
    }).done(function(response) {
        // Handle success response
        console.log('Form submitted successfully:', response);
        $("#sendmessage").addClass("show");
        $("#errormessage").removeClass("show");
        form[0].reset(); // Reset the form fields
    }).fail(function(error) {
        // Handle error response
        console.error('Form submission failed:', error);
        $("#sendmessage").removeClass("show");
        $("#errormessage").addClass("show");
        $('#errormessage').html("Error: " + JSON.stringify(error));
    });
  });
});
