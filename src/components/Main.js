import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from '../Assets/logo.jpeg';

export default function Main() {
  useEffect(() => {
    AOS.init({ duration: 2200 });
    AOS.refresh();
  });
  return (
    <div className="App bg-[#0a192f]">
      <h1
        data-aos="fade-down"
        className="pt-10 pb-2 text-3xl text-center font-lato font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-100 to-red-900 mb-4"
      >
        Pernikahan
      </h1>
      <h1
        data-aos="zoom-in-up"
        className="text-3xl text-center font-lato font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-100 to-red-900 mb-4"
      >
        Erfi & Frendi
      </h1>
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="flex flex-col justify-center items-center p-4"
      >
        <img
          className="w-1/4 h-1/4 object-cover rounded-sm"
          src={logo}
          alt="images"
        />
      </div>
      <div data-aos="fade-up">
        <div data-aos="fade-up" className="text-center">
          <h1 className="text-green-300 text-xl m-2">
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيْم.
          </h1>
          <h2 className="text-white font-bold">
            Assalamualaikum warahmatullahi wabarakatuh
          </h2>
          <h1 className="text-white">
            Dengan memohon Ridho dan rahmat Allah SWT, kami bermaksud
            menyelenggarakan Syukuran Pernikahan putra putri kami
          </h1>
        </div>
        <div className="flex justify-between p-4">
          <div className="w-4/12" data-aos="fade-right">
            <h1 className="text-white text-center text-lg font-['Nunito'] pt-2 md:pt-0 pb-7 md:pb-2">
              Ervi Zuliani
            </h1>
            <h1 className="text-white text-center">
              Putri Dari Bapak Hudi Utoyo
            </h1>
            <h1 className="text-white text-center">&</h1>
            <h1 className="text-white text-center">Ibu Jumiyati (Almh)</h1>
          </div>
          <div data-aos="fade-left" className="w-4/12">
            <h1 className="text-white text-center text-lg font-['Nunito'] pb-2">
              Frendi Agus Setiawan
            </h1>
            <h1 className="text-white text-center">
              Putra Dari Bapak Supandar
            </h1>
            <h1 className="text-white text-center">&</h1>
            <h1 className="text-white text-center">Ibu Walminah</h1>
          </div>
        </div>

        <div data-aos="fade-up" className="text-center text-xl m-4">
          <h1 className="text-green-300 font-bold text-xl">Detail Acara</h1>
        </div>
        <div className="flex sm:flex justify-between p-4">
          <div data-aos="fade-right" className="w-4/12">
            <h1 className="text-white text-xl font-bold text-center">Akad</h1>
            <h1 className="text-white text-center">Minggu, 29 Mei 2022</h1>
            <h1 className="text-white text-center">Pukul 09:00</h1>
            <h1 className="text-pink-400 font-semibold text-center">
              Di Rumah
            </h1>
            <h1 className="text-white font-bold text-center">
              Jln Perintis Kemerdekaan No 10
            </h1>
            <h1 className="text-white font-bold text-center">
              Joho Temanggung
            </h1>
          </div>
          <div data-aos="fade-left" className="w-4/12">
            <h1 className="text-white text-xl font-bold text-center">
              Resepsi
            </h1>
            <h1 className="text-white text-center">Minggu, 29 Mei 2022</h1>
            <h1 className="text-white text-center">Pukul 09:00</h1>
            <h1 className="text-pink-400 font-semibold text-center">
              Di Rumah Kami
            </h1>
            <h1 className="text-white font-bold text-center">
              Jln Perintis Kemerdekaan No 10
            </h1>
            <h1 className="text-white font-bold text-center">
              Joho Temanggung
            </h1>
          </div>
        </div>

        <div className="text-center  mb-4" data-aos="fade-up">
          <h1 className="text-white">
            Atas Doa Dan Restu Dari Bapak/Ibu/Saudara/i
          </h1>
          <h1 className="text-white">Kami Ucapakan Banyak Terima Kasih</h1>
          <h1 className="text-white">Kami Yang Berbahagia</h1>
          <h1 className="text-white">Erfi & Frendi</h1>
          <h1 className="text-white">Turut Mengundang</h1>
          <h1 className="text-white">Segenap Keluarga</h1>
        </div>
      </div>
      <iframe
        className="w-full min-h-screen aspect-square md:aspect-video xl:aspect-auto rounded-xl p-2"
        src="https://www.youtube.com/embed/_XI5YgUaCE8"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
        data-aos="fade-up"
      ></iframe>

      <footer className="text-white font-lato text-center p-4 cursor-pointer">
        <a
          className="text-md font-lato font-lato font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-700"
          href="https://andi-3ujiqdvp9-andi-faizal94.vercel.app/"
        >
          Made by Andi
        </a>
      </footer>
    </div>
  );
}
