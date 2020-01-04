const express = require('express');

const authenticate = require('../utils/serverAuth');

const router = express.Router();
const dev = process.env.NODE_ENV !== 'production';

// cookie extra options
const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: !dev,
  signed: true // allows verifying source of the cookie and not allow modified cookies
};

const userData = {
  name: 'Kin Kuan',
  email: 'kin@something.com',
  type: process.env.AUTH_USER_TYPE
};

/**
 * Logging in User
 */
router.post('/login', async (req, res) => {
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

router.get('/profile', async (req, res) => {
  // getting signed cookies, with default of {} if there is no signed cookies
  const { signedCookies = {} } = req;
  const { token } = signedCookies;

  // check if token exists
  if (token && token.email) {
    // send response back to user
    res.json(userData);
  }
});

module.exports = router;
