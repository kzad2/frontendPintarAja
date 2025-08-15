import { Phone, MapPin, Mail, Clock, Check, ChevronDown, Play, Star } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const testimonials = [
    {
      id: 1,
      name: "Mini Bhaskar",
      role: "MA Psychology",
      image: "/api/placeholder/80/80",
      title: "Thank You PintarAja for making my dream come true!!",
      content: "PintarAja telah membantu saya mencapai impian untuk menjadi seorang psikolog. Materinya sangat lengkap dan mudah dipahami.",
      video: true
    },
    {
      id: 2,
      name: "Anagha",
      role: "MA Psychology", 
      image: "/api/placeholder/80/80",
      title: "Pembelajaran yang sangat terstruktur dan mudah dipahami",
      content: "Saya sangat terbantu dengan platform ini. Mentor-mentornya sangat berpengalaman dan selalu siap membantu.",
      video: true
    },
    {
      id: 3,
      name: "Keerthi",
      role: "BA Psychology",
      image: "/api/placeholder/80/80", 
      title: "Platform terbaik untuk belajar online",
      content: "Fleksibilitas belajar di PintarAja memungkinkan saya untuk tetap bekerja sambil kuliah. Sangat recommended!",
      video: true
    }
  ];

  const faqs = [
    {
      question: "Apa itu PintarAja?",
      answer: "PintarAja adalah platform pembelajaran online yang menyediakan berbagai kursus dan pelatihan untuk mengembangkan skill dan pengetahuan. Platform ini menghubungkan pelajar dengan mentor terbaik di berbagai bidang."
    },
    {
      question: "Untuk siapa PintarAja dirancang?",
      answer: "PintarAja dirancang untuk siapa saja yang ingin belajar skill baru, mulai dari pelajar, mahasiswa, pekerja, hingga profesional yang ingin mengembangkan karir mereka. Platform ini juga terbuka untuk para ahli yang ingin menjadi mentor."
    },
    {
      question: "Apa saja program yang tersedia?",
      answer: "Kami menyediakan berbagai program mulai dari teknologi, bisnis, desain, bahasa, hingga pengembangan diri. Setiap program dilengkapi dengan video pembelajaran, e-book, artikel, dan sertifikat resmi."
    },
    {
      question: "Apa saja fitur utama PintarAja?",
      answer: "Fitur utama meliputi kelas interaktif, mentor berpengalaman, sertifikat resmi, komunitas pembelajar aktif, akses seumur hidup ke materi, dan dukungan teknis 24/7."
    },
    {
      question: "Siapa yang ada di balik PintarAja?",
      answer: "PintarAja didukung oleh tim ahli pendidikan dan teknologi yang berpengalaman lebih dari 10 tahun dalam industri e-learning dan pengembangan platform digital."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
      {/* Hero Section */}
      <div 
        className="grid grid-cols-1 md:grid-cols-2 items-center px-4 md:px-16 py-12 bg-white min-h-screen"
        style={{
          backgroundImage: "url('/src/assets/bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center", 
        }}
      >
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
            Belajar Skill Apapun <br />
            Bisa Menjadi Jadi Lebih <br />
            Mudah &amp; Terarah
          </h1>
          <p className="text-gray-700 max-w-md text-lg">
            Nikmati akses ke kursus video, e-book, artikel, dan modul pembelajaran
            dari mentor terbaik.
          </p>
          <button className="bg-yellow-400 text-white font-semibold rounded-lg hover:bg-yellow-500 transition-all duration-300 px-8 py-3 shadow-lg hover:shadow-xl transform hover:scale-105">
            Daftar Sekarang
          </button>        
        </div>
        <div className="flex justify-center">
          <img
            src="/src/assets/undraw_online-learning_tgmv.svg"
            alt="Pembelajaran Online"
            className="w-80 h-auto rounded drop-shadow-lg"
          />
        </div>
      </div>

      {/* About Section */}
      <div className="w-full min-h-screen bg-[#3F51B5] px-4 md:px-16 lg:px-16 py-16 flex flex-col items-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Tentang Kami</h2>
        
        <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
          {/* Text Kiri */}
          <div className="flex-1 lg:max-w-sm">
            <p className="text-base md:text-lg leading-relaxed text-justify">
              PintarAja adalah platform pembelajaran online yang memungkinkan siapa pun 
              untuk belajar skill baru, mengakses materi berkualitas, dan mendapatkan 
              sertifikat setelah menyelesaikan kursus. Selain itu, anda juga dapat menjadi 
              mentor yang memungkinkan siapa pun untuk mengajar dan membuat sebuah kursus 
              yang bermanfaat juga bisa menjadi solusi bagi para pengajar yang butuh 
              penghasilan tetap maupun sampingan.
            </p>
          </div>
          
          {/* Ilustrasi Tengah */}
          <div className="flex-shrink-0 flex justify-center items-center">
            <img
              src="/src/assets/undraw_features-overview_uone.svg"
              alt="Ilustrasi Overview"
              className="w-80 h-auto drop-shadow-lg"
            />
          </div>
          
          {/* Text Kanan */}
          <div className="flex-1 lg:max-w-sm lg:pt-24">
            <p className="text-base md:text-lg leading-relaxed text-justify">
              Platform kami menyediakan berbagai fitur unggulan seperti kelas interaktif,
              mentor berpengalaman, sertifikat resmi, dan komunitas pembelajar yang aktif.
              Bergabunglah dengan ribuan siswa dan mentor yang telah merasakan manfaatnya
              dalam mengembangkan karir dan skill mereka.
            </p>
          </div>
        </div>
      </div>


      {/* Contact Section */}
      <div className="w-full bg-gray-50 py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Card Kiri - Kontak Kami */}
          <div className="bg-white shadow-xl rounded-lg p-8">
            <div className="mb-6">
              <h2 className="text-3xl text-black font-bold mb-4">Kontak Kami</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                Apakah Anda memiliki pertanyaan, saran, atau hanya ingin menyapa? 
                Jangan ragu untuk menghubungi kami melalui berbagai saluran di bawah ini.
              </p>
            </div>

            {/* Ilustrasi Contact Us */}
            <div className="flex justify-center mb-8">
              <img
                src="/src/assets/undraw_contact-us_kcoa.svg"
                alt="Contact Us Illustration"
                className="w-100 h-auto"
              />
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <span className="text-sm">08XX XXXX XXXX</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="text-sm">Jl. Bhayangkara</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <span className="text-sm">pintaraja@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-blue-600" />
                <span className="text-sm">Buka 09:00 - 14:00</span>
              </div>
            </div>
          </div>

          {/* Bagian Kanan */}
          <div className="flex flex-col gap-8">
            {/* Ilustrasi Mobile App */}
            <div className="flex justify-center">
              <img
                src="/src/assets/undraw_personal-email_hfut.svg"
                alt="Mobile App Illustration"
                className="w-85 h-auto"
              />
            </div>

            {/* Card Selengkapnya */}
            <div className="bg-white shadow-xl border-2 border-gray-100 rounded-lg p-8 flex flex-col items-center justify-center min-h-[200px]">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Selengkapnya...</h3>
              <button className="bg-yellow-400 text-white font-semibold px-8 py-3 rounded-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Klik Di Sini
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-white min-h-screen flex flex-col items-center justify-center py-16 px-4 text-center">
        <h2 className="text-4xl md:text-5xl text-black font-bold mb-6 max-w-4xl leading-tight">
          Semua yang Anda butuhkan untuk memulai 
          perjalanan Menjadi Pelajar maupun Mentor
          Anda ada di sini 🚀
        </h2>
        <p className="text-gray-700 text-lg max-w-3xl mb-12 leading-relaxed">
          Dapatkan situs web kursus gratis dan berbayar, buat dan jual kursus daring dan unduhan digital,
          terbitkan artikel, dan lakukan lebih banyak lagi menggunakan rangkaian alat lengkap kami
        </p>
        
        <div className="mb-8">
          <h3 className="text-3xl text-black font-bold mb-4">Harga</h3>
          <p className="font-semibold text-xl text-gray-800 mb-6">Satu paket, akses tak terbatas ke semua fitur.</p>
        </div>
        
        <div className="max-w-4xl space-y-4 text-gray-700 leading-relaxed">
          <p>
            Daftar sebagai pelajar maupun mentor, dan dapat mendaftarkan diri dengan mudah.  
            Harga kursus yang anda dapatkan beragam dan terjangkau untuk semua kalangan.
          </p>
          <p>
            Harga Kursus yang anda dapatkan beragam, dan banyak sekali kursus yang membuat pembelajaran anda jauh lebih mudah dan menyenangkan. 
            Dapatkan diskon khusus saat ini untuk pelajar maupun pekerja yang ingin menambah ilmu belajar anda, semoga anda mendapatkan ilmu
            yang bermanfaat dan menjadi lebih pintar di PintarAja~
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-[#3F51B5] py-16 px-4 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Manfaat Pelajar */}
          <div className="bg-[#344495] shadow-xl rounded-lg p-8 text-white">
            <h2 className="text-3xl font-bold mb-8 text-center">Manfaat Pelajar</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-2">Akses Konten Gratis</h4>
                  <p className="text-gray-200">Pelajar bisa mencoba artikel, video, dan modul gratis sebelum membeli kelas.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-2">Sertifikat Resmi</h4>
                  <p className="text-gray-200">Dapatkan sertifikat yang diakui setelah menyelesaikan kursus.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-2">Pembelajaran Fleksibel</h4>
                  <p className="text-gray-200">Belajar kapan saja dan dimana saja sesuai jadwal Anda.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-2">Komunitas Aktif</h4>
                  <p className="text-gray-200">Bergabung dengan komunitas pembelajar yang saling mendukung.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Manfaat Mentor */}
          <div className="bg-[#344495] shadow-xl rounded-lg p-8 text-white">
            <h2 className="text-3xl font-bold mb-8 text-center">Manfaat Mentor</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-2">Penghasilan Tambahan</h4>
                  <p className="text-gray-200">Dapatkan penghasilan tetap atau sampingan dari kursus yang Anda buat.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-2">Platform Mudah</h4>
                  <p className="text-gray-200">Tools yang mudah digunakan untuk membuat dan mengelola kursus.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-2">Jangkauan Luas</h4>
                  <p className="text-gray-200">Akses ke ribuan siswa potensial di seluruh Indonesia.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-2">Support Marketing</h4>
                  <p className="text-gray-200">Bantuan promosi dan marketing untuk meningkatkan penjualan kursus.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-white py-16 px-4 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">PintarAja Impressions</h2>
            <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              see more
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
                {/* Video Thumbnail */}
                <div className="relative bg-black h-48 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
                  <Play className="w-16 h-16 text-white opacity-80" />
                  <div className="absolute top-4 left-4 text-white">
                    <span className="text-sm opacity-75">Alumni Talks</span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full border-2 border-white object-cover"
                    />
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                        <span className="text-xs font-bold text-white">{String(index + 6).padStart(2, '0')}</span>
                      </div>
                      <span className="text-2xl font-bold">{String(index + 6).padStart(2, '0')}</span>
                    </div>
                    <p className="text-sm">{testimonial.name}</p>
                    <p className="text-xs opacity-75">{testimonial.role}</p>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-gray-800">
                    {testimonial.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {testimonial.content}
                  </p>
                  <div className="mt-4 text-sm text-gray-500">
                    Alumni Talks
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-16 px-4 lg:px-16">
        <div className="max-w mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">
              Frequently Asked Questions (FAQs)
            </h2>
            <button className="text-blue-600 font-semibold hover:underline flex items-center gap-2">
              View all <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-semibold text-gray-800 text-lg">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openFAQ === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <div className="pt-2 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;