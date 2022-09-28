const { route } = require('express/lib/router')
const express = require('express');
const { home, location, episodes, characterById, locationById, episodeById, login_page,login, private, logout } = require('../controllers/main.controller');
const { validarSession } = require('../middlewares/validarSession');
const { hasSession } = require('../middlewares/hasSession');
const router = express.Router();

router.get('/', home);
router.get('/location', location);
router.get('/episode', episodes);
router.get('/character/:id', characterById);
router.get('/location/:id', locationById);
router.get('/episode/:id', episodeById);

router.get('/login', hasSession, login_page)
router.post('/login', login)

router.get('/private', validarSession, private)

router.get('/logout', logout)

module.exports= router;