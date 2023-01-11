import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    uid: ''
}

const detailUserSlice = createSlice({
    name: 'detailUser',
    initialState,
    reducers: {
        selecUser: (state, action) => {
            state.uid = action.payload;
            localStorage.setItem('emailUser', state.email);
        }
    }
})

export const { selecUser } = detailUserSlice.actions;
export default detailUserSlice.reducer
