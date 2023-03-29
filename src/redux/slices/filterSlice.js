import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        filteredByYear: false,
        filteredByGenre: false,
        filteredByAuthor: false,
        filterYearValue: 'default',
        filterGenresValue: [],
        filterAuthorsValue: [],
        genres: [],
        authors: [],
    },
    reducers: {
        getGenres: (state, action) => {
            if (action.payload) {
                state.genres = state.genres.concat(action.payload)
            }
        },

        getAuthors: (state, action) => {
            state.authors = state.authors.concat(action.payload)
        },

        addFilterByYear: (state, action) => {
            state.filterYearValue = action.payload
            state.filteredByYear = action.payload !== 'default'
        },

        addFilterByGenre: (state, action) => {
            state.filterGenresValue.push(action.payload)
            state.filteredByGenre = true
        },

        deleteGenres: (state) => {
            state.filterGenresValue.splice(0, state.filterGenresValue.length);
            if (!state.filterGenresValue.length) {
                state.filteredByGenre = false
            }
        },

        addFilterByAuthor: (state, action) => {
            state.filterAuthorsValue.push(action.payload)
            state.filteredByAuthor = true
        },

        deleteAuthors: (state) => {
            state.filterAuthorsValue.splice(0, state.filterAuthorsValue.length);
            if (!state.filterAuthorsValue.length) {
                state.filteredByAuthor = false
            }
        },
    },
})

export const {
    addFilterByYear,
    getGenres,
    getAuthors,
    deleteGenres,
    addFilterByGenre,
    addFilterByAuthor,
    deleteAuthors,
} = filterSlice.actions

export default filterSlice.reducer