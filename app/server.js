const next = require('next');
const express = require('express');
const cookieParser = require('cookie-parser');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3069;

const app = next({ dev });

const handler = app.getRequestHandler();

const authenticate = require('./utils/serverAuth');

// string that dictates if user is authenticated
const AUTH_USER_TYPE = 'authenticated';
// cookie secret
const COOKIE_SECRET = '#12qsdISADJ12@I!)_I!@)';
// cookie extra options
const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: !dev,
  signed: true // allows verifying source of the cookie and not allow modified cookies
};

// User Info
const userData = {
  name: 'Kin Kuan',
  email: 'kin@something.com',
  type: AUTH_USER_TYPE
};

app.prepare().then(() => {
  // start express application
  const server = express();

  // tell express to parse json data
  server.use(express.json());
  // parse and use cookies and signed cookies
  server.use(cookieParser(COOKIE_SECRET));

  /**
   * Handling User Login
   */

  server.post('/api/login', async (req, res) => {
    console.log('REQ BODY:', req.body);
    const { username, password } = req.body;

    const user = await authenticate(username, password);

    if (!user) {
      // return to prevent rest of the function from running
      return res.status(403).send('Credentials wrong, error logging in');
    }

    // creating and sending back signed cookies to the client
    res.cookie('token', userData, COOKIE_OPTIONS);

    // return user info
    res.json(userData);
  });

  /**
   * Getting user profile
   */

  server.get('/api/profile', async (req, res) => {
    // getting signed cookies, with default of {} if there is no signed cookies
    const { signedCookies = {} } = req;
    const { token } = signedCookies;

    // check if token exists
    if (token && token.email) {
      // send response back to user
      res.json(userData);
    }
  });

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
