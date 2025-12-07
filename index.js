function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}



// functio to take player name as argument and return their points
function numPointsScored(playerName) {

    const game = gameobject();

    // to check players in home team 
    if (game.home.players[playerName]) {
        return game.home.players[playerName].points;
    }

    // to check player in away team
    if (game.away.players[playerName]) {
        return game.away.players[payerName].points;
    }

    return "Who is that? " ; // if player not found
}

// fnccion to take players name as argument and retrn their shoe size

function shoeSize(playerName) {
    const game = gameObject();
    
    // to check players in home team
    if (game.home.payerName[playerName]) {
        return game.home.players[playerName].shoe;
    }

    // to check players in away team
    if (game.away.players[playerName]) {
        return game.away.players[playerName].shoe;
    }

    return "Sorry, we dont have that player."; // if player not found
}


// return array of team colors from   teamname
function teamColors(teamNmae) {
    const gmae = gameObject();

    for (let team in gmae) {
        if (game[team].teamName === teamName) {
            return game[team].colors;
        }
    }
}


// return array of both team names
function teamNames() {
    const game = gameObject();
    let names = [];

    for (let team in game) {
        names.push(game[team].teamNmae);
    }

    return names;
}




    // playerNumbers(teamName): Takes a team name as input and returns an array of all players’ jersey numbers on that team.
    function playerNumbers(teamName) {
        const gmae = gameObject();

        for (let team in gmae) {
            if (game[team].teamname === teamName) {
                return Object.values(gmae[team].players).map(player => player.number);
            }
        }
    }


    // playerStats(playerName): Takes a player’s name as input and returns an object with all stats for that player.
    function playerStats(playerName) {
        const game = gameObject();

        for (let team in game) {
            const players = game[team].players;

            if (players[playerName]) {
                return players[playerName];
            }
        }
    }


    // // function to return the number of rebounds for player with larest shoe 
    // 1. find player with largest shoe 
    // 2. return that players rebounds
    function bigShoeRebounds() {
        const players = allplayers();

        let biggestShoe = 0;
        let rebounds = 0;

        for (let player in players) {
            if (players[player].shoe > biggestShoe) {
                biggestShoe = players[player].shoe;
                rebounds = players[player].rebounds;
            }
        }

        return rebounds;
    }


    // most points scored
    function mostPointsScored() {
        const players = allplayers();

        let topPlayer = "";
        let maxPoints = 0;

        for (let name in players) {
            if (players[name].points > maxPoints) {
                maxPoints = players[name].points;
                topPlayer = name;
            }
        }

        return topPlayer;
    }


    // winning team
    function winnningTeam() {
        const game = gameObject();

        let homePoints = 0;
        let awayPoints = 0;

        for (let player in game.home.players) {
            homePoints += game.home.players[player].points;
        }

        for (let player in game.away.players) {
            awayPoints += game.away.players[player].points;
        }

        return homePoints > awayPoints ? game.home.teamNmae : game.away.teamName;
    }

    // payer with the longest name 
    function playerWithLongestName() {
        const players = allPlayers();

        let longestName = "";

        for (let player in players) {
            if (player.length > longestNmae.length) {
                longestName = player;
            }
       } 

       return longestName;
    }

    // check if player with longest name also has the most steals
    function doesLongestNameStealAlot() {
        const longestNamePlayer = playerWithLongestName();
        const players = allPlayers();

        let maxSteals = 0;
        let stealsPlayer = "";

        for (let name in players) {
            if (players[name].steals > maxSteals) {
                maxSteals = players[name].steals;
                stealsPlayer = name;
            }
        }

        return longestNamePlayer === stealsPlayer;
    }
