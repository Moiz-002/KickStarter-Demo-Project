const express = require('express');
const router = express.Router();

// Investor registers account
router.post('/register', (req, res) => {
  res.send('Investor registration route');
});

// Investor logs in
router.post('/login', (req, res) => {
  res.send('Investor login route');
});

// Browse projects
router.get('/projects', (req, res) => {
  res.send('Browse projects route');
});

// Invest in project
router.post('/projects/:id/invest', (req, res) => {
  res.send('Invest in project route');
});

// Select reward tier
router.post('/projects/:id/rewards', (req, res) => {
  res.send('Select reward tier route');
});

// View funded projects
router.get('/investments', (req, res) => {
  res.send('View funded projects route');
});

// Comment on project
router.post('/projects/:id/comments', (req, res) => {
  res.send('Comment on project route');
});

// Track investment status
router.get('/investments/:id', (req, res) => {
  res.send('Track investment status route');
});

// Request refund (if failed project)
router.post('/investments/:id/refund', (req, res) => {
  res.send('Request refund route');
});

module.exports = router;
