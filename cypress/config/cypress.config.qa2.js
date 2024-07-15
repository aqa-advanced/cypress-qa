const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://guest:welcome2qauto@qauto2.forstudy.space"
  },
  env: {
    login: "katerynaTest_2024-07-14T10-42_5515@gmail.com",
    password: "145711Kateryna"
  },
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true
  }
});
