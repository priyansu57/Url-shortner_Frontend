import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { isLogin, isLogout } from '../../store/authSlice';
import { Logout } from '../../server/logout';

function Logout_user() {

 const dispatch = useDispatch();
const auth = useSelector((state) => state.auth.isAuthenticated);

    return (
        <div>
            {auth ? (
                <button onClick={() => { dispatch(isLogout()); Logout(); }}>Logout</button>
            ) : (
                <button onClick={() => dispatch(isLogin())}>Login</button>
            )}
        </div>
    )
}

export default Logout_user
