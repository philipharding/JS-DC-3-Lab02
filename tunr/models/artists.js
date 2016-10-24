var mongoose = require('mongoose')
var Schema = mongoose.Schema

var artistSchema = new Schema({
  name: String,
  image: String,
  id: String,
  genres: Array
})

var Artist = mongoose.model( 'Artist', artistSchema )

module.exports = Artist
