<template>
  <div class="login">
    <div class="logo">
      <img src="@/assets/images/logo_icon.png" alt="" />
    </div>
    <el-form
      ref="loginRef"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
    >
      <h3 class="title">Data Feeding System</h3>
      <el-form-item prop="username">
        <el-input
          v-model="loginForm.username"
          type="text"
          auto-complete="off"
          placeholder="账号"
        >
          <template #prefix>
            <img src="@/assets/images/user.png" alt="" class="input_icon" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="loginForm.password"
          type="password"
          auto-complete="off"
          placeholder="密码"
          @keyup.enter="handleLogin"
        >
          <template #prefix>
            <img src="@/assets/images/password.png" alt="" class="input_icon" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item style="width: 100%">
        <el-button
          :loading="loading"
          type="info"
          style="width: 100%"
          @click.prevent="handleLogin"
          size="large"
        >
          <span>登 录</span>
        </el-button>
      </el-form-item>
    </el-form>
    <!--  底部  -->
    <div class="el-login-footer">
      <span>Copyright © 2018-2022 All Rights Reserved.</span>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();
const loginForm = ref({
  username: "admin",
  password: "123456",
});

const loginRules = {
  username: [{ required: true, trigger: "blur", message: "请输入您的账号" }],
  password: [{ required: true, trigger: "blur", message: "请输入您的密码" }],
};
const handleLogin = () => {
  router.replace("/home");
};
const loading = ref(false);
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("@/assets/images/login.jpg");
  background-size: cover;
  position: relative;
  .logo {
    position: absolute;
    width: 200px;
    height: 30px;
    top: 25px;
    left: 20px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .el-form-item--default {
    margin-bottom: 24px;
    .el-input {
      :deep(.el-input__wrapper) {
        border: 1px solid #e4e6eb;
        box-shadow: none;
      }
    }
  }
}
.title {
  margin: 15px auto 44px auto;
  text-align: center;
  color: #e20076;
  font-size: 24px;
  line-height: 32px;
}

.login-form {
  border-radius: 8px;
  background: #ffffffe6;
  width: 310px;
  height: 310px;
  padding: 25px 25px 5px 25px;
  .el-input {
    height: 40px;
    input {
      height: 40px;
    }
  }
  .input_icon {
    height: 20px;
    width: 20px;
    margin-left: 0px;
  }
}
.login-tip {
  font-size: 13px;
  text-align: center;
  color: #bfbfbf;
}
.el-login-footer {
  height: 40px;
  line-height: 40px;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  color: #fff;
  font-family: Arial;
  font-size: 12px;
  letter-spacing: 1px;
}
</style>
