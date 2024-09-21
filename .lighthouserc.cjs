module.exports = {
  ci: {
    collect: {
      staticDistDir: './dist',
      numberOfRuns: process.env.CI ? 3 : 1,
      staticDirFileDiscoveryDepth: 1,
    },
  },
  assert: {
    preset: 'lighthouse:no-pwa',
  },
};
