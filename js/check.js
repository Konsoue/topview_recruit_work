
let user_data = {
  name: undefined,
  sex: undefined,
  studentNumber: undefined,
  collegeId: undefined,
  clazz: undefined,
  phone: undefined,
  qq: undefined,
  groupId: undefined,
  introduction: undefined,
  skills: undefined,
  impression: undefined
}

/* 
 *@author: 思贤
 *@function: 正则判断姓名
 *@params:
*/
function checkName() {
  let nameReg = /^[\u4e00-\u9fa5]{2,22}$/g;
  let lengthReg = /^[\u4e00-\u9fa5]{22,}$/g
  let one = nameReg.test($('#username').val());
  let two = lengthReg.test($('#username').val());
  if (one) {
    $("#name_tip").hide();
    user_data.name = $('#username').val();
  }else {
    if (two) {
      $("#name_tip").text("啊这，名字有点长，短点行不").show();
    }else {
      $("#name_tip").text("输入中文名，2~22个汉字").show();
    }
  }
}


/* 
 *@author: 思贤
 *@function: 正则判断学号
 *@params:
*/
function checkStuId() {
  let stuIdReg = /^3[1|2]2000\d{4}$/;
  let one = stuIdReg.test($("#student-id").val());
  if (one) {
    $("#studentId_tip").hide();
    user_data.studentNumber = $('#student-id').val();
  }else {
    $("#studentId_tip").html("您确定这是广工学号？<img style='width:18px;vertical-align: text-bottom;' src='https://education.topviewclub.cn/file/assert/wangchai.png'>").show();
  }
}

/* 
 *@author: 思贤
 *@function: 正则判断手机号
 *@params:
*/
function checkPhone() {
  let phoneReg = /^1[3456789]\d{9}$/;
  let one = phoneReg.test($("#phone").val());
  if (one) {
    $("#phone_tip").hide();
    user_data.phone = $("#phone").val();
  }else {
    $("#phone_tip").text("请输入正确的手机号").show();
  }
}

/* 
 *@author:思贤
 *@function: 判断专业班级是否为空
 *@params
*/
function checkClazz() {
  if ($(this).val()) {
    $("#grade_tip").hide();
    user_data.clazz = $(this).val();
  }else {
    $("#grade_tip").text("您是究竟何方圣神？").show();
  }
}


  
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
  user_data.qq = qq;
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
  user_data.introdution = intro;
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
  user_data.skills = skills;
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
  user_data.impression = impression;
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
 

// 思贤部分开始
$("#username").on('blur',function(){
  checkName();
})

$("#student-id").on('blur',function(){
  checkStuId();
})

$("#phone").on("blur",function(){
  checkPhone();
})

$("input[name='sex']").change(function(){
  user_data.sex = $(this).val();
})

$("#grade-major").on("blur",function(){
  checkClazz.call(this);
})


// $("#academy").change(function(){
//   console.log($(this).val());
//   switch($(this).val()) {
//     case '计算机学院': 0;break;
//   }
// })
// 思贤部分结束