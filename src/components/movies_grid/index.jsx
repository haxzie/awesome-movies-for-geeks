import React, {Component} from 'react'
import MovieCard from '../movies_card'

import './style.scss'

class MoviesGrid extends Component {

    componentDidUpdate(prevProps, prevState) {
        console.log("Updated");
    }

    getMovieCards(data) {
        let movies = []
        let movieList = data.allMarkdownRemark.edges

        movieList.forEach( element => {
            let key = movies.length + 1;

            if( this.props.showChip === "all" ){
                movies.push(<MovieCard key={key} data={element.node.frontmatter} content={element.node.html}/>)
            } else if (this.props.showChip === element.node.frontmatter.type.toLowerCase()) {
                movies.push(<MovieCard key={key} data={element.node.frontmatter} content={element.node.html}/>)
            }
        });

        return movies
    }

    render() {
        return (
            <div className="movies-grid">
                { this.props.data? this.getMovieCards( this.props.data ): ""+this.props}
            </div>
        )
    }
}

export default MoviesGrid