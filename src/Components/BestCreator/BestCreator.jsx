import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const BestCreator = () => {
  const [creators, setCreator] = useState([]);

  useEffect(() => {
    fetch("https://contest-hub-server-side.vercel.app/bestCreator")
      .then((res) => res.json())
      .then((data) => setCreator(data));
  }, []);

  return (
    <div className="h-96">
      {" "}
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {creators?.map((creator) => (
          <SwiperSlide key={creator._id}>
            <div className="w-3/5 mx-auto text-center">
              <div className="flex flex-col items-center gap-6 mb-4">
                <img src={creator.photo} alt="" className="w-32" />
              </div>

              <h1 className="text-red-500 text-2xl text-center font-bold">
                {creator.Name}
              </h1>
              <h1 className="text-black text-base font-semibold">
                {creator.name}
              </h1>
              <h1>{creator.category}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BestCreator;
