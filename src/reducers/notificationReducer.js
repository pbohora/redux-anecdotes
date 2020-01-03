const notificationReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.notification
    case 'REMOVE_NOTIFICATION':
      return (state = null)
    default:
      return state
  }
}

export const setNotification = notification => {
  return {
    type: 'SET_NOTIFICATION',
    notification
  }
}

export const removeNotification = notification => {
  return {
    type: 'REMOVE_NOTIFICATION'
  }
}

export default notificationReducer
