import { createSlice } from '@reduxjs/toolkit'

const playlistSlice = createSlice({
    name: 'playlist',
    initialState: { id: '1', name: 'Плейлист дня' },
    reducers: {
        getPlaylistId: (state, action) => {
            state.id = action.payload
        },
        getPlaylistName: (state, action) => {
            state.name = action.payload
        },
    },
})

export const { getPlaylistId, getPlaylistName } = playlistSlice.actions

export default playlistSlice.reducer
