import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'
import {
  setNotification,
  removeNotification
} from '../reducers/notificationReducer'

const AnecoteForm = ({ store }) => {
  const addAnecdote = event => {
    event.preventDefault()
    const content = event.target.anecdote.value
    store.dispatch(createAnecdote(content))

    store.dispatch(setNotification(`you created ${content}`))
    setTimeout(() => store.dispatch(removeNotification()), 5000)

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

export default AnecoteForm
