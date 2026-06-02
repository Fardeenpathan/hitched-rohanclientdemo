"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export default function CoupleMessage() {
  return (
    <>
      <div className="md:bg-[url('/assets/couple_bg.jpg')] bg-[url('/assets/couple_mobilebgnrohan.jpg')] bg-cover bg-no-repeat">
        <div className="lg:h-900 md:h-700 h-740 pt-2 flex flex-col  items-center">
          <h1 className="lg:text-[40px] md:text-3xl text-[32px] text-center text-[#FFF5B9] lg:pt-36 pt-12 font-Cormorant-upright px-6 leading-12">
            Together with our families,
          </h1>
          <h2 className="lg:text-[30px] text-[18px]  text-center text-[#FFF5B9] lg:px-60 px-6 lg:mt-28 mt-12 font-Cormorant-upright lg:leading-8 md:leading-8 leading-6">
            we warmly invite you to join us as we begin the most beautiful
            chapter of our lives. Your love, blessings, and presence will make
            our celebration even more meaningful as we come together to
            celebrate a bond built on love, laughter, friendship, and forever.
          </h2>
          <div className="w-full md:w-3/4 md:mt-32 mt-12">
            <Swiper
              effect={"coverflow"}
              centeredSlides={true}
              // slidesPerView={5}
              breakpoints={{
                0: {
                  slidesPerView: 1.5,
                },
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              spaceBetween={-60}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              speed={1200}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 300,
                modifier: 2,
                slideShadows: false,
              }}
              pagination={{ clickable: true }}
              modules={[EffectCoverflow, Pagination, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="/assets/rohan1.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/assets/rohan2.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/assets/rohan3.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/assets/rohan4.png" />
              </SwiperSlide>

              <SwiperSlide>
                <img src="/assets/rohan5.png" />
              </SwiperSlide>

              <SwiperSlide>
                <img src="/assets/rohan6.png" />
              </SwiperSlide>
            </Swiper>
          </div>

          <h1 className=" lg:text-[100px] text-[60px] md:text-3xl text-center text-[#FFF5B9] lg:pt-32 pt-12 font-Cormorant-upright">
            Things to <br /> know
          </h1>
          <h2 className="lg:text-[30px] text-[18px] text-center text-[#FFF5B9] lg:pt-6 lg:px-60 px-6 lg:mt-4 mt-2 font-cormorant">
            To help you feel at ease and enjoy every moment of the celebrations,
            we’ve gathered a few thoughtful details we’d love for you to know
            before the big day.
          </h2>

          {/* <div className="flex justify-center mt-10 md:pb-24 pb-16">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 lg:gap-24 gap-10 sm:gap-16">
            

              <div className="flex flex-col items-center justify-center text-center">
                <img
                  src="/assets/weather_h.png"
                  alt="weather"
                  className="lg:h-20 lg:w-24 h-26 w-32 "
                />
                <h2 className="lg:text-[32px] text-[50px] text-[#FFF5B9] mt-2 font-Cormorant-upright">
                  Weather
                </h2>
                <p className="md:text-[18px] text-[14px] text-[#FFF5B9] mt-1 font-cormorant md:leading-5">
                  Delhi evenings in December are expected <br/> to be pleasantly chilly, with temperatures <br/>ranging between 10°C–22°C. We recommend <br/>carrying a light shawl or jacket for <br/>the celebrations.
                </p>
              </div>

              <div className="flex flex-col items-center justify-center text-center">
                <img
                  src="/assets/car_h.png"
                  alt="car"
                  className="lg:h-20 lg:w-24 h-26 w-32 "
                />
                <h2 className="lg:text-[32px] text-[50px] text-[#FFF5B9] mt-2 font-Cormorant-upright">
                  Parking
                </h2>
                <p className="md:text-[18px] text-[14px] md:leading-5 text-[#FFF5B9] mt-1 font-cormorant">
                  Valet parking and ample parking space <br/> will be available at the venue <br/> for your convenience.
                </p>
              </div>


<div className="flex flex-col items-center justify-center text-center">
                <img
                  src="/assets/request.png"
                  alt="weather"
                  className="lg:h-20 lg:w-24 h-26 w-32 "
                />
                <h2 className="lg:text-[32px] text-[50px] text-[#FFF5B9] mt-2 font-Cormorant-upright">
                  Just A Little Request
                </h2>
                <p className="md:text-[18px] text-[14px] text-[#FFF5B9] mt-1 font-cormorant md:leading-5">
                  Bring your smiles, your energy,<br/> and your  best dance moves.
                </p>
              </div>



             


            </div>
          </div>
          
<div className="flex justify-center mt-10 md:pb-24 pb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 lg:gap-24 gap-10 sm:gap-16">
 <div className="flex flex-col items-center justify-center text-center">
                <img
                  src="/assets/duties.png"
                  alt="weather"
                  className="lg:h-24 lg:w-24 h-26 w-32 "
                />
                <h2 className="lg:text-[32px] text-[50px] text-[#FFF5B9] mt-2 font-Cormorant-upright">
                  Guest Duties
                </h2>
                <p className="md:text-[18px] text-[14px] text-[#FFF5B9] mt-1 font-cormorant md:leading-5">
                  Eat well, dance endlessly, and <br/>shower the  couple with love<br/> and blessings.
                </p>
              </div>

              <div className="flex flex-col items-center justify-center text-center">
                <img
                  src="/assets/team.png"
                  alt="weather"
                  className="lg:h-20 lg:w-24 h-26 w-32 "
                />
                <h2 className="lg:text-[32px] text-[50px] text-[#FFF5B9] mt-2 font-Cormorant-upright">
                  For The Baraat Team
                </h2>
                <p className="md:text-[18px] text-[14px] text-[#FFF5B9] mt-1 font-cormorant md:leading-5">
                  Energy levels must remain high <br/> throughout the celebrations.
                </p>
              </div>

</div></div> */}

          <div className="flex justify-center mt-10 md:pb-0 pb-16">
            <div className="grid grid-cols-1 lg:grid-cols-6 md:grid-cols-3 gap-10 lg:gap-16">
              {/* Card 1 */}
              <div className="col-span-1 lg:col-span-2 flex flex-col items-center text-center">
                <div className="flex flex-col items-center justify-center text-center">
                  <img
                    src="/assets/weather_h.png"
                    alt="weather"
                    className="lg:h-20 lg:w-24 h-26 w-32 "
                  />
                  <h2 className="lg:text-[32px] text-[40px] text-[#FFF5B9] mt-2 font-Cormorant-upright">
                    Weather
                  </h2>
                  <p className="md:text-[18px] text-[14px] text-[#FFF5B9] mt-1 font-cormorant md:leading-5">
                    Delhi evenings in December are expected <br /> to be
                    pleasantly chilly, with temperatures <br />
                    ranging between 10°C–22°C. We recommend <br />
                    carrying a light shawl or jacket for <br />
                    the celebrations.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col-span-1 lg:col-span-2 flex flex-col items-center text-center">
                <div className="flex flex-col items-center justify-center text-center">
                  <img
                    src="/assets/car_h.png"
                    alt="car"
                    className="lg:h-20 lg:w-24 h-26 w-32 "
                  />
                  <h2 className="lg:text-[32px] text-[40px] text-[#FFF5B9] mt-2 font-Cormorant-upright">
                    Parking
                  </h2>
                  <p className="md:text-[18px] text-[14px] md:leading-5 text-[#FFF5B9] mt-1 font-cormorant">
                    Valet parking and ample parking space <br /> will be
                    available at the venue <br /> for your convenience.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="col-span-1 lg:col-span-2 flex flex-col items-center text-center">
                <div className="flex flex-col items-center justify-center text-center">
                  <img
                    src="/assets/request.png"
                    alt="weather"
                    className="lg:h-20 lg:w-24 h-26 w-32 "
                  />
                  <h2 className="lg:text-[32px] text-[40px] text-[#FFF5B9] mt-2 font-Cormorant-upright">
                    Just A Little Request
                  </h2>
                  <p className="md:text-[18px] text-[14px] text-[#FFF5B9] mt-1 font-cormorant md:leading-5">
                    Bring your smiles, your energy,
                    <br /> and your best dance moves.
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="col-span-1 lg:col-span-2 flex flex-col items-center text-center lg:col-start-2">
                <div className="flex flex-col items-center justify-center text-center">
                  <img
                    src="/assets/duties.png"
                    alt="weather"
                    className="lg:h-20 lg:w-24 h-30 w-30"
                  />
                  <h2 className="lg:text-[32px] text-[40px] text-[#FFF5B9] mt-2 font-Cormorant-upright">
                    Guest Duties
                  </h2>
                  <p className="md:text-[18px] text-[14px] text-[#FFF5B9] mt-1 font-cormorant md:leading-5">
                    Eat well, dance endlessly, and <br />
                    shower the couple with love
                    <br /> and blessings.
                  </p>
                </div>
              </div>

              {/* Card 5 */}
              <div className="col-span-1 lg:col-span-2 flex flex-col items-center text-center">
                <div className="flex flex-col items-center justify-center text-center">
                  <img
                    src="/assets/team.png"
                    alt="weather"
                    className="lg:h-20 lg:w-24 h-26 w-32 "
                  />
                  <h2 className="lg:text-[32px] text-[40px] text-[#FFF5B9] mt-2 font-Cormorant-upright">
                    For The Baraat Team
                  </h2>
                  <p className="md:text-[18px] text-[14px] text-[#FFF5B9] mt-1 font-cormorant md:leading-5">
                    Energy levels must remain high <br /> throughout the
                    celebrations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center 3xl:mt-30 lg:mt-70 lg:ml-70 ml-15 md:ml-50 mt-20">
            <h2 className="lg:text-5xl text-[22px] md:text-[30px] text-center text-[#FFF5B9] lg:pt-10 3xl:pt-30 pt-1 font-Cormorant-upright md:leading-12 leading-6">
              Looking Forward to <br /> Seeing You
            </h2>
            {/* <div className="flex flex-col-1 md:gap-4 gap-2 justify-center items-center md:not-first:mt-4 ">
              <a href="https://wa.link/5ad8dn" target="_blank">
                <img src="/assets/whatsapp_n.png" alt="" className="lg:h-10 lg:w-10 h-4 w-4" />
              </a>
              <h2 className="lg:text-3xl md:text-xl text-[16px] text-center text-[#FFF5B9]  font-Cormorant-upright">
                Click on the Whatsapp icon to RSVP
              </h2>
            </div> */}
            <h2 className="lg:text-3xl md:text-xl text-[16px] text-[#FFF5B9] font-Cormorant-upright leading-tight mt-3">
              Click on the Whatsapp icon to RSVP
            </h2>
            <div className="flex md:gap-4 gap-2 justify-center items-start md:items-center md:mt-4">
              <a href="https://wa.me/9899696150" target="_blank">
                <img
                  src="/assets/whatsapp_n.png"
                  alt=""
                  className="lg:h-10 lg:w-10 h-4 w-4 mt-1 md:mt-0"
                />
              </a>

              <h2 className="lg:text-3xl md:text-xl text-[16px] text-[#FFF5B9] font-Cormorant-upright leading-tight">
                Ashok Kharbanda
              </h2>
            </div>

            <div className="flex md:gap-4 gap-2 justify-center items-start md:items-center md:mt-4 ml-1">
              <a href="https://wa.me/7838692244" target="_blank">
                <img
                  src="/assets/whatsapp_n.png"
                  alt=""
                  className="lg:h-10 lg:w-10 h-4 w-4 mt-1 md:mt-0"
                />
              </a>

              <h2 className="lg:text-3xl md:text-xl text-[16px] text-[#FFF5B9] font-Cormorant-upright leading-tight">
                Rohan Kharbanda
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
