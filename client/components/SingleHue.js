import React from 'react'
import {connect} from 'react-redux'
import {getSingleHue} from '../store/singleHue'

class SingleHue extends React.Component {
  componentDidMount() {
    this.props.loadSingleHue(this.props.match.params.hueId)
  }

  render() {
    const hue = this.props.hue
    return (
      <div>
        <h2>{hue.emotionName}</h2>
        <p>{hue.description}</p>
        <p>{hue.quantity}</p>
        <p>${hue.price}</p>
        <p>{hue.hueColorFamily}</p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    hue: state.hue
  }
}

const mapDispatchToProps = dispatch => ({
  loadSingleHue: id => dispatch(getSingleHue(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleHue)
