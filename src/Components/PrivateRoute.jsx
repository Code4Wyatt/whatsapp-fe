import {useSelector, useDispatch} from 'react-redux'
import { Navigate } from 'react-router-dom'
import {setUserInfo} from '../redux/actions'


export default function PrivateRoute({children}){
    const dispatch = useDispatch()
    const isLogged = useSelector(state => state.user.isLoggedIn)
    const currentUser = useSelector(state => state.user.currentUser)
    const userId = currentUser.id
    const URL = process.env.REACT_APP_BE_URL
    const getMe = async () =>{
        try {
            const res = await fetch (`${URL}/${userId}`)
            if(res.ok){
                console.log(res)
                const profile = res.json();
                console.log(profile);
                dispatch(setUserInfo(profile))
            }else{
                alert("profile not found")
            }

        } catch (error) {
            alert("bad requet to the server")
        }
          }

if(isLogged) getMe()
return isLogged ? children:<Navigate to="/login" />

}