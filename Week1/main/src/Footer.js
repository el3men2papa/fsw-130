import React, {Component} from "react"
import {ThemeContextConsumer} from "./themeContext"

function Footer(props) {
    return (
        <ThemeContextConsumer>
            {context => (
                <footer className={`${context.theme}-theme`}>
                    <h2>{context.theme === "light" ? "Light" : "Dark"} Theme</h2>
                </footer>
            )}
        </ThemeContextConsumer>
    )    
}
export default Footer
