# SHA Hash Generator Web Application

A modern web application for generating SHA-256 and SHA-512 cryptographic hash digests encoded using base64 using browser-native Web Crypto API.

## Features

- Generate base64-encoded SHA-256 and SHA-512 cryptographic hash digests
- Dark/Light mode toggle
- Copy to clipboard functionality
- Responsive design for all devices
- Zero dependencies for hash generation (uses Web Crypto API)

## Getting Started

### Prerequisites

- Node.js v18 or later
- npm, yarn, or pnpm

### Installation

```bash
# Navigate to the web-app directory
cd packages/web-app

# Install dependencies
yarn install
# or
npm install
```

### Development

Start the development server with hot-reload:

```bash
yarn dev
# or
npm run dev
# or
quasar dev
```

### Building for Production

Build the application for production:

```bash
yarn build
# or
npm run build
# or
quasar build
```

The built files will be in the `dist/spa` directory.

## Project Structure

```
packages/web-app/
├── public/         # Static assets that will be copied to the build directory
├── src/
│   ├── boot/       # Quasar boot files
│   ├── composables/# Vue composable functions
│   ├── css/        # Global CSS/SCSS files
│   ├── layouts/    # Layout components
│   ├── pages/      # Page components
│   ├── router/     # Vue Router configuration
│   └── utils/      # Utility functions
└── quasar.config.ts# Quasar framework configuration
```

## Technologies Used

- [Vue.js 3](https://vuejs.org/) - Progressive JavaScript framework
- [Quasar Framework](https://quasar.dev/) - Vue.js based framework
- [Web Crypto API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API) - For cryptographic operations
- Base64 Encoding - For representing binary hash digests in text format
