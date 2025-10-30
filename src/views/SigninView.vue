<template lang="pug">
.signin
  .signin-container
    .signin-content
      .signin-header
        .logo
          h2.logo-text REBAX
        h1.signin-title Welcome Back
        p.signin-subtitle Sign in to your account to continue
      
      .signin-form-wrapper
        form.signin-form(@submit.prevent="handleSignin")
          .form-group
            label.form-label(for="email") Email Address
            input.form-input(
              id="email"
              v-model="form.email"
              type="email"
              placeholder="Enter your email"
              required
            )
          
          .form-group
            label.form-label(for="password") Password
            input.form-input(
              id="password"
              v-model="form.password"
              type="password"
              placeholder="Enter your password"
              required
            )
          
          .form-options
            .remember-me
              input.checkbox(
                id="remember"
                v-model="form.remember"
                type="checkbox"
              )
              label.checkbox-label(for="remember") Remember me
            router-link.forgot-password(to="/forgot-password") Forgot Password?
          
          button.btn.btn-primary.signin-btn(
            type="submit"
            :disabled="isLoading"
          ) {{ isLoading ? 'Signing In...' : 'Sign In' }}
        
        .divider
          span or continue with
        
        .social-signin
          button.btn.btn-google.social-btn
            .social-icon
              svg(width="20" height="20" viewBox="0 0 24 24")
                path(fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z")
                path(fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z")
                path(fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z")
                path(fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z")
            span Continue with Google
          button.btn.btn-apple.social-btn
            .social-icon
              svg(width="20" height="20" viewBox="0 0 24 24" fill="#ffffff")
                path(d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z")
            span Continue with Apple
        
        .signin-footer
          p Don't have an account?
            router-link.signup-link(to="/register")  Sign up here
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isLoading = ref(false)

const form = reactive({
  email: '',
  password: '',
  remember: false
})

const handleSignin = async () => {
  isLoading.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Here you would integrate with your authentication service
    console.log('Signing in with:', form)
    
    // Redirect to dashboard or home page after successful signin
    router.push('/')
  } catch (error) {
    console.error('Signin error:', error)
  } finally {
    isLoading.value = false
  }
}
</script>

<style lang="less" scoped>
@import '@/styles/variables.less';

.signin {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, @background-color 0%, #e8f0ff 100%);
  padding: 2rem 1rem;
}

.signin-container {
  background: @white;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 100%;
  max-width: 480px;
}

.signin-content {
  padding: 3rem 2rem;
}

.signin-header {
  text-align: center;
  margin-bottom: 2rem;
}

.logo {
  margin-bottom: 1.5rem;
}

.logo-text {
  color: @primary-color;
  font-weight: 700;
  font-size: 1.5rem;
  letter-spacing: -0.02em;
}

.signin-title {
  font-size: 2rem;
  font-weight: 600;
  color: @text-primary;
  margin-bottom: 0.5rem;
}

.signin-subtitle {
  color: @text-secondary;
  font-size: 1rem;
}

.signin-form-wrapper {
  .signin-form {
    margin-bottom: 1.5rem;
  }
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  font-weight: 500;
  color: @text-primary;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.form-input {
  width: 100%;
  padding: 0.875rem 1rem;
  border: 2px solid @gray-200;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: @white;

  &:focus {
    outline: none;
    border-color: @primary-color;
    box-shadow: 0 0 0 3px rgba(111, 112, 250, 0.1);
  }

  &::placeholder {
    color: @text-muted;
  }
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.remember-me {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.checkbox {
  width: 16px;
  height: 16px;
  accent-color: @primary-color;
}

.checkbox-label {
  font-size: 0.9rem;
  color: @text-secondary;
  cursor: pointer;
}

.forgot-password {
  color: @primary-color;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
}

.btn {
  border: none;
  border-radius: 8px;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &.btn-primary {
    background: @primary-color;
    color: @white;
    padding: 0.875rem 1.5rem;

    &:hover:not(:disabled) {
      background: darken(@primary-color, 10%);
      transform: translateY(-1px);
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }

  &.btn-outline {
    background: transparent;
    border: 2px solid @gray-200;
    color: @text-primary;
    padding: 0.75rem 1rem;

    &:hover {
      border-color: @primary-color;
      color: @primary-color;
    }
  }

  &.btn-google {
    background: @white;
    border: 1px solid #dadce0;
    color: #3c4043;
    padding: 0.75rem 1rem;
    font-weight: 500;

    &:hover {
      background: #f8f9fa;
      border-color: #d2e3fc;
      box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
    }
  }

  &.btn-apple {
    background: #000000;
    border: 1px solid #000000;
    color: @white;
    padding: 0.75rem 1rem;
    font-weight: 500;

    &:hover {
      background: #333333;
      border-color: #333333;
    }
  }
}

.signin-btn {
  width: 100%;
}

.divider {
  text-align: center;
  margin: 1.5rem 0;
  position: relative;
  color: @text-muted;
  font-size: 0.9rem;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    background: @gray-200;
    z-index: 1;
  }

  span {
    background: @white;
    padding: 0 1rem;
    position: relative;
    z-index: 2;
  }
}

.social-signin {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.social-btn {
  flex-direction: row;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  width: 100%;
}

.social-icon {
  font-size: 1.2rem;
}

.signin-footer {
  text-align: center;
  color: @text-secondary;
  font-size: 0.9rem;
}

.signup-link {
  color: @primary-color;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
}

// Responsive design
@media (max-width: 480px) {
  .signin {
    padding: 1rem;
  }

  .signin-content {
    padding: 2rem 1.5rem;
  }

  .social-signin {
    grid-template-columns: 1fr;
  }
}
</style>