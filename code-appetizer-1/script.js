$(document).ready(function(){
    $('#the-form').submit(function(e){
        e.preventDefault();
    var str = $('#email').val();
    console.log(str);

    var lower = str.toLowerCase();
    console.log(lower);
    var test = $.trim(lower);
    console.log(test);

    var avatar = MD5(test);
    console.log(avatar);
    
    var mylink = 'http://www.gravatar.com/avatar/' + avatar + '?s=256';
    console.log(mylink);

    $('#avatar').attr('src', mylink);
    });



  // Your code goes here
  // When someone types in an email in the input, replace the image with that person's gravatar
  // The format for the gravatar URL: http://www.gravatar.com/avatar/HASH?s=256
  // Where the hash is calculated as follows:
  //  1. Strip out all trailing and leading spaces from the email
  //  2. convert the email to all lowercase
  //  3. create the MD5 hash of that string using the MD5 function provided
  // MD5("stuff") will return the MD5 hash of the string "stuff"


});