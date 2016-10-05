var GameListEntry = (props) => {
  return (
  <div className="game-list-entry">
    <div className="media-left media-middle">
      <img className="media-object" src={attributes.thumbnails.default.url} alt={attributes.description} />
    </div>
    <div className="media-body">
      <div className="game-list-entry-title" onClick={trigger ? trigger.bind(this, null, props.video) : null}>{attributes.title}</div>
      <div className="game-list-entry-detail">{attributes.description}</div>
    </div>
  </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoListEntry = VideoListEntry;