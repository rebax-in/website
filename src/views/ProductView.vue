<template lang="pug">
.product
  // Hero Section
  .hero-section
    .container
      .hero-content
        h1 WHAT IS REBAX
        p Discover the comprehensive real estate platform that revolutionizes how agents, agencies, and builders connect and collaborate.
        .hero-actions
          button.btn.btn-secondary GET FREE DEMO
          button.btn.btn-primary GET STARTED

  // App Images Section
  .app-images-section
    .container
      .app-content
        h2 APP IMAGES
        p Experience our intuitive interface and powerful features through these application screenshots.
        .app-gallery
          .app-screenshot
            .screenshot-placeholder Screenshot 1
          .app-screenshot
            .screenshot-placeholder Screenshot 2
          .app-screenshot
            .screenshot-placeholder Screenshot 3
          .app-screenshot
            .screenshot-placeholder Screenshot 4

  // Clients Section
  .clients-section
    .container
      .clients-content
        h2 OUR CLIENTS
        h3 Agents & Builders
        p Trusted by industry professionals nationwide
        .client-testimonials
          .testimonial
            blockquote "REBAX has transformed how we manage our property listings and connect with clients. The platform is intuitive and powerful."
            cite - Sarah Johnson, Real Estate Agent
          .testimonial
            blockquote "As a builder, REBAX helps me showcase my projects to the right audience. The lead generation features are exceptional."
            cite - Mike Chen, Property Builder

  // Why It Matters Section
  .why-matters-section
    .container
      .matters-content
        h2 WHY IT MATTERS
        h3 Detailed Pain Points and Solutions with App Feature Images
        .pain-points
          .pain-point
            .point-header
              h4 🏠 Property Management Complexity
              p Traditional real estate management involves multiple disconnected tools and platforms.
            .solution
              h5 Our Solution:
              p Unified platform that integrates all property management needs in one place with intuitive workflows.
          
          .pain-point
            .point-header
              h4 📊 Limited Market Insights
              p Agents and builders lack comprehensive market data and analytics for informed decision-making.
            .solution
              h5 Our Solution:
              p Advanced analytics dashboard with real-time market trends, pricing insights, and performance metrics.
          
          .pain-point
            .point-header
              h4 🤝 Poor Lead Management
              p Inconsistent lead tracking and follow-up processes result in lost opportunities.
            .solution
              h5 Our Solution:
              p Automated lead management system with smart notifications and conversion tracking.

        .feature-showcase
          .feature-demo
            h4 Key Platform Features
            .features-grid
              .feature-item
                .feature-icon 📱
                .feature-text
                  h5 Mobile-First Design
                  p Access your dashboard anywhere, anytime with our responsive mobile application.
              .feature-item
                .feature-icon 🔍
                .feature-text
                  h5 Advanced Search
                  p Powerful filtering and search capabilities to find exactly what you're looking for.
              .feature-item
                .feature-icon 📈
                .feature-text
                  h5 Analytics & Reporting
                  p Comprehensive insights into your performance with detailed analytics and reports.
              .feature-item
                .feature-icon 🏗️
                .feature-text
                  h5 Builder Integration
                  p Seamless integration between builders and real estate agents for new projects.

  // FAQ Section
  .faq-section
    .container
      .faq-content
        h2 FAQ'S LIST
        .faq-grid
          .faq-column
            .faq-item
              h4 What makes REBAX different?
              p REBAX combines all real estate tools into one comprehensive platform, eliminating the need for multiple subscriptions and integrations.
            
            .faq-item
              h4 Is REBAX suitable for individual agents?
              p Yes, REBAX scales from individual agents to large agencies and builder organizations with flexible pricing plans.
          
          .faq-column
            .faq-item
              h4 How secure is my data?
              p We use enterprise-grade security with end-to-end encryption, regular backups, and compliance with industry standards.
            
            .faq-item
              h4 Do you provide training and support?
              p Yes, we offer comprehensive onboarding, training materials, and 24/7 customer support for all users.
</template>

<script setup lang="ts">
// Product page component logic
</script>

