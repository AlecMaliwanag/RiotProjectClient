class App extends React.Component {

  //=================================**INIT FUNCTIONALITY**==================================
  constructor(props) {
    super(props);

    this.state = {
      currentGame: window.exampleGameData[0],
      gameList: window.exampleGameData
    }
  }

  componentDidMount() {
    var options = {
      max: 10,
      key: window.RIOT_API_KEY
    };
    this.props.searchRiot(options, (data) => { 
      this.setState({
        currentGame: data[0],
        gameList: data
      });
    });
  }

  //=================================**GAME LIST FUNCTIONALITY**==================================
  
  onGameListClick(game) {
    // $('html, body').animate({ scrollTop: 0 }, 'fast');
    this.setState({
      currentGame: game
    });
  }


  //=================================**SEARCH BAR FUNCTIONALITY**==================================

  onSearchButtonClick(event) {
    var options = {
      query: event.target.closest('div').getElementsByTagName('input')[0].value,
      max: 10,
      key: window.RIOT_API_KEY
    };
    this.props.searchRiot(options, (data) => { this.set(data); }); 
  }

  onSearchButtonEnter(event) {
    if (event.keyCode === 13) {
      var options = {
        query: event.target.closest('div').getElementsByTagName('input')[0].value,
        max: 10,
        key: window.RIOT_API_KEY
      };
      this.props.searchRiot(options, (data) => { this.set(data); }); 
    }
  }

  //=================================**RENDER FUNCTIONALITY**==================================
  render() {
    return (
      <div>
        <Navbar onClickFunc={this.onSearchButtonClick.bind(this)} onEnterFunc={this.onSearchButtonEnter.bind(this)}/>
          <div className="row container-fluid">
            <div className="col-md-6">
              <FeatureGame game={this.state.currentGame}/>
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
