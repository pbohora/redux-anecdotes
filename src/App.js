import React from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'

const App = props => {
  return (
    <div>
      {props.store.getState().notification !== null && (
        <Notification store={props.store} />
      )}
      <Filter store={props.store} />
      {console.log(props.store.getState())}
      <h2>Anecdotes</h2>
      <AnecdoteList store={props.store} />

      <AnecdoteForm store={props.store} />
    </div>
  )
}

export default App
