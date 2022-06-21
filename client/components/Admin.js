import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getHues, deleteHue} from '../store/allHues'
import CreateHue from './CreateHue'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import {getUsers} from '../store/allUsers'

class Admin extends React.Component {
  componentDidMount() {
    this.props.getHues()
    this.props.getUsers()
  }

  render() {
    return (
      <div>
        <h1>Admins Only</h1>
        User Account Details
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {this.props.users.map(user => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.userName}</td>

                  <td>{user.email}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
        <p>
          The edit button should take you to a separate page where you can fill
          out fields to update individual product listings. The delete button
          could optionally show a confirmation message before deleting the
          product.
        </p>
        <div>
          <Button>Edit Hues</Button>
        </div>
        <div>
          <CreateHue />
        </div>
        <p>
          All relevant POST, PUT, and DELETE routes, along with this /admin page
          should be restricted to admins. Even without access to this page,
          non-admins should not be able to send these types of requests using an
          app like Postman or Insomnia.
        </p>
        <Table striped bordered hover>
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
            {this.props.hues?.map(hue => {
              return (
                <tr key={hue.id}>
                  <td>{hue.id}</td>
                  <td>{hue.emotionName}</td>
                  <td>{hue.description}</td>
                  <td>{hue.price / 100}</td>
                  <td>{hue.quantity}</td>
                  <td>
                    {/* wrapping buttons in links is not semantically correct HTML — need to find a better way to handle linked buttons */}
                    <Link to={`/hues/${hue.id}/edit`}>
                      <Button type="button">Edit</Button>
                    </Link>
                  </td>
                  <td>
                    <Button
                      type="button"
                      onClick={() => this.props.deleteHue(hue.id)}
                    >
                      Delete
                    </Button>
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
    hues: state.hues,
    users: state.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getHues: () => dispatch(getHues()),
    deleteHue: hue => dispatch(deleteHue(hue)),
    getUsers: () => dispatch(getUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin)
