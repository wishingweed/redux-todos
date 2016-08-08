import React from 'react'

const Todo = ({key,text,onClick}) =>
(
	<li 
		onClick={ onClick }>
		{text}
	</li>
)

export default Todo