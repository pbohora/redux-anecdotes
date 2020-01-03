import React from 'react'
import { connect } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import {
  setNotification,
  removeNotification
} from '../reducers/notificationReducer'

const AnecdoteList = ({
  anecdotes,
  filteredAnecdotes,
  setNotification,
  removeNotification,
  addVote
}) => {
  const vote = id => {
    const anecdote = anecdotes.find(anecdote => anecdote.id === id)
    setNotification(`you voted ${anecdote.content}`)
    setTimeout(() => removeNotification(), 5000)
    addVote(id)
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

const mapDispatchToProps = dispatch => {
  return {
    setNotification: value => {
      dispatch(setNotification(value))
    },
    removeNotification: value => {
      dispatch(removeNotification())
    },
    addVote: value => {
      dispatch(addVote(value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)
