import React, {Component} from 'react'
import {connect} from 'react-redux'

import './frame-list.css'

class FrameList extends Component {
  render() {
    const {books} = this.props
    return (
      <ul className="list-group list-group-flush frame-list">
        {
          books.map((book) => {
            return (
              <li className="list-group-item bg-dark" key={book.id}><span>{book.author}</span></li>
            )
          })
        }
      </ul>
    )
  }
}

const mapStateToProps = ({books}) => {
  return {books}
}

export default connect(mapStateToProps)(FrameList)
