import React from 'react'
import AddTodo from '../containers/AddTodo'
import TodoList from './TodoList'
import Footer from './Footer'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
	<div>
		<AddTodo />
		<VisibleTodoList />
		<Footer />
	</div>
)

export default App