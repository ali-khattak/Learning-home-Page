import React from 'react';

const ArticleDetailsPage = () => {
  return (
    <div className="container mx-auto px-8">
      {/* Header Section */}
      <header className="bg-[#134e4a] py-24 relative">
        <div className="text-center">
          <h1 className="text-white text-sm font-bold uppercase">Development</h1>
          <h2 className="text-white text-5xl font-bold mt-4">
            Digital Transformation: How Direct<br/> Marketing has evolved in Canada<br/> during the Pandemic
          </h2>
        </div>
      </header>

      {/* Article Content Section */}
      <section className="relative py-16">
        <div className="flex justify-center -mt-20 mb-8">
          <img src="/Ad.png" alt="Article" className="rounded-lg w-1/2 relative z-16" />
        </div>
        <div className="text-left max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-8">Introduction</h3>
          <p className="text-lg text-gray-700 mb-8">
            Hook started out as an idea in the mind of a frustrated software developer. 
            He had spent countless hours trying to manage his daily tasks, projects, and deadlines 
            on different platforms, from calendars to spreadsheets to to-do lists, but nothing 
            seemed to work efficiently. He needed a tool that could help him organize everything 
            in one place and save him time and effort.
          </p>
          <h3 className="text-2xl font-bold mb-8">Importance of analytics</h3>
          <p className="text-lg text-gray-700 mb-8">
            Hook started out as an idea in the mind of a frustrated software developer. 
            He had spent countless hours trying to manage his daily tasks, projects, and deadlines 
            on different platforms, from calendars to spreadsheets to to-do lists, but nothing 
            seemed to work efficiently. He needed a tool that could help him organize everything 
            in one place and save him time and effort.
          </p>
          <h3 className="text-2xl font-bold mb-8">How to get started</h3>
          <p className="text-lg text-gray-700 mb-8">
            Hook started out as an idea in the mind of a frustrated software developer. 
            He had spent countless hours trying to manage his daily tasks, projects, and deadlines 
            on different platforms, from calendars to spreadsheets to to-do lists, but nothing 
            seemed to work efficiently. He needed a tool that could help him organize everything 
            in one place and save him time and effort.
          </p>
        </div>
      </section>

      {/* Read More Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-left">Read More</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Repeat this block for each article */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="/Ad.png" alt="Article" className="rounded-lg mb-4 w-full h-48 object-cover" />
              <h3 className="text-lg font-semibold">Digital Transformation: How Direct Marketing has evolved in Canada during the Pandemic</h3>
              <p className="text-sm text-gray-500 mt-2">Getting Started. Dec, 2024</p>
              <button className="text-green-600 font-semibold mt-4">Read More</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="/Ad.png" alt="Article" className="rounded-lg mb-4 w-full h-48 object-cover" />
              <h3 className="text-lg font-semibold">Digital Transformation: How Direct Marketing has evolved in Canada during the Pandemic</h3>
              <p className="text-sm text-gray-500 mt-2">Getting Started. Dec, 2024</p>
              <button className="text-green-600 font-semibold mt-4">Read More</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="/Ad.png" alt="Article" className="rounded-lg mb-4 w-full h-48 object-cover" />
              <h3 className="text-lg font-semibold">Digital Transformation: How Direct Marketing has evolved in Canada during the Pandemic</h3>
              <p className="text-sm text-gray-500 mt-2">Getting Started. Dec, 2024</p>
              <button className="text-green-600 font-semibold mt-4">Read More</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="/Ad.png" alt="Article" className="rounded-lg mb-4 w-full h-48 object-cover" />
              <h3 className="text-lg font-semibold">Digital Transformation: How Direct Marketing has evolved in Canada during the Pandemic</h3>
              <p className="text-sm text-gray-500 mt-2">Getting Started. Dec, 2024</p>
              <button className="text-green-600 font-semibold mt-4">Read More</button>
            </div>
            {/* End of article block */}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <div className="py-16 bg-green-50">
      <section className="py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Subscribe Our Newsletter</h2>
        <p className="mb-8">
          Join now to receive personalized recommendations<br/> from the full Coursera catalog.
        </p>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your mail"
            className="px-4 py-2 border rounded-lg w-2/3 md:w-1/3"
          />
          <button className="ml-4 px-5 py-2 bg-green-600 text-white rounded-full">
            Subscribe
          </button>
        </div>
      </section>
      </div>

      {/* Footer Section */}
      <footer className="bg-[#134e4a] text-white py-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">KnowledgePulse</h3>
            <p className="text-sm mb-8">
              Join now to receive personalized recommendations from the full Coursera catalog.
            </p>
            <div className="flex space-x-8">
              <img src="/insta.svg" alt="Instagram" className="w-6 h-6 cursor-pointer" />
              <img src="/twitter.svg" alt="Twitter" className="w-6 h-6 cursor-pointer" />
              <img src="/facebook.svg" alt="Facebook" className="w-6 h-6 cursor-pointer" />
              <img src="/youtube.svg" alt="YouTube" className="w-6 h-6 cursor-pointer" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <ul className="text-sm">
              <li><a href="#" className="hover:underline">About us</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Contact us</a></li>
              <li><a href="#" className="hover:underline">Pricing</a></li>
              <li><a href="#" className="hover:underline">Testimonials</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Support</h3>
            <ul className="text-sm">
              <li><a href="#" className="hover:underline">Help center</a></li>
              <li><a href="#" className="hover:underline">Terms of service</a></li>
              <li><a href="#" className="hover:underline">Legal</a></li>
              <li><a href="#" className="hover:underline">Privacy policy</a></li>
              <li><a href="#" className="hover:underline">Status</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
          <hr className="border-t border-gray-200" />
          <p className="text-sm mt-4">Designed by @Rubel 2023</p>
        </div>
      </footer>
    </div>
  );
};

export default ArticleDetailsPage;
