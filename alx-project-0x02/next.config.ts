// next.config.js
module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true, // or false for a temporary redirect
      },
    ];
  },
};
