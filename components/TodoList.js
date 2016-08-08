import React from 'react'
import Todo from './Todo'
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'

let TodoList = ({ todos,onTodoList }) =>
(	<ul>
		{todos.map(todo =>
			<Todo
				key = {todo.id} 
				{...todo}
				onClick = {() => onTodoList(todo.id)}
			/>
		)}
	</ul>
)
// const mapStateToProps = (state) => {
//   return {
//     todos: state.todos
//   }
// }

// const mapDispatchToProps = (dispatch) =>{
// 	return{
// 		onTodoList:(id) => dispatch(toggleTodo(id))
// 	}
// }

// TodoList = connect(mapStateToProps,mapDispatchToProps)(TodoList)

export default TodoList