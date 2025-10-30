<template lang="pug">
.register
  .register-container
    .register-content
      .register-header
        .logo
          h2.logo-text REBAX
        h1.register-title Create Account
        p.register-subtitle Join thousands of real estate professionals
      
      .register-form-wrapper
        form.register-form(@submit.prevent="handleRegister")
          .form-row
            .form-group
              label.form-label(for="firstName") First Name
              input.form-input(
                id="firstName"
                v-model="form.firstName"
                type="text"
                placeholder="Enter first name"
                required
              )
            .form-group
              label.form-label(for="lastName") Last Name
              input.form-input(
                id="lastName"
                v-model="form.lastName"
                type="text"
                placeholder="Enter last name"
                required
              )
          
          .form-group
            label.form-label(for="email") Email Address
            .input-with-button
              input.form-input(
                id="email"
                v-model="form.email"
                type="email"
                placeholder="Enter your email"
                required
              )
              button.btn.btn-verify(
                type="button"
                @click="handleVerifyEmail"
                :disabled="!form.email || isVerifying"
              ) {{ isVerifying ? 'Verifying...' : 'Verify' }}
          
          .form-group
            label.form-label(for="phone") Phone Number
            .input-with-button
              input.form-input(
                id="phone"
                v-model="form.phone"
                type="tel"
                placeholder="Enter your phone number"
                required
              )
              button.btn.btn-verify(
                type="button"
                @click="handleVerifyPhone"
                :disabled="!form.phone || isVerifyingPhone"
              ) {{ isVerifyingPhone ? 'Verifying...' : 'Verify' }}
          
          .form-group
            label.form-label(for="userType") Account Type
            select.form-select(
              id="userType"
              v-model="form.userType"
              required
            )
              option(value="" disabled) Select account type
              option(value="agent") Real Estate Agent
              option(value="agency") Real Estate Agency
              option(value="builder") Builder/Developer
              option(value="buyer") Property Buyer
          
          .form-group
            label.form-label(for="password") Password
            input.form-input(
              id="password"
              v-model="form.password"
              type="password"
              placeholder="Create a password"
              required
            )
            .password-requirements
              ul
                li(:class="{ valid: hasMinLength }") At least 8 characters
                li(:class="{ valid: hasUppercase }") One uppercase letter
                li(:class="{ valid: hasNumber }") One number
          
          .form-group
            label.form-label(for="confirmPassword") Confirm Password
            input.form-input(
              id="confirmPassword"
              v-model="form.confirmPassword"
              type="password"
              placeholder="Confirm your password"
              required
            )
            .password-match(v-if="form.confirmPassword" :class="{ error: !passwordsMatch }")
              span(v-if="passwordsMatch") ✓ Passwords match
              span(v-else) ✗ Passwords don't match
          
          .form-group
            .checkbox-group
              input.checkbox(
                id="terms"
                v-model="form.agreeToTerms"
                type="checkbox"
                required
              )
              label.checkbox-label(for="terms")
                span I agree to the 
                router-link(to="/terms") Terms of Service
                span  and 
                router-link(to="/privacy") Privacy Policy
          
          .form-group
            .checkbox-group
              input.checkbox(
                id="marketing"
                v-model="form.marketingEmails"
                type="checkbox"
              )
              label.checkbox-label(for="marketing") Send me marketing emails and updates
          
          button.btn.btn-primary.register-btn(
            type="submit"
            :disabled="isLoading || !isFormValid"
          ) {{ isLoading ? 'Creating Account...' : 'Create Account' }}
        
        .divider
          span or continue with
        
        .social-register
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
        
        .register-footer
          p Already have an account?
            router-link.signin-link(to="/signin")  Sign in here
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isLoading = ref(false)
const isVerifying = ref(false)
const isVerifyingPhone = ref(false)

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  userType: '',
  password: '',
  confirmPassword: '',
  agreeToTerms: false,
  marketingEmails: false
})

// Password validation computed properties
const hasMinLength = computed(() => form.password.length >= 8)
const hasUppercase = computed(() => /[A-Z]/.test(form.password))
const hasNumber = computed(() => /\d/.test(form.password))
const passwordsMatch = computed(() => 
  form.password === form.confirmPassword && form.confirmPassword !== ''
)

