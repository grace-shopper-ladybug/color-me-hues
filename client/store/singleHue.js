import axios from 'axios'

const GET_SINGLE_HUE = 'GET_SINGLE_HUE'

const _getSingleHue = hue => {
  return {
    type: GET_SINGLE_HUE,
    hue
  }
}

export const getSingleHue = id => {
  return async dispatch => {
    const {data: hue} = await axios.get(`/api/hues/${id}`)
    dispatch(_getSingleHue(hue))
  }
}

export default function singleHueReducer(state = {}, action) {
  switch (action.type) {
    case GET_SINGLE_HUE:
      return action.hue
    default:
      return state
  }
}
