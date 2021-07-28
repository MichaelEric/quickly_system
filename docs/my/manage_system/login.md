<!--
 * @Description: 登录页
 * @Author: 武明琴
 * @Date: 2021-01-14 16:50:16
 * @EditAuthor: 修改人名称
 * @LastEditTime: 2021-01-20 11:30:44
-->
# 登录页
路由拦截，用户只有登录成功以后才可以进入首页，验证码是一个子组件，不使用可以去掉。

  <my-demo />

## 页面预览

<!-- ![](../../docs/.vuepress/public/img/login.png) -->

## 代码拷贝

::: run 登录页代码。


``` html
<!--
 * @Description:登录页
 * @Author: 武明琴
 * @Date: 2021-01-05 13:31:37
 * @EditAuthor: 修改人名称
 * @LastEditTime: 2021-01-14 11:19:28
-->
<template>
  <!-- 1.如果登录页面不需要验证码，去掉securityInput导入、表单提交错误时方法和验证
  2.如果登录不是用户名和密码，改对应的表单里面字段和验证规则
-->
  <div class="login-content">
    <div class="login-box">
      <h2>{{ title }}</h2>
      <div class="form-box">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          class="demo-ruleForm"
          @keyup.enter.native="submitForm('ruleForm')"
        >
          <el-form-item prop="user" class="user-input">
            <el-input
              type="text"
              placeholder="Username"
              v-model="ruleForm.user"
              autocomplete="on"
            ></el-input>
            <i
              class="el-icon-user-solid"
              :class="ruleForm.user ? 'blue' : ''"
            ></i>
          </el-form-item>
          <el-form-item prop="pass" class="user-input">
            <el-input
              autocomplete="on"
              :type="passType"
              placeholder="Password"
              v-model="ruleForm.pass"
            >
              <i
                slot="suffix"
                @click="
                  passType === 'password'
                    ? (passType = 'text')
                    : (passType = 'password')
                "
                ></i>
            </el-input>
          </el-form-item>
          <!-- <security-input
            @getSecurity="getSecurity"
            :securityClear="securityClear"
          ></security-input> -->
          -->
    </div>
  </div>
</template>

<script>
// import securityInput from './components/securityInput';
// import md5 from 'js-md5';
// const Base64 = require('js-base64').Base64;
export default {
  data() {
    const validateUser = (rule, value, callback) => {
      if (!value || !value.trim()) {
        callback(new Error('用户名不可为空'));
      } else {
        callback();
      }
    };
    const validatePass = (rule, value, callback) => {
      if (!value || !value.trim()) {
        callback(new Error('密码不可为空'));
      } else {
        callback();
      }
    };
    // const validateSecurity = (rule, value, callback) => {
    //   let identifyCode = this.$store.state.identifyCode;
    //   if (!this.security.trim()) {
    //     callback(new Error('验证码不可为空'));
    //   } else if (this.security.trim().toLowerCase() !== identifyCode) {
    //     callback(new Error('验证码输入错误'));
    //   } else {
    //     callback();
    //   }
    // };
    return {
      title: '后台管理系统', //标题
      ruleForm: {
        user: '',
        pass: '',
      }, //表单提交信息
      // security: '', //验证码
      passType: 'password', //密码框属性
      rules: {
        user: [{ validator: validateUser, trigger: 'blur' }],
        pass: [{ validator: validatePass, trigger: 'blur' }],
        // security: [{ validator: validateSecurity, trigger: 'blur' }],
      }, //表单验证规则
      checked: false, //记住密码复选框
      // securityClear: true, //置空把验证码清除
    };
  },
  // components: {
  //   securityInput,
  // },
  created() {
    this.getUser();
  },
  methods: {
    // 判断用户是否登陆过
    getUser() {
      let rememberPass = localStorage.getItem('rememberPass');
      // let ruleForm = this.$store.getters.userInfo;
      if (rememberPass) {
        this.ruleForm.user = ruleForm.user;
        this.ruleForm.pass = Base64.decode(ruleForm.pass);
        this.checked = true;
        return;
      }
      // if (this.$store.getters.userInfo) {
      //   this.ruleForm.user = ruleForm.user;
      // }
    },
    // 获取用户输入
    // getSecurity(val) {
    //   this.security = val;
    // },
    // 提交登录
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (
            this.ruleForm.user.trim() === 'admin' &&
            this.ruleForm.pass.trim() === '123456'
          ) {
            let ruleForm = {
              user: this.ruleForm.user,
              pass: Base64.encode(this.ruleForm.pass.trim()), //加密
            };
            localStorage.setItem('rememberPass', this.checked);
            // this.$store.commit('getUserInfo', ruleForm);
            // this.$store.commit('getUserName', this.ruleForm.user);
            // this.$store.commit('getIsLogin');
            this.$router.replace('/home');
          } else {
            this.$message.error('用户信息输入错误');
          }
        } else {
          console.log('error submit!!');
          // 变化验证码
          // if (
          //   this.security.trim() &&
          //   this.security.trim().toLowerCase() !==
          //     this.$store.state.identifyCode
          // ) {
          //   this.$store.commit('changeSecurity');
          // }
          return false;
        }
      });
    },
    // 置空
    resetForm(formName) {
      // this.$refs[formName].resetFields();
      this.ruleForm = {};
      this.checked = false;
      // this.securityClear = !this.securityClear;
      // this.security = '';
      // this.$store.commit('removeAll');
    },
  },
};
</script>
<style lang="scss">
/* reset element-ui css */
.login-content {
  .el-input {
    height: 47px;
    width: 100%;
    input {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background-color: #fff;
      border-radius: 5px;
      -webkit-appearance: none;
      padding: 12px 5px 12px 30px;
      height: 47px;
    }
  }
  .el-form-item__content {
    margin-left: 0 !important;
  }
  .el-input__suffix {
    width: 30px;
    height: 100%;
  }
  .el-checkbox {
    float: right;
    color: #aaa;
  }
  .el-checkbox__input.is-checked + .el-checkbox__label {
    color: #fff;
  }
}
</style>
<style lang="scss" scoped>
.login-content {
  height: 100vh;
  width: 100%;
  background-color: #516277;
  color: #fff;
  display: flex;
  align-items: center;
  h2 {
    width: 150px;
    text-align: center;
    margin: 30px auto;
  }
  .login-box {
    margin: 0 auto;
    width: 520px;
    background-color: rgba(0, 0, 0, 0.2);
    padding: 15px 40px;
    max-width: 100%;
    height: auto;
    box-sizing: border-box;
  }
  .user-input {
    position: relative;
    i {
      position: absolute;
      top: 0;
      left: 10px;
      height: 47px;
      line-height: 47px;
      font-size: 16px;
      color: #ccc;
    }
    .blue {
      color: #409eff;
    }
  }
  .tab-buttom {
    margin-top: -10px;
    float: right;
  }
}
</style>

```
:::

## 代码下载

[登录页代码下载](https://vuepress.vuejs.org/zh)

## 代码运行

<!-- ::: run
```html
<template>
  <h2 class="title">{{name}} DEMO利器!</h2>
</template>
<script>
  export default {
    data () {
      return {
        name: 'vuepress-plugin-run'
      }
    }
  }
</script>
<style>
  .title {
    color: #3eaf7c;
  }
</style>
` ` `  <=== 删除这里的空格
::: -->