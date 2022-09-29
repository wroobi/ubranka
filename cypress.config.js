const { defineConfig } = require("cypress");

const ENV = process.env.NODE_ENV || "development";

const PORT = ENV === "development" ? "3000" : "8888";

module.exports = defineConfig({
  e2e: {
    baseUrl: `http://localhost:${PORT}/`,
    supportFile: false,
  },
});
