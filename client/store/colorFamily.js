// --------------- ACTION TYPES --------------->
const STORE_SELECTED_HUE = 'STORE_SELECTED_HUE'

//  ------------ ACTION CREATORS ------------>

const _storeSelectedHue = hueColorFamily => {
  return {
    type: STORE_SELECTED_HUE,
    hueColorFamily
  }
}

// --------------- THUNK CREATORS --------------->
export const storeSelectedHue = hueColorFamily => {
  return dispatch => {
    dispatch(_storeSelectedHue(hueColorFamily))
  }
}

// --------------- REDUCER --------------->
export default function(state = 'all', action) {
  switch (action.type) {
    case STORE_SELECTED_HUE:
      return action.hueColorFamily
    default:
      return state
  }
}
