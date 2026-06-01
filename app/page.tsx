"use client";
import Image from "next/image";
import MarriageCountdown from "./components/MarriageCountdown";
import CoupleMessage from "./components/CoupleMessage";
import { useEffect, useState, useRef, useMemo } from "react";



const FloatingLamp = ({ className, style, reverse = false }: { className: string; style?: React.CSSProperties; reverse?: boolean }) => {
  // Memoize random values to prevent recalculation on re-renders
  const lampValues = useMemo(() => {
    // const duration = 60 + Math.random() * 40; // 60–100s (very slow flow)
    // const duration = 40 + Math.random() * 10; // 40–50s
    const duration = 60 + Math.random() * 10; // 60–70s
    const delay = Math.random() * 15;

    // depth feel - dramatic size variety
    const scale = Math.random() < 0.5
      ? 0.3 + Math.random() * 0.4  // 0.3–0.7 (small lamps)
      : 1.2 + Math.random() * 0.8; // 1.2–2.0 (large lamps)
    const blur = scale < 0.7 ? "blur(1.5px)" : "blur(0px)";

    return { duration, delay, scale, blur };
  }, []); // Empty dependency array means these values are calculated only once

  return (
    <img
      src="/lamp.png"
      alt="Lamp"
      className={`floating-lamp ${className}`}
      style={{
        animationName: reverse ? 'lampFlowReverse' : 'lampFlow',
        animationDuration: `${lampValues.duration}s`,
        animationDelay: `${lampValues.delay}s`,
        transform: `scale(${lampValues.scale})`,
        filter: `drop-shadow(0 0 18px rgba(255,180,90,0.9)) ${lampValues.blur}`,
        '--scale': lampValues.scale,
        ...style,
      } as React.CSSProperties}
    />
  );
};

