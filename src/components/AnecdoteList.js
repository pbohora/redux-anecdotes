import React from 'react'
import { connect } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = ({
  anecdotes,
  filteredAnecdotes,
  setNotification,
  addVote
}) => {
  const vote = id => {
    const anecdote = anecdotes.find(anecdote => anecdote.id === id)
    const changedAnecdote = { ...anecdote, votes: anecdote.votes + 1 }
    setNotification(`you voted ${anecdote.content}`, 3)
    //setTimeout(() => removeNotification(), 5000)
    addVote(id, changedAnecdote)
  }

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

const mapStateToProps = state => {
  console.log(state)
  return {
    anecdotes: state.anecdotes,
    filter: state.filter,
    filteredAnecdotes: filteredAnecdotes(state)
  }
}

const filteredAnecdotes = ({ anecdotes, filter }) =>
  anecdotes.filter(
    anecdote =>
      filter === '' ||
      anecdote.content.toLowerCase().includes(filter.toLowerCase().trim())
  )

const mapDispatchToProps = {
  setNotification,

  addVote
}

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)
