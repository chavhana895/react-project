const initialState = {
  emps:[],
}

const reducer = (state=initialState, action)=> {
  switch (action.type){
    case 'ADD_EMP':
      return{
        ...state,
        emps:[...state.emps, action.payload]
      }

      case 'DELETE_EMP':
      return{
        ...state,
        emps: state.emps.filter(emps => emps.id !== action.payload)
      }
    default:
      return state
  }
}

export default reducer