import React, { useState } from 'react';

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'Do you provide student support?',
      answer:
        'Participate in our live webinars and workshops conducted by experts in the field. These sessions cover advanced topics, provide hands-on experiences, and offer opportunities for direct interaction with instructors.',
    },
    {
      question: 'How do I update my profile information?',
      answer: 'You can update your profile information by navigating to the account settings page.',
    },
    {
      question: 'What is your benefit of courses?',
      answer: 'Our courses are designed to provide practical knowledge and skills that can be directly applied in your career.',
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day money-back guarantee for all our courses if you are not satisfied.',
    },
    {
      question: 'How do I enroll in a course?',
      answer: 'To enroll in a course, simply click the "Enroll Now" button on the course page.',
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-[#E0F2F1]">
      {/* Header */}
      <header className="bg-[#004D40] py-16 text-center">
        <h1 className="text-white text-5xl font-bold">FAQ Page</h1>
      </header>

      {/* FAQ Section */}
      <section className="py-16 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently asked <span className="text-green-600">questions</span>
        </h2>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-300 mb-4 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center p-4 bg-white">
              <h3 className="text-xl font-semibold">{faq.question}</h3>
              <span className="text-2xl">{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div className="bg-gray-100 p-4">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Newsletter Subscription */}
      <section className="bg-[#E0F2F1] py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Subscribe <span className="text-green-600">Our Newsletter</span>
        </h2>
        <p className="text-gray-600 mb-8">
          Join now to receive personalized recommendations from the full Coursera catalog.
        </p>
        <div className="max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your mail"
            className="w-full p-4 border rounded-l-lg"
          />
          <button className="bg-green-600 text-white p-4 rounded-r-lg">Subscribe</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#004D40] text-white py-8">
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
              <li><a href="#" className="hover:underline">Help Center</a></li>
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
              <li><a href="#" className="hover:underline">Legal</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Status</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
          <hr className="border-gray-700" />
          <p className="text-sm text-gray-500 mt-4">Designed by Rubel 2023, All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default FAQPage;
