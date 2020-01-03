import React from 'react'
import { connect } from 'react-redux'

const Notification = ({ notification }) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  return <div style={notification && style}>{notification}</div>
}

const mapStateToProps = state => {
  console.log(state)
  return {
    notification: state.notification
  }
}

export default connect(mapStateToProps)(Notification)
