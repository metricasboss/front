import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby";

const ListFaqResults = ({ results, showResults }) => (
    <div>
      {showResults && (
        <ul>
          {results.map((faq) => {
              return(
                <li key={faq.id}>
                  <Link to={`/faq/Faq_${faq.id}`}>{faq.ask}</Link>
                </li>
              )
          })}
        </ul>
      )}
    </div>
)

ListFaqResults.propTypes = {
  results: PropTypes.array,
}

ListFaqResults.defaultProps = {
  results: [],
  showResult: false
}

export default ListFaqResults
