import { createSlice } from '@reduxjs/toolkit'

const loadingSlice = createSlice({
    name: 'loading',
    initialState: {
        allLoaded: false,
        coinLoaded: false,
        userLoaded: false,
    },
    reducers: {
        loadCoin: (state) => {
            state.coinLoaded = true;
            if (state.userLoaded && state.coinLoaded) {
                state.allLoaded = true;
            }
        },
        loadUser: (state) => {
            state.userLoaded = true;
            if (state.userLoaded && state.coinLoaded) {
                state.allLoaded = true;
            }
        }
    }
})

export const { loadCoin,loadUser } = loadingSlice.actions
export default loadingSlice.reducer