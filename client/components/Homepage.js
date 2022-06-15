import React from 'react'
import AllHues from './AllHues'
import Navbar from './Navbar'

class Homepage extends React.Component {
  render() {
    return (
      <div
        className="page-header section-dark"
        style={{backgroundImage: `url("/images/HOMEPAGE.png")`}}
      >
        <div className="content-center">
          <div className="container">
            <div className="title-brand" />
          </div>
        </div>
      </div>
    )
  }
}

export default Homepage
