import React from 'react';
import Newsletter from '../components/Newsletter'; // Update the path as per your project structure
import Footer from '../components/Footer';         

const mentors = [
  { name: 'Darrell Steward', role: 'UX/UI designer', image: '/public/P1.svg', rating: 4.8, reviews: 44000 },
  { name: 'Kathryn Murphy', role: 'Data Scientist', image: '/public/P2.svg', rating: 4.8, reviews: 44000 },
  { name: 'Brooklyn Simmons', role: 'Data Analyst', image: '/public/P3.svg', rating: 4.8, reviews: 44000 },
  { name: 'Esther Howard', role: 'UX/UI designer', image: '/public/P4.svg', rating: 4.8, reviews: 44000 },
  { name: 'Bessie Cooper', role: 'UX/UI designer', image: '/public/P5.svg', rating: 4.8, reviews: 44000 },
  { name: 'Jacob Jones', role: 'UX/UI designer', image: '/public/P6.svg', rating: 4.8, reviews: 44000 },
  { name: 'Guy Hawkins', role: 'UX/UI designer', image: '/public/L4.jfif', rating: 4.8, reviews: 44000 },
  { name: 'Theresa Webb', role: 'UX/UI designer', image: '/public/L4.jfif', rating: 4.8, reviews: 44000 },
  { name: 'Theresa Webb', role: 'UX/UI designer', image: '/public/L4.jfif', rating: 4.8, reviews: 44000 },
  { name: 'Theresa Webb', role: 'UX/UI designer', image: '/public/L4.jfif', rating: 4.8, reviews: 44000 },
  { name: 'Theresa Webb', role: 'UX/UI designer', image: '/public/L4.jfif', rating: 4.8, reviews: 44000 },  
  { name: 'Theresa Webb', role: 'UX/UI designer', image: '/public/L4.jfif', rating: 4.8, reviews: 44000 },
];

const MentorsPage = () => {
    return (
      <div className="mentors-page">
        <div className="bg-green-50">
        <div className="bg-[#000c34]py-16 px- md:px-8 ">
        <header className="mentors-hero rounded-lg bg-[#000c34] text-white py-56 text-center px-68">
          <h1 className="text-300 mb-4">Teachers</h1>
          <h1 className="text-4xl font-bold">Meet the teacher</h1>
        </header>
        </div>
        </div>
  
        <section className="mentors-section py-12 px-6 md:px-16 bg-white">
          <h2 className="text-3xl font-bold mb-10 text-left">
            Meet our professional <span className="text-[#000c34]">mentors</span>
          </h2>
          <div className="mentors-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mentors.map((mentor, index) => (
              <div className="mentor-card bg-white p-6 rounded-lg shadow-lg text-center" key={index}>
                <img src={mentor.image} alt={mentor.name} className="w-full h-40 object-cover mb-4" />
                <div className="mentor-info">
                  <h3 className="text-xl font-semibold">{mentor.name}</h3>
                  <p className="text-gray-600">{mentor.role}</p>
                  <p className="text-[#000c34] mt-2">⭐ {mentor.rating} ({mentor.reviews.toLocaleString()} reviews)</p>
                </div>
              </div>
            ))}
          </div>
        </section>
  
        <Newsletter /> {/* Imported Newsletter component */}
  
        <Footer /> {/* Imported Footer component */}
      </div>
    );
  };
  
  export default MentorsPage;