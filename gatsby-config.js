require("dotenv").config({
  path: `.env.development`,
});

module.exports = {
  siteMetadata: {
    title: `Blog Kent University - Epitech`,
    siteUrl: `https://epikent.paulrossethings.com`,
    description: `Blog Kent University (French). Made by student for student.`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/content`,
        name: "markdown-pages",
      },
    },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     path: `${__dirname}/src/imgs`,
    //     name: "images-markdown",
    //   },
    // },
    "gatsby-transformer-remark",
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`roboto`, `lato`],
      },
    },
    "gatsby-plugin-react-next",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-92424939-2",
      },
    },
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Blog Kent University - Epitech",
        short_name: "Blog Kent University - Epitech",
        start_url: "/",
        background_color: "#DEDAE1",
        theme_color: "#333535",
        display: "minimal-ui",
        icon: "src/images/favicon-fs8.png",
      },
    },
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: "#333535",
        showSpinner: true,
      },
    },
    "gatsby-plugin-netlify",
  ],
  mapping: {},
};
