import React from 'react'
import {connect} from 'react-redux'
import {createHue} from '../store/allHues'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class CreateHue extends React.Component {
  constructor() {
    super()
    this.state = {
      emotionName: '',
      description: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit(evt) {
    evt.preventDefault()
    this.props.createProject({...this.state})
    this.setState({
      emotionName: '',
      description: ''
    })
  }

  render() {
    const {emotionName, description} = this.state
    const {handleSubmit, handleChange} = this

    return (
      <div>
        <h4>Create Hue</h4>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Hue Name</Form.Label>
            <Form.Control
              type="text"
              name="emotionName"
              placeholder="Enter a hue name"
              onChange={handleChange}
              value={emotionName}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label>Emotion Description</Form.Label>
            <Form.Control
              type="text"
              name="description"
              placeholder="Enter a description"
              onChange={handleChange}
              value={description}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Create
          </Button>
        </Form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, {history}) => {
  return {
    createProject: hue => dispatch(createHue(hue, history))
  }
}

export default connect(null, mapDispatchToProps)(CreateHue)
