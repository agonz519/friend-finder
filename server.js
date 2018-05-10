// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Set up Express
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('app/public'));

// Data

let friendsArray = [
  {
    "name":"Ahmed",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":
      [
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ]
  }
];

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/app/public/home.html'));
});

app.get('/survey', (req, res) => {
  res.sendFile(path.join(__dirname, '/app/public/survey.html'));
});

// Displays all friends
app.get("/api/friends", function(req, res) {
  return res.json(friendsArray);
});


app.post('/api/newfriend', (req, res) => {
  let newFriend = req.body;

  console.log(newFriend);
  friendsArray.push(newFriend);

  res.json(newFriend);

});

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});