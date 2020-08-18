
/* 
 *@author: 思贤
 *@function: 纸飞机背面转过来，并且纸张变小
 *@params
*/
function paperScale() {
  $('.back-end')
  .removeClass('hidden-back')
  .animate({
    transitionDelay: "0.5s",
  }, 1000, "linear", function(){
    $('.front-end').hide();
    $(this).css({transform: "scale(0.4)"});
    paperCurve();
  });
}

/* 
 *@author: 思贤
 *@function: 折叠成纸飞机
 *@params
*/
function paperCurve() {
  setTimeout(function() {
    $(".fold").addClass("curved");
    paperWait();
  }, 1500);
}
/* 
 *@author: 思贤
 *@function: 平放纸飞机，后退助跑，然后飞
 *@params
*/
function paperWait() {
  setTimeout(function() {
    $('.plane').css("transform","rotateX(54deg) rotateY(-10deg) rotateZ(25deg) scale(0.4)").addClass("hover");
    setTimeout(function() {
      $(".plane").css("transform","transform: rotate3d(1, 1, 1, 22deg) scale(0.4)");
      $(".plane").addClass("fly_away_first").css("transform","translateX(-100px) translateZ(300px) rotateX(42deg) rotateY(-11deg) rotateZ(27deg) scale(0.4)");
      paperFly();
    }, 2000);    
  }, 2000);
}
/* 
 *@author: 思贤
 *@function: 飞行
 *@params
*/

function paperFly() {
  setTimeout(function() {
    $(".plane").addClass("fly_away").css("transform","translateX(600px) translateY(-400px) translateZ(-5000px) rotateX(66deg) rotateY(-12deg) rotateZ(36deg) scale(0.4)");
  }, 500);
}

$(".submit").click(function(){
  $(".front-end").removeClass("show-front");
  paperScale();
})

