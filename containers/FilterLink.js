import React from 'react'
import Link from '../components/Link'
import { setVisibilityFilter } from '..actions/index'

mapStateToProps = (state, ownProps) =>{
	return{
		active: ownProps.filter === state.visibilityFilter
	}
}

mapDispatchToProps = (dispatch, ownProps) =>{
	return{
		onClick: ()=>{
			dispatch(setVisibilityFilter(ownProps.filter))
		}
	}
}

const FilterLink = connect(
	mapStateToProps,
	mapDispatchToProps,
	)(Link)
export default FilterLink