import React, { useState, useRef } from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { Icon } from "@iconify/react"; // Import Icon component
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";

import mobileUIImage from "/mobileui.png";
import webDesignImage from "/webdesign.jfif";
import webImage from "/web.jfif";
import uiImage from "/ui.jfif";
import instructorImage from "/P1.svg";

const CustomNextArrow = ({ onClick }) => {
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

const CustomPrevArrow = ({ onClick }) => {
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
const courses = [
  {
    mainCourse: "Project Manager",
    subCourses: [
      {
        image: webDesignImage,
        title: "Google UX/UI Analytics",
        instructor: "Theresa Webb",
        description: "the course description goes here",
        designation: "UX/UI designer",
        rating: 4.8,
        reviews: "44k reviews",
      },
      {
        image: webImage,
        title: "Google UX/UI Analytics",
        instructor: "Theresa Webb",
        description: "the course description goes here",
        designation: "UX/UI designer",
        rating: 4.8,
        reviews: "44k reviews",
      },
      {
        image: uiImage,
        title: "Google UX/UI Analytics",
        instructor: "Theresa Webb",
        designation: "UX/UI designer",
        description: "the course description goes here",
        rating: 4.8,
        reviews: "44k reviews",
      },
      {
        image: mobileUIImage,
        title: "Google UX/UI Analytics",
        instructor: "Theresa Webb",
        designation: "UX/UI designer",
        description: "the course description goes here",
        rating: 4.8,
        reviews: "44k reviews",
      },
    ],
  },

  {
    mainCourse: "UX/UI Design",
    subCourses: [
      {
        image: webDesignImage,
        title: "Google UX/UI Analytics",
        instructor: "Theresa Webb",
        description: "the course description goes here",
        designation: "UX/UI designer",
        rating: 4.8,
        reviews: "44k reviews",
      },
      {
        image: webImage,
        title: "Google UX/UI Analytics",
        instructor: "Theresa Webb",
        description: "the course description goes here",
        designation: "UX/UI designer",
        rating: 4.8,
        reviews: "44k reviews",
      },
      {
        image: uiImage,
        title: "Google UX/UI Analytics",
        instructor: "Theresa Webb",
        designation: "UX/UI designer",
        description: "the course description goes here",
        rating: 4.8,
        reviews: "44k reviews",
      },
      {
        image: mobileUIImage,
        title: "Google UX/UI Analytics",
        instructor: "Theresa Webb",
        designation: "UX/UI designer",
        description: "the course description goes here",
        rating: 4.8,
        reviews: "44k reviews",
      },
    ],
  },
  {
    mainCourse: "Digital Market",
    subCourses: [
      {
        image: webDesignImage,
        title: "Google UX/UI Analytics",
        instructor: "Theresa Webb",
        description: "the course description goes here",
        designation: "UX/UI designer",
        rating: 4.8,
        reviews: "44k reviews",
      },
      {
        image: webImage,
        title: "Google UX/UI Analytics",
        instructor: "Theresa Webb",
        description: "the course description goes here",
        designation: "UX/UI designer",
        rating: 4.8,
        reviews: "44k reviews",
      },
      {
        image: uiImage,
        title: "Google UX/UI Analytics",
        instructor: "Theresa Webb",
        designation: "UX/UI designer",
        description: "the course description goes here",
        rating: 4.8,
        reviews: "44k reviews",
      },
      {
        image: mobileUIImage,
        title: "Google UX/UI Analytics",
        instructor: "Theresa Webb",
        designation: "UX/UI designer",
        description: "the course description goes here",
        rating: 4.8,
        reviews: "44k reviews",
      },
    ],
  },
  {
    mainCourse: "Data Scientist",
    subCourses: [
      {
        image: webDesignImage,
        title: "Google UX/UI Analytics",
        instructor: "Theresa Webb",
        description: "the course description goes here",
        designation: "UX/UI designer",
        rating: 4.8,
        reviews: "44k reviews",
      },
      {
        image: webImage,
        title: "Google UX/UI Analytics",
        instructor: "Theresa Webb",
        description: "the course description goes here",
        designation: "UX/UI designer",
        rating: 4.8,
        reviews: "44k reviews",
      },
      {
        image: uiImage,
        title: "Google UX/UI Analytics",
        instructor: "Theresa Webb",
        designation: "UX/UI designer",
        description: "the course description goes here",
        rating: 4.8,
        reviews: "44k reviews",
      },
      {
        image: mobileUIImage,
        title: "Google UX/UI Analytics",
        instructor: "Theresa Webb",
        designation: "UX/UI designer",
        description: "the course description goes here",
        rating: 4.8,
        reviews: "44k reviews",
      },
    ],
  },
  {
    mainCourse: "Data Analyst",
    subCourses: [
      {
        image: webDesignImage,
        title: "Google UX/UI Analytics",
        instructor: "Theresa Webb",
        description: "the course description goes here",
        designation: "UX/UI designer",
        rating: 4.8,
        reviews: "44k reviews",
      },
      {
        image: webImage,
        title: "Google UX/UI Analytics",
        instructor: "Theresa Webb",
        description: "the course description goes here",
        designation: "UX/UI designer",
        rating: 4.8,
        reviews: "44k reviews",
      },
      {
        image: uiImage,
        title: "Google UX/UI Analytics",
        instructor: "Theresa Webb",
        designation: "UX/UI designer",
        description: "the course description goes here",
        rating: 4.8,
        reviews: "44k reviews",
      },
      {
        image: mobileUIImage,
        title: "Google UX/UI Analytics",
        instructor: "Theresa Webb",
        designation: "UX/UI designer",
        description: "the course description goes here",
        rating: 4.8,
        reviews: "44k reviews",
      },
    ],
  },
];

const CoursesSection = () => {
  const [selectedCourse, setSelectedCourse] = useState(0);
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Display 4 subcourses cards on larger screens
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  const handleCourseChange = (index) => {
    setSelectedCourse(index);
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0);
    }
  };

  const handleSubCourseClick = (subCourse) => {
    navigate("/subcourse-details", { state: { subCourse } });
  };

  return (
    <div className=" bg-[#E8F6F3] ">
      <div className="text-[#000c34] py-16  ">
        <div className="w-[95%] mx-auto px-4 flex flex-col">
          <h2 className="text-4xl font-bold mb-8 text-[#003C3C]">
            Launch a New Career in as little as 6 months
          </h2>
          <div className="flex mb-8 space-x-4 overflow-x-auto">
            {courses.map((course, index) => (
              <button
                key={index}
                className={`py-2 px-4 font-semibold whitespace-nowrap ${
                  index === selectedCourse
                    ? "border-b-2 border-[#003C3C] text-[#003C3C]"
                    : "text-[#003C3C] hover:text-[#000c34]"
                }`}
                onClick={() => handleCourseChange(index)}
              >
                {course.mainCourse}
              </button>
            ))}
          </div>
          <h3 className="text-2xl font-bold mb-4">
            {courses[selectedCourse].mainCourse}
          </h3>
          <div className="mb-12 ml-[-2rem]">
            <Slider {...settings} ref={sliderRef}>
              {courses[selectedCourse].subCourses.map((subCourse, index) => (
                <div key={index} className="p-5 ">
                  <div
                    className="bg-white shadow-lg cursor-pointer overflow-hidden rounded-t-lg" // Added overflow-hidden to ensure the rounding is visible
                    onClick={() => handleSubCourseClick(subCourse)}
                  >
                    <img
                      src={subCourse.image}
                      alt={subCourse.title}
                      className="w-full h-40 rounded-t-lg object-cover" // Ensured correct class and added object-cover for image scaling
                    />
                    <div className="p-4">
                      <div className="flex items-center mt-4">
                        <img
                          src={instructorImage}
                          alt={subCourse.instructor}
                          className="w-10 h-10 mr-6"
                        />
                        <div>
                          <h5 className="text-md font-semibold">
                            {subCourse.instructor}
                          </h5>
                          <p className="text-[#000c34] text-sm">
                            {subCourse.designation}
                          </p>
                        </div>
                      </div>
                      <h4 className="text-xl font-bold mt-4">
                        {subCourse.title}
                      </h4>
                      <p className="text-[#000c34] mt-4">
                        {subCourse.description}
                      </p>

                      <div className="flex items-center mt-4">
                        <span className="text-[#000c34] text-lg">
                          {subCourse.rating} &#9733;
                        </span>
                        <span className="text-[#000c34] text-sm ml-2">
                          ({subCourse.reviews})
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <div className="flex justify-start mt-1/2 space-x-2">
            <CustomPrevArrow onClick={() => sliderRef.current.slickPrev()} />
            <CustomNextArrow onClick={() => sliderRef.current.slickNext()} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesSection;
