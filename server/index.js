const express = require('express');
const app = express();

const { config } = require('./config/index');

const authApi = require('./routes/auth');

// body parser
app.use(express.json());

// routes
authApi(app);

app.listen(config.port, () => {
  console.log(`Listen on http://localhost:${config.port}`);
});
