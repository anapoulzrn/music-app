import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        email: null,
        token: '',
        password: null,
        id: null,
        isLogin: false,
    },
    reducers: {
        setLogin: (state) => {
            state.isLogin = true
        },

        setLogout: (state) => {
            state.isLogin = false
            state.token = ''
        },

        setToken: (state, action) => {
            state.token = action.payload
        },
    }
})

export const {setLogin, setLogout, setToken} = userSlice.actions;
export default userSlice.reducer;
