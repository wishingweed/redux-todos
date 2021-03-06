import React from 'react'

const Link = ({ children,active,onClick }) =>{
	if(active){
		return <span>{ children }</span>
	}

	return(
		<a href="#"
       onClick={e => {
         e.preventDefault()
         onClick()
       }}
    >
      {children}
    </a>
	)

}
export default Link