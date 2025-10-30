<template lang="pug">
.privacy-page
  .hero-section
    .container
      h1 Privacy Policy
      p Last updated: October 30, 2025
  
  .container
    .privacy-content
      section.privacy-section
        h2 1. Information We Collect
        p We collect information you provide directly to us, such as when you create an account, use our services, or communicate with us. This includes:
        ul
          li Personal information (name, email address, phone number)
          li Professional information (real estate license, agency affiliation)
          li Property and transaction data
          li Communications and correspondence

      section.privacy-section
        h2 2. How We Use Your Information
        p We use the information we collect to:
        ul
          li Provide, maintain, and improve our services
          li Process transactions and send related information
          li Send you technical notices, updates, security alerts, and support messages
          li Respond to your comments, questions, and requests
          li Communicate with you about products, services, and events
          li Monitor and analyze trends, usage, and activities

      section.privacy-section
        h2 3. Information Sharing and Disclosure
        p We may share your information in the following circumstances:
        ul
          li With other users as part of the platform's functionality
          li With service providers who perform services on our behalf
          li For legal reasons, such as compliance with laws or legal process
          li In connection with a merger, acquisition, or sale of assets
          li With your consent or at your direction

      section.privacy-section
        h2 4. Data Security
        p We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.

      section.privacy-section
        h2 5. Data Retention
        p We retain your personal information for as long as necessary to provide you with our services, comply with legal obligations, resolve disputes, and enforce our agreements.

      section.privacy-section
        h2 6. Your Rights and Choices
        p Depending on your location, you may have the following rights:
        ul
          li Access, update, or delete your personal information
          li Object to or restrict certain processing of your information
          li Request data portability
          li Withdraw consent where processing is based on consent

      section.privacy-section
        h2 7. Cookies and Tracking Technologies
        p We use cookies and similar tracking technologies to collect and track information about your use of our services and to improve your experience.

      section.privacy-section
        h2 8. Third-Party Services
        p Our service may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties.

      section.privacy-section
        h2 9. International Data Transfers
        p Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers.

      section.privacy-section
        h2 10. Changes to This Policy
        p We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.

      section.privacy-section
        h2 11. Contact Us
        p If you have any questions about this Privacy Policy, please contact us at:
        ul
          li Email: privacy@rebax.com
          li Address: 123 Real Estate Ave, City, State 12345
          li Phone: +1 (555) 123-4567

      .back-to-terms
        router-link.btn.btn-outline(to="/terms") ← Back to Terms of Service
</template>

<script setup lang="ts">
// No additional logic needed for this static page
</script>

<style lang="less" scoped>
@import '@/styles/variables.less';

.privacy-page {
  min-height: 100vh;
  background: @background-color;
}

.hero-section {
  background: linear-gradient(135deg, @primary-color 0%, @action-color 100%);
  color: @white;
  padding: 4rem 0 3rem;
  text-align: center;

  h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
    letter-spacing: -0.02em;
  }

  p {
    font-size: 1.1rem;
    opacity: 0.9;
  }
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: @tablet) {
    padding: 0 1rem;
  }
}

.privacy-content {
  padding: 3rem 0;
}

.privacy-section {
  margin-bottom: 3rem;
  background: @white;
  padding: 2rem;
  border-radius: @border-radius-lg;
  box-shadow: @shadow-sm;

  h2 {
    color: @primary-color;
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid @gray-100;
  }

  p {
    color: @text-secondary;
    line-height: 1.7;
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  ul {
    color: @text-secondary;
    line-height: 1.7;
    padding-left: 1.5rem;
    margin-bottom: 1rem;

    li {
      margin-bottom: 0.5rem;
    }
  }

  strong {
    color: @text-primary;
    font-weight: 600;
  }
}

.back-to-terms {
  text-align: center;
  padding: 2rem 0;

  .btn {
    padding: 0.875rem 2rem;
    font-size: 1rem;
    text-decoration: none;
    border-radius: @border-radius-md;
    transition: all 0.3s ease;

    &.btn-outline {
      background: transparent;
      border: 2px solid @primary-color;
      color: @primary-color;

      &:hover {
        background: @primary-color;
        color: @white;
        transform: translateY(-2px);
        box-shadow: @shadow-md;
      }
    }
  }
}

// Responsive design
@media (max-width: @tablet) {
  .hero-section {
    padding: 3rem 0 2rem;

    h1 {
      font-size: 2.5rem;
    }
  }

  .privacy-section {
    padding: 1.5rem;
    margin-bottom: 2rem;

    h2 {
      font-size: 1.3rem;
    }
  }

  .privacy-content {
    padding: 2rem 0;
  }
}
</style>