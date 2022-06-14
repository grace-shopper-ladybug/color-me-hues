// -------- imports -------->

import React from "react";
import { connect } from 'react-redux';
import {fetchHues} from ""

// --------------- AllHues component --------------->
export class AllHues extends React.Component {
componentDidMount() {
  this.props.getHues()
}

  // -------- render -------->
  render () {
    return (
      <div>
        <h2>All Hues</h2>
        <main>
          {/* iterate through all colors with map */}
          {this.props.hues.map((hue) => {
            return ( <div
              key={hue.id}>
              <Link> to={`/hues/${hue.id}`}
              <div>
                {hue.name}
              </div>
              </Link>
            </div>)
          })}
          {/* <div> key={} </div> */}
        </main>
      </div>
    )
  }

}

// -------- mapState -------->

const mapState = (state) => {
  return {
    hues: state.hues //NEEDS TO BE EDITED
  }
}


// -------- mapDispatch -------->

const mapDispatch = (dispatch) => {
  return {
    getHues: () => dispatch(fetchHues)
  }
}

// -------- export -------->
export default connect(mapState, mapDispatch)(AllColors)
