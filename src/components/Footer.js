import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

import { clearCompletedTodos, changeActiveFilter } from "../store/actions";

const Footer = ({todoListLength, clearCompletedTodos, changeActiveFilter}) => {
  const setActiveFilter = (e) => {
    const filter = e.target.dataset.filter;
    changeActiveFilter(filter);
  }

  return (
    <footer className="o-app__footer">
      <p>{todoListLength} Items Left</p>
      <button data-filter="ALL" onClick={setActiveFilter}>All</button>
      <button data-filter="ACTIVE" onClick={setActiveFilter}>Active</button>
      <button data-filter="COMPLETED" onClick={setActiveFilter}>Completed</button>
      <button onClick={clearCompletedTodos}>Clear Completed</button>
    </footer>
  )
}

Footer.propTypes = {
  todoListLength: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
  todoListLength : state.todos.length
});

const mapDispatchToProps = {
  clearCompletedTodos,
  changeActiveFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)