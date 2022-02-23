
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Button, Container, Form, FormControl, Alert } from 'react-bootstrap'
import { useDispatch, Provider } from 'react-redux'
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
            const res = await fetch('/user/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Authorization': 'credential' },
                body: JSON.stringify({ userCredentials })
            })
            console.log(res)
            if (res.ok) {
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

            
            <Form onSubmit={handleSubmit}>
                <FormControl
                    type='email'
                    style={{ margin: "1rem 0" }}
                    value={userCredentials.email}
                    placeholder='insert your email'
                    onChange={(e) => handleInput('email', e.target.value)}
                />
                <FormControl
                    type="password"
                    style={{ margin: "1rem 0" }}
                    value={userCredentials.password}
                    placeholder="insert your password"
                    onChange={e => handleInput('password', e.target.value)}
                />
                <Button className='btn btn-primary'
                    type="submit"
                    variant="contained"
                    style={{ margin: "1rem 0" }}
                >
                    Login
                </Button>

            </Form>
            <Button className='btn btn-primary'
                type="submit"
                variant="link"
                style={{ margin: "1rem 0" }}
            >
                Create Account
            </Button>
        </Container>
    )
}

export default Login