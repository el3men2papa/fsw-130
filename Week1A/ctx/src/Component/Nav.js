import React, {Component} from "react"
import {ThemeContextConsumer} from "../themeContext"

function Nav() {
  
    return (
        <ThemeContextConsumer>
            {context => (
                <header className={`${context.color}-theme`}>
                    <h2>{context.color === "light" ? "Light" : "Dark"} Theme</h2>
                </header>
            )}
        </ThemeContextConsumer>
    )    
}

export default Nav