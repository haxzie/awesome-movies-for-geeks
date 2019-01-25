import React from 'react';
import Img from 'gatsby-image'
import { Link } from 'gatsby'

import './style.scss'


function typeCap(title) {
    let splitTitle = title.toLowerCase().split('')
    splitTitle[0] = splitTitle[0].toUpperCase()
    return splitTitle.join('')
}
const MoviesCard = ({ data }) => (
    <div className="movies-card-wrapper">
        <div className="image-holder">
            <Link to={'/'+ data.title}>
                <Img 
                    style={{height: '100%'}} 
                    fluid={data.poster.childImageSharp.fluid} />
            </Link>
            <div className="rating">{ data.rating }</div>
        </div>
        <p className="caption">{ data.release } • { typeCap(data.type) }</p>
        <Link to={'/'+ data.title } className="title">{ data.title } </Link>
    </div>
)

export default MoviesCard;