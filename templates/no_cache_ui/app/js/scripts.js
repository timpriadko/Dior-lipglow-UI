'use strict';

document.addEventListener('DOMContentLoaded', function () {
  //disable context
  $(document).bind("contextmenu", function (e) {
    return false;
  });

  /* custom keyboard layouts */
  var normalLayout = [
    ' 1 2 3 4 5 6 7 8 9 0 -',
    '@ q w e r t y u i o p',
    ' a s d f g h j k l {bksp}',
    '~ z x c v b n m _ .',
    '{accept}',
  ];
  /* custom keyboard layouts */

  if (window.innerWidth > 560) {
    // init https://mottie.github.io/Keyboard/
    if ($('.user-form input').length > 0) {
      $('.user-form input').keyboard({
        layout: 'custom',
        position: {
          of: '.user-form input',
          my: 'center bottom',
          at2: 'center bottom'
        },
        usePreview: false,
        customLayout: {
          normal: normalLayout,
        },
        visible: function (e, keyboard) {
          keyboard.$keyboard.find('.ui-keyboard-accept').text('Done')
          keyboard.$keyboard.find('.ui-keyboard-bksp').text('Del');

          $('.main-contact').addClass('keyboard-active');
          $(this).closest('div').removeClass('to-hide');
          $(this).closest('div').find('p').removeClass('hidden');
        },
        hidden: function (e, keyboard, el) {
          $('.main-contact').removeClass('keyboard-active');
          $(this).closest('div').find('p').addClass('hidden')
          $(this).closest('div').addClass('to-hide');
        },
        autoAccept: true,
        appendTo: $('.keyboard'),
      });
    };
  };

  //validate email

  function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,6})+$/;
    return regex.test(email);
  };


  // validate Terms agreement
  var email = $('#email');
  var text_inputs = $('.user-form input[type=text]');
  var infoSubmitLabel = $('#formSubmitLabel');
  var infoSubmit = $('#formSubmit');

  var form_validation = function () {
    var text_inputs_filled_arr = [];
    var text_inputs_filled = false;

    // text inputs require validation
    text_inputs.each(function () {
      if ($(this).val() === '') {
        text_inputs_filled_arr.push(false)
        $(this).closest('div').addClass('required');
      } else {
        text_inputs_filled_arr.push(true)
        $(this).closest('div').removeClass('required');
      }
    })

    // check if all text inputs are filled
    text_inputs_filled = !text_inputs_filled_arr.includes(false);

    // email validation
    if (!isEmail(email.val()) && !email.hasClass('required')) {
      email.closest('div').addClass('invalid-email');
    } else {
      email.closest('div').removeClass('invalid-email');
    }

    // email validaton
    if (isEmail(email.val()) &&
      text_inputs_filled === true &&
      !email.hasClass('required')
    ) {
      infoSubmit.removeAttr('disabled');
      infoSubmitLabel.removeClass('disabled');
    } else {
      infoSubmit.attr('disabled', 'disabled');
      infoSubmitLabel.addClass('disabled');
    }
  };

  email.change(function () {
    form_validation()
  });

  email.keyup(function () {
    form_validation()
  });

  text_inputs.keyup(function () {
    form_validation()
  });

  /* setup modal */
  var terms = $('#terms');
  var termsBtn = $('.terms-btn');
  var policyBtn = $('.policy-btn');
  var termsModal = $('#modal-terms');
  var policyModal = $('#modal-policy');
  var closeBtn = $('.ui-close-modal');
  var termsSubmitLabel = $('#terms_form_label');
  var termsSubmit = $('#terms_form_submit');

  // terms validation

  function termsValidation() {
    if ($(terms).is(':checked')
    ) {
      termsSubmit.removeAttr('disabled');
      termsSubmitLabel.removeClass('disabled');
    } else {
      termsSubmit.attr('disabled', 'disabled');
      termsSubmitLabel.addClass('disabled');
    }
  };

  terms.change(termsValidation);

  termsBtn.on('click', function () {
    termsModal.addClass('show');
  });

  policyBtn.on('click', function () {
    policyModal.addClass('show');
  });

  closeBtn.on('click', function () {
    termsModal.removeClass('show');
    policyModal.removeClass('show');
  });

  // close modal by clicking outside the modal window
  $('.modal-wrap').click(function (e) {
    if (e.target === $('.modal-wrap.show')[0]) {
      $('.modal-wrap').removeClass('show');
    }
  })
  /* end modal */

});