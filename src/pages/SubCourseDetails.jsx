import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import tickIcon from '/tick.svg';
import youtubeIcon from '/public/youtube-icon.svg';
import adobeIcon from '/adobe.svg';
import instructorImage from '/P1.svg';
import Newsletter from '../components/Newsletter';

import Footer from '../components/Footer'; // Importing the Footer component


import { Icon } from '@iconify/react'; // Import the Icon component

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
        tags: [],
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
        <div className="bg-green-50 course-detail-page">
            {/* Hero Section */}
            <div className="bg-green-50 course-detail-page">
                <div className="course-hero bg-[#000c34] text-white p-48 rounded-lg shadow-lg flex justify-between items-center mx-16 md:mx-8">
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
                    </div>
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
            <div className="bg-white course-main-content mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 mx-4 md:mx-16">
                {/* Course Info and Reviews Section */}
                <div className="col-span-2">
                    <div className="course-info p-6 rounded-lg">
                        <div className="flex border-b-2 border-gray-300 mb-4">
                            <button 
                                className={`px-4 py-2 ${activeTab === 'info' ? 'border-b-2 border-[#000c34]' : ''}`}
                                onClick={() => setActiveTab('info')}
                            >
                                Course Info
                            </button>
                            <button 
                                className={`px-4 py-2 ${activeTab === 'reviews' ? 'border-b-2 border-[#000c34]' : ''}`}
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
                                            {/* Using Iconify for chevron icons */}
                                            <Icon 
                                                icon={openSections[index] ? "line-md:chevron-small-down" : "line-md:chevron-small-right"} 
                                                style={{ color: 'black' }} 
                                                className="ml-auto" 
                                            />
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
                            30 downloadable resources
                        </li>
                        <li className="flex items-center">
                            <img src={tickIcon} alt="tick" className="w-5 h-5 mr-2" />
                            Certificate of completion
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
                
                You'll also be enrolled in this specialization.
            </p>
                </div>
            </div>

            {/* Latest Courses Section */}
            <div className="latest-courses-section mt-16 bg-green-50 p-8 rounded-lg shadow-lg mx-4 md:mx-16">
                <h2 className="text-3xl font-bold text-center mb-8">Latest Courses</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {latestCourses.map((course, index) => (
                        <div key={index} className="course-item bg-white p-4 rounded-lg shadow-md">
                            <img src={course.image} alt={course.title} className="w-full h-48 object-cover rounded-lg" />
                            <div className="mt-4">
                                <h3 className="text-lg font-semibold">{course.title}</h3>
                                <p className="text-sm text-gray-500">{course.instructor}</p>
                                <p className="mt-2">{course.rating} ⭐ ({course.reviews})</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <Newsletter/>
            <Footer />
            
        </div>
    );
};

export default CourseDetailPage;
