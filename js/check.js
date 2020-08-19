//获取表单的元素
const $qq = $("#qq");
const $introduction = $(".introduction");
const $skills = $(".skills");
const $impression = $(".impression");

/* 
 *@author: 敏仪
 *@function: 正则验证QQ号
 *@params
*/
function qqCheck() {
  let reg = /^[1-9][0-9]{4,10}$/;
  let qq = $qq.val();
  if (!reg.test(qq) || qq == '') {
    $(".qq_tip").css({ opacity: 1 });
    return false;
  }
  $(".qq_tip").css({ opacity: 0 });
  return true;
}
$qq.on("blur", qqCheck);

/* 
 *@author: 敏仪
 *@function: 失焦判空给提示
 *@params
*/
function introCheck() {
  let intro = $introduction.val();
  if (intro == '') {
    $(".intro_tip").css({ opacity: 1 });
    return false;
  }
  $(".intro_tip").css({ opacity: 0 });
  return true;
}
$introduction.on("blur", introCheck);

/* 
 *@author: 敏仪
 *@function: 失焦判空给提示
 *@params
*/
function skillsCheck() {
  let skills = $skills.val();
  if (skills == '') {
    $(".skills_tip").css({ opacity: 1 });
    return false;
  }
  $(".skills_tip").css({ opacity: 0 });
  return true;
}
$skills.on("blur", skillsCheck);

/* 
 *@author: 敏仪
 *@function: 失焦判空给提示
 *@params
*/
function impressCheck() {
  let impression = $impression.val();
  if (impression == '') {
    $(".impress_tip").css({ opacity: 1 });
    return false;
  }
  $(".impress_tip").css({ opacity: 0 });
  return true;
}
$impression.on("blur", impressCheck);


/* 
 *@author: 敏仪
 *@function: 学院下拉框
 *@params
*/
const $academy = $(".academy");
const $academySelected = $(".academy_selected");
const $academyList = $(".academy_list");

function academySelect() {
  $academyList.show();
  $academyList.on("click",function (e) {
    const target = e.target;
    const text = target.innerText;
    $(".academy_selected").text(text);
  })  
}

$academy.on("mouseenter",academySelect);
$academy.on("mouseleave", function () {
  $academyList.hide();
});    
 

/* 
 *@author: 敏仪
 *@function: 意向组别下拉框
 *@params
*/
const $direction = $(".direction");
const $directionSelected = $(".direction_selected");
const $directionList = $(".direction_list");

function directionSelect() {
  $directionList.show();
  $directionList.on("click",function (e) {
    const target = e.target;
    const text = target.innerText;
    $(".direction_selected").text(text);
  })  
}

$direction.on("mouseenter",directionSelect);
$direction.on("mouseleave", function () {
  $directionList.hide();
});    
 