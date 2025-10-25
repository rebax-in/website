<template lang="pug">
header.header(:class="{ transparent: isTransparent, scrolled: isScrolled }")
  .container
    .header-content
      .logo
        RouterLink(to="/") LOGO
      nav.nav
        RouterLink.nav-link(to="/" :class="{ active: $route.name === 'Home' }") Home
        RouterLink.nav-link(to="/product" :class="{ active: $route.name === 'Product' }") Product
        RouterLink.nav-link(to="/pricing" :class="{ active: $route.name === 'Pricing' }") Pricing
        RouterLink.nav-link(to="/about" :class="{ active: $route.name === 'About' }") About Us
      .auth-buttons
        button.btn.btn-secondary Login/Signup
      .mobile-menu-toggle(@click="toggleMobileMenu")
        span
        span
        span
    .mobile-nav(:class="{ open: mobileMenuOpen }")
      RouterLink.mobile-nav-link(to="/" @click="closeMobileMenu") Home
      RouterLink.mobile-nav-link(to="/product" @click="closeMobileMenu") Product
      RouterLink.mobile-nav-link(to="/pricing" @click="closeMobileMenu") Pricing
      RouterLink.mobile-nav-link(to="/about" @click="closeMobileMenu") About Us
      button.btn.btn-secondary.mobile-auth Login/Signup
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const mobileMenuOpen = ref(false)
const isScrolled = ref(false)

// Check if we should show transparent header (only on homepage)
const isTransparent = computed(() => route.name === 'Home')

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Check initial state
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="less" scoped>
.header {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  box-shadow: @shadow-sm;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  border-bottom: 1px solid @border-color;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  // Transparent state for homepage
  &.transparent {
    background: rgba(255, 255, 255, 0);
    backdrop-filter: blur(0px);
    box-shadow: none;
    border-bottom: 1px solid transparent;

    .header-content {
      .logo a {
        -webkit-text-fill-color: white;
        text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
      }

      .nav .nav-link {
        color: rgba(255, 255, 255, 0.9);

        &:hover, &.active {
          color: white;
          background: rgba(255, 255, 255, 0.1);
        }
      }

      .auth-buttons .btn-secondary {
        background: rgba(255, 255, 255, 0.15);
        color: white;
        border: 1px solid rgba(255, 255, 255, 0.3);

        &:hover {
          background: rgba(255, 255, 255, 0.25);
        }
      }

      .mobile-menu-toggle span {
        background: white;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      }
    }

    // When scrolled, return to solid state
    &.scrolled {
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(20px);
      box-shadow: @shadow-sm;
      border-bottom: 1px solid @border-color;

      .header-content {
        .logo a {
          background: @gradient-primary;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: none;
        }

        .nav .nav-link {
          color: @text-secondary;

          &:hover, &.active {
            color: @primary-color;
            background: @hover-bg;
          }
        }

        .auth-buttons .btn-secondary {
          background: transparent;
          color: @text-secondary;
          border: 1px solid @border-color;

          &:hover {
            background: @hover-bg;
          }
        }

        .mobile-menu-toggle span {
          background: @gradient-primary;
          box-shadow: none;
        }
      }
    }
  }

  .header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: @spacing-sm 0;

    .logo {
      font-size: @font-size-xl;
      font-weight: 700;
      
      a {
        background: @gradient-primary;
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        text-decoration: none;
        transition: all 0.3s ease;
        
        &:hover {
          transform: scale(1.05);
        }
      }
    }

    .nav {
      display: flex;
      align-items: center;
      gap: @spacing-lg;

      .nav-link {
        color: @text-secondary;
        font-weight: 500;
        padding: @spacing-xs @spacing-md;
        border-radius: @border-radius-md;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
        
        &::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 50%;
          width: 0;
          height: 2px;
          background: @gradient-primary;
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }

        &:hover {
          color: @primary-color;
          background: @hover-bg;
          transform: translateY(-1px);
          
          &::after {
            width: 80%;
          }
        }
        
        &.active {
          color: @primary-color;
          background: linear-gradient(135deg, rgba(111, 112, 250, 0.1) 0%, rgba(103, 141, 255, 0.1) 100%);
          
          &::after {
            width: 80%;
          }
        }
      }

      @media (max-width: @tablet) {
        display: none;
      }
    }

    .auth-buttons {
      @media (max-width: @tablet) {
        display: none;
      }
    }

    .mobile-menu-toggle {
      display: none;
      flex-direction: column;
      background: none;
      border: none;
      cursor: pointer;
      padding: @spacing-xs;

      span {
        width: 25px;
        height: 3px;
        background: @gradient-primary;
        margin: 2px 0;
        transition: 0.3s;
        border-radius: 2px;
      }

      @media (max-width: @tablet) {
        display: flex;
      }
    }
  }

  .mobile-nav {
    display: none;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    border-top: 1px solid @border-color;
    padding: @spacing-md 0;

    &.open {
      display: flex;
    }

    .mobile-nav-link {
      padding: @spacing-sm @spacing-md;
      color: @text-secondary;
      font-weight: 500;
      border-bottom: 1px solid @border-color;
      transition: all 0.3s ease;

      &:hover {
        color: @primary-color;
        background: @hover-bg;
        padding-left: @spacing-lg;
      }
    }

    .mobile-auth {
      margin: @spacing-sm @spacing-md 0;
      width: calc(100% - @spacing-md * 2);
    }

    @media (max-width: @tablet) {
      display: flex;

      &:not(.open) {
        display: none;
      }
    }
  }
}
</style>