class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentGame: window.exampleGameData[0],
      gameList: window.exampleGameData
    }
  }

  //=================================**RENDER FUNCTIONALITY**==================================
  
  


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
              <GameList onClick={this.onGameListClick.bind(this)} videos={this.state.gameList}/>
            </div>
          </div>
      </div>
    );
}