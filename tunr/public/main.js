


$('#searchForm').on('submit', function(event) {
  event.preventDefault();

  // Get the artist enetered by the user
  var artist = $('input[name="artist"]').val();

  // Make request to Spotify API
  $.ajax({
    type: 'GET',
    url: 'https://api.spotify.com/v1/search?q=' + artist + '&type=artist&market=US',
    success: function (data) {
      console.log("artist = " + artist)
      console.log(data)
      console.log("WE HAVE THE DATA OBJECT FROM SPOTIFY!");
    }
  })
})

// POST the data from Spotify to MongoDB
$.ajax({
  type: 'POST',
  url: '/',
  success: function (data) {


  }
})
