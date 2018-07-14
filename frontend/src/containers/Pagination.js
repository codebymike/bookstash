import { connect } from 'react-redux'
import { getNextPage, getPrevPage } from '../actions'
import PaginationControls from '../components/PaginationControls'

const mapStateToProps = (state, ownProps) => ({
  page_number: state.apiUrl.page_number
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  incrementPage: () => dispatch(getNextPage()),
  decrementPage: () => dispatch(getPrevPage())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaginationControls)
