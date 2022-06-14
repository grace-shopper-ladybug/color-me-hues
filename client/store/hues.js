// -------- imports -------->

import axios from 'axios'
import history from '../history'

// --------------- HUE ACTION TYPES --------------->
const GET_HUE = 'GET_HUE'
const REMOVE_HUE = 'REMOVE_HUE'

// --------------- HUE INITIAL STATE --------------->
const defaultHue = {}

// --------------- HUE ACTION CREATORS --------------->
const getHue = hue => ({type: GET_HUE, hue})
const removeHue = () => ({type: REMOVE_HUE})

// --------------- HUE THUNK CREATORS --------------->
export const me = () => async dispatch => {
  try {
    const res = await axios.get('/auth/me')
    dispatch(getHue(res.data || defaultHue))
  } catch (err) {
    console.error(err)
  }
}

export const auth = (email, password, method) => async dispatch => {
  let res
  try {
    res = await axios.post(`/auth/${method}`, {email, password})
  } catch (authError) {
    return dispatch(getHue({error: authError}))
  }

  try {
    dispatch(getHue(res.data))
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
    case GET_HUE:
      return action.hue
    case REMOVE_HUE:
      return defaultHue
    default:
      return state
  }
}
