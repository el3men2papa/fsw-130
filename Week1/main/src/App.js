/* Always import react */
import React, {Component} from "react"


/* I`m importing all the activities form the componets */
import Header from "./Header"
import Button from "./Button"
 import Footer from "./Footer" 

/*  The function is calling all the changes from all the components */
function App() {
    return (
        <div>
            <Header />
            <Button />
         <Footer />
        </div>
    )
}

/* Here is how to export the components to be use in others components */
export default App;


class app extends React.Component {
    state = {
        emptyErray: [
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

onclick = submit()



