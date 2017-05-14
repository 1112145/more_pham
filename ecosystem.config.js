module.exports = {

  apps: [
    {
      name: 'petzone',
      script: 'server.js',
      watch: true,
      env: {
        APP_PORT: 5000
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
};
