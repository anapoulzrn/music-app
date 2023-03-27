import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useRefreshTokenMutation } from '../api/musicApi'
import { setLogin, setLogout, setToken } from '../store/slices/authSlice'

export default function refreshToken() {
    const dispatch = useDispatch()

    const tokenCookie = document.cookie.split(';')[1].split('=')[1]

    const [getToken, { data, isSuccess, isError }] = useRefreshTokenMutation()

    useEffect(() => {
        if (tokenCookie) {
            getToken({ refresh: tokenCookie })

            dispatch(setLogin())
            setInterval(() => {
                getToken({ refresh: tokenCookie })
            }, 60000)

            if (isError) {
                document.cookie = 'token=; max-age=-1'
                document.cookie = 'username=; max-age=-1'
                setTimeout(() => {
                    dispatch(setLogout())
                }, 2000)
            }
        }
    }, [])

    useEffect(() => {
        if (isSuccess) {
            dispatch(setToken(data?.access))
        }
    }, [data])
}