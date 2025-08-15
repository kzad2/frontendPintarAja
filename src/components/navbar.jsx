
import { Link } from "react-router-dom";


function Navbar() { 
  return (
    <nav className="fixed w-full top-0 left-0
      z-50 bg-[#3F51B5] px-13 py-4 shadow-lg
      transition-all duration-300 ease-in-out">
      <div className="flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-3xl font-bold ml-4">
          <span className="text-white">Pintar</span>
          <span className="text-yellow-400">Aja</span>
        </div>

        {/* Menu */}
        <div className="flex items-center space-x-10 text-white font-medium ml-12">
          <a href="#">Tentang Kami</a>
          <a href="#">Kontak Kami</a>
          <a href="#">Konten Gratis</a>
          <a href="#">Masuk</a>
          {/* Tombol Daftar */}
          
          <Link 
          to="/register" 
          className="bg-yellow-400 text-white font-semibold rounded hover:bg-yellow-500 transition
           w-45 h-10 flex items-center justify-center">
          Daftar
        </Link>  
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
