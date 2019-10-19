import PropTypes from "prop-types"

import React from "react"
import Card from "./card"

const Grid = ({ posts }) => (
    <div className="columns">
      
        {posts.map(document => (
          <div key={document.node.id}>
            <Card singlePost={document.node} />
          </div>
        ))} 
    </div>
)

Grid.propTypes = {
    posts: PropTypes.array,
}

Grid.defaultProps = {
    posts: [],
}

export default Grid