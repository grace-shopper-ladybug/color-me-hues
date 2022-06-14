// -------- imports -------->

import axios from 'axios'
import { initial } from 'lodash';


// --------------- HUE ACTION TYPES --------------->

const GET_HUES = 'GET_HUES'
const REMOVE_HUE = 'REMOVE_HUE'
// const NEW_HUE = 'NEW_HUE'


// ------------ initial state ------------>

export const initialState = [];

//  ------------ ACTION CREATORS ------------>

// the _ is so I can use the same getHues in my Thunks
export const _getHues = (hues) => {
  return {
    type: GET_HUES,
    hues: hues
  }
}

export const _removeHue = (hue)  => {
  return {
 type: REMOVE_HUE,
 hue: hue
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

export const getHues = () => async(dispatch) => {
  const { hue } = await axios.get('/api/hues/')
  dispatch(getHues(hue))
}

export const removeHue = (hueId) => {
  return async(dispatch) => {
    await axios.delete(`/api/hues/${hueId}`)
    dispatch(_removeHue(hueId))
  }
}
// --------------- HUE REDUCER --------------->

export const hueReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HUES:
      return action.hue
    case REMOVE_HUE:
      return initialState
    default:
      return state
  }
}

export default hueReducer;
