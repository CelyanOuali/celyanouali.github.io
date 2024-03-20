jQuery(document).ready(function($) {
  "use strict";

  // Contact Form Submission
  $('form.contactForm').submit(function() {
      var f = $(this).find('.form-group');
      var ferror = false;

      // Perform client-side form validation
      f.each(function() {
          var i = $(this).find('input, textarea');
          var rule = i.attr('data-rule');

          if (rule !== undefined) {
              var pos = rule.indexOf(':');
              if (pos >= 0) {
                  var exp = rule.substr(pos + 1);
                  rule = rule.substr(0, pos);
              }

              switch (rule) {
                  case 'required':
                      if (i.val() === '') {
                          ferror = true;
                      }
                      break;
                  case 'minlen':
                      if (i.val().length < parseInt(exp)) {
                          ferror = true;
                      }
                      break;
                  case 'email':
                      var emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;
                      if (!emailExp.test(i.val())) {
                          ferror = true;
                      }
                      break;
              }

              i.next('.validation').html(ferror ? (i.attr('data-msg') !== undefined ? i.attr('data-msg') : 'Invalid Input') : '').show('blind');
          }
      });

      // Simulate form submission success
      if (!ferror) {
          $("#sendmessage").addClass("show");
          $("#errormessage").removeClass("show");
          $('.contactForm').find("input, textarea").val("");
      } else {
          $("#sendmessage").removeClass("show");
          $("#errormessage").addClass("show");
          $('#errormessage').html("There was an error submitting the form. Please try again later.");
      }

      return false;
  });
});
