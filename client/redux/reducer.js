import actionTypes from './actionTypes'
import intialState from './initialState'

const reducer = (state = intialState, {type, payload}) => {
  switch (type) {
    case actionTypes.home_plan_load_start:
      return {
        ...state,
        homePlans: null,
        lots: null,
        combintations: null
      };

      case actionTypes.home_plan_load_success:
        return {
          ...state,
          homePlans: payload.homePlans,
          lots: payload.lots,
          combintations: payload.combintations
        }

        case actionTypes.home_plan_load_error:
          return {
            ...state,
            homePlans: null
          }
      default:
        return state
  }
}

export default reducer