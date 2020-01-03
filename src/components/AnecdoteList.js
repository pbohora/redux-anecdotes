import React from 'react'
import { addVote } from '../reducers/anecdoteReducer'
import {
  setNotification,
  removeNotification
} from '../reducers/notificationReducer'

const AnecdoteList = ({ store }) => {
  const anecdotes = store.getState().anecdotes
  const filter = store.getState().filter

  const vote = id => {
    const anecdote = anecdotes.find(anecdote => anecdote.id === id)
    store.dispatch(setNotification(`you voted ${anecdote.content}`))
    setTimeout(() => store.dispatch(removeNotification()), 5000)
    store.dispatch(addVote(id))
  }
  const filteredAnecdotes = anecdotes.filter(
    anecdote =>
      filter === '' ||
      anecdote.content.toLowerCase().includes(filter.toLowerCase().trim())
  )

  anecdotes.sort((a, b) => b.votes - a.votes)

  return (
    <>
      {filteredAnecdotes.map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </>
  )
}

export default AnecdoteList
