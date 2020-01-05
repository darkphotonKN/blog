const express = require('express');

const serverAuth = require('../utils/serverAuth');
const authenticate = serverAuth.authenticate;
const userAuthenticated = serverAuth.userAuthenticated;

const router = express.Router();
const dev = process.env.NODE_ENV !== 'production';

const Post = require('../models/Post');

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
  // if user is authenticated (checks signed cookies from request)
  try {
    if (userAuthenticated(req)) {
      // send response back to user
      res.json(userData);
    } else throw err;
  } catch (err) {
    res.status(403).json('Forbidden access to profile');
  }
});

/**
 * Fetches list of all posts
 */
router.get('/posts', async (req, res) => {
  try {
    const posts = await Post.find();
    // if (userAuthenticated(req)) {
    // return to user the list of posts
    res.json(posts);
    // } else throw err;
  } catch (err) {
    res.status(403).json('Forbidden access to list of posts.');
  }
});

/**
 * Fetches a single blog post
 */
router.get('posts/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    res.json(post);
  } catch (err) {
    res.status(403).json(err);
  }
});

/**
 * Adding a new blog post
 */
router.post('/post', async (req, res) => {
  // generating new post obj to add to DB
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
    date: new Date()
  });

  // using async await
  let postSaved;

  try {
    postSaved = await post.save();
    res.status(200).json(postSaved);
  } catch (err) {
    res.status(403).json(err);
  }

  // using promise
  // .then((data) => {
  //   res.status(200).json(data);
  // })
  // .catch((err) => res.status(403).send(err));
});

module.exports = router;
