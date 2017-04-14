const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Express boilerplate');
});

module.exports = router;
