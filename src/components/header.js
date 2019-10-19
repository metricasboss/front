import { Link } from "gatsby"
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
            
          <Link 
            to="/"
            className="navbar-item"
          >
            Home
          </Link>

          <Link 
            to="/"
            className="navbar-item"
          >
            Documentation
          </Link>

            <div className="navbar-item has-dropdown is-hoverable">
            <Link 
            to="/"
            className="navbar-link"
          >
            More
          </Link>
              <div className="navbar-dropdown">
                <Link 
                  to="/"
                  className="navbar-item"
                >
                  Jobs
                </Link>

                <Link 
                  to="/"
                  className="navbar-item"
                >
                  Contact
                </Link>
                <hr className="navbar-divider" />
                <Link 
                  to="/"
                  className="navbar-item"
                >
                  Report an issue
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
