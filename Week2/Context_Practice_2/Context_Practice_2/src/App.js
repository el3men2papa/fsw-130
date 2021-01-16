import React, {Component} from 'react'
import './App.css'
import {MovieContextConsumer} from './movieContext'
import Movies from './component/movie'

class App extends Component {
    constructor() {
        super()

        this.state = {
            newMovie: ''
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    clearForm() {
        this.setState({
            newMovie: ''
        })
    }

    render() {
        return (
            <MovieContextConsumer>
                {context => (
                    <div className='content'>
                        <h2 className= "tittle"> My Favorite Movies</h2>
                        <div className='form'>
                            <input
                                type='text'
                                name='newMovie'
                                placeholder='Type of Movie'
                                value={this.state.newMovie}
                                onChange={this.handleChange}
                            />
                            <button onClick={() => {
                                context.addMovie(this.state.newMovie); 
                                this.clearForm()}
                                }>Add</button>
                        </div>
                        <div>
                            <Movies />
                        </div>
                    </div>
                )}
            </MovieContextConsumer>
        )
    }
}

export default App