<template>
  <div class="form-box">
    <el-form autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm"
              label-position="top"
              label-width="50px"
              class="card-box login-form">
      <el-form-item prop="username" label="">
        <el-input
          placeholder="请输入账号"
          name="username"
          prefix-icon="fa fa-user"
          v-model="loginForm.username"
        >
        </el-input>
      </el-form-item>
      <el-form-item prop="password" label="">
        <el-input
          type="password"
          placeholder="请输入密码"
          name="password"
          v-model="loginForm.password"
          @keyup.enter.native="handleLogin('loginForm')"
        ></el-input>
      </el-form-item>
      <el-form-item class="btn-login-box">
        <el-button :loading="loading" class="btn-login login-btn"
                    @click="handleLogin('loginForm')">
          登 录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { isvalidUsername } from '@/utils/validate'

export default {
  name: 'Login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!isvalidUsername(value)) {
        callback(new Error('请输入正确的用户名'))
      } else {
        callback()
      }
    }
    const validatePass = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error('密码不能小于5位'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: 'admin',
        password: 'admin'
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePass }]
      },
      loading: false,
      pwdType: 'password',
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    showPwd() {
      if (this.pwdType === 'password') {
        this.pwdType = ''
      } else {
        this.pwdType = 'password'
      }
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('Login', this.loginForm).then(() => {
            this.loading = false
            this.$router.push({ path: this.redirect || '/' })
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>