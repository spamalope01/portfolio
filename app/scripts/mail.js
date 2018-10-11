(function(module){
  var mail = {};

  mail.$from = null;
  mail.$phone = null;
  mail.$email = null;
  mail.$message = null;


  // mail.getForm = function(){
  //   // $('.blah').on('Submit', '.shitHead', function(e){
  //     console.log('in the getform');
  //     e.preventDefault();
  //   });





    // $('.contactForm').off().on('click', '.sendMail', function(e){
    //   console.log('clicked the form');
    //   e.preventDefault();
    //   mail.$from = $('.contactForm input[name=sender]').val();
    //   mail.$email = $('.contactForm input[name=email]').val();
    //   mail.$phone = $('.contactForm input[name=phone]').val();
    //   mail.$message = $('.contactForm textarea[name=message]').val();
      // $.get("http://localhost:9000/send", {
      //   from: mail.$from,
      //   phone: mail.$phone,
      //   email: mail.$email,
      //   text: mail.$message
      // }, function(data){
      //   console.log('in the get function');
      //   if(data == "sent"){
      //     console.log("email sent");
      //     $('.contactForm').hide();
      //     $('.contactInvite').hide();
      //     $('#sentMessage').empty().html(
      //       'Your email has been sent.  Thank you!  We will be in touch soon.'
      //     );
      //   }
      // });
    //});
  //};




  $(document).ready(function() {
    mail.getForm();
    // mail.showContact();
    // mail.hideContact();
    // $('.slideout').hide();
    mail.sendForm();
  });






  module.mail = mail;
})(window);
