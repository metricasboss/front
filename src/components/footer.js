import { Link } from "gatsby"
import React from "react"
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaSpotify } from 'react-icons/fa';

class Footer extends React.Component {
  
  render() {
    return (
      <footer className="footer">
      
        <div className="container">     
          <div className="columns is-mobile">
            <div className="column is-four-fifths">

            <span className="icon is-large">              
                <Link to="#">
                  <FaLinkedin size="2em" color="black" />
                </Link>
            </span>

            <span className="icon is-large">              
                <Link to="#">
                  <FaFacebook size="2em" color="black" />
                </Link>
            </span>

            <span className="icon is-large">              
                <Link to="#">
                  <FaYoutube size="2em" color="black" />
                </Link>
            </span>

            <span className="icon is-large">              
                <Link to="#">
                  <FaSpotify size="2em" color="black" />
                </Link>
            </span>             
              
            </div>
            <div className="column">
                <Link to="#back-to-top">
                  <i className="fas fa-home"></i> 
                  <p className="has-text-right">Voltar ao topo</p>
                </Link>
            </div>            
          </div>  

             
          <div className="columns is-mobile">
            <div className="column is-full">
              <p className="has-text-right">
                <Link 
                to="/"
                className="has-text-dark"
                >
                Métricas Boss:
                </Link> 
                {` © `} {new Date().getFullYear()} - Versão 4.0
                <p>Web Analytics é mais que um gráfico bonitinho!</p>
              </p>
            </div>
          </div>
          

          <nav className="navbar" role="navigation">
            <div className="container">
              <div class="navbar-menu is-active has-text-centered">
                <div className="navbar-end">
                  <Link 
                    to="/"
                    className="navbar-item"
                  >
                    F.A.Q
                  </Link>
                  <Link 
                    to="/"
                    className="navbar-item"
                  >
                    O que fazemos
                  </Link>
                  <Link 
                    to="/"
                    className="navbar-item"
                  >
                    Podcast
                  </Link>
                  <Link 
                    to="/"
                    className="navbar-item"
                  >
                   Quem Somos
                  </Link>
                  <Link 
                    to="/"
                    className="navbar-item"
                  >
                    Cases
                  </Link>
                  <Link 
                    to="/"
                    className="navbar-item"
                  >
                    Serviços
                  </Link>
                  <Link 
                    to="/"
                    className="navbar-item"
                  >
                    Blog
                  </Link>
                  <Link 
                    to="/"
                    className="navbar-item"
                  >
                    F.A.Q
                  </Link>                
                </div>
              </div>
            </div>
          </nav>
        </div>  
      </footer>
    )
  }
}

export default Footer