<style lang="less" scoped>
.product {
  // Hero Section
  .hero-section {
    background: linear-gradient(135deg, @dark-bg 0%, lighten(@dark-bg, 10%) 100%);
    color: @white;
    padding: @spacing-xl * 2 0;
    text-align: center;
    position: relative;
    overflow: hidden;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at 50% 50%, rgba(111, 112, 250, 0.2) 0%, transparent 70%);
    }

    .hero-content {
      max-width: 800px;
      margin: 0 auto;
      position: relative;
      z-index: 1;

      h1 {
        font-size: @font-size-xxl + 8px;
        margin-bottom: @spacing-lg;
        font-weight: 700;
        background: @gradient-primary;
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
      }

      p {
        font-size: @font-size-lg;
        margin-bottom: @spacing-xl;
        color: @gray-300;
        line-height: 1.6;
      }

      .hero-actions {
        display: flex;
        gap: @spacing-md;
        justify-content: center;
        flex-wrap: wrap;

        @media (max-width: @mobile) {
          flex-direction: column;
          align-items: center;
        }
      }
    }
  }

  // App Images Section
  .app-images-section {
    background: @dark-bg;
    color: @white;
    padding: @spacing-xl * 2 0;
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at 30% 70%, rgba(103, 141, 255, 0.15) 0%, transparent 60%);
    }

    .app-content {
      text-align: center;

      h2 {
        font-size: @font-size-xl;
        margin-bottom: @spacing-md;
      }

      p {
        font-size: @font-size-lg;
        margin-bottom: @spacing-xl;
        color: @gray-light;
      }

      .app-gallery {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: @spacing-lg;
        margin-top: @spacing-xl;

        .app-screenshot {
          .screenshot-placeholder {
            background: @glass-card;
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: @border-radius-lg;
            padding: @spacing-xl;
            height: 200px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: @gray-300;
            font-size: @font-size-lg;
            transition: all 0.3s ease;
            position: relative;
            z-index: 1;

            &:hover {
              transform: translateY(-4px) scale(1.02);
              box-shadow: @shadow-xl;
            }
          }
        }
      }
    }
  }

  // Clients Section
  .clients-section {
    background-color: @black;
    color: @white;
    padding: @spacing-xl * 2 0;

    .clients-content {
      text-align: center;

      h2 {
        font-size: @font-size-xl;
        margin-bottom: @spacing-sm;
      }

      h3 {
        font-size: @font-size-lg;
        margin-bottom: @spacing-lg;
        color: @gray-light;
      }

      p {
        font-size: @font-size-lg;
        margin-bottom: @spacing-xl;
        color: @gray-light;
      }

      .client-testimonials {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: @spacing-lg;
        margin-top: @spacing-xl;

        .testimonial {
          background-color: @gray-dark;
          padding: @spacing-xl;
          border-radius: 12px;
          text-align: left;

          blockquote {
            font-size: @font-size-lg;
            font-style: italic;
            margin-bottom: @spacing-md;
            line-height: 1.6;
            color: @gray-light;

            &::before {
              content: '"';
              font-size: @font-size-xl;
              color: @white;
            }

            &::after {
              content: '"';
              font-size: @font-size-xl;
              color: @white;
            }
          }

          cite {
            color: @white;
            font-weight: 500;
            font-style: normal;
          }
        }
      }
    }
  }

  // Why It Matters Section
  .why-matters-section {
    background-color: @black;
    color: @white;
    padding: @spacing-xl * 2 0;

    .matters-content {
      h2 {
        text-align: center;
        font-size: @font-size-xl;
        margin-bottom: @spacing-sm;
      }

      h3 {
        text-align: center;
        font-size: @font-size-lg;
        margin-bottom: @spacing-xl;
        color: @gray-light;
      }

      .pain-points {
        margin-bottom: @spacing-xl * 2;

        .pain-point {
          background-color: @gray-dark;
          border-radius: 12px;
          padding: @spacing-xl;
          margin-bottom: @spacing-lg;

          .point-header {
            margin-bottom: @spacing-md;

            h4 {
              font-size: @font-size-lg;
              margin-bottom: @spacing-sm;
              color: @white;
            }

            p {
              color: @gray-light;
              line-height: 1.6;
            }
          }

          .solution {
            border-top: 2px solid @gray-medium;
            padding-top: @spacing-md;

            h5 {
              color: #4CAF50;
              margin-bottom: @spacing-xs;
              font-weight: 600;
            }

            p {
              color: @gray-light;
              line-height: 1.6;
            }
          }
        }
      }

      .feature-showcase {
        .feature-demo {
          h4 {
            text-align: center;
            font-size: @font-size-xl;
            margin-bottom: @spacing-xl;
          }

          .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: @spacing-lg;

            .feature-item {
              background-color: @gray-dark;
              padding: @spacing-xl;
              border-radius: 12px;
              text-align: center;

              .feature-icon {
                font-size: 48px;
                margin-bottom: @spacing-md;
                display: block;
              }

              .feature-text {
                h5 {
                  font-size: @font-size-lg;
                  margin-bottom: @spacing-sm;
                  color: @white;
                }

                p {
                  color: @gray-light;
                  line-height: 1.6;
                }
              }
            }
          }
        }
      }
    }
  }

  // FAQ Section
  .faq-section {
    background-color: @black;
    color: @white;
    padding: @spacing-xl * 2 0;

    .faq-content {
      h2 {
        text-align: center;
        font-size: @font-size-xl;
        margin-bottom: @spacing-xl;
      }

      .faq-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        gap: @spacing-lg;

        @media (max-width: @tablet) {
          grid-template-columns: 1fr;
        }

        .faq-column {
          .faq-item {
            background-color: @gray-dark;
            padding: @spacing-xl;
            border-radius: 12px;
            margin-bottom: @spacing-lg;

            h4 {
              font-size: @font-size-lg;
              margin-bottom: @spacing-md;
              color: @white;
            }

            p {
              color: @gray-light;
              line-height: 1.6;
            }
          }
        }
      }
    }
  }
}
</style>