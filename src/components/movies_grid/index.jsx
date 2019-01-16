import React, {Component} from 'react'
import MovieCard from '../movies_card'

import './style.scss'

class MoviesGrid extends Component {

    getMovieCards(data) {
        let movies = []
        let movieList = data.allMarkdownRemark.edges

        movieList.forEach( element => {
            movies.push(<MovieCard data={element.node.frontmatter} content={element.node.html}/>)
        })

        return movies
    }

    render() {
        return (
            <div class="movies-grid">
                { this.props.data? this.getMovieCards( this.props.data ): ""+this.props}
            </div>
        )
    }
}

export default MoviesGrid