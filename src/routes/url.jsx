import React, { use, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Ensure you have react-router-dom installed
import { axioshortener } from '../api/axios';
import { useSelector } from 'react-redux';
import { Checker } from '../server/Ckecker';
import Logout_user from './Auth/Logout';

const UrlShortener = () => {
  const [url, setUrl] = useState("https://google.com");
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState(false);

 const [value , setValue] = useState({
     full_url: "https://www.youtube.com/",
     short_url: "",
 })

 const auth = useSelector((state) => state.auth);

 console.log("ckecker cookies :");
 


const handleShorten = async() => {
       console.log(url);
    let data = await axioshortener.post(`/api/create`, {url} , {
  withCredentials: true
})
    console.log(data);
    setShortUrl(data.data);
   
} 

const handledb = async () => {
    const {full_url , short_url}= value;
   let data = await axioshortener.post("/api/create2" , {full_url , short_url} )
   console.log(data);
   setValue(""); 
}



  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 ">
        
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          🔗 URL Shorthand
        </h2>
   
        {error && <p className="text-red-500 text-center mb-4">Please log in to shorten URLs.</p>}

        <input
          type="text"
          placeholder="Enter your long URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={auth.isAuthenticated ? handleShorten : () => setError(true)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition"
        >
          Shorten URL
        </button>
      <br />

      {shortUrl && (
          <div className="mt-6 p-4 bg-green-100 text-green-700 font-medium text-center rounded-xl">
            Shortened URL: {shortUrl} <br />

          <Link to={shortUrl}> <button className='bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-xl transition'>Redirect</button></Link>
          </div>
        )}

   <br /> <hr />

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-4">Custom _Shortened URL:</h3>
          <input type="text" placeholder='enter !!' value={value.full_url} onChange={(e) => setValue({...value , full_url : e.target.value}) } className="w-full p-3 border border-gray-300 rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"/> 
            <input type="text" placeholder='enter !!' value={value.short_url} onChange={(e) => setValue({...value , short_url : e.target.value}) } className="w-full p-3 border border-gray-300 rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          <button onClick={handledb}  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition">Add to db</button>
         


      </div>
    </div>
  );
};



export default UrlShortener;
