<template lang="pug">
.terms-page
  .hero-section
    .container
      h1 Terms and Conditions
      p Last updated: October 29, 2025
  
  .container
    .terms-content
      section.terms-section
        h2 1. Acceptance of Terms
        p By accessing and using REBAX ("the Platform"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.

      section.terms-section
        h2 2. Definitions
        p
          strong "Service" 
          | refers to the REBAX platform that connects real estate agents, agencies, and builders.
        p
          strong "User" 
          | refers to any individual or entity that creates an account or uses our services.
        p
          strong "Content" 
          | refers to all information, data, text, images, and materials uploaded to or transmitted through the Platform.

      section.terms-section
        h2 3. Use License
        p Permission is granted to temporarily use REBAX for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
        ul
          li modify or copy the materials
          li use the materials for any commercial purpose or for any public display (commercial or non-commercial)
          li attempt to decompile or reverse engineer any software contained on REBAX's website
          li remove any copyright or other proprietary notations from the materials

      section.terms-section
        h2 4. User Accounts and Responsibilities
        p Users must provide accurate, complete, and up-to-date information when creating an account. You are responsible for:
        ul
          li maintaining the confidentiality of your account credentials
          li all activities that occur under your account
          li ensuring that your use of the Platform complies with all applicable laws and regulations
          li the accuracy and completeness of any information or content you provide

      section.terms-section
        h2 5. Real Estate Transactions
        p REBAX serves as a platform to connect real estate professionals and does not directly engage in real estate transactions. Users understand that:
        ul
          li All real estate transactions are between the parties involved
          li REBAX does not guarantee the accuracy of property listings or user information
          li Users must conduct their own due diligence before entering into any agreements
          li REBAX is not liable for disputes arising from real estate transactions conducted through the Platform

      section.terms-section
        h2 6. Content Guidelines and Prohibited Uses
        p Users agree not to use the Platform to:
        ul
          li Post false, misleading, or fraudulent property information
          li Engage in discriminatory practices prohibited by fair housing laws
          li Upload content that violates intellectual property rights
          li Distribute spam, malware, or other harmful materials
          li Impersonate other users or entities
          li Engage in any illegal activities or violations of local, state, or federal laws

      section.terms-section
        h2 7. Privacy and Data Protection
        p Your privacy is important to us. Our collection and use of personal information is governed by our 
          router-link.privacy-link(to="/privacy") Privacy Policy
          | , which is incorporated into these Terms by reference. By using REBAX, you consent to our data practices as described in our 
          router-link.privacy-link(to="/privacy") Privacy Policy
          | .
        p 
          strong For complete details about how we collect, use, and protect your personal information, please review our 
          router-link.privacy-link(to="/privacy") full Privacy Policy
          | .

      section.terms-section
        h2 8. Intellectual Property Rights
        p The Platform and its original content, features, and functionality are and will remain the exclusive property of REBAX and its licensors. The Platform is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.

      section.terms-section
        h2 9. Fees and Payment Terms
        p Certain services on the Platform may require payment of fees. All fees are stated in U.S. dollars and are non-refundable unless otherwise specified. We reserve the right to modify our fees at any time with reasonable notice to users.

      section.terms-section
        h2 10. Termination
        p We may terminate or suspend your account and bar access to the Platform immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever, including without limitation if you breach the Terms.

      section.terms-section
        h2 11. Disclaimer of Warranties
        p The information on this Platform is provided on an "as is" basis. To the fullest extent permitted by law, REBAX excludes all representations, warranties, conditions, and terms whether express, implied, or statutory.

      section.terms-section
        h2 12. Limitation of Liability
        p In no event shall REBAX, its officers, directors, employees, or agents, be liable to you for any direct, indirect, incidental, special, punitive, or consequential damages whatsoever resulting from any use of the Platform or any content thereon.

      section.terms-section
        h2 13. Indemnification
        p You agree to defend, indemnify, and hold harmless REBAX and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees).

      section.terms-section
        h2 14. Governing Law
        p These Terms shall be interpreted and governed in accordance with the laws of the United States, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.

      section.terms-section
        h2 15. Changes to Terms
        p We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.

      section.terms-section
        h2 16. Contact Information
        p If you have any questions about these Terms and Conditions, please contact us at:
        .contact-info
          p Email: legal@rebax.com
          p Phone: +1 (555) 123-4567
          p Address: 123 Real Estate St, City, State 12345

      .last-updated
        p These Terms and Conditions are effective as of October 29, 2025.
</template>

<script setup lang="ts">
// Terms and Conditions page logic if needed
</script>

<style lang="less" scoped>
.terms-page {
  min-height: 100vh;
  background: @background-color;
  
  .hero-section {
    background: @gradient-primary;
    color: @white;
    padding: @spacing-xl 0 @spacing-lg;
    text-align: center;
    
    h1 {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: @spacing-md;
      text-shadow: @shadow-md;
    }
    
    p {
      font-size: 1.2rem;
      opacity: 0.9;
    }
  }
  
  .terms-content {
    max-width: 800px;
    margin: 0 auto;
    padding: @spacing-xl 0;
    
    .terms-section {
      margin-bottom: @spacing-xl;
      
      h2 {
        color: @dark-bg;
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: @spacing-md;
        border-bottom: 2px solid @primary-color;
        padding-bottom: @spacing-xs;
      }
      
      p {
        color: @gray-600;
        line-height: 1.8;
        margin-bottom: @spacing-md;
        
        strong {
          color: @dark-bg;
          font-weight: 600;
        }
      }
      
      .privacy-link {
        color: @primary-color;
        text-decoration: none;
        font-weight: 600;
        border-bottom: 1px solid transparent;
        transition: all 0.3s ease;
        
        &:hover {
          color: @action-color;
          border-bottom-color: @action-color;
          text-decoration: none;
        }
      }
      
      ul {
        margin: @spacing-md 0;
        padding-left: @spacing-lg;
        
        li {
          color: @gray-600;
          line-height: 1.6;
          margin-bottom: @spacing-xs;
          position: relative;
          
          &::marker {
            color: @primary-color;
          }
        }
      }
      
      .contact-info {
        background: @gray-100;
        padding: @spacing-lg;
        border-radius: @border-radius-md;
        border-left: 4px solid @primary-color;
        
        p {
          margin-bottom: @spacing-xs;
          
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
    
    .last-updated {
      text-align: center;
      margin-top: @spacing-xl;
      padding: @spacing-lg;
      background: @gradient-primary;
      color: @white;
      border-radius: @border-radius-md;
      
      p {
        margin: 0;
        font-weight: 600;
      }
    }
  }
}

// Responsive design
@media (max-width: 768px) {
  .terms-page {
    .hero-section {
      padding: @spacing-xl 0 @spacing-lg;
      
      h1 {
        font-size: 2.5rem;
      }
      
      p {
        font-size: 1.1rem;
      }
    }
    
    .terms-content {
      padding: @spacing-xl @spacing-lg;
      
      .terms-section {
        h2 {
          font-size: 1.3rem;
        }
      }
    }
  }
}
</style>