import axios from 'axios'
import actions from './actions'

export const loadHomePlans = () => (dispatch) => {
  dispatch(actions.homePlansLoadStart())

  axios.get('/info')
  .then(response => {
    dispatch(actions.homePlansLoadSuccess(response.data))
  })
  .catch(err => {console.log(err)})
}

