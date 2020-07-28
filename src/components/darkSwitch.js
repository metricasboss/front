import React from "react"
import ThemeContext from "../context/ThemeContext"

const DarkSwitch = () => (
  <ThemeContext.Consumer>
    {theme => (
      <div className="light has-text-white has-background-black">
      <div className="media is-vcentered">
            <div className="media-left">
                <span className="luz-apagar"></span>
            </div>
            <div className="media-content">
              <span className="apagar" onClick={theme.toggleDark}>
                {theme.dark ? <span>Modo Iluminado ☀</span> : <span>Modo escuro ☾</span>}
              </span>
            </div>                        
        </div>
    </div>
      
      
    )}
  </ThemeContext.Consumer>
)

export default DarkSwitch