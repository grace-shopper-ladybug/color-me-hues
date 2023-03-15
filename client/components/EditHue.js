import React from 'react';
import { connect } from 'react-redux';
import { getHue, updateHue } from '../store/singleHue';

class EditHue extends React.Component {
  constructor() {
    super();
    this.state = {
      emotionName: '',
      description: '',
      price: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getHue(this.props.match.params.hueId);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.updateHue({ ...this.props.hue, ...this.state });
  }

  render() {
    const { emotionName, description, price } = this.state;
    const { hue } = this.props;
    const { handleChange, handleSubmit } = this;

    return (
      <div>
        <h1>{hue.emotionName}</h1>
        <p>{hue.description}</p>
        <p>Price: ${hue.price / 100}</p>
        <div>
          <form onSubmit={handleSubmit}>
            <h2>Edit Hue</h2>
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
            <input
              name="price"
              placeholder="Price"
              onChange={handleChange}
              value={price}
            />
            <button type="submit">Save Changes</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    hue: state.hue,
  };
};

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    getHue: (hue) => dispatch(getHue(hue)),
    updateHue: (hue) => dispatch(updateHue(hue, history)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditHue);
