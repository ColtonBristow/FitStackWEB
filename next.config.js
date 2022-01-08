/** @type {import('next').NextConfig} */
const app = 'NODE_ENV=production'
module.exports = {
  options: {
    dist: ".next"
  },
  reactStrictMode: true,
  async redirects(){
    return[
      {
        source: '/',
        destination: '/home',
        permanent: true,
      }
    ]
  }
}
