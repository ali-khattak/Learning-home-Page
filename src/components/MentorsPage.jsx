import React from 'react';

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
      <header className="mentors-hero bg-teal-800 text-white py-10 text-center">
      <h1 className="text-300 mb-4  ">Teachers</h1>
        <h1 className="text-4xl font-bold">Meet the teacher</h1>
      </header>

      <section className="mentors-section py-12 px-6 bg-[#F4FDFB]">
        <h2 className="text-3xl font-bold mb-10 text-left">
          Meet our professional <span className="text-teal-700">mentors</span>
        </h2>
        <div className="mentors-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mentors.map((mentor, index) => (
            <div className="mentor-card bg-white p-6 rounded-lg shadow-lg text-center" key={index}>
              <img src={mentor.image} alt={mentor.name} className="w-full h-40 object-cover mb-4" />
              <div className="mentor-info">
                <h3 className="text-xl font-semibold">{mentor.name}</h3>
                <p className="text-gray-600">{mentor.role}</p>
                <p className="text-teal-700 mt-2">⭐ {mentor.rating} ({mentor.reviews.toLocaleString()} reviews)</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="newsletter-section py-12 bg-teal-100 text-center">
        <h2 className="text-2xl font-bold mb-4">Subscribe Our Newsletter</h2>
        <p className="text-gray-600 mb-6">Join now to receive personalized recommendations from the full Coursera catalog.</p>
        <form className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 border border-gray-300 rounded-l-lg"
          />
          <button type="submit" className="px-6 py-2 bg-teal-700 text-white rounded-r-lg">
            Subscribe
          </button>
        </form>
      </section>

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
            <h3 className="font-semibold text-lg mb-4">Support</ h3>           <ul className="space-y-2 text-gray-300">
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

export default MentorsPage;
