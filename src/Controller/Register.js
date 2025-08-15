import React, { useEffect, useState } from 'react';
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { LucideChrome } from 'lucide-react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleCredentialResponse = async (response) => {
    setIsLoading(true);
    const idToken = response.credential;
    console.log("ID Token dari Google:", idToken);

    const backendUrl = "http://localhost:8000/api/auth/google";

    try {
      const res = await fetch(backendUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: idToken }),
      });

      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.error || 'Autentikasi Google gagal.');
      }

      console.log('Respons dari Laravel:', data);
      
      if (data.token) {
        localStorage.setItem('authToken', data.token);
        alert('Login Google berhasil! Token disimpan.');
        // window.location.href = '/dashboard';
      }
    } catch (error) {
      console.error('Error saat autentikasi Google:', error);
      alert('Login Google gagal: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log('Mencoba daftar dengan email:', { name, email, password });
    
    // const backendUrl = "http://localhost:8000/api/register";
    // fetch(backendUrl, ...)
    
    // Simulasi selesai
    setTimeout(() => {
      setIsLoading(false);
      alert('Pendaftaran berhasil! Silakan masuk.');
    }, 1500);
  };

  useEffect(() => {
    if (window.google) {
      window.google.accounts.id.initialize({
        client_id: "http://274681415059-opiv3vajfmfq45s35d3a79n3no3u9vt8.apps.googleusercontent.com",
        callback: handleCredentialResponse,
      });

      window.google.accounts.id.renderButton(
        document.getElementById("google-login-button"),
        { theme: "outline", size: "large", text: "signup_with", shape: "pill" }
      );
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#B3BEF6] to-[#B3BEF6] font-[Inter]">
      <div className="bg-white shadow-lg rounded-lg flex overflow-hidden max-w-4xl w-full mx-4 sm:mx-8 md:mx-auto">
        <div className="hidden md:flex w-1/2 bg-[#3F51B5] items-center justify-center p-8">
          <img
            src="https://placehold.co/400x400/3F51B5/FFFFFF?text=Educator"
            alt="Educator"
            className="w-full h-auto rounded-lg"
          />
        </div>

        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Daftar
          </h2>

          <form className="space-y-4" onSubmit={handleFormSubmit}>
            <div className="max-w-[300px] mx-auto">
              <label className="block text-gray-700 mb-1">Nama</label>
              <input
                type="text"
                placeholder="Nama"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full h-[40px] px-3 border border-black rounded-lg text-black focus:outline-none focus:ring-1 focus:ring-[#3F51B5]"
                required
              />
            </div>
            <div className="max-w-[300px] mx-auto">
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-[40px] px-3 border border-black rounded-lg text-black focus:outline-none focus:ring-1 focus:ring-[#3F51B5]"
                required
              />
            </div>
            <div className="max-w-[300px] mx-auto">
              <label className="block text-gray-700 mb-1">Password</label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-[40px] px-3 border border-black rounded-lg text-black focus:outline-none focus:ring-1 focus:ring-[#3F51B5]"
                required
              />
            </div>
            <div className="max-w-[300px] mx-auto">
              <button
                type="submit"
                className="w-full h-[40px] bg-[#3F51B5] text-white rounded-lg hover:bg-blue-700 transition"
                disabled={isLoading}
              >
                {isLoading ? 'Loading...' : 'Daftar'}
              </button>
            </div>
          </form>

          <div className="my-4 flex items-center">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-gray-500">Atau</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <div className="max-w-[300px] mx-auto">
            <div id="google-login-button" className="flex justify-center"></div>
          </div>

          <p className="mt-4 text-center text-gray-600">
            Sudah punya akun?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Masuk sekarang
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};


export default Register;