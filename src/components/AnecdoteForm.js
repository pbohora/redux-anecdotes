import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import {
  setNotification,
  removeNotification
} from '../reducers/notificationReducer'

const AnecoteForm = ({
  createAnecdote,
  setNotification,
  removeNotification
}) => {
  const addAnecdote = event => {
    event.preventDefault()
    const content = event.target.anecdote.value
    createAnecdote(content)

    setNotification(`you created ${content}`)
    setTimeout(() => removeNotification(), 5000)

    event.target.anecdote.value = ''
  }

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name='anecdote' />
        </div>
        <button type='submit'>create</button>
      </form>
    </>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    setNotification: value => {
      dispatch(setNotification(value))
    },
    removeNotification: value => {
      dispatch(removeNotification())
    },
    createAnecdote: value => {
      dispatch(createAnecdote(value))
    }
  }
}

export default connect(null, mapDispatchToProps)(AnecoteForm)
