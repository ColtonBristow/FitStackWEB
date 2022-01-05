/** @type {import('next').NextConfig} */
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
