import { connect } from 'react-redux'
import Link from '../components/Link'
import { setVisibilityFilter } from '../actions'

const mapStateToProps = (state, ownProps) => {
	// console.log("state.visibilityFilter is " + state.visibilityFilter)
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
	return{
		onClick: ()=>{
			dispatch(setVisibilityFilter(ownProps.filter))
		}
	}
}

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink