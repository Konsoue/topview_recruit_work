# 招新网站需求文档

## 一、招新页面

### 表单填写

- 功能
  - 学院            —>  下拉多选
  - 班级情况        —>  input框
    - 专业+班级
  - 学号            —>  input框
  - 姓名            —>  input框
  - 性别            —>  单选框
  - 手机            —>  input框
  - QQ              —>  input框
  - 自我介绍         —>  textarea框
  - 选择组别         —>  下拉多选
  - 技术技能         —>  textarea框
  - 对工作室的了解   —>  textarea框
  - 提交按钮         —>  textarea框

- 要求
  - 自我介绍、技术技能、对工作室的了解，当失焦后发现为空的话，给予提示。
  - 提交前正则判断手机号位数
  - 提交前正则判断学号
  - 所有项为必填项，填完才能提交
  - 提交成功后
    - 告诉用户提交成功/失败。
    - 成功后，给予账号——学号，初始密码——后台直接给。
    - 几秒后跳转状态查询页面。

- 分工
  - 思贤、敏仪
  - 7天

## 二、状态查询页面

- 功能
  - 登录
  - 个人信息：学院、学号、修改密码
  - 面试排号
    - 开始排号(按钮)
    - 显示目前排号情况
    - 定30s刷新请求

### 工作室介绍

- 先不做

## 三、后台管理页面

### 功能

- 登录：账号、密码
- 顶部：topview + logo，管理员信息(退出)
- 左侧栏
  - 报名情况
    - 个人信息列表展示(右侧)
      - 操作的顶栏：分性别、组别、状态显示，搜索框(按姓名)、确定修改
      - 个人：序号、学院、学号、姓名、性别、手机号、状态(通过/未通过)、三个小作文(自我介绍、掌握技能、对工作室的了解) 
      - 底部分页栏
  - 一面(面试排号)
    - 顶部：分组（左）。开启排队时间(右)(组别、时间端、确定按钮)
    - 个人：学院、学号、姓名、性别、组别、手机号

### 要求

### 分工

- 人员
  - 泳充、慧梅、创境
- 时间
  - 23号前

## 四、约定的规范

- HTML、CSS代码规范：https://www.jianshu.com/p/3646a8a55203
- Javascript代码规范：https://www.yuque.com/docs/share/9f15f21b-1c62-4184-a58f-7ec18acba883

- js的代码
  - 尽量用ES6的let，const
  - 变量名写在文件最上面，再写函数定义、最后写函数调用和事件

```js
/*
 *@author:   充哥写的
 *@function: 创建一个Obj对象
 *@params:   a是name, b是age
*/
function createObj(a, b) {

}
```

- css的代码
  - reset.css —>重置
  - common.css ->共同
  - 注释:1. 功能 2.写的人