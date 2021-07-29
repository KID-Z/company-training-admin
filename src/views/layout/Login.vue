<!--
 * @Author: your name
 * @Date: 2021-07-01 15:10:54
 * @LastEditTime: 2021-07-21 10:40:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/views/layout/Login.vue
-->
<template>
  <div class="login">
    <a-form
      id="components-form-demo-normal-login"
      :form="form"
      class="login-form"
      @submit="handleSubmit"
    >
      <a-form-item>
        <a-input
          v-decorator="['account', { rules: [{ required: true, message: '请输入账号!' }] }]"
          placeholder="账号"
        >
          <a-icon slot="prefix" type="mail" style="color: rgba(0, 0, 0, 0.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="['password', { rules: [{ required: true, message: '请输入密码!' }] }]"
          type="password"
          placeholder="密码"
        >
          <a-icon slot="prefix" type="lock" style="color: rgba(0, 0, 0, 0.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit" class="login-form-button">登陆</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import user from '@/api/user';

export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (values.account && values.password) {
          // const headers = {
          //   Authorization: 'Basic emptenhmemhsOjE=',
          // };
          // const params = {
          //   grant_type: 'password',
          //   scope: 'admin',
          //   username: values.account,
          //   password: values.password,
          // };
          user.getToken('http://10.1.1.138:8080/auth/oauth/token').then((res) => {
            if (res) {
              this.$message({
                message: '登录成功',
                type: 'success',
              });
              this.$store.dispatch('user/setToken', res.token);
              this.$router.replace('/');
            } else {
              this.$message({
                message: '登录失败, 没有token或token获取失败',
                type: 'warning',
              });
            }
          });
        }
      });
    },
  },
};
</script>

<style lang='less'>
.login {
  .login-form {
    max-width: 500px;
    margin: 60px auto;

    .ant-form-explain {
      padding-left: 7px;
    }

    .login-form-button {
      width: 100%;
      height: 40px;
    }
  }
}
</style>
