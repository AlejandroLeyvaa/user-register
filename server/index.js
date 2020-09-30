const express = require('express');
const app = express();

const { config } = require('./config/index');

const authApi = require('./routes/auth');
const notFoundHandler = require('./utils/middleware/notFoundHandler');

const {
  logErrors,
  wrapErrors,
  errorHandler
} = require('./utils/middleware/errorHandlers.js');


// body parser
app.use(express.json());

// routes
authApi(app);

// Catch Error 404
app.use(notFoundHandler);

// Errors middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Listen on http://localhost:${config.port}`);
});
