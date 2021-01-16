import React, {Component} from "react"
import Context from "./Context"

class app extends React.Component {
    state = {
        emptyErray: [
            {
                Movie: "Matrix",
                Year: ""
            }
        ],
        newItem:"",
        Name:"",
        

    
    }
    submit = (event) => {
event.preventDefault()
this.setState({
    emptyErray: this.state.emptyErray.concat(
this.state.Name,this.state.newItem
    )

})
    }
}