const express = require('express');
const { home, location, episodes, characterById, locationById, episodeById } = require('../controllers/main.controller')
const router = express.Router();

router.get('/', home);
router.get('/location', location);
router.get('/episode', episodes);
router.get('/character/:id', characterById);
router.get('/location/:id', locationById);
router.get('/episode/:id', episodeById);


module.exports= router;