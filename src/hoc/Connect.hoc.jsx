import { connect } from 'react-redux'

export default function Connect(component) {
  function mapStateToProps(state) {
    return { state }
  }

  function mapDispatchToProps(dispatch) {
    return { dispatch }
  }

  return connect(mapStateToProps, mapDispatchToProps)(component)
}
