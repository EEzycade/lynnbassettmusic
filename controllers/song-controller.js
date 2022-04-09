const { Song } = require('../models');

const songController = {
    getAllSongs(req, res) {
        Song.find({})
            .then(dbSongData => res.json(dbSongData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    }
}

module.exports = songController;