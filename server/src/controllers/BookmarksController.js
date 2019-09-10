// working ok const {Bookmark} = require('../models')
const {
  Bookmark,
  Song
} = require('../models')
const _ = require('lodash')

module.exports = {
  async index (req, res) {
    try {
      const {songid, userid}  = req.query
      console.log("================================>>> song id(url): "+ JSON.stringify(req.query))
      const where = {
        UserId: userid
      }
      if(songid) {
        where.SongId = songid
      }
      const bookmarks = await Bookmark.findAll({
          where: where,
          include: [
            {
              model: Song
            }
          ]
      })
        .map(bookmark => bookmark.toJSON())
        .map(bookmark => _.extend(
          {},
          bookmark.Song,
          bookmark
        ))
      res.send(bookmarks)
      // Working ok
      // const {songid, userid}  = req.query
      // console.log("================================>>> song id(url): "+ JSON.stringify(req.query))
      // const bookmark = await Bookmark.findOne({
      //     where: {
      //         SongId: songid,
      //         UserId: userid
      //     }
      // })
      // res.send(bookmark)
    } catch(err) {
      console.log(err)
      res.status(500).send({
        error: 'Error has occured trying to fetch the bookmark'
      })
    }
  },
  async post (req, res) {
    try {
      const {songid, userid}  = req.body
      // const userid  = req.body
      // const songid = req.params.songid
      console.log("================================>>> song id(url): "+ JSON.stringify(req.body))
      const bookmark = await Bookmark.findOne({
        where: {
          SongId: songid,
          UserId: userid
        }
      })
      if(bookmark) {
        return res.status(400).send({
          error: 'you already have this as a bookmark'
        })
      }
      const newBookmark = await Bookmark.create({
        SongId: songid,
        UserId: userid
      })
      res.send(newBookmark)
    } catch(err) {
      console.log(err)
      res.status(500).send({
        error: 'Error has occured trying to post the bookmark'
      })
    }
  },
  async delete (req, res) {
    try {
      // const userid = req.user.id
      const {bookmarkId} = req.params
      console.log("Delete bookmarkid--------------->"+bookmarkId)
      console.log("Delete========================json.stringfy: "+ JSON.stringify(req.body))
      // const bookmark = await Bookmark.findById(bookmarkId)
      const bookmark = await Bookmark.findOne({
        where: {
          id: bookmarkId
        }
      })
      await bookmark.destroy()
      res.send(bookmark)
    } catch(err) {
      console.log(err)
      res.status(500).send({
        error: 'Error has occured trying to delete the bookmark'
      })
    }
  },
}