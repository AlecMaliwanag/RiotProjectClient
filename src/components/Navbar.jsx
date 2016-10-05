var Navbar = (props) => (
  <nav className="navbar ">
    <div className="col-md-6 col-md-offset-3">
      <Searchbar onClickFunc={props.onClickFunc} onEnterFunc={props.onEnterFunc}/>
    </div>
  </nav>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Navbar = Navbar;
