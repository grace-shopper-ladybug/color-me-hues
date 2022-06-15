// -------- imports -------->

import axios from 'axios'

// --------------- HUE ACTION TYPES --------------->

const GET_HUES = 'GET_HUES'
const REMOVE_HUE = 'REMOVE_HUE'
// const NEW_HUE = 'NEW_HUE'

// ------------ initial state ------------>

export const initialState = []

//  ------------ ACTION CREATORS ------------>

// the _ is so I can use the same getHues in my Thunks
export const _getHues = hues => {
  return {
    type: GET_HUES,
    hues
  }
}

export const _removeHue = hue => {
  return {
    type: REMOVE_HUE,
    hue
  }
}

// Potential NEW_HUE for admin users

// let nextId = 0;
// export const _newHue = (hue) => {
//   return{
//     type: NEW_HUE,
//     id: nextId++,
//     hue: hue
//   }
// }

// --------------- HUE THUNK CREATORS --------------->

export const getHues = () => async dispatch => {
  const {data: hues} = await axios.get('/api/hues')
  dispatch(_getHues(hues))
}

export const removeHue = hueId => {
  return async dispatch => {
    const {data: hue} = await axios.delete(`/api/hues/${hueId}`)
    dispatch(_removeHue(hue))
  }
}
// --------------- HUE REDUCER --------------->

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_HUES:
      return action.hues
    case REMOVE_HUE:
      return state.filter(hue => hue.id !== action.hue.id)
    default:
      return state
  }
}
