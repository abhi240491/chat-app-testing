import React from 'react';
import './Login.css';
import {useStateValue} from '../../Reducer/StateProvider';
import {Button} from '@material-ui/core';
import {auth,provider} from '../../firebase'
import {actionTypes} from '../../Reducer/Reducer'
function Login() {
    const [{},dispatch] = useStateValue();
    const signIn = () =>{
        auth.signInWithPopup(provider)
        .then((result) => dispatch({
            type:actionTypes.SET_USER,
            user: result.user
        }))
        .catch((error) => alert(error.message))
    }
  return (
    <div className='login'>
        <div className='login-container'>
            <div className='login-text'>
                <h1>Sign in to the chatapp</h1>
            </div>
            <Button onClick = {signIn} type='submit' className='login-button'>
                Sign in With Google
            </Button>
        </div>
    </div>
  )
}

export default Login
