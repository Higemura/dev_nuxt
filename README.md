# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.




// import path from 'path'

// module.exports = {
//   stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
//   addons: [
//     '@storybook/addon-links',
//     '@storybook/addon-essentials',
//     '@storybook/addon-a11y',
//   ],
//   core: {
//     builder: 'storybook-builder-vite',
//   },
//   async viteFinal(config) {
//     config.resolve.alias = {
//       ...config.resolve.alias,
//       '@': path.resolve(__dirname, '../src'),
//       '~': path.resolve(__dirname, '../src'),
//     }
//     return config
//   },
// }