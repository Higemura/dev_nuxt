import { StorybookConfig } from "@storybook/vue3-vite"
import { mergeConfig } from "vite"
import path from "path"

const config: StorybookConfig = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  framework: "@storybook/vue3-vite",
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  core: {
    builder: "@storybook/builder-vite"
  },
  features: {
    "storyStoreV7": true
  },
  async viteFinal(config, { configType }) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '~~': path.resolve(__dirname, '../'),
          '@@': path.resolve(__dirname, '../'),
          '~': path.resolve(__dirname, '../src'),
          '@': path.resolve(__dirname, '../src'),
          //
          // NOTE:
          // .nuxt配下のaliasが正しく動作しないため、コメントアウト
          // 上記により、コンポーネント内で `import * from '#imports'` が利用できない
          //
          // '#app': path.resolve(__dirname, '../node_modules/nuxt/dist/app'),
          // '#imports': path.resolve(__dirname, '../.nuxt/imports'),
          // '#build': path.resolve(__dirname, '../.nuxt'),
        },
      },
    })
  }
}

export default config