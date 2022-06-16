import React from 'react'
import {connect} from 'react-redux'
import {getHues} from '../store/allHues'
import CreateHue from './CreateHue'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

class Admin extends React.Component {
  componentDidMount() {
    this.props.getHues()
  }

  render() {
    return (
      <div>
        <h1>Admins Only</h1>
        <CreateHue />
        <p>
          Here, I'll render a table of all products with Bootstrap. Next to each
          row of products, I'll have an edit and delete button. The edit button
          should take you to a separate page where you can fill out fields to
          update individual product listings. The delete button could optionally
          show a confirmation message before deleting the product.
        </p>
        <p>
          All relevant POST, PUT, and DELETE routes, along with this /admin page
          should be restricted to admins. Even without access to this page,
          non-admins should not be able to send these types of requests using an
          app like Postman or Insomnia.
        </p>

        <Table striped bordered hover>
          {' '}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.props.hues.map(hue => {
              return (
                <tr>
                  <td>{hue.id}</td>
                  <td>{hue.emotionName}</td>
                  <td>{hue.description}</td>
                  <td>{hue.price}</td>
                  <td>{hue.quantity}</td>
                  <td>
                    <Button>Edit</Button>
                  </td>
                  <td>
                    <Button>Delete</Button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    hues: state.hues
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getHues: () => dispatch(getHues())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin)
