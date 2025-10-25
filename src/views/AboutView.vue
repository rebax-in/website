<template lang="pug">
.about
  // About Us Hero
  .about-hero-section
    .container
      .about-hero-content
        h1 ABOUT US
        p Learn more about REBAX and our mission to transform the real estate industry through innovative technology.

  // Short Brief Section
  .brief-section
    .container
      .brief-content
        h2 SHORT BRIEF
        p REBAX is a pioneering real estate technology company founded with the vision of creating seamless connections between agents, agencies, and builders. Our comprehensive platform streamlines property management, enhances collaboration, and drives business growth across the real estate ecosystem.
        .company-highlights
          .highlight
            .highlight-number 2020
            .highlight-text Founded
          .highlight
            .highlight-number 10,000+
            .highlight-text Active Users
          .highlight
            .highlight-number 50+
            .highlight-text Cities Covered

  // Our Vision Section
  .vision-section
    .container
      .vision-content
        h2 OUR VISION
        h3 SHORT BRIEF
        p To become the leading real estate technology platform that empowers professionals with innovative tools, data-driven insights, and seamless connectivity, ultimately transforming how properties are bought, sold, and managed globally.
        .vision-points
          .vision-point
            .point-icon 🚀
            .point-text
              h4 Innovation First
              p Continuously advancing real estate technology with cutting-edge solutions.
          .vision-point
            .point-icon 🤝
            .point-text
              h4 Seamless Integration
              p Creating unified experiences that connect all real estate stakeholders.
          .vision-point
            .point-icon 📈
            .point-text
              h4 Growth Enablement
              p Empowering professionals with tools that drive business success.

  // Our Mission Section
  .mission-section
    .container
      .mission-content
        h2 OUR MISSION
        h3 SHORT BRIEF
        p Our mission is to revolutionize the real estate industry by providing an integrated platform that simplifies complex processes, enhances communication, and delivers exceptional user experiences for agents, agencies, and builders worldwide.
        .mission-pillars
          .pillar
            h4 Simplification
            p Streamlining complex real estate processes through intuitive design and smart automation.
          .pillar
            h4 Collaboration
            p Fostering meaningful connections and seamless communication between industry professionals.
          .pillar
            h4 Excellence
            p Delivering exceptional quality in every aspect of our platform and customer service.

  // Our Team Section
  .team-section
    .container
      .team-content
        h2 OUR TEAM
        h3 IMAGE & SHOT BRIEF
        p Meet the passionate professionals behind REBAX who are dedicated to transforming the real estate industry.
        .team-grid
          .team-member
            .member-photo
              .photo-placeholder Executive Photo
            .member-info
              h4 Sarah Johnson
              h5 Chief Executive Officer
              p Sarah brings over 15 years of real estate and technology experience, leading REBAX with vision and strategic insight.
          
          .team-member
            .member-photo
              .photo-placeholder CTO Photo
            .member-info
              h4 Michael Chen
              h5 Chief Technology Officer
              p Michael is a seasoned technologist with expertise in scalable platforms and innovative real estate solutions.
          
          .team-member
            .member-photo
              .photo-placeholder CPO Photo
            .member-info
              h4 Emily Rodriguez
              h5 Chief Product Officer
              p Emily leads product development with a user-centered approach, ensuring REBAX meets real-world needs.
          
          .team-member
            .member-photo
              .photo-placeholder CMO Photo
            .member-info
              h4 David Thompson
              h5 Chief Marketing Officer
              p David drives market growth and brand awareness through strategic marketing initiatives and partnerships.

        .team-values
          h3 Our Core Values
          .values-grid
            .value-item
              .value-icon 🎯
              .value-content
                h4 Customer Focus
                p Every decision we make is centered around our customers' success and satisfaction.
            .value-item
              .value-icon 💡
              .value-content
                h4 Innovation
                p We constantly push boundaries to create breakthrough solutions for the real estate industry.
            .value-item
              .value-icon 🔒
              .value-content
                h4 Trust
                p We build trust through transparency, reliability, and consistent delivery of our promises.
            .value-item
              .value-icon 🌟
              .value-content
                h4 Excellence
                p We strive for excellence in everything we do, from product development to customer service.
</template>

<script setup lang="ts">
// About page component logic
</script>

