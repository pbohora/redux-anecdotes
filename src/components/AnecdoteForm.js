import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'

const AnecoteForm = ({ store }) => {
  const addAnecdote = event => {
    event.preventDefault()
    const content = event.target.anecdote.value
    store.dispatch(createAnecdote(content))
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
