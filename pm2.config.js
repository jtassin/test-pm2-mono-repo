module.exports = {
  apps: [
    {
      name: 'backend-pim',
      script: './packages/backend-pim/src/index.js',
      watch: ['packages\/backend-pim'],
      // watch: true,
      instances: 2,
      env: {
        NODE_ENV: 'development',
      },
      source_map_support: true,
    },
    {
      name: 'backend-shops',
      script: './packages/backend-shops/src/index.js',
      watch: ['packages\/backend-shops'],
      // watch: true,
      instances: 2,
      env: {
        NODE_ENV: 'development',
      },
      source_map_support: true,
    },
    {
      name: 'proxy',
      watch: true,
      script: './packages/proxy/src/index.js',
      watch: ['packages\/proxy'],
      // watch: true,
      instances: 1,
      env: {
        NODE_ENV: 'development',
      },
      source_map_support: true,
    },
  ],
};
