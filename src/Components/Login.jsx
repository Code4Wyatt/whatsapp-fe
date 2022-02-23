
import { useNavigate } from 'react-router-dom'
import { useState, FormEvent } from 'react'
import { Button, Container, Form,FormControl } from 'react-bootstrap'
 

export default function Login() {


    const [userCredentials, setUserCredentials] = useState({
        email: '',
        password: ''
    })
    const [loginError, setLoginError] = useState({
        email: false,
        password: false
    })

    const handleInput = (field, value) => {
        setUserCredentials(credentials => ({
            ...credentials,
            [field]: value
        }))
    }

    
        // if (!userCredentials.email) setLoginError(errors => ({ ...errors, email: true }))
        // if (!userCredentials.password) setLoginError(errors => ({ ...errors, password: true }))


    return (
    <Container style={{ minHeight: '98vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
       <Form>
                    
                    <FormControl 
                        type='email' 
                        style={{ margin: "1rem 0"}}
                        value={userCredentials.email}
                        placeholder='insert your email'
                        onChange={(e) => handleInput('email', e.target.value)}
                    />
                    <FormControl 
                        type="password" 
                        style={{ margin: "1rem 0"}}
                        value={userCredentials.password }
                        placeholder="insert your password"
                        onChange={e => handleInput('password', e.target.value)}
                    />
                    <Button className='btn btn-primary' 
                        type="submit"
                        variant="contained" 
                        style={{ margin: "1rem 0"}}
                    >
                        Login
                    </Button>
                    </Form>
        
    </Container>
    )
    }

