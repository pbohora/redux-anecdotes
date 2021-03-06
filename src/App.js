import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'
import { initializeAnecdotes } from './reducers/anecdoteReducer'

const App = props => {
  useEffect(() => {
    props.initializeAnecdotes()
  })

  return (
    <div>
      <Notification />

      <Filter />

      <h2>Anecdotes</h2>
      <AnecdoteList />

      <AnecdoteForm />
    </div>
  )
}

const mapDispatchProps = {
  initializeAnecdotes
}

export default connect(null, mapDispatchProps)(App)
