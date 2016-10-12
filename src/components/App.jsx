class App extends React.Component {

  //=================================**INIT FUNCTIONALITY**==================================
  constructor(props) {
    super(props);

    this.state = {
      currentGame: {},
      gameList: []
    };
  }

  componentDidMount() {
    // var options = {
    //   summoner: 'LeChunky',
    //   key: window.RIOT_API_KEY
    // };
    // this.props.searchRiot(options, (data) => { 
    //   this.setState({
    //     currentGame: data[0],
    //     gameList: data
    //   });
    // });
  }

  //=================================**GAME LIST FUNCTIONALITY**==================================
  
  onGameListClick(game) {
    $('html, body').animate({ scrollTop: 0 }, 'fast');
    this.setState({
      currentGame: game
    });
  }


  //=================================**SUMMONER SEARCH BAR FUNCTIONALITY**==================================

  onSearchButtonClick(event) {
    var options = {
      summoner: event.target.closest('div').getElementsByTagName('input')[0].value,
      key: window.RIOT_API_KEY
    };
    this.props.searchRiot(options, (data) => { this.setState({ currentGame: data[0], gameList: data }); });
    event.target.closest('div').getElementsByTagName('input')[0].value = '';
  }

  onSearchButtonEnter(event) {
    if (event.keyCode === 13) {
      var options = {
        summoner: event.target.closest('div').getElementsByTagName('input')[0].value,
        key: window.RIOT_API_KEY
      };
      this.props.searchRiot(options, (data) => { this.setState({ currentGame: data[0], gameList: data }); }); 
      event.target.closest('div').getElementsByTagName('input')[0].value = '';
    }
  }

  displayStatsFunc(game) {
    var display = [];
    for (var stat in game) {
      if (stat === 'date') {
        break;
      }
      display.push(stat + ': ' + game[stat]);
    }
    return display;
  }

  //=================================**RENDER FUNCTIONALITY**==================================
  render() {
    return (
      <div>
        <Navbar onClickFunc={this.onSearchButtonClick.bind(this)} onEnterFunc={this.onSearchButtonEnter.bind(this)}/>
          <div className="row container-fluid">
            <div className="col-md-6">
              <FeatureGame game={this.state.currentGame} statistics={this.displayStatsFunc(this.state.currentGame)}/>
            </div>
            <div className="col-md-6">
              <GameList onClickFunc={this.onGameListClick.bind(this)} games={this.state.gameList}/>
            </div>
          </div>
      </div>
    );
  }
}

window.App = App;
