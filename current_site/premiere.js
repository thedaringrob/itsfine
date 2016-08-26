$(document).ready(function(){

console.log('script loaded');

// 3 functions:
// 1-on click fires the fields checker
// 2-field checker if all fields are full then fire function
// 3-replace dom elements


  $("#submit").on("click", function(){
    console.log('clicked');
    allFields();
  });


var allFields = function(){

         event.preventDefault();

          var fname = $('.first_name').val();
          var lname = $('.last_name').val();
          var email = $('.email').val();
          var phone = $('.phone').val();
          var party = $('.party').val();

          if (fname === '' || lname === '' || email === '' || phone === '' || party === ''){
            alert("Not so fast! All fields must be filled.");
            console.log('ran comparison');
          }else{

              confirmedFields();{


              }

          }

};



//
function confirmedFields(){
  console.log('remove function fired');
  $('.response').remove();
  
  // addContent();

//remove the form and buttons
// $(".response").innerHTML("Got it! Can't wait to see you.");

//replace with this text "Got it! Can't wait to see you."
}

// var addContent = function(){
//   // console.log('insert function here!');
//   // $('div.confirmed').html('<div>Great!</div>');
// };

});
