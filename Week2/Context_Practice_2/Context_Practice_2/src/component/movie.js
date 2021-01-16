import React from 'react'
import {MovieContextConsumer} from '../movieContext'

function Movies() {
    return (
        <MovieContextConsumer>
            {context => (
                <div>
                    {context.movies.map((item, index) => 
                        <div key={index} className='movie'>
                            {item.movie}
                        </div>
                    )} 
                </div>
            )}
        </MovieContextConsumer>
    )
}

export default Movies