<template lang="pug">
.pricing
  .container
    // Pricing Tabs
    .pricing-tabs
      button.tab-button(:class="{ active: activeTab === 'agents' }" @click="setActiveTab('agents')") AGENTS
      button.tab-button(:class="{ active: activeTab === 'agencies' }" @click="setActiveTab('agencies')") AGENCIES
      button.tab-button(:class="{ active: activeTab === 'builders' }" @click="setActiveTab('builders')") BUILDERS

    // Pricing Packages
    .pricing-packages
      .package-card.free-package
        .package-header
          h3 FREE PACKAGE
          .package-price
            span.price-text PRICE
            .price-amount $0
            .price-period /month
        .package-features
          h4 LIST OF FEATURES
          ul.feature-list
            li Basic property listings
            li Standard search functionality
            li Email support
            li Mobile app access
            li Basic analytics
        .package-action
          button.btn.btn-primary GET STARTED

      .package-card.pro-package
        .package-header
          h3 PRO PACKAGE
          .package-price
            span.price-text PRICE
            .price-amount $99
            .price-period /month
        .package-features
          h4 LIST OF FEATURES
          ul.feature-list
            li Unlimited property listings
            li Advanced search & filters
            li Priority support 24/7
            li Premium mobile features
            li Advanced analytics & reports
            li Lead management system
            li Custom branding options
        .package-action
          button.btn.btn-primary GET STARTED

    // Clients Section
    .pricing-clients-section
      .clients-content
        h2 OUR CLIENTS
        h3 Agents & Builders
        p Join thousands of satisfied real estate professionals who trust REBAX for their business needs.

    // FAQ Section
    .faq-section
      .faq-content
        h2 FAQ's LIST
        .faq-list
          .faq-item(v-for="(faq, index) in faqs" :key="index" :class="{ open: openFaq === index }")
            .faq-question(@click="toggleFaq(index)")
              span {{ faq.question }}
              span.faq-icon {{ openFaq === index ? '-' : '+' }}
            .faq-answer(v-show="openFaq === index")
              p {{ faq.answer }}
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeTab = ref('agents')
const openFaq = ref<number | null>(null)

const faqs = ref([
  {
    question: 'What is included in the free package?',
    answer: 'The free package includes basic property listings, standard search functionality, email support, mobile app access, and basic analytics to get you started.'
  },
  {
    question: 'Can I upgrade my plan at any time?',
    answer: 'Yes, you can upgrade your plan at any time. The changes will be reflected immediately and you will only be charged the prorated amount.'
  },
  {
    question: 'Is there a setup fee?',
    answer: 'No, there are no setup fees for any of our packages. You only pay the monthly subscription fee.'
  },
  {
    question: 'Do you offer custom enterprise solutions?',
    answer: 'Yes, we offer custom enterprise solutions for large agencies and builders. Please contact our sales team for more information.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and bank transfers for annual subscriptions.'
  }
])

const setActiveTab = (tab: string) => {
  activeTab.value = tab
}

const toggleFaq = (index: number) => {
  openFaq.value = openFaq.value === index ? null : index
}
</script>

