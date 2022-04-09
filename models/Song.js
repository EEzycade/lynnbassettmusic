const { Schema, model } = require('mongoose');

const SongSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        voicing: {
            type: String,
            required: true
        },
        composer: {
            type: String,
            required: true
        },
        pdf: {
            type: String,
            required: true
        }
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
)

const Song = model('Song', SongSchema);

module.exports = Song;