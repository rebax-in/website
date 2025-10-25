<template lang="pug">
.home
  // Main Hero Section
  .hero-main
    .container
      .hero-content-wrapper
        .hero-text
          .hero-tagline
            h1.main-heading Showcase your
            h1.main-heading real estate App with
            h1.main-heading.gradient-text REBAX
          .hero-description
            p Transform your real estate business with our innovative platform. Connect agents, agencies, and builders in one unified ecosystem.
          .hero-actions
            .watch-demo-btn
              .play-icon ▶
              span Watch the Overview
            button.btn.btn-primary.download-btn
              span Download on the
              strong App Store
        .hero-visual
          .phone-mockup
            .phone-frame
              .phone-screen
                .app-interface
                  .app-header
                    .status-bar 9:41
                    .app-title My Properties
                    .page-indicator 1/8
                  .app-content
                    .property-card.featured
                      .property-image
                      .property-info
                        .property-title Featured Property
                        .property-subtitle Downtown Location
                        .property-rating ⭐ 4.5
                    .property-card.secondary
                      .property-mini Premium Unit
                  .bottom-nav
                    .nav-dot.active
                    .nav-dot
                    .nav-dot

  // Features Section
  .features-section
    .container
      .features-content
        h2 Why Choose REBAX?
        .features-grid
          .feature-item
            .feature-icon 📊
            .feature-content
              h3 Advanced Analytics
              p Get detailed insights into your property performance and market trends.
          .feature-item
            .feature-icon 🤝
            .feature-content
              h3 Seamless Collaboration
              p Connect with agents, builders, and clients in one unified platform.
          .feature-item
            .feature-icon 📱
            .feature-content
              h3 Mobile First
              p Access your properties and manage your business from anywhere.
          .feature-item
            .feature-icon 🔒
            .feature-content
              h3 Secure & Reliable
              p Enterprise-grade security to keep your data safe and protected.

  // Testimonials Section
  .testimonials-section
    .container
      .testimonials-content
        h2 Trusted by Real Estate Professionals
        .testimonials-grid
          .testimonial-card
            .testimonial-text "REBAX has revolutionized how we manage our properties. The mobile app is incredibly intuitive."
            .testimonial-author
              .author-avatar
              .author-info
                .author-name Sarah Johnson
                .author-title Real Estate Agent
          .testimonial-card
            .testimonial-text "The collaboration features have streamlined our workflow significantly. Highly recommended!"
            .testimonial-author
              .author-avatar
              .author-info
                .author-name Mike Chen
                .author-title Property Builder

  // CTA Section
  .cta-section
    .container
      .cta-content
        h2 Ready to Transform Your Real Estate Business?
        p Join thousands of professionals who trust REBAX for their property management needs.
        .cta-actions
          button.btn.btn-primary Get Started Today
          button.btn.btn-secondary Schedule Demo
</template>

<script setup lang="ts">
// Home page component logic
</script>

