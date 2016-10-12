var GameList = (props) => {
  return (
    <div className="game-list media">
    {
      props.games.map((game, index) => <GameListEntry onClickFunc={props.onClickFunc} game={game} index={index + 1}/>)
    }
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
// GameList.propTypes = {
//   games: React.PropTypes.array.isRequired
// };

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.GameList = GameList;
