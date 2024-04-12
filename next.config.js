/**
const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = withPWA({
  // next.js config
}) */
const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
})

let assetPrefix='',basePath = ''
if (process.env.GITHUB_ACTIONS || false) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}
const settings = {
  env: {},
  devIndicators: {autoPrerender: false,},
};
module.exports = process.env.NODE_ENV === 'development' ? settings : withPWA({
  output: "export", // must for GitHub page
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: { unoptimized: true },
})
