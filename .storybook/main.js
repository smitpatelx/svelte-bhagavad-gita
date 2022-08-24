module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx|svelte)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    '@storybook/addon-svelte-csf',
    '@storybook/addon-storysource',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: import('postcss')
        }
      }
    }
  ],
  framework: "@storybook/svelte",
  core: {
    builder: "@storybook/builder-vite"
  },
  svelteOptions: {
    preprocess: import("../svelte.config.js").preprocess,
  },
  features: {
    storyStoreV7: false
  },
}