<style lang="less" scoped>
.about {
  // About Hero Section
  .about-hero-section {
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

    .about-hero-content {
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
      }

      p {
        font-size: @font-size-lg;
        color: @gray-300;
        line-height: 1.6;
      }
    }
  }

  // Brief Section
  .brief-section {
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
      background: radial-gradient(circle at 70% 30%, rgba(103, 141, 255, 0.1) 0%, transparent 60%);
    }

    .brief-content {
      max-width: 900px;
      margin: 0 auto;
      text-align: center;

      h2 {
        font-size: @font-size-xl;
        margin-bottom: @spacing-lg;
      }

      p {
        font-size: @font-size-lg;
        line-height: 1.7;
        margin-bottom: @spacing-xl;
        color: @gray-light;
      }

      .company-highlights {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: @spacing-lg;
        margin-top: @spacing-xl;

        .highlight {
          .highlight-number {
            font-size: @font-size-xxl;
            font-weight: 700;
            background: @gradient-primary;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            display: block;
            margin-bottom: @spacing-xs;
          }

          .highlight-text {
            color: @gray-300;
            font-size: @font-size-lg;
          }
        }
      }
    }
  }

  // Vision Section
  .vision-section {
    background-color: @black;
    color: @white;
    padding: @spacing-xl * 2 0;

    .vision-content {
      max-width: 900px;
      margin: 0 auto;

      h2 {
        font-size: @font-size-xl;
        margin-bottom: @spacing-sm;
        text-align: center;
      }

      h3 {
        font-size: @font-size-lg;
        margin-bottom: @spacing-lg;
        color: @gray-light;
        text-align: center;
      }

      > p {
        font-size: @font-size-lg;
        line-height: 1.7;
        margin-bottom: @spacing-xl;
        color: @gray-light;
        text-align: center;
      }

      .vision-points {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: @spacing-lg;

        .vision-point {
          background-color: @gray-dark;
          padding: @spacing-xl;
          border-radius: 12px;
          text-align: center;

          .point-icon {
            font-size: 48px;
            margin-bottom: @spacing-md;
            display: block;
          }

          .point-text {
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
        }
      }
    }
  }

  // Mission Section
  .mission-section {
    background-color: @black;
    color: @white;
    padding: @spacing-xl * 2 0;

    .mission-content {
      max-width: 900px;
      margin: 0 auto;

      h2 {
        font-size: @font-size-xl;
        margin-bottom: @spacing-sm;
        text-align: center;
      }

      h3 {
        font-size: @font-size-lg;
        margin-bottom: @spacing-lg;
        color: @gray-light;
        text-align: center;
      }

      > p {
        font-size: @font-size-lg;
        line-height: 1.7;
        margin-bottom: @spacing-xl;
        color: @gray-light;
        text-align: center;
      }

      .mission-pillars {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: @spacing-lg;

        .pillar {
          background-color: @gray-dark;
          padding: @spacing-xl;
          border-radius: 12px;

          h4 {
            font-size: @font-size-lg;
            margin-bottom: @spacing-md;
            color: @white;
            text-align: center;
          }

          p {
            color: @gray-light;
            line-height: 1.6;
            text-align: center;
          }
        }
      }
    }
  }

  // Team Section
  .team-section {
    background-color: @black;
    color: @white;
    padding: @spacing-xl * 2 0;

    .team-content {
      h2 {
        font-size: @font-size-xl;
        margin-bottom: @spacing-sm;
        text-align: center;
      }

      h3 {
        font-size: @font-size-lg;
        margin-bottom: @spacing-lg;
        color: @gray-light;
        text-align: center;
      }

      > p {
        font-size: @font-size-lg;
        line-height: 1.7;
        margin-bottom: @spacing-xl;
        color: @gray-light;
        text-align: center;
        max-width: 700px;
        margin-left: auto;
        margin-right: auto;
      }

      .team-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: @spacing-lg;
        margin-bottom: @spacing-xl * 2;

        .team-member {
          background-color: @gray-dark;
          padding: @spacing-xl;
          border-radius: 12px;
          text-align: center;

          .member-photo {
            margin-bottom: @spacing-lg;

            .photo-placeholder {
              width: 120px;
              height: 120px;
              background-color: @gray-medium;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 0 auto;
              font-size: @font-size-sm;
              color: @white;
            }
          }

          .member-info {
            h4 {
              font-size: @font-size-lg;
              margin-bottom: @spacing-xs;
              color: @white;
            }

            h5 {
              font-size: @font-size-base;
              margin-bottom: @spacing-md;
              color: #4CAF50;
              font-weight: 600;
            }

            p {
              color: @gray-light;
              line-height: 1.6;
            }
          }
        }
      }

      .team-values {
        h3 {
          font-size: @font-size-xl;
          margin-bottom: @spacing-xl;
          text-align: center;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: @spacing-lg;

          .value-item {
            background-color: @gray-dark;
            padding: @spacing-lg;
            border-radius: 12px;
            text-align: center;

            .value-icon {
              font-size: 36px;
              margin-bottom: @spacing-md;
              display: block;
            }

            .value-content {
              h4 {
                font-size: @font-size-lg;
                margin-bottom: @spacing-sm;
                color: @white;
              }

              p {
                color: @gray-light;
                line-height: 1.6;
                font-size: @font-size-sm;
              }
            }
          }
        }
      }
    }
  }
}
</style>