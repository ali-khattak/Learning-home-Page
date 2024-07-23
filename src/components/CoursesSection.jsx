import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import mobileUIImage from '/public/mobileui.png';
import webDesignImage from '/public/webdesign.jfif';
import webImage from '/public/web.jfif';
import uiImage from '/public/ui.jfif'; // Changed from .fifi to .jfif
import instructorImage from '/public/P1.svg';
import greaterIcon from '/public/greater.svg'; // Custom icon for "next"
import lessIcon from '/public/less.svg'; // Custom icon for "prev"

// Define custom arrow components
const CustomPrevArrow = ({ onClick }) => (
  <button className="custom-arrow" onClick={onClick}>
    <img src={lessIcon} alt="Previous" />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button className="custom-arrow" onClick={onClick}>
    <img src={greaterIcon} alt="Next" />
  </button>
);

const courses = [
  {
    mainCourse: 'Project Manager',
    subCourses: [
      {
        image: webDesignImage,
        title: 'Google UX/UI Analytics',
        instructor: 'Theresa Webb',
        description: 'the course description goes here',
        designation: 'UX/UI designer',
        rating: 4.8,
        reviews: '44k reviews',
      },
      {
        image: webImage,
        title: 'Google UX/UI Analytics',
        instructor: 'Theresa Webb',
        description: 'the course description goes here',
        designation: 'UX/UI designer',
        rating: 4.8,
        reviews: '44k reviews',
      },
      {
        image: uiImage,
        title: 'Google UX/UI Analytics',
        instructor: 'Theresa Webb',
        designation: 'UX/UI designer',
        description: 'the course description goes here',
        rating: 4.8,
        reviews: '44k reviews',
      },
      {
        image: mobileUIImage,
        title: 'Google UX/UI Analytics',
        instructor: 'Theresa Webb',
        designation: 'UX/UI designer',
        description: 'the course description goes here',
        rating: 4.8,
        reviews: '44k reviews',
      },
    ],
  },
  {
    mainCourse: 'UX/UI Design',
    subCourses: [
      {
        image: webDesignImage,
        title: 'Google UX/UI Analytics',
        instructor: 'Theresa Webb',
        designation: 'UX/UI designer',
        description: 'the course description goes here',
        rating: 4.8,
        reviews: '44k reviews',
      },
      {
        image: webImage,
        title: 'Google UX/UI Analytics',
        instructor: 'Theresa Webb',
        designation: 'UX/UI designer',
        description: 'the course description goes here',
        rating: 4.8,
        reviews: '44k reviews',
      },
      {
        image: uiImage,
        title: 'Google UX/UI Analytics',
        instructor: 'Theresa Webb',
        designation: 'UX/UI designer',
        description: 'the course description goes here',
        rating: 4.8,
        reviews: '44k reviews',
      },
      {
        image: mobileUIImage,
        title: 'Google UX/UI Analytics',
        instructor: 'Theresa Webb',
        designation: 'UX/UI designer',
        description: 'the course description goes here',
        rating: 4.8,
        reviews: '44k reviews',
      },
    ],
  },
  {
    mainCourse: 'Digital Market',
    subCourses: [
      {
        image: webDesignImage,
        title: 'Google UX/UI Analytics',
        instructor: 'Theresa Webb',
        designation: 'UX/UI designer',
        description: 'the course description goes here',
        rating: 4.8,
        reviews: '44k reviews',
      },
      {
        image: webImage,
        title: 'Google UX/UI Analytics',
        instructor: 'Theresa Webb',
        description: 'the course description goes here',
        designation: 'UX/UI designer',
        rating: 4.8,
        reviews: '44k reviews',
      },
      {
        image: uiImage,
        title: 'Google UX/UI Analytics',
        instructor: 'Theresa Webb',
        designation: 'UX/UI designer',
        description: 'the course description goes here',

        rating: 4.8,
        reviews: '44k reviews',
      },
      {
        image: mobileUIImage,
        title: 'Google UX/UI Analytics',
        instructor: 'Theresa Webb',
        designation: 'UX/UI designer',
        description: 'the course description goes here',
        rating: 4.8,
        reviews: '44k reviews',
      },
    ],
  },
  {
    mainCourse: 'Data Scientist',
    subCourses: [
      {
        image: webDesignImage,
        title: 'Google UX/UI Analytics',
        instructor: 'Theresa Webb',
        description: 'the course description goes here',
        designation: 'UX/UI designer',
        rating: 4.8,
        reviews: '44k reviews',
      },
      {
        image: webImage,
        title: 'Google UX/UI Analytics',
        instructor: 'Theresa Webb',
        designation: 'UX/UI designer',
        description: 'the course description goes here',
        rating: 4.8,
        reviews: '44k reviews',
      },
      {
        image: uiImage,
        title: 'Google UX/UI Analytics',
        instructor: 'Theresa Webb',
        designation: 'UX/UI designer',
        description: 'the course description goes here',
        rating: 4.8,
        reviews: '44k reviews',
      },
      {
        image: mobileUIImage,
        title: 'Google UX/UI Analytics',
        instructor: 'Theresa Webb',
        designation: 'UX/UI designer',
        description: 'the course description goes here',
        rating: 4.8,
        reviews: '44k reviews',
      },
    ],
  },
  {
    mainCourse: 'Data Analyst',
    subCourses: [
      {
        image: webDesignImage,
        title: 'Google UX/UI Analytics',
        instructor: 'Theresa Webb',
        designation: 'UX/UI designer',
        description: 'the course description goes here',
        rating: 4.8,
        reviews: '44k reviews',
      },
      {
        image: webImage,
        title: 'Google UX/UI Analytics',
        instructor: 'Theresa Webb',
        designation: 'UX/UI designer',
        description: 'the course description goes here',
        rating: 4.8,
        reviews: '44k reviews',
      },
      {
        image: uiImage,
        title: 'Google UX/UI Analytics',
        instructor: 'Theresa Webb',
        designation: 'UX/UI designer',
        description: 'the course description goes here',
        rating: 4.8,
        reviews: '44k reviews',
      },
      {
        image: mobileUIImage,
        title: 'Google UX/UI Analytics',
        instructor: 'Theresa Webb',
        designation: 'UX/UI designer',
        description: 'the course description goes here',
        rating: 4.8,
        reviews: '44k reviews',
      },
    ],
  },
  {
    mainCourse: 'Front-End Developer',
    subCourses: [
      {
        image: webDesignImage,
        title: 'Google UX/UI Analytics',
        instructor: 'Theresa Webb',
        designation: 'UX/UI designer',
        description: 'the course description goes here',
        rating: 4.8,
        reviews: '44k reviews',
      },
      {
        image: webImage,
        title: 'Google UX/UI Analytics',
        instructor: 'Theresa Webb',
        designation: 'UX/UI designer',
        description: 'the course description goes here',
        rating: 4.8,
        reviews: '44k reviews',
      },
      {
        image: uiImage,
        title: 'Google UX/UI Analytics',
        instructor: 'Theresa Webb',
        designation: 'UX/UI designer',
        description: 'the course description goes here',
        rating: 4.8,
        reviews: '44k reviews',
      },
      {
        image: mobileUIImage,
        title: 'Google UX/UI Analytics',
        instructor: 'Theresa Webb',
        designation: 'UX/UI designer',
        description: 'the course description goes here',
        rating: 4.8,
        reviews: '44k reviews',
      },
    ],
  },
];

