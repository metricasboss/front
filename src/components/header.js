import React from "react"

class Header extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {showHamburguer: false};
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(e){
    this.setState(prevState => ({
      showHamburguer: !prevState.showHamburguer
    }));
  }
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img alt="" src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
          </a>

          <a role="button" className={`navbar-burger burger ${this.state.showHamburguer
          ? "is-active"
          : ""}`} 
          aria-label="menu" 
          aria-expanded="false" 
          data-target="navbarBasicExample" 
          onClick={this.handleClick}>
            
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className={`navbar-menu ${this.state.showHamburguer
          ? "is-active"
          : ""}`}>
          <div className="navbar-start">
            <a className="navbar-item">
              Home
            </a>

            <a className="navbar-item">
              Documentation
            </a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a href="#" className="navbar-link">
                More
              </a>

              <div className="navbar-dropdown">
                <a href="#" className="navbar-item">
                  About
                </a>
                <a href="#" className="navbar-item">
                  Jobs
                </a>
                <a chref="#" lass="navbar-item">
                  Contact
                </a>
                <hr className="navbar-divider" />
                <a href="#" className="navbar-item">
                  Report an issue
                </a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a href="#" className="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a href="#" className="button is-light">
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
