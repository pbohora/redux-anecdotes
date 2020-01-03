import React from 'react'
import { connect } from 'react-redux'
import { createFilter } from '../reducers/filterReducer'

const Filter = props => {
  const handleChange = event => {
    const filter = event.target.value
    props.createFilter(filter)
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input value={props.filter} onChange={handleChange} />
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state)
  return {
    filter: state.filter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createFilter: value => {
      dispatch(createFilter(value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
