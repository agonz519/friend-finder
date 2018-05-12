// Dependencies
let friendsArray = require('../data/friends.js');

// Routes
module.exports = function(app){
  app.get("/api/friends", function(req, res) {
    return res.json(friendsArray);
  });


  app.post('/api/newfriend', (req, res) => {
    let newFriend = req.body;
    let bestMatch = {
      name: "",
      photo: "",
      friendDifference: 1000000000
    };
    let newFriendScores = newFriend.scores;
    let totalDifference = 0;

    for (let x = 0; x < friendsArray.length; x++) {
      console.log(friendsArray[x].name);
      totalDifference = 0;

      for (let y = 0; y < friendsArray[x].scores[y]; y++) {
        totalDifference += Math.abs(parseInt(newFriendScores[y]) - parseInt(friendsArray[x].scores[y]));
        if (totalDifference <= bestMatch.friendDifference) {
          bestMatch.name = friendsArray[x].name;
          bestMatch.photo = friendsArray[x].photo;
          bestMatch.friendDifference = totalDifference;
        }
      }
    }

    friendsArray.push(newFriend);
    console.log(friendsArray);
    console.log('Best match is ' + bestMatch.name);
    res.json(bestMatch);

  });
};
