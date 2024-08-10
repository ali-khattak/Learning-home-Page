import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.css';

import mobileUIImage from '/mobileui.png';
import webDesignImage from '/webdesign.jfif';
import webImage from '/web.jfif';
import uiImage from '/ui.jfif';
import instructorImage from '/P1.svg';
import greaterIcon from '/greater.svg';
import lessIcon from '/less.svg';

const CustomPrevArrow = ({ onClick }) => (
  <button className="custom-arrow cursor-pointer" onClick={onClick}>
    <img src={lessIcon} alt="Previous" />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button className="custom-arrow cursor-pointer" onClick={onClick}>
    <img src={greaterIcon} alt="Next" />
  </button>
);

const courses = [
  {
    mainCourse: 'Project Manager',
    subCourses: [
      { image: webDesignImage, title: 'Google UX/UI Analytics', instructor: 'Theresa Webb', description: 'the course description goes here', designation: 'UX/UI designer', rating: 4.8, reviews: '44k reviews' },
      { image: webImage, title: 'Google UX/UI Analytics', instructor: 'Theresa Webb', description: 'the course description goes here', designation: 'UX/UI designer', rating: 4.8, reviews: '44k reviews' },
      { image: uiImage, title: 'Google UX/UI Analytics', instructor: 'Theresa Webb', designation: 'UX/UI designer', description: 'the course description goes here', rating: 4.8, reviews: '44k reviews' },
      { image: mobileUIImage, title: 'Google UX/UI Analytics', instructor: 'Theresa Webb', designation: 'UX/UI designer', description: 'the course description goes here', rating: 4.8, reviews: '44k reviews' },
    ],
  },
      
  {
    mainCourse: 'UX/UI Design',
    subCourses: [
      { image: webDesignImage, title: 'Google UX/UI Analytics', instructor: 'Theresa Webb', description: 'the course description goes here', designation: 'UX/UI designer', rating: 4.8, reviews: '44k reviews' },
      { image: webImage, title: 'Google UX/UI Analytics', instructor: 'Theresa Webb', description: 'the course description goes here', designation: 'UX/UI designer', rating: 4.8, reviews: '44k reviews' },
      { image: uiImage, title: 'Google UX/UI Analytics', instructor: 'Theresa Webb', designation: 'UX/UI designer', description: 'the course description goes here', rating: 4.8, reviews: '44k reviews' },
      { image: mobileUIImage, title: 'Google UX/UI Analytics', instructor: 'Theresa Webb', designation: 'UX/UI designer', description: 'the course description goes here', rating: 4.8, reviews: '44k reviews' },
    ],
  },
  {
    mainCourse: 'Digital Market',
    subCourses: [
      { image: webDesignImage, title: 'Google UX/UI Analytics', instructor: 'Theresa Webb', description: 'the course description goes here', designation: 'UX/UI designer', rating: 4.8, reviews: '44k reviews' },
      { image: webImage, title: 'Google UX/UI Analytics', instructor: 'Theresa Webb', description: 'the course description goes here', designation: 'UX/UI designer', rating: 4.8, reviews: '44k reviews' },
      { image: uiImage, title: 'Google UX/UI Analytics', instructor: 'Theresa Webb', designation: 'UX/UI designer', description: 'the course description goes here', rating: 4.8, reviews: '44k reviews' },
      { image: mobileUIImage, title: 'Google UX/UI Analytics', instructor: 'Theresa Webb', designation: 'UX/UI designer', description: 'the course description goes here', rating: 4.8, reviews: '44k reviews' },
    ],
  },
  {
    mainCourse: 'Data Scientist',
    subCourses: [
      { image: webDesignImage, title: 'Google UX/UI Analytics', instructor: 'Theresa Webb', description: 'the course description goes here', designation: 'UX/UI designer', rating: 4.8, reviews: '44k reviews' },
      { image: webImage, title: 'Google UX/UI Analytics', instructor: 'Theresa Webb', description: 'the course description goes here', designation: 'UX/UI designer', rating: 4.8, reviews: '44k reviews' },
      { image: uiImage, title: 'Google UX/UI Analytics', instructor: 'Theresa Webb', designation: 'UX/UI designer', description: 'the course description goes here', rating: 4.8, reviews: '44k reviews' },
      { image: mobileUIImage, title: 'Google UX/UI Analytics', instructor: 'Theresa Webb', designation: 'UX/UI designer', description: 'the course description goes here', rating: 4.8, reviews: '44k reviews' },
    ],
  },
  {
    mainCourse: 'Data Analyst',
    subCourses: [
      { image: webDesignImage, title: 'Google UX/UI Analytics', instructor: 'Theresa Webb', description: 'the course description goes here', designation: 'UX/UI designer', rating: 4.8, reviews: '44k reviews' },
      { image: webImage, title: 'Google UX/UI Analytics', instructor: 'Theresa Webb', description: 'the course description goes here', designation: 'UX/UI designer', rating: 4.8, reviews: '44k reviews' },
      { image: uiImage, title: 'Google UX/UI Analytics', instructor: 'Theresa Webb', designation: 'UX/UI designer', description: 'the course description goes here', rating: 4.8, reviews: '44k reviews' },
      { image: mobileUIImage, title: 'Google UX/UI Analytics', instructor: 'Theresa Webb', designation: 'UX/UI designer', description: 'the course description goes here', rating: 4.8, reviews: '44k reviews' },
    ],
  },
];
const CoursesSection = () => {
  const [selectedCourse, setSelectedCourse] = useState(0);
  const sliderRef = useRef(null);
  const navigate = useNavigate(); // Initialize the navigate function for navigation

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1, infinite: true, dots: true } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1, dots: true } },
    ],
  };

  const handleCourseChange = (index) => {
    setSelectedCourse(index);
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0);
    }
  };

  const handleSubCourseClick = (subCourse) => {
    navigate('/subcourse-details', { state: { subCourse } }); // Pass the selected subcourse data to the new page
  };

  return (
    <div className="text-teal-950 py-16 relative bg-light-green">
      <div className=" max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-teal-950">Launch a New Career<br />in as little as 6 months</h2>
        <div className="block md:hidden">
          <Slider
            {...{
              dots: false,
              infinite: true,
              speed: 500,
              slidesToShow: 4,
              slidesToScroll: 1,
              responsive: [
                { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1, infinite: true, dots: false } },
                { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1, dots: true } },
              ],
            }}
            className="mb-8"
          >
            {courses.map((course, index) => (
              <div key={index}>
                <button
                  className={`py-2 px-4 font-semibold ${index === selectedCourse ? 'border-b-2 border-green-600 text-green-600' : 'text-green-700 hover:text-green-600'}`}
                  onClick={() => handleCourseChange(index)}
                >
                  {course.mainCourse}
                </button>
              </div>
            ))}
          </Slider>
        </div>
        <div className="hidden md:flex mb-8">
          {courses.map((course, index) => (
            <div key={index}>
              <button
                className={`py-2 px-4 font-semibold ${index === selectedCourse ? 'border-b-2 border-green-600 text-green-600' : 'text-green-700 hover:text-green-600'}`}
                onClick={() => handleCourseChange(index)}
              >
                {course.mainCourse}
              </button>
            </div>
          ))}
        </div>
        <h3 className="text-2xl font-bold mb-4">{courses[selectedCourse].mainCourse}</h3>
        <div className="relative overflow-hidden mb-12">
          <Slider {...settings} ref={sliderRef}>
            {courses[selectedCourse].subCourses.map((subCourse, index) => (
              <div key={index} className="p-4">
                <div className="bg-white rounded-lg shadow-lg p-6 cursor-pointer" onClick={() => handleSubCourseClick(subCourse)}>
                  <img src={subCourse.image} alt={subCourse.title} className="w-full h-40 object-cover rounded-md mb-4" />
                  <h4 className="text-xl font-bold mb-2">{subCourse.title}</h4>
                  <p className="text-gray-700">{subCourse.description}</p>
                  <div className="flex items-center mt-4">
                    <img src={instructorImage} alt={subCourse.instructor} className="w-10 h-10 rounded-full mr-4" />
                    <div>
                      <h5 className="text-md font-semibold">{subCourse.instructor}</h5>
                      <p className="text-gray-500 text-sm">{subCourse.designation}</p>
                    </div>
                  </div>
                  <div className="flex items-center mt-4">
                    <span className="text-yellow-400 text-lg">&#9733; {subCourse.rating}</span>
                    <span className="text-gray-500 text-sm ml-2">({subCourse.reviews})</span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="slider-controls absolute bottom- left-[calc(100% - 4rem)] flex items-center space-x-2">
          <CustomPrevArrow onClick={() => sliderRef.current.slickPrev()} />
          <CustomNextArrow onClick={() => sliderRef.current.slickNext()} />
        </div>
      </div>
    </div>
  );
  };

export default CoursesSection;
