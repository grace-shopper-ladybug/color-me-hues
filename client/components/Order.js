import React from 'react'
import {connect} from 'react-redux'
import {getHues} from '../store/allHues'

class Order extends React.Component {
  constructor() {
    super()
    this.filterHues = this.filterHues.bind(this)
    this.calculateTotal = this.calculateTotal.bind(this)
  }

  componentDidMount() {
    this.props.getHues()
  }

  // map through localStorage for all ids of hues, store ids in array
  // filter through all hues for items with ids included in array
  // use reduce on filtered hues

  filterHues() {
    const huesInCart = [1, 10, 12] // this will have to be replaced with array of ids of hues stored in localStorage for guests
    return this.props.hues.filter(hue => huesInCart.includes(hue.id))
  }

  calculateTotal(huesArray) {
    const totalInPennies = huesArray.reduce((acc, hue) => {
      return acc + hue.price
    }, 0)
    return totalInPennies / 100
  }

  render() {
    const hues = this.props.hues
    const filteredHues = this.filterHues()
    const total = this.calculateTotal(filteredHues)

    return (
      <div>
        <h1>Cart</h1>
        {filteredHues.map(hue => (
          <div key={hue.id}>
            <p>{hue.emotionName}</p>
            <img src={hue.image} />
          </div>
        ))}
        <p>Total: ${total}</p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    hues: state.hues
  }
}

const mapDispatchToProps = dispatch => ({
  getHues: () => dispatch(getHues())
})

export default connect(mapStateToProps, mapDispatchToProps)(Order)
