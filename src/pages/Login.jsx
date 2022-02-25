import {FcGoogle} from 'react-icons/fc'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Container, Form, FormControl, Alert } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { userLoginAction } from '../redux/actions'

const Login =()=> {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [userCredentials, setUserCredentials] = useState({
        email: '',
        password: ''
    })
    const [loginError, setLoginError] = useState({
        email: false,
        password: false
    })

    const [invalidCredential, setInvalidCredentials]= useState(false)


    const [userError, setUserError] = useState(false)

    const handleInput = (field, value) => {
        setUserCredentials(credentials => ({
            ...credentials,
            [field]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setUserError(false)
        setLoginError({ email: false, password: false })

        if (!userCredentials.email) setLoginError(errors => ({ ...errors, email: true }))
        if (!userCredentials.password) setLoginError(errors => ({ ...errors, password: true }))
        if (!userCredentials.password || !userCredentials.email) setUserError(true )

        try {
            const res = await fetch(`${process.env.REACT_APP_BE_URL}/users/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'
            },
                body: JSON.stringify({ userCredentials })
            })
            console.log("res from login", res)
            if (res.ok) {
                //res.userId
                dispatch(userLoginAction())
                navigate('/')
            } else {
                setInvalidCredentials(true)
                console.log("invalid detail")
            }
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <Container style={{ minHeight: '98vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {userError && <Alert variant="alert">Please enter credentials</Alert>}
            {invalidCredential && <Alert variant="warning">Invalid credentials</Alert>}
            
            
            <h2 style={{marginRight:'2rem', color:'green', fontWeight:'bold'}}>Whatsapp Login</h2>
            
            <Form onSubmit={handleSubmit}>
                <FormControl
                    type='email'
                    style={{ margin: "1rem 0" }}
                    value={userCredentials.email}
                    placeholder='email'
                    onChange={(e) => handleInput('email', e.target.value)}
                />
                <FormControl
                    type="password"
                    style={{ margin: "1rem 0" }}
                    value={userCredentials.password}
                    placeholder="password"
                    onChange={e => handleInput('password', e.target.value)}
                />
                <input className='btn btn-primary'
                    type="submit"
                    variant="contained"
                    style={{ margin: "1rem 0" }}
                   value="Login"                 >
                    
                </input>
<a href="http://localhost:3001/users/googleLogin" style={{marginLeft: "1rem"}}><FcGoogle />Login with Google</a>
            </Form>
                            
            
        </Container>
    )
}

export default Login