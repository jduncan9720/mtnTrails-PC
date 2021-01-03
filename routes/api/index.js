const router = require('express').Router();
const artistRoutes = require('./artist-routes');
const paintingRoutes = require('./painting-routes');
const sculptureRoutes = require('./sculpture-routes');
const otherRoutes = require('./other-routes');

router.use('/artists', artistRoutes);
router.use('/paintings', paintingRoutes);
router.use('/sculptures', sculptureRoutes);
router.use('/others', otherRoutes);

module.exports = router;