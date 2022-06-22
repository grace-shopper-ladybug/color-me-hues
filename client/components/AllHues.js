// -------- imports -------->
import React from 'react'
import {connect} from 'react-redux'
import {getHues} from '../store/allHues'
import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import FilterDropDown from './FilterDropDown'

// --------------- AllHues component --------------->
export class AllHues extends React.Component {
  componentDidMount() {
    this.props.getHues()
  }

  // -------- render -------->
  render() {
    return (
      <div className="mt-6">
        <Container fluid className="justify-content-center">
          <FilterDropDown />
          <Row xs={1} md={3} className="gx-4 ">
            {this.props.hues
              .filter(hue => {
                return (
                  this.props.hueColorFamily === hue.hueColorFamily ||
                  this.props.hueColorFamily === 'all'
                )
                // if colorFamily value equals hue.hueColorFamily
                // return true (returns all passing hue cards)
                // if null/undefined return ALL hue cards
                // if color family is null or if the color family is equal to the hue's color family
              })
              .map(hue => {
                return (
                  <Card
                    className="m-3"
                    style={{width: '15rem', borderRadius: '5%'}}
                    key={hue.id}
                  >
                    <Card.Img
                      className="card-image img-fluid mt-2"
                      style={{borderRadius: '5%'}}
                      variant="top"
                      src={hue.image}
                      alt={hue.emotionHue}
                    />
                    <Col className="sm-6 mb-3 mb-lg-0">
                      <div className="hover hover-3 text-white rounded">
                        <div className="hover-overlay"></div>
                        <div className="hover-3-content px-5 py-4">
                          <p className="hover-3-description small text-uppercase mb-0">
                            {hue.shortDescription}
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Card.Body className="text-center">
                      <Card.Title>{hue.emotionName}</Card.Title>
                      <Card.Text>${hue.price / 100}</Card.Text>
                      <Link to={`/hues/${hue.id}`}>
                        <Button variant="outline-secondary">Buy</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                )
              })}
          </Row>
        </Container>
      </div>
    )
  }
}

// -------- mapState -------->

const mapState = state => {
  return {
    hues: state.hues,
    hueColorFamily: state.hueColorFamily
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
