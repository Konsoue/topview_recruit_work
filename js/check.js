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
  user_data.clazz = $(this).val();
})



// $("#academy").change(function(){
//   console.log($(this).val());
//   switch($(this).val()) {
//     case '计算机学院': 0;break;
//   }
// })