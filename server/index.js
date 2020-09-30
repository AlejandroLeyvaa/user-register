const express = require('express');

const { config } = require('./config/index');

const app = express();

app.use(express.json());

app.listen(config.port, () => {
  console.log(`Listen on http://localhost:${config.port}`);
});
