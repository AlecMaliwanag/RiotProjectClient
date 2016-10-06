var dataCleaner = function(results) {
  var data = [];
  for (var game in results) {
    var champion = champData.data[results[game].championId].name;
    var stats = results[game].stats;
    data.push({
      champion: champion,
      totalDamageDealtToChampions: stats.totalDamageDealtToChampions || 0,
      totalDamageTaken: stats.totalDamageTaken || 0,
      wardPlaced: stats.wardPlaced || 0,
      wardKilled: stats.wardKilled || 0,
      playerRole: stats.playerRole,
      assists: stats.assists || 0,
      deaths: stats.numDeaths || 0,
      largestMultiKill: stats.largestMultiKill || 0,
      kills: stats.championsKilled || 0,
      largestKillingSpree: stats.largestKillingSpree || 0,
      win: stats.win,
      timePlayed: (stats.timePlayed/60).toFixed(2),
      ipEarned: results[game].ipEarned
    });
  }
  return data;
};

var searchRiot = (options, callback) => {
  var url = "https://na.api.pvp.net/api/lol/na/v1.3/game/by-summoner/";
  var summonerID = 46623503;

  $.ajax({
    url: this.url + this.summonerID + "/recent?" + this.secret,
    type: "GET",
    dataType: 'json',
    success: function(data) {
      var trimmedData = dataCleaner(data.games);
      callback(trimmedData);
      console.log('hi')
    },
    error: function(error) {
      console.log("error: " + error);
    }
  });
};

window.searchRiot = searchRiot;
