import './App.css';
import MainContext from "./MainContext"
import React from "react"
import Main from "./Component/Main"
import Nav from "./Component/Nav"
import Footer from "./Component/Footer"


class Hello extends React.Component {
  static contextType = MainContext

  render() {
    //debugger
    return (
      <div>
        <Footer />
        <Nav />
        <Main />
      </div>
    )
  }
}
export default Hello;




//This is the consumer