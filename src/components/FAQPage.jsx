import React, { useState } from 'react';
import Newsletter from './Newsletter'; // Ensure this path is correct
import Footer from './Footer'; // Ensure this path is correct

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
    <div className=" bg-white ">
    <div className="bg-green-50 py-8 px-0 md:px-32">
      {/* Header */}
      <header className="bg-[#004D40] rounded-lg py-60 px-16 text-center">
        <h1 className="text-white text-5xl font-bold">FAQ Page</h1>
      </header>
      </div>
      {/* FAQ Section */}
      <section className="py-16 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently asked <span className="text-teal-950">questions</span>
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

      <Newsletter />
      <Footer />
    </div>
  );
};

export default FAQPage;
