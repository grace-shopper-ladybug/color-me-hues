import React from 'react'
import {connect} from 'react-redux'
import {createHue} from '../store/allHues'

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
        <form onSubmit={handleSubmit}>
          <input
            name="emotionName"
            placeholder="Name"
            onChange={handleChange}
            value={emotionName}
          />
          <input
            name="description"
            placeholder="Description"
            onChange={handleChange}
            value={description}
          />
          <button type="submit">Create</button>
        </form>
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
