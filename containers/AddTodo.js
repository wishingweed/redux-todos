import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/index'

let AddTodo = ({ dispatch,todos }) =>{
	let input
	console.log(todos);
	return(
		<div>
			<form onSubmit = {e => {
				e.preventDefault()
				dispatch(addTodo(input.value))
				input.value = ''
			}}>
				<input ref = {hello => {
					input = hello
				}}/>
				<button type="submit">
				AddTodo
				</button>
			</form>
		</div>
	)
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

AddTodo = connect(mapStateToProps)(AddTodo)


export default AddTodo