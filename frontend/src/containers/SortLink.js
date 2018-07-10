import { connect } from 'react-redux'
import { setSortOrder } from '../actions'
import Link from '../components/Link'
import { getSortOrder } from '../reducers'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.sort_order === getSortOrder(state)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setSortOrder(ownProps.sort_order))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
