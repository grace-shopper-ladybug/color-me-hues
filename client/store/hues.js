// -------- imports -------->

import axios from 'axios'
import history from '../history'

// --------------- HUE ACTION TYPES --------------->
const GET_HUES = 'GET_HUES'
const REMOVE_HUE = 'REMOVE_HUE'

// --------------- HUE INITIAL STATE --------------->
const defaultHue = {}

// --------------- HUE ACTION CREATORS --------------->
export const getHues = hue => ({type: GET_HUES, hue})
export const removeHue = () => ({type: REMOVE_HUE})

// --------------- HUE THUNK CREATORS --------------->
export const me = () => async dispatch => {
  try {
    const res = await axios.get('/auth/me')
    dispatch(getHues(res.data || defaultHue))
  } catch (err) {
    console.error(err)
  }
}

export const auth = (email, password, method) => async dispatch => {
  let res
  try {
    res = await axios.post(`/auth/${method}`, {email, password})
  } catch (authError) {
    return dispatch(getHues({error: authError}))
  }

  try {
    dispatch(getHues(res.data))
    history.push('/home')
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
  }
}

export const logout = () => async dispatch => {
  try {
    await axios.post('/auth/logout')
    dispatch(removeHue())
    history.push('/login')
  } catch (err) {
    console.error(err)
  }
}

// --------------- HUE REDUCER --------------->

export default function(state = defaultHue, action) {
  switch (action.type) {
    case GET_HUES:
      return action.hue
    case REMOVE_HUE:
      return defaultHue
    default:
      return state
  }
}
