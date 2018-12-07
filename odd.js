
$(document).ready(function(){
  $('input[id=js_first]').click(function(){
    $('#js_first').val(null);
  })


  $('input[id=js_first]').keyup(function(){
    var value= $('#js_first').val();
    $('div[id=js_result]').text(Math.round(value*1.95));

  }).keyup();

  $('button[id=set]').click(function(){
    $('#js_first').val(5000);
    $('#js_result').text(null);

  });
});



$(document).ready(function(){
  var success = '당첨되었습니다';
  var fail = '실패했습니다';
  var left;
  var right;
  var i=1;
  var total=5000;
  var bet;
  var charged=0;

  var five=5000;
  var ten=10000;
  var fifty=50000;
  var now=0;
  var total=0;

  var setback = function(){



  $('#js_first').val(5000);
  $('#js_result').text(null);
};



  $('#howmuch1').click(function(){

    now=now+five;
    charged=charged+five;
    $('#cash_left1').html(Math.round(total));
    $('#cash_left2').html(Math.round(now));
    $('#cash_left3').html(Math.round(charged));
    alert('충전되었습니다');

  });
  $('#howmuch2').click(function(){
    now=now+ten;
    charged=charged+ten;

    $('#cash_left1').html(Math.round(total));
    $('#cash_left2').html(Math.round(now));
    $('#cash_left3').html(Math.round(charged));
alert('충전되었습니다');
  });

  $('#howmuch3').click(function(){
    now=now+fifty;
    charged=charged+fifty;

    $('#cash_left1').html(Math.round(total));
    $('#cash_left2').html(Math.round(now));
    $('#cash_left3').html(Math.round(charged));
alert('충전되었습니다');
  })

  $( ".oddbtn1" ).click(function() {
  $( this ).toggleClass( "selected" );
  $(".evenbtn1").removeClass("selected");

  });

  $( ".evenbtn1" ).click(function() {
  $( this ).toggleClass( "selected" );
  $(".oddbtn1").removeClass("selected");
  });

   // 홀버튼
    $( ".oddbtn2" ).click(function() {
    $( this ).toggleClass( "selected" );

    $(this).addClass("selected");
    $(".evenbtn2").removeClass("selected");

    left=0;
    bet= 0;


    });
  // 짝버튼
    $( ".evenbtn2" ).click(function() {
    $( this ).toggleClass( "selected" );
    $(".oddbtn2").removeClass("selected");

    left=1;
    bet=0;
    });

  $("#bet").click(function(){
    if((now+1)>=Math.round($("#js_first").val())){
      if(bet==0 && $("#js_first").val()>=5000){

    alert('정상적으로 배팅 되었습니다');
    right=0;
    bet=1;
  }
  else if($("#js_first").val()<5000){
    alert('배팅 금액은 5천원 이상입니다');
    bet=1;
  }
  else if(bet!==0){
    alert('경기를 선택해 주세요');

    bet=1;
  }
}
else{
alert('보유금액이 부족합니다');
}


  });

    $("#roll").click(function(){
      $(".oddbtn2").removeClass("selected");
      $(".evenbtn2").removeClass("selected");

      var odd= '홀';
      var even='짝';
      var results =  Math.round(Math.random());
      var recoded = '<div id="resulted">'+(i)+'회차 : 당첨  <div id = "resulted2"> 배팅 금액 :&nbsp'+$("#js_first").val()+'원</div> <div id ="resulted2">당첨 금액 :&nbsp '+Math.round($("#js_first").val()*1.95)+'원</div></div>';


      var recorded = '<div id="resulted">'+(i)+'회차 : 실패  <div id = "resulted2"> 배팅 금액 :&nbsp'+$("#js_first").val()+'원</div> <div id = "resulted2"> 당첨 금액 :&nbsp'+0+'원</div></div>';


      if(right===0){

      if(results===0){

        $("ol").append('<div id="whole"><span id="round">'+i+('회차&nbsp')+'</span>'+"<li id='odd'>"+odd+"</li></div>");
        i=i+1;

        if(left===0){
          $('#hi').append(recoded);
alert(success);
now=now+($("#js_first").val()*0.95);
$('#cash_left2').html(Math.round(now));

total=total+($("#js_first").val()*0.95);
$('#cash_left1').html(Math.round(total));
// setback();
          left=2;
          right=1;
        }
        else{
          $('#hi').append(recorded);
          right=1;
          alert(fail);
          now=now-($("#js_first").val());
          $('#cash_left2').html(Math.round(now));

          total=total-($("#js_first").val());
          $('#cash_left1').html(Math.round(total));
          // setback();

        }

      }
      else{
        $('#hi').val('짝');
        $("ol").append('<div id="whole"><span id="round">'+i+('회차&nbsp')+'</span>'+"<li id='even'>"+even+"</li></div>");
        i=i+1;

        if(left==1){
          $('#hi').append(recoded);
          alert(success);

          // setback();
          now=now+($("#js_first").val()*0.95);
          $('#cash_left2').html(Math.round(now));

          total=total+($("#js_first").val()*0.95);
          $('#cash_left1').html(Math.round(total));

          left=2;
          right=1;
        }
        else{
          $('#hi').append(recorded);
          right=1;
          alert(fail);
          // setback();
          now=now-($("#js_first").val());
          $('#cash_left2').html(Math.round(now));

          total=total-($("#js_first").val());
          $('#cash_left1').html(Math.round(total));

        }
      }

    } //if right==1
    else{
      alert('먼저 배팅을 해주세요');
      right=1;
    }

    }
  );

});

$(document).ready(function(){



});
