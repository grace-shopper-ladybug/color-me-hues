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
        <h2>All Hues</h2>
        <main>
          {this.props.hues.map(hue => {
            return (
              <div key={hue.id}>
                <Link to={`/hues/${hue.id}`}>
                  {/* ^^ we want to have links to each indiviual hue */}
                  <p>
                    {hue.emotionName}
                    {/* displays the name of emption for the hue  */}
                  </p>
                  <img src={hue.emotionHue} />
                  {/* ^^ the emotionHue (the literal color) that corresponds to the emotionName
              ** will this be an /image/---.png file in public? **
              */}
                </Link>
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
