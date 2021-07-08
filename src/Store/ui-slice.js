import { createSlice } from '@reduxjs/toolkit'
const uiSlice = createSlice(
     {
          name: 'ui',
          initialState: {dateIsVisible: true},
          reducers: {
               toggle(state)
               {
                    state.dateIsVisible =!state.dateIsVisible
               }
          }
     }
)
export const uiActions = uiSlice.actions
export default uiSlice