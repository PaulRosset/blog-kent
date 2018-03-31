module.exports = {
  siteMetadata: {
    title: "Blog Kent University",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/markdowns`,
        name: "markdown-pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/imgs`,
        name: "images-markdown",
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`roboto`, `lato`],
      },
    },
    "gatsby-plugin-react-next",
    "gatsby-transformer-sharp",
  ],
};
