import { createSlice } from "@reduxjs/toolkit";

const registerState = {
    user: {}
}


const slice = createSlice({
    initialState: registerState,
    reducers: {
        setUser: (state, user) => {
            state.user = user.payload

        }
    }
})



export default slice