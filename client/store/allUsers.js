import axios from 'axios'

// --------------- ACTION TYPES --------------->
const GET_USERS = 'GET_USERS'

//  ------------ ACTION CREATORS ------------>
const _getUsers = users => {
  return {
    type: GET_USERS,
    users
  }
}

// --------------- THUNK CREATORS --------------->

export const getUsers = () => async dispatch => {
  const {data: users} = await axios.get('/api/users')
  dispatch(_getUsers(users))
}

// --------------- REDUCER --------------->
export default function(state = [], action) {
  switch (action.type) {
    case GET_USERS:
      return action.users
    default:
      return state
  }
}
