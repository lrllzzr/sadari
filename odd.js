
$(document).ready(function(){
  var i=1;
    $("#rule").click(function(){
      var results =  Math.round(Math.random());

      if(results===0){

        // $("#result").html("홀");
        $("ol").append('<div id="whole"><span id="round">'+i+('회차&nbsp')+'</span>'+"<li id='odd'>홀</li></div>");
        // $("li").css('backgroundColor','blue');
        i=i+1;

      }
      else{
        // $("#result").html("짝").css('backgroundColor','red');
        $("ol").append('<div id="whole"><span id="round">'+i+('회차&nbsp')+'</span>'+"<li id='even'>짝</li></div>");
        // $("ol li").css('backgroundColor','red');
        i=i+1;

      }
    });
});



$(document).ready(function(){
  $( ".oddbtn1" ).click(function() {
  $( this ).toggleClass( "selected" );
  $(".evenbtn1").removeClass("selected");
  });

  $( ".evenbtn1" ).click(function() {
  $( this ).toggleClass( "selected" );
  $(".oddbtn1").removeClass("selected");
  });

  $( ".evenbtn2" ).click(function() {
  $( this ).toggleClass( "selected" );
  $(".oddbtn2").removeClass("selected");
  });

  $( ".oddbtn2" ).click(function() {
  $( this ).toggleClass( "selected" );
  $(".evenbtn2").removeClass("selected");
  });

});
