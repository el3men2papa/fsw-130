import React from "react"
import {ThemeContextConsumer} from "./themeContext"
import App from "App"

function Button(props) {
    return (
        <ThemeContextConsumer>
            {context => (
                <button onClick={context.toggleTheme} className={`${context.theme}-theme`}>Different Theme</button>
            )}
        </ThemeContextConsumer>
    )    
}


export default Button


class app extends React.Component {
    <button onClick={context.this.s} className={`${context.theme}-theme`}>Different Theme</button>
            )}