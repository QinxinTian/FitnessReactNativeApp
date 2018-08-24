//import the constants from the actions
import { RECEIVE_ENTRIES, ADD_ENTRY } from '../actions'

//state is going to be one big object with each of the keys and the objects representing
//a specific day and each of the values representing the specific metrics for that day
function entries (state = {}, action) {
  switch (action.type) {
    case RECEIVE_ENTRIES :
      return {
      //state to be the same, and merge the whole object onto the existing state
        ...state,
        //object with each key representing a specific day and the value being the specific
        //metrics for that day.
        ...action.entries,
      }
    case ADD_ENTRY :
      return {
        ...state,
        //brand new entry for the specific day and merge it onto the state
        ...action.entry
      }
    default :
      return state
  }
}

export default entries