<style lang="less" scoped>
.home {
  // Main Hero Section
  .hero-main {
    background: linear-gradient(135deg, @primary-color 0%, @action-color 100%);
    min-height: 100vh;
    padding: 0;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 60%;
      height: 100%;
      background: radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 60%);
      z-index: 0;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 100px;
      background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.05) 100%);
      z-index: 0;
    }

    .hero-content-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: @spacing-xl * 2;
      align-items: center;
      position: relative;
      z-index: 1;
      padding: @spacing-xl * 4 0 @spacing-xl * 2;

      @media (max-width: @tablet) {
        grid-template-columns: 1fr;
        gap: @spacing-xl;
        text-align: center;
        padding: @spacing-xl * 3 0 @spacing-xl * 2;
      }
    }

    .hero-text {
      .main-heading {
        font-size: clamp(32px, 4vw, 48px);
        font-weight: 300;
        line-height: 1.2;
        margin-bottom: @spacing-xs;
        color: rgba(255, 255, 255, 0.95);
        text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        
        &.gradient-text {
          background: linear-gradient(135deg, @white 0%, rgba(255, 255, 255, 0.8) 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 700;
        }
      }

      .hero-description {
        margin: @spacing-lg 0 @spacing-xl;
        
        p {
          font-size: @font-size-lg;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.85);
          max-width: 500px;
          text-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
        }
      }

      .hero-actions {
        display: flex;
        gap: @spacing-lg;
        align-items: center;

        @media (max-width: @mobile) {
          flex-direction: column;
          gap: @spacing-md;
        }

        .watch-demo-btn {
          display: flex;
          align-items: center;
          gap: @spacing-sm;
          color: rgba(255, 255, 255, 0.9);
          cursor: pointer;
          transition: all 0.3s ease;
          
          &:hover {
            color: @white;
            transform: translateX(4px);
          }

          .play-icon {
            width: 48px;
            height: 48px;
            background: @white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            color: @primary-color;
            box-shadow: @shadow-md;
          }
        }

        .download-btn {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: @spacing-sm @spacing-lg;
          background: @white;
          color: @primary-color;
          border-radius: @border-radius-md;
          box-shadow: @shadow-lg;
          
          &:hover {
            background: @gray-100;
            transform: translateY(-2px);
            box-shadow: @shadow-xl;
          }
          
          span {
            font-size: @font-size-sm;
            opacity: 0.8;
          }
          
          strong {
            font-size: @font-size-lg;
            font-weight: 600;
          }
        }
      }
    }

    .hero-visual {
      display: flex;
      justify-content: center;
      align-items: center;

      .phone-mockup {
        position: relative;
        max-width: 300px;

        .phone-frame {
          background: linear-gradient(135deg, @gray-800 0%, @gray-900 100%);
          border-radius: 30px;
          padding: 8px;
          box-shadow: @shadow-xl;

          .phone-screen {
            background: linear-gradient(135deg, @gray-700 0%, @gray-800 100%);
            border-radius: 22px;
            padding: @spacing-md;
            height: 600px;
            position: relative;
            overflow: hidden;

            .app-interface {
              .app-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: @spacing-lg;
                color: @white;
                font-size: @font-size-sm;

                .app-title {
                  font-size: @font-size-lg;
                  font-weight: 600;
                }

                .page-indicator {
                  color: @success-color;
                  font-weight: 500;
                }
              }

              .app-content {
                .property-card {
                  background: @gradient-card;
                  border-radius: @border-radius-lg;
                  padding: @spacing-md;
                  margin-bottom: @spacing-md;
                  box-shadow: @shadow-md;

                  &.featured {
                    .property-image {
                      height: 120px;
                      background: @gradient-primary;
                      border-radius: @border-radius-md;
                      margin-bottom: @spacing-sm;
                      position: relative;
                      
                      &::after {
                        content: '🏠';
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        font-size: 32px;
                      }
                    }

                    .property-info {
                      .property-title {
                        font-weight: 600;
                        color: @text-primary;
                        margin-bottom: @spacing-xs;
                      }

                      .property-subtitle {
                        color: @text-secondary;
                        font-size: @font-size-sm;
                        margin-bottom: @spacing-xs;
                      }

                      .property-rating {
                        color: @warning-color;
                        font-size: @font-size-sm;
                        font-weight: 500;
                      }
                    }
                  }

                  &.secondary {
                    background: linear-gradient(135deg, @action-color 0%, lighten(@action-color, 10%) 100%);
                    color: @white;
                    text-align: center;
                    padding: @spacing-lg;
                  }
                }

                .bottom-nav {
                  display: flex;
                  justify-content: center;
                  gap: @spacing-xs;
                  margin-top: @spacing-lg;

                  .nav-dot {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: @gray-500;
                    
                    &.active {
                      background: @primary-color;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  // Features Section
  .features-section {
    padding: @spacing-xl * 2 0;
    background: @gray-50;

    .features-content {
      text-align: center;
      
      h2 {
        font-size: @font-size-xxl;
        font-weight: 600;
        margin-bottom: @spacing-xl;
        color: @gray-900;
      }

      .features-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: @spacing-xl;
        margin-top: @spacing-xl;

        .feature-item {
          text-align: center;
          padding: @spacing-xl @spacing-lg;
          
          .feature-icon {
            font-size: 48px;
            margin-bottom: @spacing-lg;
            display: block;
          }

          .feature-content {
            h3 {
              font-size: @font-size-xl;
              font-weight: 600;
              margin-bottom: @spacing-md;
              color: @gray-900;
            }

            p {
              color: @gray-700;
              line-height: 1.6;
              max-width: 280px;
              margin: 0 auto;
            }
          }
        }
      }
    }
  }

  // Testimonials Section
  .testimonials-section {
    padding: @spacing-xl * 2 0;
    background: @gray-50;

    .testimonials-content {
      text-align: center;
      
      h2 {
        font-size: @font-size-xxl;
        font-weight: 600;
        margin-bottom: @spacing-xl;
        color: @text-primary;
      }

      .testimonials-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        gap: @spacing-xl;
        margin-top: @spacing-xl;

        @media (max-width: @tablet) {
          grid-template-columns: 1fr;
        }

        .testimonial-card {
          background: @white;
          padding: @spacing-xl;
          border-radius: @border-radius-lg;
          box-shadow: @shadow-md;
          text-align: left;
          
          .testimonial-text {
            font-size: @font-size-lg;
            line-height: 1.6;
            color: @text-secondary;
            margin-bottom: @spacing-lg;
            font-style: italic;

            &::before {
              content: '"';
              color: @primary-color;
              font-size: @font-size-xl;
              font-weight: bold;
            }
            
            &::after {
              content: '"';
              color: @primary-color;
              font-size: @font-size-xl;
              font-weight: bold;
            }
          }

          .testimonial-author {
            display: flex;
            align-items: center;
            gap: @spacing-md;

            .author-avatar {
              width: 50px;
              height: 50px;
              background: @gradient-primary;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              color: @white;
              font-weight: 600;
              
              &::after {
                content: '👤';
                font-size: 20px;
              }
            }

            .author-info {
              .author-name {
                font-weight: 600;
                color: @text-primary;
                margin-bottom: @spacing-xs / 2;
              }

              .author-title {
                color: @text-secondary;
                font-size: @font-size-sm;
              }
            }
          }
        }
      }
    }

  }

  // CTA Section
  .cta-section {
    padding: @spacing-xl * 2 0;
    background: linear-gradient(135deg, @primary-color 0%, @action-color 100%);
    text-align: center;
    color: @white;
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
    }

    .cta-content {
      position: relative;
      z-index: 1;
      
      h2 {
        font-size: @font-size-xxl;
        font-weight: 600;
        margin-bottom: @spacing-lg;
        color: @white;
      }

      p {
        font-size: @font-size-lg;
        margin-bottom: @spacing-xl;
        color: rgba(255, 255, 255, 0.9);
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: @spacing-xl;
      }

      .cta-actions {
        display: flex;
        gap: @spacing-lg;
        justify-content: center;
        flex-wrap: wrap;

        @media (max-width: @mobile) {
          flex-direction: column;
          align-items: center;
        }

        .btn-primary {
          background: @white;
          color: @primary-color;
          
          &:hover {
            background: @gray-100;
            transform: translateY(-2px);
          }
        }

        .btn-secondary {
          background: transparent;
          color: @white;
          border: 2px solid rgba(255, 255, 255, 0.3);
          
          &:hover {
            background: rgba(255, 255, 255, 0.1);
            border-color: @white;
          }
        }
      }
    }
  }

  // Additional Features Section
  .additional-features-section {
    background: @gray-100;
    color: @gray-900;
    padding: @spacing-xl 0;
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at 20% 80%, rgba(111, 112, 250, 0.03) 0%, transparent 50%),
                  radial-gradient(circle at 80% 20%, rgba(103, 141, 255, 0.03) 0%, transparent 50%);
    }

    .section-title {
      text-align: center;
      font-size: @font-size-xl;
      margin-bottom: @spacing-xl;
      color: @gray-900;
      position: relative;
      z-index: 1;
    }

    .features-carousel {
      .feature-slide {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: @spacing-xl;
        align-items: center;

        @media (max-width: @tablet) {
          grid-template-columns: 1fr;
          text-align: center;
        }

        .feature-content {
          .feature-text {
            background: @white;
            color: @gray-900;
            padding: @spacing-xl;
            border-radius: @border-radius-lg;
            box-shadow: @shadow-lg;
            border: 1px solid @gray-200;

            h3 {
              font-size: @font-size-xl;
              margin-bottom: @spacing-md;
              color: @gray-900;
            }

            p {
              font-size: @font-size-lg;
              line-height: 1.6;
              color: @gray-700;
            }
          }
        }

        .feature-visual {
          background: @white;
          border: 1px solid @gray-200;
          color: @gray-900;
          padding: @spacing-xl;
          border-radius: @border-radius-lg;
          text-align: center;
          min-height: 300px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          z-index: 1;
          box-shadow: @shadow-md;

          h4 {
            font-size: @font-size-xl;
            margin-bottom: @spacing-sm;
            color: @gray-900;
          }

          h5 {
            font-size: @font-size-lg;
            margin-bottom: @spacing-lg;
            color: @gray-600;
          }

          .screenshot-placeholder {
            background: linear-gradient(135deg, @gray-100 0%, @gray-200 100%);
            border-radius: @border-radius-md;
            padding: @spacing-lg;
            color: @gray-800;
            border: 1px solid @gray-300;
          }
        }
      }

      .carousel-indicators {
        display: flex;
        justify-content: center;
        gap: @spacing-sm;
        margin-top: @spacing-lg;

        .indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: @gray-600;
          cursor: pointer;
          transition: all 0.3s ease;

          &.active {
            background: @gradient-primary;
            transform: scale(1.2);
          }

          &:hover {
            background: @action-color;
            transform: scale(1.1);
          }
        }
      }
    }
  }

  // Why It Matters Section
  .why-matters-section {
    background: @dark-bg;
    color: @white;
    padding: @spacing-xl 0;
    text-align: center;
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at 50% 50%, rgba(103, 141, 255, 0.1) 0%, transparent 70%);
    }

    h2 {
      font-size: @font-size-xl;
      margin-bottom: @spacing-lg;
      background: @gradient-primary;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      position: relative;
      z-index: 1;
    }

    p {
      font-size: @font-size-lg;
      line-height: 1.6;
      max-width: 800px;
      margin: 0 auto;
      color: @gray-300;
      position: relative;
      z-index: 1;
    }
  }
}
</style>