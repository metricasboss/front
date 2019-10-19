import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"

const Card = ({ singlePost }) => (
    <div className="column is-one-quarter">
        <div className="card">
            <div className="card-image">
                <figure className="image">
                <Img fixed={singlePost.feature.childImageSharp.fixed}/>
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                <div className="media-left">
                    <figure className="image is-48x48">
                        <Img fixed="https://bulma.io/images/placeholders/96x96.png"/>
                    </figure>
                </div>
                <div className="media-content">
                <Link className="title is-4" to={`/${singlePost.id}`}>
                    {singlePost.title}
                </Link>
                    <p className="subtitle is-6">@johnsmith</p>
                </div>
                </div>

                <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
                <Link to="/">
                    #css
                </Link>
                <Link to="/">
                    #responsive
                </Link>
                <br/>
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
            </div>
        </div>
    </div>
)

Card.propTypes = {
    singlePost: PropTypes.object,
}

Card.defaultProps = {
    singlePost: {},
}

export default Card