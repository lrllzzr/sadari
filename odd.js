

$(document).ready(function(){
  var left;
  var right;
  var i=1;
  var total=5000;
    $("#roll").click(function(){
      var results =  Math.round(Math.random());

      if(results===0){
        $("ol").append('<div id="whole"><span id="round">'+i+('회차&nbsp')+'</span>'+"<li id='odd'>홀</li></div>");
        i=i+1;
        return left=0;

      }
      else{
        $("ol").append('<div id="whole"><span id="round">'+i+('회차&nbsp')+'</span>'+"<li id='even'>짝</li></div>");
        i=i+1;
        return left=1;
      }

    });

});
$(document).ready(function(){
  $('input[id=js_first]').click(function(){
    $('#js_first').val(null);
  })

  $('button[id=js_submit]').click(function(eventObject){
    var sum= parseInt($('#js_first').val()) *1.95;
    $('#js_result').val( Math.round(sum) );

  })

  $('button[id=set]').click(function(){
    $('#js_first').val(5000);
    $('#js_result').val(null);

  });


});


// $(document).ready(function(){
// var total=5000;
//     $("#oddclick").click(function(){
//       var results =  Math.round(Math.random());
//
//       if(results===0){
//         total=total+5000*0.95;
//         $('#ax').html(total);
//         right:0;
//
//       }
//       else{
//         total=total-5000;
//         $('#ax').html(total);
//         right=1;
//       }
//     });
// });


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
  $("#bet").click(function(){
    alert('정상적으로 배팅 되었습니다');
  });

});
