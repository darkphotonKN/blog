const next = require('next');
const express = require('express');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3069;

const app = next({ dev });

const handler = app.getRequestHandler();

// load our env data

require('dotenv').config();

// api routes
const api = require('./routes/api');

// User Info
const userData = {
  name: 'Kin Kuan',
  email: 'kin@something.com',
  type: process.env.AUTH_USER_TYPE
};

// mongoose config options
const mongooseOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
};
// connecting to Database
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log('Connected to DB.'))
  .catch((err) => console.log('Error caught while connecting to DB:', err));

mongoose.connection.on('error', (err) => {
  console.log(`DB connection error: ${err.message}`);
});

app.prepare().then(() => {
  // start express application
  const server = express();

  // tell express to parse json data
  server.use(express.json());
  // parse and use cookies and signed cookies
  server.use(cookieParser(process.env.COOKIE_SECRET));

  /**
   * API ROUTES
   */
  server.use('/api', api);

  // handle get request to all routes
  server.get('*', (req, res) => {
    // at the end let nextjs' server handle the rest of the requests

    return handler(req, res);
  });

  // listen on port to run server
  server.listen(port, (err) => {
    if (err) throw err;

    console.log(`Server listening on port ${port}`);
  });
});