const isPasswordValid = computed(() => 
  hasMinLength.value && hasUppercase.value && hasNumber.value
)

const isFormValid = computed(() => 
  form.firstName &&
  form.lastName &&
  form.email &&
  form.phone &&
  form.userType &&
  isPasswordValid.value &&
  passwordsMatch.value &&
  form.agreeToTerms
)

const handleVerifyEmail = async () => {
  if (!form.email) return
  
  isVerifying.value = true
  
  try {
    // Simulate email verification API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Here you would integrate with your email verification service
    console.log('Verifying email:', form.email)
    
    // Show success message or update UI state
    alert('Verification email sent! Please check your inbox.')
  } catch (error) {
    console.error('Email verification error:', error)
    alert('Failed to send verification email. Please try again.')
  } finally {
    isVerifying.value = false
  }
}

const handleVerifyPhone = async () => {
  if (!form.phone) return
  
  isVerifyingPhone.value = true
  
  try {
    // Simulate phone verification API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Here you would integrate with your SMS verification service
    console.log('Verifying phone:', form.phone)
    
    // Show success message or update UI state
    alert('Verification code sent! Please check your SMS messages.')
  } catch (error) {
    console.error('Phone verification error:', error)
    alert('Failed to send verification code. Please try again.')
  } finally {
    isVerifyingPhone.value = false
  }
}

const handleRegister = async () => {
  if (!isFormValid.value) return
  
  isLoading.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Here you would integrate with your authentication service
    console.log('Registering user:', form)
    
    // Redirect to dashboard or welcome page after successful registration
    router.push('/signin?registered=true')
  } catch (error) {
    console.error('Registration error:', error)
  } finally {
    isLoading.value = false
  }
}
</script>

<style lang="less" scoped>
@import '@/styles/variables.less';

.register {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, @background-color 0%, #e8f0ff 100%);
  padding: 2rem 1rem;
}

.register-container {
  background: @white;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 100%;
  max-width: 580px;
}

.register-content {
  padding: 3rem 2rem;
}

.register-header {
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

.register-title {
  font-size: 2rem;
  font-weight: 600;
  color: @text-primary;
  margin-bottom: 0.5rem;
}

.register-subtitle {
  color: @text-secondary;
  font-size: 1rem;
}

.register-form-wrapper {
  .register-form {
    margin-bottom: 1.5rem;
  }
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1.5rem;
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

.input-with-button {
  display: flex;
  gap: 0.5rem;
  
  .form-input {
    flex: 1;
  }
}

.form-input, .form-select {
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

.form-select {
  cursor: pointer;
  
  option {
    padding: 0.5rem;
  }
}

.password-requirements {
  margin-top: 0.5rem;
  
  ul {
    list-style: none;
    padding: 0;
    
    li {
      font-size: 0.8rem;
      color: @text-muted;
      margin-bottom: 0.25rem;
      
      &.valid {
        color: @success-color;
      }
      
      &::before {
        content: '○ ';
        margin-right: 0.25rem;
      }
      
      &.valid::before {
        content: '● ';
      }
    }
  }
}

.password-match {
  margin-top: 0.5rem;
  font-size: 0.8rem;
  
  &.error {
    color: @error-color;
  }
  
  &:not(.error) {
    color: @success-color;
  }
}

.checkbox-group {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
}

.checkbox {
  width: 16px;
  height: 16px;
  accent-color: @primary-color;
  margin-top: 0.125rem;
}

.checkbox-label {
  font-size: 0.9rem;
  color: @text-secondary;
  cursor: pointer;
  line-height: 1.4;
  
  a {
    color: @primary-color;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
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

  &.btn-verify {
    background: @success-color;
    color: @white;
    padding: 0.875rem 1rem;
    white-space: nowrap;
    min-width: 80px;

    &:hover:not(:disabled) {
      background: darken(@success-color, 10%);
      transform: translateY(-1px);
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
}

.register-btn {
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

.social-register {
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

.register-footer {
  text-align: center;
  color: @text-secondary;
  font-size: 0.9rem;
}

.signin-link {
  color: @primary-color;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
}

// Responsive design
@media (max-width: 640px) {
  .register {
    padding: 1rem;
  }

  .register-content {
    padding: 2rem 1.5rem;
  }

  .form-row {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .social-register {
    grid-template-columns: 1fr;
  }
}
</style>