import React, { useEffect, useState } from 'react';
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { LucideChrome } from 'lucide-react'; 
import educator from '../../assets/educator_6dgp.svg'; 

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCredentialResponse = async (response) => {
    setIsLoading(true);
    setError('');
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
      setError('Login Google gagal: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // const backendUrl = "http://localhost:8000/api/register";

    try {
        // const res = await fetch(backendUrl, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ name, email, password }),
        // });

        // const data = await res.json();

        // if (!res.ok) {
        //     throw new Error(data.message || 'Pendaftaran gagal.');
        // }

        // console.log('Pendaftaran berhasil:', data);
        // alert('Pendaftaran berhasil! Silakan cek email Anda untuk verifikasi.');
        // Mungkin redirect ke halaman login
        // window.location.href = '/login';

    } catch (error) {
        console.error('Error saat pendaftaran:', error);
        setError('Pendaftaran gagal: ' + error.message);
    } finally {
        setIsLoading(false);
    }
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
          {/* Menggunakan placeholder karena file svg tidak tersedia */}
          <Link to="/" className="">
            <img
              src={educator}
              alt="Educator"
              className="w-full h-auto rounded-lg"
            />
          </Link>
        </div>

        {/* Kolom Kanan - Formulir */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Daftar
          </h2>

          {/* Tampilkan pesan error jika ada */}
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded relative mb-4" role="alert">
              <span className="block sm:inline">{error}</span>
            </div>
          )}

          {/* Form Pendaftaran Email */}
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

          <div className="w-75 mx-auto h-[40px]">
            <div id="google-login-button" className=''></div>
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
