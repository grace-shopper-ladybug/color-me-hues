import axios from 'axios'

const GET_HUE = 'GET_HUE'
const UPDATE_HUE = 'UPDATE_HUE'

const _getHue = hue => {
  return {
    type: GET_HUE,
    hue
  }
}

export const getHue = id => {
  return async dispatch => {
    const {data: hue} = await axios.get(`/api/hues/${id}`)
    dispatch(_getHue(hue))
  }
}

export default function(state = {}, action) {
  switch (action.type) {
    case GET_HUE:
      return action.hue
    default:
      return state
  }
}
