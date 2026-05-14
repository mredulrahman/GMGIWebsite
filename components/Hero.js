"use client"
import Image from 'next/image';


function Hero() {
  return (
     <section id="hero" className="relative w-full h-screen bg-cover bg-center opacity-95 bg-no-repeat" style={{ backgroundImage: 'url(/hero/globe.jpg)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4 sm:px-12">
        <div className="max-w-5xl mx-auto">
          <Image
            src="/hero/gmgi_logo_trans_w10.png"
            alt="GMGI Solutions Ltd Logo"
            width={120}
            height={120}
            class="mx-auto md:w-[150px] md:h-[150px]"
          />
          <div className="text-3xl sm:text-5xl md:text-6xl lg:text-[4rem] text-[#00e5c0] uppercase font-bold font-[times-new-roman] bg-black/40 backdrop-blur-none rounded-2xl my-4 py-2">
            <h1 className="animate__animated animate__slideInLeft animate__delay-0.5s">GMGI Solutions Ltd</h1>
          </div>
          <p className="animate__animated animate__slideInDown animate__delay-0s text-lg sm:text-xl md:text-2xl lg:text-[2rem] text-[#00e5c0] font-semibold font-[times-new-roman] bg-black/40 backdrop-blur-none rounded-full px-4 py-2 mb-4">GeoMatics and GeoInformatics Solutions Limited</p>
          <p className="bg-black/40 backdrop-blur-none rounded-xl typewriter font-[times-new-roman] text-[#00e5c0] text-sm sm:text-lg md:text-xl px-2">A Technological Hub For Eclectic Solutions</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;