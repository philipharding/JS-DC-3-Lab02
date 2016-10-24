
# PLAN (attempt #2 from scratch after losing access to files)

0. Planning, mapping, research.
  - Map out app and user flow to understand the dependencies at structure
  - Get to know the Spotify API, paths, and options


1. Let's get setup to work.
  - npm init in terminal

2. npm install --save all the things
  - express
  - express-handlebars
  - mongoose
  - body-parser
  - Also, had to re-install mongooseDB, brew, node, npm :^O

3. Build out the MVC directory structure
  - mkdir models
  - mkdir views
  - mkdir views/layouts
  - mkdir public

4. Touch index.js file for back-end
  - Build express server and listen on port 3000
  - Create GET route for "/" to load main handlebars template
  - Define handlebars as the template engine

5. Build main.handlebars template
  - leverage Bootstrap css
  - setup form to allow users to enter an artist/band name

6. Build Schema for mongoose to manage database entries
  - touch models/artists.js
  - create schema for name, image, id, genres

6. Touch public/main.js for front-end
  - Create listener for form button submit to connect/pull data object from Spotify
  - Use AJAX GET to connect to Spotify API and access the data object
  - Use AJAX to POST the data to back-end js route

7. Create POST route to assign and save data to mongodb

8. Create new "artist" view (handlebars) to 
