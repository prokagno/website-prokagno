"use client";
import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

const data = [
  {
    Security: {
      image: "/images/security.jpg",
      content:
        "KanProkagno Innovation Pvt LTD offers comprehensive security solutions to safeguard businesses from evolving threats. Our services encompass robust cybersecurity measures, secure data management, and industrial IoT integration for enhanced protection. By leveraging advanced technologies and proactive strategies, we ensure the integrity and confidentiality of our clients' assets, providing peace of mind and resilience against cyberattacks.",
    },
    Iot: {
      image:
        "https://images.unsplash.com/photo-1605387132052-357a341cc515?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content:
        "KanProkagno Innovation Pvt LTD integrates IoT devices to enhance connectivity and operational efficiency across various industries. Our IoT solutions enable real-time data collection and analysis, driving informed decision-making and automation. By leveraging IoT technology, we help businesses streamline processes, reduce costs, and improve overall performance.",
    },
    Drones: {
      image:
        "https://images.unsplash.com/photo-1499708544652-0e4c43899071?q=80&w=1180&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content:
        "KanProkagno Innovation Pvt LTD utilizes advanced drone technology to provide innovative solutions across multiple sectors. Our drone services offer capabilities such as aerial surveying, precision agriculture, and real-time monitoring, enhancing efficiency and accuracy. By integrating drones into various applications, we help businesses achieve superior outcomes with reduced operational costs and improved data collection.",
    },
  },
];

// Custom arrow components using Material Symbols
const CustomRightArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute flex items-center justify-center right-0 bg-white rounded-full p-2 shadow-md z-10 transform -translate-y-1/2 top-1/2 hover:bg-orange-100 cursor-pointer"
      aria-label="Next slide"
    >
      <span className="material-symbols-outlined text-orange-500">
        arrow_forward
      </span>
    </button>
  );
};

const CustomLeftArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute flex items-center justify-center left-0 bg-white rounded-full p-2 shadow-md z-10 transform -translate-y-1/2 top-1/2 hover:bg-orange-100 cursor-pointer"
      aria-label="Previous slide"
    >
      <span className="material-symbols-outlined text-orange-500">
        arrow_back
      </span>
    </button>
  );
};

// Custom dot component
const CustomDot = ({ onClick, active }) => {
  return (
    <button
      className={`mx-1 mt-2 ${active ? "text-orange-500" : "text-gray-300"}`}
      onClick={onClick}
    >
      <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>
        {active ? "radio_button_checked" : "radio_button_unchecked"}
      </span>
    </button>
  );
};

const CarouselHome = () => {
  const [showArrows, setShowArrows] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // set initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setShowArrows(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <div className="w-full ">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        showDots={true}
        arrows={showArrows}
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
        customDot={<CustomDot />}
        dotListClass="custom-dot-list-style flex justify-center mt-4"
        itemClass="carousel-item-padding-40-px"
      >
        {Object.entries(data[0]).map(([key, item], index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 flex justify-center items-center p-2 md:p-8"
          >
            <div className="flex w-full flex-col-reverse md:flex-row-reverse items-center px-4 md:px-8 py-6">
              <div className="w-full md:w-[60%] ml-0 md:ml-5 p-4 flex flex-col justify-center items-start">
                <div className="text-orange-500  py-1 rounded-lg mb-1 md:mb-2">
                  <span className="text-base md:text-lg font-bold">
                    {key.toString().toUpperCase()}
                  </span>
                </div>
                <p className="text-gray-700 text-justify mb-4">
                  {isMobile
                    ? item.content.length > 100
                      ? item.content.slice(0, 100) + "..."
                      : item.content
                    : item.content}
                </p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">
                  Read More{" "}
                  <span className="material-symbols-outlined align-middle">
                    arrow_forward
                  </span>
                </button>
              </div>
              <div className="w-full md:w-[40%] flex justify-center items-center">
                <div className="relative ">
                  <Image
                    src={item.image}
                    alt={key}
                    width={400}
                    height={400}
                    className="object-cover aspect-square object-center rounded-lg shadow-lg h-[300px] md:h-[380px] md:w-[520px]"
                    priority={index === 0}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselHome;
