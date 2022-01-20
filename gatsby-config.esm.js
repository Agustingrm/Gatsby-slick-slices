import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  pathPrefix: '/pizza',
  siteMetadata: {
    title: 'Slicks Slices',
    siteUrl: 'https://gatsby.pizza',
    description: 'The best pizza place',
    twitter: '@slickSlices',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      // This is the name of the plugin we are adding
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'mlt9qvfj',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
