const { defineConfig } = require("cypress")
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.demoblaze.com/',
    env: {
      username: 'junior.QA.user',
      password: 'Pa$sw0rd12!',
      name: 'QA Test User',
      cc: '0925 3574 1521 7029'
    },
    viewportWidth: 1280,
    viewportHeight: 720,
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    }
  }
})
