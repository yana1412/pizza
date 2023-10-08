import { createSlice } from "@reduxjs/toolkit"
import { act } from "react-dom/test-utils"
const initialState = {
    category: 0,
    sort: [
        'популярности',
        'цене',
        'алфавиту'
    ]
}


const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategoryId(state, action){
            console.log(action)
            state.categoryId = action.payload
        }
    }
})

export const { setCategoryId} = filterSlice.actions

export default filterSlice.reducer