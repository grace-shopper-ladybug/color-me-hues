import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getHues, deleteHue } from '../store/allHues';
import CreateHue from './CreateHue';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { getUsers } from '../store/allUsers';

class Admin extends React.Component {
  componentDidMount() {
    this.props.getHues();
    this.props.getUsers();
  }

  render() {
    return (
      <div>
        <h1>Admins Only</h1>
        <h4>User Account Details</h4>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {this.props.users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.userName}</td>

                  <td>{user.email}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>

        <div>
          <CreateHue />
        </div>
        <h4>List of Hues</h4>
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
            {this.props.hues.map((hue) => {
              return (
                <tr key={hue.id}>
                  <td>{hue.id}</td>
                  <td>{hue.emotionName}</td>
                  <td>{hue.description}</td>
                  <td>{hue.price / 100}</td>
                  <td>{hue.quantity}</td>
                  <td>
                    <Button as={Link} to={`/hues/${hue.id}/edit`} type="button">
                      Edit
                    </Button>
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
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    hues: state.hues,
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getHues: () => dispatch(getHues()),
    deleteHue: (hue) => dispatch(deleteHue(hue)),
    getUsers: () => dispatch(getUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
