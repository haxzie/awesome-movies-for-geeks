import React from 'react';
import Img from 'gatsby-image'

import './style.scss'

function getStrippedContent( content) {
    if (content.length > 150) {
        return content.substring(0, 150)+". . ."
    } else {
        return content
    }
}
const MoviesCard = ({ data, content }) => (
    <div class="movies-card-wrapper">
        <div className="details-card">
            <h2>{ data.title }</h2>
            <h3>{ data.type }</h3>
            <p>{ data.release }&nbsp;{ data.rating }</p>
            <p dangerouslySetInnerHTML={{__html: getStrippedContent(content)}}></p>
        </div>
        <div class="image-holder">
            <Img style={{height: '100%'}} fluid={data.poster.childImageSharp.fluid} />
        </div>
    </div>
)

export default MoviesCard;