import React from 'react'
import { createFilter } from '../reducers/filterReducer'

const Filter = ({ store }) => {
  const handleChange = event => {
    const filter = event.target.value
    store.dispatch(createFilter(filter))
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input value={store.getState().filter} onChange={handleChange} />
    </div>
  )
}

export default Filter