export default function Home() {
  const events = [
    {
      Main_title_ceremony: "The RD Soirée",
      title_ceremony: "Sagan/Cocktail",
      image: "/assets/cocktail_w.png",
      date: "Monday, 30th November 2026",
      venue: "Oodles Hotel Chhattarpur",
      venue_address: <> Plot 759 762, Main Chhatarpur Rd, Block C,<br /> Chhatarpur Extension, Chhatarpur,<br /> New Delhi, Delhi 110074</>,
      time: "7pm onwards",
      // theme: <><b>Theme:-</b> Glitz & Glam: <br/> Shimmer, sequins & Statement Fits</>,
      link: "https://share.google/9022apDOsGRfxYGGb",
    },
    {
      Main_title_ceremony: "Haldi Hues",
      title_ceremony: "Haldi",
      image: "/assets/haldi.png",
      date: "Tuesday, 1st December 2026",
      venue: "Oodles Hotel Chhattarpur",
      venue_address: <> Plot 759 762, Main Chhatarpur Rd, Block C,<br /> Chhatarpur Extension, Chhatarpur,<br /> New Delhi, Delhi 110074</>,
      time: "12pm onwards",
      // theme: <><b>Theme:-</b> Pretty in Pink: <br/> Florals, Pastels & Pink Hues</>,
      link: "https://share.google/9022apDOsGRfxYGGb",
      Main_title_ceremony2: "Mehfil e Mehndi",
      title_ceremony2: "Mehandi",
      image2: "/assets/mehandi.png",
      time2: "7pm onwards",
    },


    {
      Main_title_ceremony: "Outh of Love",
      title_ceremony: "Wedding",
      image: "/assets/engagement_w.png",
      date: "Wednesday, 2nd December 2026",
      venue: "Cinderella Farms by Bel-laMonde",
      venue_address: <>673, Main Chhatarpur Rd, Rajpur Khurd Village,<br /> Chhatarpur, New Delhi, <br />Delhi 110074</>,
      time: "9pm onwards",
      // theme: <><b>Theme:-</b> Timeless Royalty:<br/> Elegant Ethnic & Royal Silhouettes</>,
      link: "https://share.google/JVMSyNgYaqRwjhJiY",
    },

  ];

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);

  const startMusic = async () => {
    const audio = audioRef.current;
    if (!audio || started) return;

    try {
      audio.volume = 0.3;
      await audio.play();
      setStarted(true);
      setPlaying(true);
    } catch { }
  };

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      try {
        await audio.play();
        setPlaying(true);
      } catch { }
    }
  };

  // First user interaction (mobile + desktop)
  useEffect(() => {
    const handler = () => startMusic();

    window.addEventListener("click", handler);
    window.addEventListener("touchstart", handler);

    return () => {
      window.removeEventListener("click", handler);
      window.removeEventListener("touchstart", handler);
    };
  }, [started]);


  return (

    <div>
      <button
        onClick={() => {
          started ? toggleMusic() : startMusic();
        }}
        className="fixed bottom-4 right-4 z-50 bg-[#FF35A1] text-white p-3 rounded-xl text-xl"
      >
        {playing ? "⏸" : "▶"}
      </button>

      <audio ref={audioRef} src="/assets/background_song_rohan.mp3" loop preload="auto" playsInline />

      <div className="
    bg-[url('/assets/bride__mobilebg22.jpg')]
    3xl:bg-[url('/assets/rohan_desktopbg2.jpg')]
    md:bg-[url('/assets/rohit_desktopbg2.webp')]
    bg-cover bg-no-repeat bg-top md:bg-center w-full px-4 sm:px-8 overflow-hidden relative">




        {/* Decorative Lamps - Natural Flow Pattern */}
        {/* Left-to-Right Lamps - Less crowded */}
        <FloatingLamp className="hidden lg:block absolute top-10 left-8 w-18 h-18 transform rotate-12 opacity-90" />
        <FloatingLamp className="hidden lg:block absolute top-30 left-20 w-16 h-16 transform rotate-45 opacity-80" />
        <FloatingLamp className="hidden lg:block absolute top-50 left-40 w-20 h-20 transform rotate-30 opacity-85" />
        <FloatingLamp className="hidden lg:block absolute top-70 left-60 w-14 h-14 transform rotate-15 opacity-80" />
        <FloatingLamp className="hidden lg:block absolute top-90 left-80 w-20 h-20 transform rotate-25 opacity-75" />
        <FloatingLamp className="hidden lg:block absolute top-110 left-100 w-18 h-18 transform rotate-10 opacity-85" />
        <FloatingLamp className="hidden lg:block absolute top-130 left-120 w-20 h-20 transform rotate-35 opacity-75" />
        <FloatingLamp className="hidden lg:block absolute top-150 left-140 w-16 h-16 transform rotate-22 opacity-85" />
        <FloatingLamp className="hidden lg:block absolute top-170 left-160 w-20 h-20 transform rotate-18 opacity-80" />
        <FloatingLamp className="hidden lg:block absolute top-190 left-180 w-18 h-18 transform rotate-28 opacity-85" />



        <FloatingLamp className="lg:hidden absolute top-10 left-8 w-12 h-12 transform rotate-12 opacity-90" />
        <FloatingLamp className="lg:hidden absolute top-30 left-20 w-12 h-12 transform rotate-45 opacity-80" />
        <FloatingLamp className="lg:hidden absolute top-50 left-40 w-10 h-10 transform rotate-30 opacity-85" />
        <FloatingLamp className="lg:hidden absolute top-70 left-60 w-10 h-10 transform rotate-15 opacity-80" />
        <FloatingLamp className="lg:hidden absolute top-90 left-80 w-12 h-12 transform rotate-25 opacity-75" />
        <FloatingLamp className="lg:hidden absolute top-110 left-100 w-12 h-12 transform rotate-10 opacity-85" />
        <FloatingLamp className="lg:hidden absolute top-130 left-120 w-12 h-12 transform rotate-35 opacity-75" />
        <FloatingLamp className="lg:hidden absolute top-150 left-140 w-12 h-12 transform rotate-22 opacity-85" />
        <FloatingLamp className="lg:hidden absolute top-170 left-160 w-12 h-12 transform rotate-18 opacity-80" />
        <FloatingLamp className="lg:hidden absolute top-190 left-180 w-12 h-12 transform rotate-28 opacity-85" />



        <FloatingLamp className="hidden lg:block absolute top-50 left-40 w-20 h-20 transform rotate-30 opacity-85" />
        <FloatingLamp className="hidden lg:block absolute top-60 left-40 w-20 h-20 transform rotate-15 opacity-80" />
        <FloatingLamp className="hidden lg:block absolute top-80 left-80 w-20 h-20 transform rotate-25 opacity-75" />
        <FloatingLamp className="hidden lg:block absolute top-100 left-100 w-20 h-20 transform rotate-10 opacity-85" />
        <FloatingLamp className="hidden lg:block absolute top-120 left-120 w-28 h-28 transform rotate-35 opacity-75" />
        <FloatingLamp className="hidden lg:block absolute top-140 left-140 w-20 h-20 transform rotate-22 opacity-85" />
        <FloatingLamp className="hidden lg:block absolute top-160 left-160 w-28 h-28 transform rotate-18 opacity-80" />
        <FloatingLamp className="hidden lg:block absolute top-180 left-180 w-20 h-20 transform rotate-28 opacity-85" />

        <FloatingLamp className="hidden lg:block absolute top-50 left-40 w-20 h-20 transform rotate-30 opacity-85" />
        <FloatingLamp className="hidden lg:block absolute top-60 left-40 w-20 h-20 transform rotate-15 opacity-80" />
        <FloatingLamp className="hidden lg:block absolute top-80 left-80 w-20 h-20 transform rotate-25 opacity-75" />


        {/* Right-to-Left Lamps - Less crowded */}
        <FloatingLamp className="hidden lg:block absolute top-20 right-12 w-18 h-19 transform -rotate-6 opacity-85" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-40 right-32 w-20 h-20 transform -rotate-12 opacity-75" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-60 right-52 w-18 h-18 transform -rotate-20 opacity-90" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-80 right-72 w-16 h-16 transform -rotate-8 opacity-85" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-100 right-92 w-18 h-18 transform -rotate-15 opacity-80" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-120 right-112 w-18 h-18 transform -rotate-25 opacity-90" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-140 right-132 w-16 h-16 transform -rotate-18 opacity-80" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-160 right-152 w-18 h-18 transform -rotate-30 opacity-75" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-180 right-172 w-16 h-16 transform -rotate-22 opacity-85" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-200 right-192 w-18 h-18 transform -rotate-35 opacity-85" reverse={true} />


        <FloatingLamp className="hidden lg:block absolute top-30 right-12 w-20 h-20 transform -rotate-6 opacity-85" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-50 right-32 w-20 h-20 transform -rotate-12 opacity-75" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-70 right-52 w-20 h-20 transform -rotate-20 opacity-90" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-90 right-72 w-20 h-20 transform -rotate-8 opacity-85" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-110 right-92 w-18 h-18 transform -rotate-15 opacity-80" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-130 right-112 w-20 h-20 transform -rotate-25 opacity-90" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-150 right-132 w-20 h-20 transform -rotate-18 opacity-80" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-170 right-152 w-18 h-18 transform -rotate-30 opacity-75" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-190 right-172 w-20 h-20 transform -rotate-22 opacity-85" reverse={true} />


        <FloatingLamp className="hidden lg:block absolute top-150 right-132 w-20 h-20 transform -rotate-18 opacity-80" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-170 right-152 w-20 h-20 transform -rotate-30 opacity-75" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-190 right-172 w-20 h-20 transform -rotate-22 opacity-85" reverse={true} />

        <FloatingLamp className="lg:hidden absolute top-20 right-12 w-12 h-12 transform -rotate-6 opacity-85" reverse={true} />
        <FloatingLamp className="lg:hidden absolute top-40 right-32 w-12 h-12 transform -rotate-12 opacity-75" reverse={true} />
        <FloatingLamp className="lg:hidden absolute top-60 right-52 w-12 h-14 transform -rotate-20 opacity-90" reverse={true} />
        <FloatingLamp className="lg:hidden absolute top-80 right-72 w-10 h-10 transform -rotate-8 opacity-85" reverse={true} />
        <FloatingLamp className="lg:hidden absolute top-100 right-92 w-12 h-12 transform -rotate-15 opacity-80" reverse={true} />
        <FloatingLamp className="lg:hidden absolute top-120 right-112 w-10 h-10 transform -rotate-25 opacity-90" reverse={true} />
        <FloatingLamp className="lg:hidden absolute top-140 right-132 w-12 h-12 transform -rotate-18 opacity-80" reverse={true} />
        <FloatingLamp className="lg:hidden absolute top-160 right-152 w-12 h-12 transform -rotate-30 opacity-75" reverse={true} />
        <FloatingLamp className="lg:hidden absolute top-180 right-172 w-12 h-12 transform -rotate-22 opacity-85" reverse={true} />
        <FloatingLamp className="lg:hidden absolute top-200 right-192 w-10 h-10 transform -rotate-35 opacity-85" reverse={true} />


        {/* <FallingLamps /> */}


        <div className=" md:pt-24 pt-4 md:pb-50 lg:pb-60 relative z-10 pb-24">
          <h2 className="text-[#15528A]  text-center leading-tight text-[32px] sm:text-5xl lg:text-[100px] md:pb-370 pb-0 flex flex-col items-center gap-y-2 ">
            <span className="font-parisienne [text-shadow:2px_2px_4px_rgba(0,0,0,0.4)] font-extrabold">
              Rohan Kharbanda
            </span>
            <span className="text-[12px] sm:text-3xl tracking-[10px] font-cormorant [text-shadow:2px_2px_4px_rgba(0,0,0,0.4)]">WEDS</span>
            <span className="font-parisienne [text-shadow:2px_2px_4px_rgba(0,0,0,0.4)]">Devna Chawla</span>
            {/* <p className="font-Cormorant-upright lg:text-4xl md:text-2xl text-[20px] font-bold md:mt-4">
              #RoSaysIDee
            </p> */}
          </h2>

          <div className="flex flex-col items-center text-center gap-6 mt-0  lg:pt-250 pt-150 md:pt-0">
            <img
              src="/assets/ganesh_inter.png"
              alt="ganesh"
              className="md:w-40 w-28 h-auto"
            />
            <h2 className="text-white md:text-2xl text-[17px] text-center">
              || श्री गणेशाय नमः ||
            </h2>
            {/* <h2 className="text-white md:text-2xl text-[17px] text-center">
              वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।
              <br />
              निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥
            </h2>  */}


            <h2 className="text-white lg:text-[30px] md:text-2xl text-[20px] font-Cormorant-upright">
              With the joyful hearts and blessings from
              <br /> <b>Late Smt. Jatto bai & Shri Sidhu Ram k</b>
            </h2>



            <h2 className="text-white font-Cormorant-upright lg:text-[34px] md:text-2xl text-[26px]">
              The Kharbanda Family
            </h2>
          </div>

          <div className="mt-8 text-center">
            <h2 className="text-white font-cormorant 
            text-3xl sm:text-5xl lg:text-[60px] leading-tight lg:tracking-wide tracking-wider">
              INVITES
            </h2>

            <p className="text-white font-Cormorant-upright lg:text-[30px] md:text-2xl text-[19px] mt-6">
              you to join us in the wedding celebrations of
            </p>



            <h2 className="text-white font-Cormorant-upright text-center mt-14
            md:text-5xl text-[50px] lg:text-[100px] leading-tight font-bold">
              Rohan Kharbanda
            </h2>


            <p className="text-white font-Cormorant-upright lg:text-[30px] md:text-2xl mt-2 text-[16px]">
            <b> (Grandson of Late Smt. Jatto bai & Shri Sidhu Ram k)</b> 
              <br />(Son of Mrs. Raj kharbanda & Mr. Ashok Kharbanda)
            </p>




            <h2 className="text-white font-Cormorant-upright text-center mt-4
            text-[50px] sm:text-7xl lg:text-[100px] leading-tight font-bold">
              <span className="text-white font-Cormorant-upright text-center lg:mt-10 mt-4 
            md:text-5xl text-[82px] lg:text-[150px] leading-tight">&</span>   <br />
              Devna Chawla
            </h2>

            <p className="text-white font-Cormorant-upright lg:text-[30px] md:text-2xl text-[16px] mt-2">
             <b>(Granddaughter of Smt. Krishna chawla & Shri Rishi lal chawla)</b>  <br />
              (Daughter of Mrs. Alka Chawla & Late kaushal chawla)
            </p>

            <p className="text-white font-Cormorant-upright lg:text-3xl md:text-2xl text-[24px] mt-8">
              On the following events
            </p>
          </div>

          {/* <div className="flex justify-center mt-20">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 lg:gap-32 gap-16 ">
              {events.map((event, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <img
                    src={event.image}
                    alt={event.venue}
                    className="lg:w-80 lg-w-95 sm:w-76 h-auto w-70 "
                  />

                  <h2 className="text-white font-Cormorant-upright lg:text-[45px] md:text-2xl text-[37px] mt-4 font-bold">
                    {event.title_ceremony}
                  </h2>



                  <p className="text-white font-Cormorant-upright text-[14px] sm:text-base mt-2">
                    <span className="text-[22px]">{event.date}</span>  <br />
                    
                    
                    <span className="text-[22px]">  {event.time} </span>
                  </p>
 <p className="text-white font-Cormorant-upright text-[14px] sm:text-base mt-2">
                    <span className="text-[20px]">{event.theme}</span></p>
                  
               <p className="text-white font-Cormorant-upright text-[14px] sm:text-base mt-2">
                    <span className="text-[20px]">{event.venue_address}</span></p>
                </div>
              ))}
            </div>
           
          </div> */}


          <div className="flex justify-center mt-20">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 lg:gap-32 gap-16 ">
              {events.map((event, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <img
                    src={event.image}
                    alt={event.venue}
                    className="lg:w-80 w-60 sm:w-76  h-auto"
                  />

                  <h2 className="text-white font-Cormorant-upright lg:text-[45px] md:text-2xl text-[35px] mt-4 font-bold">
                    {event.Main_title_ceremony}
                  </h2>
                   <h2 className="text-white font-Cormorant-upright lg:text-[30px] md:text-2xl text-[25px] font-bold">
                    {event.title_ceremony}
                  </h2>
                  <p className="text-white font-Cormorant-upright text-[14px] sm:text-base">
                    <span className="text-[22px]">  {event.time} </span>
                  </p>
                  {event.image2 && (<img
                    src={event.image2}
                    alt={event.venue}
                    className="lg:w-80 w-60 sm:w-76  h-auto mt-6"
                  />)}
                   <h2 className="text-white font-Cormorant-upright lg:text-[45px] md:text-2xl text-[35px] font-bold">
                    {event.Main_title_ceremony2}
                  </h2>

                  <h2 className="text-white font-Cormorant-upright lg:text-[30px] md:text-2xl text-[25px] font-bold">
                    {event.title_ceremony2}
                  </h2>
                  <p className="text-white font-Cormorant-upright text-[14px] sm:text-base ">
                    <span className="text-[22px]">  {event.time2} </span>
                  </p>
                  <p className="text-white font-Cormorant-upright text-[14px] sm:text-base mt-2">
                    <span className="text-[22px]">{event.date}</span>  <br />
                    <span className="text-[24px] uppercase"> {event.venue}</span> <br />
                    <span className="text-[20px]">{event.venue_address}</span>

                  </p>

                  <a
                    href={event.link}
                    className="text-white underline md:text-sm text-[18px] mt-2 font-cormorant"
                    target="_blank"
                  >
                    See the route
                  </a>


                </div>
              ))}
            </div>
          </div>



          {/* <div className="flex justify-center md:mt-20 mt-10"><p className="text-white font-Cormorant-upright text-[14px] sm:text-base mt-2">
                    <span className="text-[22px] md:text-[24px]">Note: Themes optional, vibes unmatched</span></p>
</div> */}

          <div className="lg:h-350 md:h-180 h-86 md:pt-0 pt-30 lg:pr-180 pr-40 md:pr-50  flex flex-col justify-end items-center text-center lg:pb-80 md:pb-40 pb-10">

            <h1 className="lg:text-3xl md:text-2xl text-xl text-[#E1EF1E] font-cormorant md:pb-12">
              MEET THE
            </h1>

            <h2 className="lg:text-[130px] text-6xl text-[#00EAFF] md:pt-0 pt-6 font-Cormorant-upright lg:leading-18 leading-8 md:leading-10">
              <span className="text-[#ADBAFF]">Bride</span> <br />
              & <br />
              <span className="text-[#3FA9FF]">Groom</span>
            </h2>
          </div>

        </div>
      </div>


      <div className="hidden md:block bg-[url('/assets/bride.jpg')] bg-cover bg-no-repeat">
        <div className="lg:h-335 md:h-180 flex 3xl:pt-90 lg:pt-80 md:pt-40 3xl:h-410 justify-center">
          {/* <p className="font-Cormorant-upright lg:text-7xl md:text-4xl text-[34px] font-bold md:mt-4 text-white">
            #RoSaysIDee
          </p> */}
           <img
          src="/assets/logo.png"
          alt="background"
          className="h-60 w-110 md:h-35 md:w-50"
        />
        </div>
      </div>



      <div className="md:hidden relative flex items-start justify-center">

        <img
          src="/assets/bride_mobile.jpg"
          alt="background"
          className="w-full h-full object-contain"
        />

        <div className="absolute top-[25svh] left-0 right-0 flex justify-center">
           <img
          src="/assets/logo.png"
          alt="background"
          className="h-25 w-40"
        />
          
        </div>

      </div>

      <CoupleMessage />

      <MarriageCountdown />


    </div>
  );
}
