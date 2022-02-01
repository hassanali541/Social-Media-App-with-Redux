import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', title: 'First Post', content: 'This is my First Post! Technically, “Some data are missing.” is correct because “data” is the plural of “datum”, which means a piece of information. So several pieces of information (datum) are called data' },
  { id: '2', title: 'Second Post', content: 'This is my Second Post!  Technically, “Some data are missing.” is correct because “data” is the plural of “datum”, which means a piece of information. So several pieces of information (datum) are called data' }
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
      postAdded(state , action){
          state.push(action.payload)
      }
  }
})

export const {postAdded} = postsSlice.actions

export default postsSlice.reducer