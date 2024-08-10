import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import tickIcon from '/tick.svg';
import youtubeIcon from '/public/youtube-icon.svg';
import adobeIcon from '/adobe.svg';
import instructorImage from '/P1.svg';
import greaterIcon from '/greaterthan.svg';
import lessIcon from '/lessthan.svg';

const CourseDetailPage = () => {
  const { courseId } = useParams();
  const [activeTab, setActiveTab] = useState('info'); // 'info' or 'reviews'
  const [openSections, setOpenSections] = useState({}); // Track which sections are open

  // Toggle the open state for a section
  const toggleSection = (index) => {
    setOpenSections((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  // Example data for the course, replace this with actual data fetching
  const courseDetails = {
    title: 'Create High-Fidelity Designs and Prototypes in Figma',
    description: "This platform's simplicity belies its powerful capabilities, offering a seamless and enjoyable educational experience.",
    duration: '40 Minutes to complete',
    modules: '29 Modules in course',
    rating: '4.8 ⭐',
    reviews: '5,598',
    instructor: 'Sahed Kawser',
    price: '$29',
    image: './public/laptop.png', // Update with actual image path
    tags: ['UI/UX', 'Design', 'User Interface'],
    sections: [
      {
        title: 'UX/UI Introduction',
        subsections: [
          { title: 'Introduction', time: '05:34', icon: youtubeIcon },
          { title: 'Practice file', icon: adobeIcon },
        ],
      },
      { title: 'Section 1', subsections: [] },
      { title: 'Section 2', subsections: [] },
      { title: 'Section 3', subsections: [] },
      { title: 'Section 4', subsections: [] },
      { title: 'Section 5', subsections: [] },
      // Add more sections as needed
    ],
  };

  const latestCourses = [
    { title: 'Google UX/UI Analytics', image: '/laptop.png', instructor: 'Theresa Webb', rating: '4.8', reviews: '44k' },
    { title: 'Advanced React', image: '/laptop.png', instructor: 'Theresa Webb', rating: '4.8', reviews: '44k' },
    { title: 'JavaScript Mastery', image: '/laptop.png', instructor: 'Theresa Webb', rating: '4.8', reviews: '44k' },
    { title: 'Python for Data Science', image: '/laptop.png', instructor: 'Theresa Webb', rating: '4.8', reviews: '44k' },
  ];

  return (
    <div className="course-detail-page">
      {/* Hero Section */}
      <div className="course-hero bg-teal-800 text-white p-8 rounded-lg shadow-lg flex justify-between items-center mx-4 md:mx-16">
        <div>
          <h1 className="text-4xl font-bold">{courseDetails.title}</h1>
          <p className="mt-4">{courseDetails.description}</p>
          <div className="mt-4 flex items-center">
            {courseDetails.duration} . {courseDetails.modules} . 
            <span>{courseDetails.rating}</span> <span>({courseDetails.reviews})</span>
          </div>
          <p className="mt-2 flex items-center">
            <img src={instructorImage} alt="Instructor" className="w-8 h-8 rounded-full mr-2" />
            Instructor: {courseDetails.instructor}
          </p>
          {/* Tags Section */}
          <div className="mt-4 flex flex-wrap gap-2">
            {courseDetails.tags.map((tag, index) => (
              <span 
                key={index} 
                className="bg-teal-600 text-white px-2 py-1 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Course Main Content */}
      <div className="course-main-content mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 mx-4 md:mx-16">
        {/* Course Info and Reviews Section */}
        <div className="col-span-2">
          <div className="course-info p-6 rounded-lg">
            <div className="flex border-b-2 border-gray-300 mb-4">
              <button 
                className={`px-4 py-2 ${activeTab === 'info' ? 'border-b-2 border-teal-800' : ''}`}
                onClick={() => setActiveTab('info')}
              >
                Course Info
              </button>
              <button 
                className={`px-4 py-2 ${activeTab === 'reviews' ? 'border-b-2 border-teal-800' : ''}`}
                onClick={() => setActiveTab('reviews')}
              >
                Reviews
              </button>
            </div>
            {activeTab === 'info' ? (
              <div>
                <h2 className="text-2xl font-bold mb-4">Course Content</h2>
                {courseDetails.sections.map((section, index) => (
                  <div key={index} className="section-item mb-4 bg-light-green p-4 rounded-lg">
                    <div onClick={() => toggleSection(index)} className="cursor-pointer flex justify-between items-center">
                      <span>{section.title}</span>
                      <span className="ml-auto">{openSections[index] ? 'v' : '>'}</span>
                    </div>
                    {openSections[index] && (
                      <div className="mt-2">
                        {section.subsections.map((sub, subIndex) => (
                          <div key={subIndex} className="flex items-center mb-2">
                            <img src={sub.icon} alt={sub.title} className="w-6 h-6 mr-2" />
                            {sub.title} {sub.time && <span className="ml-2 text-sm text-gray-500">({sub.time})</span>}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  
                ))}
              </div>
            ) : (
              <div>
                {/* Reviews content */}
                <p>Reviews will be here...</p>
              </div>
            )}
          </div>
        </div>

        {/* Pricing and Other Info */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold">Price {courseDetails.price}</h2>
          <button className="bg-teal-600 text-white px-4 py-2 mt-4 rounded-lg w-full">Enroll Now</button>
          <p className="mt-4 text-gray-600">No any hidden charge</p>

          <h3 className="mt-8 text-xl font-semibold">What You'll Learn</h3>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li className="flex items-center">
              <img src={tickIcon} alt="tick" className="w-5 h-5 mr-2" />
              Improve the design skill and understanding design theory.
            </li>
            <li className="flex items-center">
              <img src={tickIcon} alt="tick" className="w-5 h-5 mr-2" />
              Improve the design skill and understanding design theory.
            </li>
            <li className="flex items-center">
              <img src={tickIcon} alt="tick" className="w-5 h-5 mr-2" />
              Improve the design skill and understanding design theory.
            </li>
            <li className="flex items-center">
              <img src={tickIcon} alt="tick" className="w-5 h-5 mr-2" />
              Improve the design skill and understanding design theory.
            </li>
          </ul>

          <h3 className="mt-8 text-xl font-semibold">Material Includes</h3>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li className="flex items-center">
              <img src={tickIcon} alt="tick" className="w-5 h-5 mr-2" />
              12 hours on-demand video
            </li>
            <li className="flex items-center">
              <img src={tickIcon} alt="tick" className="w-5 h-5 mr-2" />
              Full lifetime access
            </li>
            <li className="flex items-center">
              <img src={tickIcon} alt="tick" className="w-5 h-5 mr-2" />
              Access on mobile and TV
            </li>
            <li className="flex items-center">
              <img src={tickIcon} alt="tick" className="w-5 h-5 mr-2" />
              1 download resources
            </li>
          </ul>

          <h3 className="mt-8 text-xl font-semibold">Requirements</h3>
          <p className="mt-4 flex items-center text-gray-600">
            <img src={tickIcon} alt="tick" className="w-5 h-5 mr-2" />
            When you enroll in this course, you'll also be enrolled in this specialization.
          </p>
          <h3 className="mt-8 text-xl font-semibold">Tags</h3>
          <div className="flex space-x-2 mt-4">
            <span className="bg-gray-200 text-gray-600 px-3 py-1 rounded-full">UI/UX</span>
            <span className="bg-gray-200 text-gray-600 px-3 py-1 rounded-full">Design</span>
            <span className="bg-gray-200 text-gray-600 px-3 py-1 rounded-full">User Interface</span>
          </div>

          

          <h3 className="mt-8 text-xl font-semibold">Audience</h3>
          <p className="mt-4 flex items-center text-gray-600">
            <img src={tickIcon} alt="tick" className="w-5 h-5 mr-2" />
            Suitable for all skill levels.
          </p>
        </div>
      </div>

      {/* Latest Courses Section */}
      <div className="latest-courses mt-16 bg-light-green p-8 mx-4 md:mx-16 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-8">Latest Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {latestCourses.map((course, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold">{course.title}</h3>
              <p className="text-gray-600 mt-2">Instructor: {course.instructor}</p>
              <div className="flex items-center mt-2">
                <span>{course.rating} ⭐ </span> <span className="ml-2 text-sm">({course.reviews})</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-teal-900 text-white p-10">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-24 max-w-7xl mx-auto">
    {/* Left Column */}
    <div>
      <h3 className="font-bold text-xl mb-4">KnowledgePulse</h3>
      <p className="text-gray-300 mb-4">
        Join now to receive personalized recommendations from the full Coursera catalog.
      </p>
      <div className="flex space-x-4">
        <img src="/public/insta.svg" alt="Instagram" className="w-6 h-6 cursor-pointer" />
        <img src="/public/twitter.svg" alt="Twitter" className="w-6 h-6 cursor-pointer" />
        <img src="/public/facebook.svg" alt="Facebook" className="w-6 h-6 cursor-pointer" />
        <img src="/public/youtube.svg" alt="YouTube" className="w-6 h-6 cursor-pointer" />
      </div>
    </div>

    {/* Middle Column */}
    <div>
      <h3 className="font-semibold text-lg mb-4">Company</h3>
      <ul className="space-y-2 text-gray-300">
        <li>About us</li>
        <li>Blog</li>
        <li>Contact us</li>
        <li>Pricing</li>
        <li>Testimonials</li>
      </ul>
    </div>

    {/* Right Column */}
    <div>
      <h3 className="font-semibold text-lg mb-4">Support</h3>
      <ul className="space-y-2 text-gray-300">
        <li>Help center</li>
        <li>Terms of service</li>
        <li>Legal</li>
        <li>Privacy policy</li>
        <li>Status</li>
      </ul>
    </div>
  </div>

  <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400">
    <p>Designed by @Ali Shan Khattak, 2023, All rights reserved</p>
  </div>
</footer>
    </div>
  );
};

export default CourseDetailPage;
