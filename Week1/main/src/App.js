/* Always import react */
import React from "react"

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
