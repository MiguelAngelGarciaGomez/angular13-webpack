module.exports = {
  apps: [
    {
      name: "dex",
      script: "./dist/server.js",
      exec_mode: "cluster",
      instances: "1",
      env: {
        NODE_ENV: "production",
        PORT: 8080,
      },
      env_staging: {
        NODE_ENV: "production",
        PORT: 8080,
      },
      env_uat: {
        NODE_ENV: "production",
        PORT: 3030,
      },
    },
  ],
}
