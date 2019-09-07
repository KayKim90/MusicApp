const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongController = require('./controllers/SongController')
const BookmarksController = require('./controllers/BookmarksController')

// middleware function for verification
module.exports = (app) => {
  app.post('/register', 
    AuthenticationControllerPolicy.register,
    AuthenticationController.register )

  app.post('/login', 
    AuthenticationController.login )

  app.get('/songs', 
    SongController.index )

  app.post('/songs', 
    SongController.post )

  app.get('/songs/:songId', 
    SongController.show )

  app.put('/songs/:songId', 
    SongController.put )

  app.get('/bookmarks', 
    BookmarksController.index )

  app.post('/bookmarks', 
    BookmarksController.post )

  app.delete('/bookmarks/:bookmarkId', 
    BookmarksController.delete )
}