const {Song} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      let songs = null
      const search = req.query.search
      const {Op} = require("sequelize")
      if (search) {
        songs = await Song.findAll({
          where: {
            [Op.or]: [
              'title', 'artist', 'genre', 'album'
            ].map(key => ({
              [key]: {
                [Op.like]: `%${search}%`
              }
            }))
          }
        })
      } else {
        songs = await Song.findAll({
          limit: 10
        })
      }
      // const songs = await Song.findAll({
      //   limit: 10
      // })
      res.send(songs)
    } catch(err) {
      console.log(err)
      res.status(500).send({
        error: 'Error has occured trying to fetch the songs'
      })
    }
  },
  async post (req, res) {
    try {
      const song = await Song.create(req.body)
      res.send(song)

    } catch(err) {
      console.log(err)
      res.status(500).send({
        error: 'Error has occured trying to create the song'
      })
    }
  },
  async show (req, res) {
    try {
      const song = await Song.findByPk(req.params.songId)
      res.send(song)
    } catch(err) {
      console.log(err)
      res.status(500).send({
        error: 'Error has occured trying to fetch the songs'
      })
    }
  },
  async put (req, res) {
    try {
      const song = await Song.update(req.body, {
        where: {
          id: req.params.songId
        }
      })
      res.send(req.body)

    } catch(err) {
      console.log(err)
      res.status(500).send({
        error: 'Error has occured trying to update the song'
      })
    }
  },
}