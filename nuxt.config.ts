import { URL, fileURLToPath } from 'node:url'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    // 型チェックを厳密にすることを許可
    strict: true
  },
  // ソースファイルのディレクトリを指定
  srcDir: './src/',

  imports: {
    // 自動インポートを不可: https://nuxt.com/docs/guide/concepts/auto-imports#disable-auto-imports
    autoImport: false
  },

  vite: {
    build: {
      target: ['es2020'],
    },
    resolve: {
      alias: {
        // '~': fileURLToPath(new URL('./', import.meta.url)),
        // '@': fileURLToPath(new URL('./', import.meta.url)),
        // '#import': fileURLToPath(new URL('./', import.meta.url))
        // Add any other aliases you use in your code base
        // https://nuxt.com/docs/api/configuration/nuxt-config/#alias
      }
    }
  }
})
