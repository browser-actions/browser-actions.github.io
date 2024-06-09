import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  jsxRuntime: "automatic",
  siteMetadata: {
    title: "Browser Actions",
    description: "GitHub Actions for Browsers",
    siteUrl: "https://browser-actions.dev",
    social: {
      twitter: "ueokande",
    },
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Browser Actions - GitHub Actions for Browsers",
        short_name: "Browser Actions",
        start_url: "/",
        background_color: "#ffffff",
        display: "standalone",
        icon: "src/images/icon.png",
      },
    },
  ],
};

export default config;
