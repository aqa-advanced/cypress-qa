const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://guest:welcome2qauto@qauto.forstudy.space"
  },
  env: {
    login: "katerynaTest_2024-07-14T10-49_5510@gmail.com",
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