<style lang="less" scoped>
.pricing {
  padding: @spacing-xl 0;

  // Pricing Tabs
  .pricing-tabs {
    display: flex;
    justify-content: center;
    margin-bottom: @spacing-xl;
    background: @gray-100;
    border-radius: 50px;
    padding: @spacing-xs;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
    box-shadow: @shadow-md;
    border: 1px solid @border-color;

    .tab-button {
      flex: 1;
      padding: @spacing-sm @spacing-md;
      border: none;
      background: transparent;
      border-radius: 40px;
      font-weight: 600;
      color: @gray-500;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

      &.active {
        background: @gradient-primary;
        color: @white;
        box-shadow: @shadow-primary;
        transform: scale(1.02);
      }

      &:hover:not(.active) {
        color: @primary-color;
        background: @hover-bg;
      }
    }
  }

  // Pricing Packages
  .pricing-packages {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: @spacing-lg;
    margin-bottom: @spacing-xl * 2;

    @media (max-width: @tablet) {
      grid-template-columns: 1fr;
    }

    .package-card {
      background: @gradient-card;
      border: 2px solid @border-color;
      color: @text-primary;
      border-radius: @border-radius-lg;
      padding: @spacing-xl;
      text-align: center;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: @shadow-lg;
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: @gradient-primary;
      }

      &:hover {
        transform: translateY(-8px);
        box-shadow: @shadow-xl;
        border-color: @primary-color;
      }

      &.pro-package {
        border: 2px solid @primary-color;
        
        &::before {
          background: @gradient-primary;
        }
        
        &::after {
          content: 'POPULAR';
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: @gradient-primary;
          color: @white;
          padding: @spacing-xs @spacing-md;
          border-radius: 20px;
          font-size: @font-size-sm;
          font-weight: 700;
          box-shadow: @shadow-primary;
        }
      }

      .package-header {
        margin-bottom: @spacing-xl;

        h3 {
          font-size: @font-size-xl;
          margin-bottom: @spacing-lg;
        }

        .package-price {
          .price-text {
            display: block;
            font-size: @font-size-lg;
            margin-bottom: @spacing-md;
            color: @text-secondary;
          }

          .price-amount {
            font-size: 48px;
            font-weight: 700;
            display: block;
            background: @gradient-primary;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .price-period {
            color: @text-secondary;
            font-size: @font-size-base;
          }
        }
      }

      .package-features {
        margin-bottom: @spacing-xl;
        text-align: left;

        h4 {
          font-size: @font-size-lg;
          margin-bottom: @spacing-md;
          text-align: center;
        }

        .feature-list {
          list-style: none;

          li {
            padding: @spacing-xs 0;
            color: @text-secondary;
            position: relative;
            padding-left: @spacing-md;

            &::before {
              content: '✓';
              position: absolute;
              left: 0;
              color: @success-color;
              font-weight: bold;
              font-size: @font-size-lg;
            }
          }
        }
      }

      .package-action {
        .btn {
          width: 100%;
          padding: @spacing-sm @spacing-lg;
          font-size: @font-size-lg;
          font-weight: 600;
        }
      }
    }
  }

  // Clients Section
  .pricing-clients-section {
    background: @dark-bg;
    color: @white;
    padding: @spacing-xl;
    border-radius: @border-radius-lg;
    text-align: center;
    margin-bottom: @spacing-xl * 2;
    position: relative;
    overflow: hidden;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at 50% 50%, rgba(103, 141, 255, 0.2) 0%, transparent 70%);
    }

    .clients-content {
      position: relative;
      z-index: 1;
      
      h2 {
        font-size: @font-size-xl;
        margin-bottom: @spacing-sm;
        background: @gradient-primary;
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      h3 {
        font-size: @font-size-lg;
        margin-bottom: @spacing-md;
        color: @gray-300;
      }

      p {
        font-size: @font-size-lg;
        color: @gray-400;
        max-width: 600px;
        margin: 0 auto;
      }
    }
  }

  // FAQ Section
  .faq-section {
    .faq-content {
      h2 {
        text-align: center;
        font-size: @font-size-xl;
        margin-bottom: @spacing-xl;
      }

      .faq-list {
        max-width: 800px;
        margin: 0 auto;

        .faq-item {
          border: 2px solid @border-color;
          border-radius: @border-radius-md;
          margin-bottom: @spacing-sm;
          overflow: hidden;
          transition: all 0.3s ease;

          &:hover {
            border-color: @primary-color;
            transform: translateY(-2px);
            box-shadow: @shadow-md;
          }

          &.open {
            border-color: @primary-color;
            
            .faq-question {
              background: linear-gradient(135deg, @primary-color 0%, @action-color 100%);
              color: @white;
            }
          }

          .faq-question {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: @spacing-md @spacing-lg;
            cursor: pointer;
            background: @white;
            transition: all 0.3s ease;
            font-weight: 600;

            &:hover {
              background: @hover-bg;
            }

            .faq-icon {
              font-size: @font-size-lg;
              font-weight: bold;
              width: 28px;
              height: 28px;
              display: flex;
              align-items: center;
              justify-content: center;
              background: @gray-100;
              border-radius: 50%;
              transition: all 0.3s ease;
            }
          }

          .faq-answer {
            padding: 0 @spacing-lg @spacing-md;
            background: @white;

            p {
              color: @text-secondary;
              line-height: 1.6;
            }
          }
        }
      }
    }
  }
}
</style>