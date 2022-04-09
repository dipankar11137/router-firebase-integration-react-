import React from 'react';
import useFirebase from '../Hooks/useFirebase';

const Login = () => {
    const { signInWithGoogle } = useFirebase();
    return (
        <div>
            <h3 className='fw-bold mt-3'>Please Login</h3>
            <div className='p-3'>
                <button onClick={signInWithGoogle}>Google Sign In</button>
            </div>

            <form >
                <input type="email" name="" id="" placeholder='Your Email' />
                <br />
                <input className='mt-2' type="password" name="" id="" placeholder='Password' />
                <br />
                <input className='mt-2' type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;