import { useState, useEffect } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const AboutUs = () => {
  const [sections, setSections] = useState([]);

  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get("/AboutUs").then((res) => setSections(res.data));
  }, [axiosSecure]);

  return (
    <div className="py-16 w-10/12 mx-auto min-h-screen">
      <h2 className="text-4xl font-bold mb-5 text-center text-gray-800">
        About Us
      </h2>
      <div className="grid grid-cols-1 gap-10 p-4 mt-5 items-center justify-center lg:grid-cols-2 mx-auto text-center">
        {sections.map((section, index) => (
          <div key={index}>
            <section className="mb-8 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">{section.title}</h3>
              <img
                src={section.image}
                alt={section.title}
                className="mx-auto mb-4 rounded-lg shadow-lg h-52 md:h-80 w-full"
              />
              <p className="text-gray-600 text-justify">{section.content}</p>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
