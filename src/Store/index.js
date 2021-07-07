import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
const UIreducer =(state = {showSearchBar : true, showPagination : true}, action) => {
     switch (action.type)
     {
          case 'hideSearchBar': 
          { 
               return {
                    showSearchBar : false,
                    showPagination : false
                    } 
          }

          default: return state
     }
}

const store = createStore(UIreducer, applyMiddleware(thunk))

export default store