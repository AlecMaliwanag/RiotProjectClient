var GameListEntry = (props) => (
  <div className="game-list-entry">
    <div className="media-left media-middle">
    </div>
    <div className="media-body">
      <div onClick={props.onClickFunc.bind(null, props.game)} className="game-list-entry-title">some game title</div>
      <div className="game-list-entry-detail">game description</div>
    </div>
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
GameListEntry.propTypes = {
  game: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.GameListEntry = GameListEntry;