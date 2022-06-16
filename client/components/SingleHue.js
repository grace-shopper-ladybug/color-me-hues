import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getSingleHue} from '../store/singleHue'

class SingleHue extends React.Component {
  componentDidMount() {
    this.props.loadSingleHue(this.props.match.params.hueId)
  }

  render() {
    const hue = this.props.hue
    console.log(hue.image)
    return (
      // <div>
      //   <h2>{hue.emotionName}</h2>
      //   <p>{hue.description}</p>
      //   <p>{hue.quantity}</p>
      //   <p>${hue.price}</p>
      //   <p>{hue.hueColorFamily}</p>
      // </div>
      <div className="container mt-5 mb-5">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-10">
            <div className="card">
              <div className="row">
                <div className="col-md-6">
                  <div className="images p-3">
                    <div className="text-center p-4">
                      <img id="main-image" src={hue.image} width="250" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="product p-4">
                    <div className="d-flex justify-content-between align-items-end">
                      <div className="d-flex align-items-center">
                        <Link to="/">
                          <i className="bi bi-arrow-left" />
                          <span className="ml-1">Back</span>
                        </Link>
                      </div>
                    </div>
                    <div className="mt-4 mb-3">
                      <span className="text-uppercase text-muted brand">
                        {hue.emotionHue}
                      </span>
                      <h5 className="text-uppercase">{hue.emotionName}</h5>
                      <div className="price d-flex flex-row align-items-center">
                        <span className="act-price">${hue.price}.00</span>
                      </div>
                    </div>
                    <p className="about">{hue.description}</p>
                    <div className="cart mt-4 align-items-center">
                      <button className="btn btn-primary text-uppercase mr-2 px-4">
                        Add to cart
                      </button>
                      <i className="bi bi-heart text-muted" />
                      <i className="bi bi-share text-muted" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
