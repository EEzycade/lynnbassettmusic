const router = require('express').Router();

const {
    getAllSongs
} = require('../../controllers/song-controller');

router
    .route('/')
    .get(getAllSongs)

module.exports = router;