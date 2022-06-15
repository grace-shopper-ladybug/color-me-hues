/*
WHAT IS STILL NEEDED:

• Delete button
• Form to create new emotionHue (if needed on this page)
• LASTLY, solidified color images for the emotionHues
*/

// -------- imports -------->

import React from 'react'
import {connect} from 'react-redux'
import {getHues} from '../store/allHues'
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
          {/* <div className="container mx-auto" style={{width: '1800px'}}> */}
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {this.props.hues.map(hue => {
              return (
                <div className="col m-3">
                  <div
                    className="card h-100"
                    style={{width: '18rem', padding: '0.5rem'}}
                    key={hue.id}
                  >
                    <img
                      className="card-img-top"
                      src={hue.image}
                      alt={hue.emotionHue}
                    />
                    <div className="card-body mx-auto">
                      <h5 className="card-title">{hue.emotionName}</h5>
                      <h6 className="card-price">${hue.price}.00</h6>
                      <p className="card-text">{hue.description}</p>
                      <a href={`/hues/${hue.id}`} className="btn btn-primary">
                        Buy
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          {/* </div> */}
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
