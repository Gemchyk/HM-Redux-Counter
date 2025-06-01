import {createSlice} from '@reduxjs/toolkit'; 

const initialState = 0;



const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incValue: (state, action) => {
            state += 1;
            return state;
        },
        decValue: (state, action) => {
            state -= 1;
            return state;
        },

    }

});

export const {incValue} = counterSlice.actions;
export const {decValue} = counterSlice.actions;

export default counterSlice.reducer;