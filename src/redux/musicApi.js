import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const musicApi = createApi({
    reducerPath: 'musicApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://painassasin.online/',
        prepareHeaders: (headers, { getState }) => {
            const { token } = getState().user
            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }
            return headers
        },
    
    }),
    endpoints: (build) => ({
        getAllTracks: build.query({
            query: () => ({
                url: '/catalog/track/all',

            }),
            providesTags: ['Tracks'],
        }),

        getTrackById: build.query({
            query: (id) => ({
                url: `/catalog/track/${id}`,
            }),
            providesTags: ['Tracks'],
        }),

        getPlaylistById: build.query({
            query: (id) => ({
                url: `/catalog/selection/${id}`,
            }),
            providesTags: ['Tracks'],
            
        }),

        getFavoriteTracks: build.query({
            query: () => ({
                url: '/catalog/track/favourite/all/',
            }),
            providesTags: ['Tracks'],
        }),
        
        userSignup: build.mutation({
            query: ({ ...payload }) => ({
                url: '/user/signup/',
                method: 'POST',
                body: payload,
            }),
        }),

        userLogin: build.mutation({
            query: ({ ...payload }) => ({
                url: '/user/login/',
                method: 'POST',
                body: payload,
            }),
        }),

        getToken: build.mutation({
            query: ({ ...payload }) => ({
                url: '/user/token/',
                method: 'POST',
                body: payload,
            }),
        }),

        refreshToken: build.mutation({
            query: ({ ...payload }) => ({
                url: '/user/token/refresh/',
                method: 'POST',
                body: payload,
            }),
        }),

        addFavoriteTrack: build.mutation({
            query: (payload) => ({
                url: `/catalog/track/${payload}/favorite/`,
                method: 'POST',
            }),
            invalidatesTags: ['Tracks'],
        }),

        deleteFavoriteTrack: build.mutation({
            query: (payload) => ({
                url: `/catalog/track/${payload}/favorite/`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Tracks'],
        }),
    })
})

export const { 
    useGetAllTracksQuery, 
    useGetTrackByIdQuery,
    useGetPlaylistByIdQuery,
    useGetFavoriteTracksQuery,
    useGetTokenMutation, 
    useUserLoginMutation, 
    useUserSignupMutation, 
    useRefreshTokenMutation,
    useAddFavoriteTrackMutation,
    useDeleteFavoriteTrackMutation
 } = musicApi;