import React, { useState } from "react";
import { Link } from "react-router-dom";

const BlogAndArticlesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const articles = [
    {
      id: 1,
      category: "Marketing",
      title: "Digital Transformation: How Direct Marketing has evolved in Canada during the Pandemic",
      date: "Dec, 2024",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.",
      image: "/A1.jpg", // Update with the correct image path
    },
    {
      id: 2,
      category: "Technology",
      title: "The Future of AI in Technology",
      date: "Jan, 2024",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/A2.jpg", // Update with the correct image path
    },
    {
      id: 3,
      category: "SEO",
      title: "SEO Best Practices for 2024",
      date: "Feb, 2024",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "/A3.jfif", // Update with the correct image path
    },
    {
      id: 4,
      category: "Social Media",
      title: "The Impact of Social Media on Modern Marketing",
      date: "Mar, 2024",
      content:
        "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "/A7.jpg", // Update with the correct image path
    },
    {
      id: 5,
      category: "Technology",
      title: "Exploring the Advancements in Blockchain Technology",
      date: "Apr, 2024",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      image: "/A5.jfif", // Update with the correct image path
    },
    { 
      id: 6,
      category: "Technology",
      title: "Exploring the Advancements in Blockchain Technology",
      date: "Apr, 2024",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      image: "/A7.jpg", // Update with the correct image path
    }
  ];

  const filteredArticles =
    selectedCategory === "All"
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

  return (
    <div className="container mx-auto px-16">
    <div className="bg-[#F4FDFB]">
      {/* Header Section */}
      <div className="bg-[#134e4a] py-16 px-4 flex justify-center">
        <h1 className="text-sm font-bold text-white uppercase">Blog</h1>
      </div>
      <div className="bg-[#134e4a] py-16 px-4 flex justify-center">
        <h1 className="text-white text-5xl font-bold">Articles & News</h1>
      </div>

      {/* Latest Articles Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Latest articles</h2>
            <div className="flex gap-4">
              <button
                className={`px-4 py-2 rounded-full ${
                  selectedCategory === "All"
                    ? "bg-green-600 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => setSelectedCategory("All")}
              >
                All
              </button>
              <button
                className={`px-4 py-2 rounded-full ${
                  selectedCategory === "Marketing"
                    ? "bg-green-600 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => setSelectedCategory("Marketing")}
              >
                Marketing
              </button>
              <button
                className={`px-4 py-2 rounded-full ${
                  selectedCategory === "Technology"
                    ? "bg-green-600 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => setSelectedCategory("Technology")}
              >
                Technology
              </button>
              <button
                className={`px-4 py-2 rounded-full ${
                  selectedCategory === "SEO"
                    ? "bg-green-600 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => setSelectedCategory("SEO")}
              >
                SEO
              </button>
              <button
                className={`px-4 py-2 rounded-full ${
                  selectedCategory === "Social Media"
                    ? "bg-green-600 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => setSelectedCategory("Social Media")}
              >
                Social Media
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {filteredArticles.map((article) => (
              <Link to={`/articles/${article.id}`} key={article.id}>
                <div className="bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={article.image}
                    alt={`Article ${article.id}`}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <h3 className="text-lg font-semibold mt-4">{article.title}</h3>
                  <p className="text-sm text-gray-500 mt-2">{article.date}</p>
                  <p className="text-sm text-gray-700 mt-4">
                    {article.content}
                  </p>
                  <span className="mt-4 text-green-600 font-semibold inline-block">
                    Read More
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription Section */}
      <section className="py-16 bg-[#F4FDFB]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Subscribe Our Newsletter</h2>
          <p className="mb-8">
            Join now to receive personalized recommendations from the full
            Coursera catalog.
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
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#134e4a] text-white py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">KnowledgePulse</h3>
            <p className="text-sm">
              Join now to receive personalized
              <br />
              recommendations from the full <br />
               Coursera catalog.     
            </p>
            <div className="flex space-x-8">
              <img src="/public/insta.svg" alt="Instagram" className="w-6 h-6 cursor-pointer" />
              <img src="/public/twitter.svg" alt="Twitter" className="w-6 h-6 cursor-pointer" />
              <img src="/public/facebook.svg" alt="Facebook" className="w-6 h-6 cursor-pointer" />
              <img src="/public/youtube.svg" alt="YouTube" className="w-6 h-6 cursor-pointer" />
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
          <p className="text-xs">&copy; 2024 KnowledgePulse. All rights reserved.</p>
        </div>
      </footer>
    </div>
    </div>
  );
};

export default BlogAndArticlesPage;
