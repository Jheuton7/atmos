import actionTypes from './actionTypes'

const homePlansLoadStart = () => ({
  type: actionTypes.home_plan_load_start
})

const homePlansLoadSuccess = (homePlans) => ({
  type: actionTypes.home_plan_load_success,
  payload: homePlans
})

const homePlansLoadError = (error) => ({
  type: actionTypes.home_plan_load_error,
  payload: error
})

export default {
  homePlansLoadStart,
  homePlansLoadSuccess,
  homePlansLoadError
}