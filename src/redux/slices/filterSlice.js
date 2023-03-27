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

        filterByYear: (state, action) => {
            state.filterYearValue = action.payload
            state.filteredByYear = action.payload !== 'default'
        },

        addFilterByGenre: (state, action) => {
            state.filterGenresValue.push(action.payload)
            state.filteredByGenre = true
        },

        deleteGenres: (state, action) => {
            state.filterGenresValue = state.filterGenresValue.filter(
                (genre) => genre !== action.payload
            )
            if (!state.filterGenresValue.length) {
                state.filteredByGenre = false
            }
        },

        addFilterByAuthor: (state, action) => {
            state.filterAuthorsValue.push(action.payload)
            state.filteredByAuthor = true
        },

        deleteAuthors: (state, action) => {
            state.filterAuthorsValue = state.filterAuthorsValue.filter(
                (author) => author !== action.payload
            )
            if (!state.filterAuthorsValue.length) {
                state.filteredByAuthor = false
            }
        },
    },
})

export const {
    filterByYear,
    getGenres,
    getAuthors,
    deleteGenres,
    addFilterByGenre,
    addFilterByAuthor,
    deleteAuthors,
} = filterSlice.actions

export default filterSlice.reducer