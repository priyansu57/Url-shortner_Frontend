
import React, { use, useState } from 'react';
import { Login } from '../../server/Login';
import { useDispatch, useSelector } from 'react-redux';
import { isLogin } from '../../store/authSlice';
import { Link, NavLink, useNavigate } from 'react-router-dom';

function LoginForm({ setLoading }) {
  const [email, setEmail] = useState("sum@gmail.com");
  const [password, setPassword] = useState("suman1234");
  const [error, setError] = useState("");
  const [loading, setLoadingState] = useState(false);

  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  console.log("Auth state:", auth);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Login({ email, password }); 
       const { token } = response.data;

      console.log( "checker of token :" ,response.data.user.name);
       dispatch(isLogin({ user: response.data.user.name }));
      console.log("Login successful:", response.data.user);

      navigate('/'); // Redirect to home page after login
      setLoadingState(true);
      setError("Login successful!");
    } catch (err) {
      console.error(err);
      setError("❌ Invalid email or password");
    }
  };

  if (loading) {  
    <h1>Load...</h1>
  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md transition-all duration-300 hover:shadow-purple-300">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          🔐 Login to Your Account
        </h2>
        <div className="space-y-5">
          <div>
            <label className="block mb-1 text-gray-700 font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setError(""); }}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700 font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(""); }}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
              placeholder="Enter your password"
              required
            />
          </div>
          {error && (
            <p className="text-red-600 text-sm font-medium text-center">{error}</p>
          )}
         
            <button 
                type="submit"
                className={`w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-600 hover:to-blue-600
                text-white font-semibold py-3 rounded-xl transition-transform transform hover:scale-105`}
                onClick={handleSubmit}
              > 
                Login
                
           </button>

        </div>
        <p className="text-sm text-center text-gray-500 mt-6">
          Don't have an account? <span className="text-blue-600 hover:underline cursor-pointer" onClick={() => setLoading(false)}> <Link to="/register">Sign up</Link></span>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