const CoursesSection = () => {
  const [selectedCourse, setSelectedCourse] = useState(0); // Default to the first course
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const handleCourseChange = (index) => {
    setSelectedCourse(index);
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0); // Reset the slider to the first slide of the new course
    }
  };

  return (
    <div className="bg-green-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-bold mb-8 text-dark-green">
         Launch a New Career<br />
        in as little as 6 months
      </h2>

        
        <div className="flex justify-center mb-8 space-x-4">
          {courses.map((course, index) => (
            <button
              key={index}
              className={`py-2 px-4 rounded-lg font-semibold ${
                index === selectedCourse
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
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
        <div className="overflow-hidden">
          <Slider {...settings} ref={sliderRef}>
            {courses[selectedCourse].subCourses.map((subCourse, index) => (
              <div key={index} className="p-4">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <img
                    src={subCourse.image}
                    alt={subCourse.title}
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <h4 className="text-xl font-bold mb-2">{subCourse.title}</h4>
                  <p className="text-gray-700">{subCourse.description}</p>
                  <div className="flex items-center mt-4">
                    <img
                      src={instructorImage}
                      alt={subCourse.instructor}
                      className="w-10 h-10 rounded-full mr-4"
                    />
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
      </div>
    </div>
  );
};

export default CoursesSection;
