const { defineConfig } = require("cypress");

module.exports = defineConfig({
  fixturesFolder: false,
  e2e: {
    baseUrl: "http://localhost:3001",
    supportFile: false,
  },
});
