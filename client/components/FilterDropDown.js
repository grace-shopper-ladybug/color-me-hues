import React from 'react'
import {getHues} from '../store/allHues'
import {connect} from 'react-redux'
import {storeSelectedHue} from '../store/colorFamily'

export class FilterDropDown extends React.Component {
  constructor(props) {
    super(props)
    this.dropdownHandler = this.dropdownHandler.bind(this)
  }

  // ------------------ handlers ------------------>
  dropdownHandler(event) {
    this.props.storeSelectedHue(event.target.value)
  }

  // ------------------ render ------------------>

  render() {
    return (
      <div className="hue-list">
        <select onChange={this.dropdownHandler}>
          <option value="all">All Hues</option>
          <option value="warm">Warm</option>
          <option value="cool">Cool</option>
          <option value="neutral">Neutral</option>
        </select>
      </div>
    )
  }
}
// -------- mapReduxState -------->

const mapReduxState = state => {
  return {
    hues: state.hues
  }
}

// -------- mapDispatch -------->

const mapDispatch = dispatch => {
  return {
    getHues: () => dispatch(getHues()),
    storeSelectedHue: hueColorFamily =>
      dispatch(storeSelectedHue(hueColorFamily))
  }
}

// -------- export -------->
export default connect(mapReduxState, mapDispatch)(FilterDropDown)
