import React, {Component} from "react"

const {Provider, Consumer} = React.createContext()

class MovieContextProvider extends Component {
    constructor() {
        super()

        this.state = {
            movies: [
                {movie: 'The Matrix'},
                {movie: 'Player One'}
            ]
        }
    }

    addMovie = (movie) => {
        let movieEntry = {
            movie: movie
        }

        this.setState({
            movies: [...this.state.movies, movieEntry]
        })
    }

    render() {
        return (
            <Provider value={{
                movies: this.state.movies,
                addMovie: this.addMovie
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export {MovieContextProvider, Consumer as MovieContextConsumer}