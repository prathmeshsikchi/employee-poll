import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import {_getQuestions, _getUsers} from '../_DATA'

const initialState = {
    user : {},
    isLogged : false,
    question:{}
}

export const logIn = createAsyncThunk("login", async (data) => {

    const res = await _getUsers()
    return res;
})

export const getQuestions = createAsyncThunk("questions", async() => {
    const res = await _getQuestions()
    return res;
})

export const authenticateSlice = createSlice({
    name : "authenticate",
    initialState,
    reducers : {
        logOut : (state, action) => {
            state.isLogged = false
            state.user = {}
        }
    },
    extraReducers: (builder) => {
        builder.addCase(logIn.fulfilled, (state,action) => {
            const username = action.meta.arg.username
            const data = action.payload
            console.log(data)
            if( data.hasOwnProperty(username) ){
                if(data[username].password === action.meta.arg.password){
                    state.isLogged = true
                    state.user = data[username]
                    console.log(state.isLogged)
                }
            }
        })

        builder.addCase(getQuestions.fulfilled, (state, action) => {
            state.question = action.payload
        })
    }
})

export const  {logOut} = authenticateSlice.actions

export default authenticateSlice.reducer