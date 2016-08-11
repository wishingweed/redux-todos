import React from 'react'
import Todo from './Todo'

let TodoList = ({ todos,onTodoClick }) =>
{
	return(	
	<ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
	)
}
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