import { createStore } from 'redux'
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

const store = createStore(UIreducer)

export default store