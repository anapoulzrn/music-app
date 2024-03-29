import { createSlice } from '@reduxjs/toolkit'

const playerSlice = createSlice({
    name: 'player',
    initialState: {
        showPlayer: false,
        isPlaying: false,
        currentTrackLink: '',
        isCurrentTrackLiked: false,
        id: 32,
        ids: [],
        isShuffle: false,
        isRepeat: false,
        volume: 0.3,
        time: 0
    },
    reducers: {
        play: (state, action) => {
            state.isPlaying = action.payload
            state.showPlayer = true
        },

        getCurrentTrack: (state, action) => {
            state.currentTrackLink = action.payload
        },

        getTrackId: (state, action) => {
            state.id = action.payload
        },

        getTracksId: (state, action) => {
            state.ids.push(Number(action.payload))
        },

        clearTracksId: (state) => {
            state.ids = []
        },

        playNextTrack: (state, action) => {
            if (state.ids.indexOf(state.id) > state.ids.length) {
                state.id = state.ids[0]
            }
            state.id = state.ids[action.payload + 1]
        },

        playPrevTrack: (state, action) => {
            state.id = state.ids[action.payload - 1]
        },

        shuffleTracks: (state) => {
            state.isShuffle = true
            for (let i = state.ids.length - 1; i > 0; i -= 1) {
                const j = Math.floor(Math.random() * (i + 1))
                ;[state.ids[i], state.ids[j]] = [state.ids[j], state.ids[i]]
            }
        },

        sortTracks: (state) => {
            state.isShuffle = false
            state.ids = state.ids.sort((a, b) => a - b)
        },

        repeatTrack: (state) => {
            state.isRepeat = !state.isRepeat
        },

        setVolume: (state, action) => {
            state.volume = action.payload
        },

        setTime: (state, action) => {
            state.time = action.payload
        },
    },
})

export const {
    setVolume,
    setTime,
    play,
    getCurrentTrack,
    getTrackId,
    getTracksId,
    clearTracksId,
    playNextTrack,
    playPrevTrack,
    shuffleTracks,
    sortTracks,
    repeatTrack,
} = playerSlice.actions

export default playerSlice.reducer