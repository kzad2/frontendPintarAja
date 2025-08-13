import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center px-8 md:px-16 py-12 bg-white min-h-screen">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
            Belajar Skill Apapun <br />
            Bisa Menjadi Jadi Lebih <br />
            Mudah &amp; Terarah
          </h1>
          <p className="text-gray-700 max-w-md">
            Nikmati akses ke kursus video, e-book, artikel, dan modul pembelajaran
            dari mentor terbaik.</p>
        <Link 
          to="/register" 
          className="bg-yellow-400 text-white font-semibold rounded hover:bg-yellow-500 transition
           w-45 h-10 flex items-center justify-center">
          Daftar
        </Link>        
        </div>
        <div className="flex justify-center">
           <img
          src="/src/assets/notebook.png"
          alt="Gambar Tengah"
          className="w-80 h-auto rounded"
        />
        </div>
      </div>

      {/* 2 */}
       <div className="w-full h-screen bg-[#4682B4] p-20 shadow-lg flex flex-col md:flex-row items-start text-white">
      {/* text Kiri */}
      <div className="md:w-1/4 pr-8">
        <h3 className="text-2xl font-bold mb-6">Deskripsi Kiri</h3>
        <p className="text-lg leading-relaxed">
          PintarAja adalah platform pembelajaran online yang memungkinkan siapa pun untuk belajar skill baru, mengakses materi berkualitas,dan mendapatkan sertifikat setelah menyelesaikan kursus. Selain itu, anda juga dapat menjadi mentor yang memungkinkan siapa pun untuk mengajar dan membuat sebuah kursus yang bermanfaat 
          juga bisa menjadi solusi bagi para pengajar yang butuh penghasilan tetap maupun sampingan
        </p>
      </div>
      {/* Gambar Tengah */}
      <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
        <img
          src="/src/assets/notebook.png"
          alt="Gambar Tengah"
          className="w-80 h-auto rounded"
        />
      </div>
      {/* text Kanan */}
      <div className="md:w-1/4 pl-8">
        <p className="text-lg leading-relaxed">
          PintarAja adalah platform pembelajaran online yang memungkinkan siapa pun untuk belajar skill baru, 
          mengakses materi berkualitas, dan mendapatkan sertifikat setelah menyelesaikan kursus.
          Selain itu, anda juga dapat menjadi mentor yang memungkinkan siapa pun untuk mengajar dan membuat sebuah kursus
          yang bermanfaat juga bisa menjadi solusi bagi para pengajar yang butuh penghasilan tetap maupun sampingan
        </p>
          <div className="md:w-1/2 md"></div>
        </div>
      </div>
      {/* 3 */}
      <div className="bg-white py-12 px-6 text-center">
        <div className="bg-white py-12 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
          {/* Kiri */}
               <div className="bg-white shadow-lg rounded-lg p-6 w-[650px] h-[750px] flex flex-col justify-between items-center">
              {/* Bagian Atas */}
              <div className="text-center">
                <h2 className="text-2xl  text-black font-bold mb-4">Kontak Kami</h2>
                <p className="text-gray-700 mb-6 max-w-md">
                  Apakah Anda memiliki pertanyaan, saran, atau hanya ingin menyapa?
                  Jangan ragu untuk menghubungi kami melalui berbagai saluran di bawah ini.
                </p>
              </div>
              {/* Gambar */}
              <div className="flex justify-center">
                <img
                src="/src/assets/notebook.png"
                alt="Gambar Tengah"
                className="w-80 h-auto rounded"
                 />
              </div>
              {/* kontak */}
              <div className="grid grid-cols-2 gap-y-4 text-gray-700 text-sm w-full max-w-md">
                <div className="flex items-center gap-2">📞 08XX XXXX XXXX</div>
                <div className="flex items-center gap-2">📍 Jl. Bhayangkara</div>
                <div className="flex items-center gap-2">📧 pintaraja@gmail.com</div>
                <div className="flex items-center gap-2">⏰ Buka 09:00 - 14:00</div>
              </div>
            </div>
              {/* Kanan */}
              <div className="flex flex-col gap-8">
                <div className="flex justify-center">
              <img
              src="/src/assets/notebook.png"
              alt="Gambar Tengah"
              className="w-80 h-auto rounded"
            />
            </div>
            <div className="bg-white rounded shadow-lg p-8 flex flex-col items-center justify-center w-[650px] h-[283px]">
              <h3 className="text-xl font-bold mb-4">Selengkapnya...</h3>
              <button className="bg-yellow-400 text-white font-semibold px-6 py-2 rounded hover:bg-yellow-500 transition">
                Klik Di Sini
              </button>
              </div>
            </div>
            </div>
          </div>
          <div className="bg-white min-h-screen flex flex-col items-center  py-12 px-6 text-center">
              <h2 className="text-3xl  text-black font-bold mb-4 max-w-3xl">
                Semua yang Anda butuhkan untuk memulai 
                perjalanan Menjadi Pelajar maupun Mentor
                Anda ada di sini 🚀
              </h2>
              <p className="text-black max-w-2xl mb-8">
                Dapatkan situs web kursus gratis dan berbayar, buat dan jual kursus daring dan unduhan digital,
                terbitkan artikel, dan lakukan lebih banyak lagi menggunakan rangkaian alat lengkap kami
              </p>
              <h3 className="text-2xl text-black font-bold mb-2">Harga</h3>
              <p className="font-semibold text-black mb-4">Satu paket, akses tak terbatas ke semua fitur.</p>
              <p className=" text-black max-w-2xl">
                Daftar sebagai pelajar maupun mentor, dan dapat mendaftarkan diri dengan mudah.  
                Harga kursus yang anda dapatkan beragam...
              </p>
                <p className="text-black max-w-2xl">
                Harga Kursus yang anda dapatkan beragam, dan banyak sekali kursus yang membuat pembelajaran anda jauh lebih mudah dan menyenangkan. 
                Dapatkan diskon khusus saat ini untuk pelajar maupun pekerja yang ingin menambah ilmu belajar anda, semoga anda mendapatkan ilmu
                yang bermanfaat dan menjadi lebih pintar di PintarAja~
              </p>
            </div>
             <div className="bg-[#3F51B5] py-12 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
    {/* Kiri */}
    <div className="bg-[#344495] shadow-lg rounded-lg p-8 w-full max-w-[700px] h-[750px] flex flex-col text-white">
      <h2 className="text-2xl font-bold mb-6">Pelajar Manfaat</h2>
      <ul className="list-disc list-inside space-y-2 text-sm">
        <li>Akses Konten Gratis</li>
        <li>Pelajar bisa mencoba artikel, video, dan modul gratis sebelum membeli kelas.</li>
        <li>Materi Lengkap & Terstruktur</li>
        <li>Kursus berisi video, e-book, modul, dan kuis yang disusun sistematis.</li>
        <li>Belajar dari Mentor Berpengalaman</li>
        <li>Materi diajarkan oleh praktisi dan pengajar profesional.</li>
        <li>Fleksibel – Belajar Kapan Saja, Di Mana Saja</li>
        <li>Bisa diakses lewat laptop maupun ponsel, kapan pun kamu punya waktu.</li>
        <li>Progress Tracker Otomatis</li>
        <li>Sistem mencatat progres belajar secara otomatis agar pelajar tidak bingung.</li>
        <li>Sertifikat Resmi Setelah Menyelesaikan Kursus</li>
        <li>Bisa digunakan untuk melamar kerja, portofolio, atau kenaikan jabatan.</li>
        <li>Proses Pembayaran Mudah & Aman (Midtrans)</li>
        <li>Bisa bayar via QRIS, e-wallet, transfer bank, dll.</li>
        <li>Review & Komentar</li>
        <li>Bisa melihat ulasan dari pelajar lain sebelum membeli kursus.</li>
        <li>Notifikasi Update</li>
        <li>Dapat info otomatis saat ada materi baru, promo, atau pengumuman.</li>
        <li>Harga Terjangkau & Banyak Diskon</li>
        <li>Banyak kelas tersedia dengan harga bersahabat dan diskon berkala.</li>
      </ul>
    </div>

    {/* Kanan */}
    <div className="bg-[#344495] shadow-lg rounded-lg p-8 w-full max-w-[700px] h-[750px] flex flex-col text-white">
      <h2 className="text-2xl font-bold mb-6">Mentor Manfaat</h2>
      <ul className="list-disc list-inside space-y-2 text-sm">
        <li>Bisa Membuat Kursus Sendiri Secara Gratis</li>
        <li>Tidak perlu biaya awal untuk jadi mentor.</li>
        <li>Upload Materi Multi-Format</li>
        <li>Bisa mengunggah video, PDF, kuis, tugas, audio, dan lainnya.</li>
        <li>Atur Harga Kursus Sendiri</li>
        <li>Bebas menentukan nilai jual sesuai materi dan target market.</li>
        <li>Lihat Statistik & Penghasilan Real-time</li>
        <li>Bisa memantau penjualan kursus dan penghasilan dengan dashboard pribadi.</li>
        <li>Mentor Penghasilan dari Setiap Pembelian Kursus</li>
        <li>Sistem bagi hasil otomatis, mentor langsung dapat komisi.</li>
        <li>Ajukan Payout Kapan Saja</li>
        <li>Payout bisa dilakukan manual maupun otomatis via Midtrans.</li>
        <li>Pantau Perkembangan Pelajar</li>
        <li>Lihat statistik progres siswa, interaksi, dan feedback.</li>
        <li>Tinggalkan Pengumuman untuk Siswa</li>
        <li>Fitur broadcast ke semua siswa di kelas yang dibuka.</li>
        <li>Bangun Reputasi & Portofolio Digital</li>
        <li>Semakin banyak review positif, semakin dikenal di platform.</li>
        <li>Ikut Program Loyalitas Mentor</li>
        <li>Potongan platform makin kecil kalau penjualan tinggi (opsional).</li>
      </ul>
    </div>
  </div>

          </div>
            </div>
    </>
  );
}

export default App;