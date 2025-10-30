<template lang="pug">
footer.footer
  .container
    .footer-content
      .footer-section
        h3 REBAX SOLUTIONS
        p Your trusted real estate platform connecting agents, agencies, and builders.
      .footer-section
        h4 Quick Links
        ul
          li
            RouterLink(to="/") Home
          li
            RouterLink(to="/product") Product
          li
            RouterLink(to="/pricing") Pricing
          li
            RouterLink(to="/about") About Us
          li
            RouterLink(to="/terms") Terms & Conditions
      .footer-section
        h4 Contact
        ul
          li Email: admin@rebax.in
          li Phone: +91 9090223242
          li Address: Plot no 4-125, Flat No. 101, Reyes Abode, Lane No-5, B K Enclave, Miyapur, Rangareddy, Hyderabad, Telangana, IN, 500049
      .footer-section
        h4 Follow Us
        .social-links
          a(href="#" aria-label="Facebook") FB
          a(href="#" aria-label="Twitter") TW
          a(href="#" aria-label="LinkedIn") LI
          a(href="#" aria-label="Instagram") IG
    .footer-bottom
      p &copy; 2025 REBAX SOLUTIONS. All rights reserved.
</template>

<script setup lang="ts">
// Footer component logic if needed
</script>

<style lang="less" scoped>
.footer {
  background: @dark-bg;
  color: @white;
  padding: @spacing-xl 0 @spacing-md;
  margin-top: auto;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: @gradient-primary;
  }

  .footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: @spacing-lg;
    margin-bottom: @spacing-lg;

    .footer-section {
      h3, h4 {
        margin-bottom: @spacing-md;
        color: @white;
      }

      p {
        color: @gray-400;
        line-height: 1.6;
      }

      ul {
        list-style: none;
        
        li {
          margin-bottom: @spacing-xs;
          
          a {
            color: @gray-400;
            transition: all 0.3s ease;

            &:hover {
              color: @primary-color;
              transform: translateX(4px);
            }
          }
        }
      }

      .social-links {
        display: flex;
        gap: @spacing-sm;

        a {
          display: inline-flex;
          width: 44px;
          height: 44px;
          align-items: center;
          justify-content: center;
          background: @gray-800;
          color: @white;
          border-radius: @border-radius-md;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;

          &:hover {
            background: @gradient-primary;
            transform: translateY(-2px) scale(1.05);
            box-shadow: @shadow-primary;
          }
        }
      }
    }
  }

  .footer-bottom {
    border-top: 1px solid @gray-800;
    padding-top: @spacing-md;
    text-align: center;
    color: @gray-400;
  }
}
</style>