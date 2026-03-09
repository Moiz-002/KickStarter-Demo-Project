const express = require('express');
const router = express.Router();

// Creator registers account
router.post('/register', (req, res) => {
  res.send('Creator registration route');
});

// Creator logs in
router.post('/login', (req, res) => {
  res.send('Creator login route');
});

// Creator submits project idea
router.post('/projects', (req, res) => {
  res.send('Creator submit project route');
});

// Creator updates project idea
router.put('/projects/:id', (req, res) => {
  res.send('Creator update project route');
});

// Creator uploads images/videos for project
router.post('/projects/:id/media', (req, res) => {
  res.send('Creator upload media route');
});

// Creator views funding status
router.get('/projects/:id/funding', (req, res) => {
  res.send('Creator view funding status route');
});

// Creator updates project progress
router.post('/projects/:id/updates', (req, res) => {
  res.send('Creator update project progress route');
});

// Creator responds to comments
router.post('/projects/:id/comments', (req, res) => {
  res.send('Creator respond to comments route');
});

// Creator withdraws funds after success
router.post('/projects/:id/withdraw', (req, res) => {
  res.send('Creator withdraw funds route');
});

module.exports = router;
