import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getSingleHue} from '../store/singleHue'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

class SingleHue extends React.Component {
  componentDidMount() {
    this.props.loadSingleHue(this.props.match.params.hueId)
  }

  render() {
    const hue = this.props.hue
    return (
      <Container className="mt-5 mb-5">
        <Row className="d-flex justify-content-center">
          <Col className="lg-10">
            <Card>
              <Row>
                <Col className="md-6">
                  <div className="images p-3">
                    <div className="text-center p-4">
                      <Card.Img id="main-image" src={hue.image} width="250" />
                    </div>
                  </div>
                </Col>
                <Col className="md-6">
                  <div className="product p-4">
                    <div className="d-flex justify-content-between align-items-end">
                      <div className="d-flex align-items-center">
                        <Link to="/">
                          <Button variant="outline-secondary">
                            <i className="bi bi-arrow-left" />
                            <span className="ml-1">Back</span>
                          </Button>
                        </Link>
                      </div>
                    </div>
                    <div className="mt-4 mb-3">
                      <Card.Text className="text-uppercase text-muted brand">
                        {hue.emotionHue}
                      </Card.Text>
                      <Card.Title className="text-uppercase">
                        {hue.emotionName}
                      </Card.Title>
                      <div className="price d-flex flex-row align-items-center">
                        <Card.Text className="act-price">
                          ${hue.price / 100}
                        </Card.Text>
                      </div>
                    </div>
                    <Card.Text className="about">{hue.description}</Card.Text>
                    <div className="cart mt-4 align-items-center">
                      <Container className="m-1">
                        <Button
                          variant="outline-secondary"
                          className="text-uppercase mr-2 px-4"
                        >
                          Add to cart
                        </Button>
                        <Button variant="outline-danger" className="m-1">
                          <i className="bi bi-heart text-red" />
                        </Button>
                        <Button variant="outline-dark">
                          <i className="bi bi-share text-dark" />
                        </Button>
                      </Container>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
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
