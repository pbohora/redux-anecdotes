import anecdotesService from '../services/anecdote'

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_VOTE':
      const id = action.data.id
      const votedanecdote = action.data

      return state.map(anecdote =>
        anecdote.id !== id ? anecdote : votedanecdote
      )

    case 'ADD_ANECDOTE':
      return [...state, action.data]

    case 'INIT_ANECDOTES':
      return action.data

    default:
      return state
  }
}

export const addVote = (id, newAnecdote) => {
  return async dispatch => {
    const votedanecdote = await anecdotesService.addVote(id, newAnecdote)
    dispatch({
      type: 'ADD_VOTE',
      data: votedanecdote
    })
  }
}

export const createAnecdote = anecdote => {
  return async dispatch => {
    const data = await anecdotesService.createNew(anecdote)
    dispatch({ type: 'ADD_ANECDOTE', data })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdotesService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

export default anecdoteReducer
