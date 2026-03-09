const express = require('express');
const router = express.Router();

// View all projects
router.get('/projects', (req, res) => {
  res.send('View all projects route');
});

// Search projects
router.get('/projects/search', (req, res) => {
  res.send('Search projects route');
});

// View project details
router.get('/projects/:id', (req, res) => {
  res.send('View project details route');
});

// View creator profile
router.get('/creators/:id', (req, res) => {
  res.send('View creator profile route');
});

// View project updates
router.get('/projects/:id/updates', (req, res) => {
  res.send('View project updates route');
});

// Register account
router.post('/register', (req, res) => {
  res.send('Visitor registration route');
});

// Login
router.post('/login', (req, res) => {
  res.send('Visitor login route');
});

// Follow Projects
router.post('/projects/:id/follow', (req, res) => {
  res.send('Follow project route');
});

module.exports = router;
