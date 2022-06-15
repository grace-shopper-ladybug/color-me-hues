/*
WHAT IS STILL NEEDED:

• Delete button
• Form to create new emotionHue (if needed on this page)
• LASTLY, solidified color images for the emotionHues
*/

// -------- imports -------->

import React from 'react'
import {connect} from 'react-redux'
import {getHues} from '../store/hues'
import {Link} from 'react-router-dom'

// --------------- AllHues component --------------->
export class AllHues extends React.Component {
  componentDidMount() {
    this.props.getHues()
  }

  // -------- render -------->
  render() {
    return (
      <div>
        <main>
          {this.props.hues.map(hue => {
            return (
              <div className="card" style={{width: '18rem'}} key={hue.id}>
                <img
                  className="card-img-top"
                  src={hue.emotionHue}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{hue.emotionName}</h5>
                  <h4 className="card-price">{hue.price}</h4>
                  <p className="card-text">{hue.description}</p>
                  <a href={`/hues/${hue.id}`} className="btn btn-primary">
                    Buy
                  </a>
                </div>
              </div>
            )
          })}
        </main>
      </div>
    )
  }
}

// -------- mapState -------->

const mapState = state => {
  return {
    hues: state.hues
  }
}

// -------- mapDispatch -------->

const mapDispatch = dispatch => {
  return {
    getHues: () => dispatch(getHues())
  }
}

// -------- export -------->
export default connect(mapState, mapDispatch)(AllHues)
