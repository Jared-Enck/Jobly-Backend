"use strict";

const app = require("./app");
const { PORT } = require("./config");

app.listen(PORT || 3001, function () {
  console.log(`Started on http://localhost:${PORT}`);
});
