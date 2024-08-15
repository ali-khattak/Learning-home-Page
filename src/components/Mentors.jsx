import React, { useRef } from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const mentors = [
  {
    name: "Darrell Steward",
    title: "UX/UI Designer",
    image: "/P1.svg", // Use appropriate image path
    rating: 4.8,
    reviews: "44k reviews",
  },
  {
    name: "Kathryn Murphy",
    title: "Data Scientist",
    image: "/P2.svg", // Use appropriate image path
    rating: 4.8,
    reviews: "44k reviews",
  },
  {
    name: "Brooklyn Simmons",
    title: "Data Analysis",
    image: "/P3.svg", // Use appropriate image path
    rating: 4.8,
    reviews: "44k reviews",
  },
  {
    name: "Esther Howard",
    title: "UX/UI Designer",
    image: "/P4.svg", // Use appropriate image path
    rating: 4.8,
    reviews: "44k reviews",
  },
];

const NextArrow = ({ onClick }) => {
  return (
    <div
      className="text-xl text-[#000c34] bg-white border border-gray-300 p-1 cursor-pointer ml-2"
      onClick={onClick}
      style={{
        width: "35px",
        height: "35px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      &gt;
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="text-xl text-[#000c34] bg-white border border-gray-300 p-1 cursor-pointer"
      onClick={onClick}
      style={{
        width: "35px",
        height: "35px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      &lt;
    </div>
  );
};

const Mentors = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true,
          centerMode: true,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <div className="py-16 bg-[#E8F6F3]">
      <div className="max-w-6xl mx-auto px-4 relative">
        <h2 className="text-3xl font-bold mb-8 text-left text-[#003C3C]">
          Meet our professional mentors
        </h2>
        <Slider ref={sliderRef} {...settings}>
          {mentors.map((mentor, index) => (
            <div key={index} className="px-2">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <img
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                  src={mentor.image}
                  alt={mentor.name}
                />
                <h3 className="text-xl font-semibold mb-2">{mentor.name}</h3>
                <p className="text-gray-600 mb-4">{mentor.title}</p>
                <div className="flex items-center justify-center mb-4">
                  <FaStar className="text-yellow-500" />
                  <span className="ml-2">{mentor.rating}</span>
                  <span className="text-gray-500 ml-2">({mentor.reviews})</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex justify-start mt-8 space-x-2">
          <PrevArrow onClick={() => sliderRef.current.slickPrev()} />
          <NextArrow onClick={() => sliderRef.current.slickNext()} />
        </div>
      </div>
    </div>
  );
};

export default Mentors;
