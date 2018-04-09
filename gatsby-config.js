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
    "gatsby-plugin-styled-components"
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
  ],
  mapping: {},
};
