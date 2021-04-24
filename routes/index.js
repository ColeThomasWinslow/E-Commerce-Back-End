const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>You reached the  ( / )  Endpoint</h1>")
});

module.exports = router;