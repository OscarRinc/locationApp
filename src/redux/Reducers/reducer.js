export const userData = (state = {}, action) => {
  switch(action.type) {
  case 'USER_DATA':
    return {
      ...state,
      username: action.user.username,
      password: action.user.password
    }
  case 'LIST_DATA':
    return {
      ...state,
      primero: action.list.id,
      segundo: action.list.name
    }
  default:
    return state;
  }
}
