
/* 
 *@author: 思贤
 *@function: 纸飞机背面转过来，并且纸张变小
 *@params
*/
function paperScale() {
  $('.back-end')
  .removeClass('hidden-back');
  setTimeout(() => {
    $('.front-end').removeClass("show-front");
    $('.back-end')
    .addClass("small")
    .animate({
      transitionDelay: "0.5s",
    }, 1000, "linear", function(){
      $(this).addClass("show-back");
      paperCurve();
    });
  }, 2000);
  
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
  }, 1000);
}
/* 
 *@author: 思贤
 *@function: 平放纸飞机，后退助跑，然后飞
 *@params
*/
function paperWait() {
  setTimeout(function() {
    $('.plane').addClass("hover");
    setTimeout(function() {
      $(".black-hole").addClass("show");
      // $(".plane").css("transform","rotate3d(60, 0, 36, 63deg) scale(0.5)");
      $(".plane").addClass("fly_away_first").addClass("fly_away_second");
      setTimeout(() => {
        paperFly();
      }, 500);
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
    $(".plane").addClass("fly_away");
    setTimeout(() => {
      planeReturn();
      // clearClas();
    }, 2000);
  }, 500);
}

/* 
 *@author:思贤
 *@function: 清除没用的class
 *@params
*/
function clearClas() {
  $(".plane").removeClass("fly_away_second")
}

/* 
 *@author: 思贤
 *@function: 黑洞变白，飞机返回
 *@params
*/
function planeReturn() {
  $(".black-hole").addClass("white");
  $(".plane")
  .animate({
    transitionDelay: "0s",
  })
  .addClass("return");
  setTimeout(() => {
    $(".plane")
    .show()
    .removeClass("fly_away")
    .removeClass("fly_away_second");
    setTimeout(() => {
      $(".plane").removeClass("fly_away_first");
      turnPaper();
    }, 1500);
  }, 2000);
}
/* 
 *@author: 思贤
 *@function: 飞机放平，摊平成纸
 *@params
*/
function turnPaper(){
  setTimeout(() => {
    $(".black-hole").removeClass("show");
    $(".plane").removeClass("return").removeClass("hover");
    setTimeout(() => {
      $(".fold").removeClass("curved");
    }, 1500);
  }, 1000);
}

$(".submit").click(function(){
  paperScale();
})

