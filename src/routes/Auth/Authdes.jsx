import React from 'react'
import LoginForm from './LoginForm';
import RegisterForm from './Registerlogin';
import { useState } from 'react';

function Authdes() {
     const [loading, setLoading] = useState(true);
    return (
              loading ? <LoginForm setLoading={setLoading} /> : <RegisterForm setLoading={setLoading} />
    )
}

export default Authdes
