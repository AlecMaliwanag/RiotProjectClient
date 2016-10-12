var dataCleaner = function(results) {
  var data = [];
  for (var game in results) {
    var champion = window.champData.data[results[game].championId].name;
    var stats = results[game].stats;
    var utcSeconds = results[game].createDate;
    var d = new Date(utcSeconds);
    // var date = d.setUTCSeconds(utcSeconds);
    data.push({
      Champion: champion,
      'Game Mode': results[game].gameMode,
      'Win': stats.win,
      'Total Damage Dealt To Champions': stats.totalDamageDealtToChampions || 0,
      'Total Damage Taken': stats.totalDamageTaken || 0,
      'Wards Placed': stats.wardPlaced || 0,
      'Wards Killed': stats.wardKilled || 0,
      'Player Role': stats.playerRole,
      'Assists': stats.assists || 0,
      'Deaths': stats.numDeaths || 0,
      'Largest Multi Kill': stats.largestMultiKill || 0,
      'Kills': stats.championsKilled || 0,
      'Largest Killing Spree': stats.largestKillingSpree || 0,
      'Time Played': (stats.timePlayed / 60).toFixed(2),
      'IP Earned': results[game].ipEarned,
      'date': d.toLocaleString()
    });
  }
  return data;
};

var getGames = (options, callback) => {
  var url = 'https://na.api.pvp.net/api/lol/na/v1.3/game/by-summoner/';
  var summonerID = options.id;

  $.ajax({
    url: url + summonerID + '/recent' + options.key,
    type: 'GET',
    dataType: 'json',
    success: function(data) {
      var trimmedData = dataCleaner(data.games);
      callback(trimmedData);
    },
    error: function(error) {
      console.log('error: ' + error);
    }
  });
};

var searchRiot = (options, callback) => {
  var url = 'https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/';
  $.ajax({
    url: url + options.summoner + options.key,
    type: 'GET',
    dataType: 'json',
    success: function(data) {
      options['id'] = data[(options.summoner).toLowerCase()]['id'];
      getGames(options, callback);
    },
    error: function(error) {
      console.log('error: ' + error);
    }
  });
};

window.searchRiot = searchRiot;
