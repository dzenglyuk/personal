$('#submit').click(function() {
  // Please set your email in url field
  $.ajax({
      url: "https://formspree.io/dzenglyuk23@ukr.net",  
      method: "POST",
      data: {
             name: name.value,
             email: email.value,
             message: message.value
             },
      dataType: "json"
  }).done(function() {
     $('#form').html('<h1>Thank you!</h1>')
  } );
});