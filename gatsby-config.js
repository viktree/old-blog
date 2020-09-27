module.exports = {
  siteMetadata: {
    title: "viktree",
    author: "Vikram Venktaramanan",
    welcomeMessage: `Glad you made it! Here’s a corner of the internet that I am carving out for myself.`,
    license: ` © 2020. All rights reserved.`,
    siteUrl: process.env.GATSBY_SITE_URL,
    disqusShortname: process.env.GATSBY_DISQUS_SHORTNAME,
    resources: {
      resumeLink: process.env.GATSBY_RESUME_LINK,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-katex`,
            options: {
              strict: `ignore`,
            },
          },
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              inlineCodeMarker: "÷",
            },
          },
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-reading-time",
          "gatsby-remark-smartypants",
        ],
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Vikram's site and blog`,
        short_name: "viktree",
        start_url: "/",
        display: `minimal-ui`,
        icon: `src/assets/avatar.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/typography.js",
      },
    },
  ],
}
