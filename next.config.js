module.exports = {
  async rewrites() {
    return [
      {
        source: "/list",
        destination: "/api/list",
      },
    ];
  },
};
