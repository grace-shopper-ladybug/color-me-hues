import axios from 'axios'

// --------------- ACTION TYPES --------------->
const GET_HUES = 'GET_HUES'
const CREATE_HUE = 'CREATE_HUE'
const DELETE_HUE = 'DELETE_HUE'

//  ------------ ACTION CREATORS ------------>
const _getHues = hues => {
  return {
    type: GET_HUES,
    hues
  }
}

const _createHue = hue => {
  return {
    type: CREATE_HUE,
    hue
  }
}

const _deleteHue = hue => {
  return {
    type: DELETE_HUE,
    hue
  }
}

// --------------- THUNK CREATORS --------------->

export const getHues = () => async dispatch => {
  const {data: hues} = await axios.get('/api/hues')
  dispatch(_getHues(hues))
}

export const createHue = hue => {
  return async dispatch => {
    const {data: created} = await axios.post('/api/hues', hue)
    dispatch(_createHue(created))
  }
}

export const deleteHue = hueId => {
  return async dispatch => {
    const {data: hue} = await axios.delete(`/api/hues/${hueId}`)
    dispatch(_deleteHue(hue))
  }
}

// --------------- REDUCER --------------->
export default function(state = [], action) {
  switch (action.type) {
    case GET_HUES:
      return action.hues
    case CREATE_HUE:
      return [...state, action.hue]
    case DELETE_HUE:
      return state.filter(hue => hue.id !== action.hue.id)
    default:
      return state
  }
}
