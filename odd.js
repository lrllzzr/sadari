//
//
//
// $('#rule').click(function(){
//   var result = Math.round(Math.random());
//   if(result==0){
//   $('.result').css('background-Color','red').html('홀');
//
// }
// else{
//   $('.result').html('짝');
// }
//
// })

//
// function Mode(self){
// var td=document.getElementById("result");
// if(self.value==='Mode1'){
//
// td.style.backgroundColor="red";
//
// self.value="Mode2";
//
// }
// else{
//   td.style.backgroundColor="blue";
//   self.value="Mode1";
// }
// }

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
