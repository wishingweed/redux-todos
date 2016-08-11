import React from 'react'

const Todo = ({key,text,onClick, completed}) =>
(
	<li 
		onClick={ onClick }
		style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
	>
		{text}
	</li>
)

export default Todo