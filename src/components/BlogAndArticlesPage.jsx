import React, { useState } from "react";
import { Link } from "react-router-dom";
import Newsletter from "./Newsletter";  // Adjust the path as needed
import Footer from "./Footer";          // Adjust the path as needed

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
    <div className="bg-green-50">
      {/* Header Section */}
      <div className="bg-green-50 rounded-lg py-8 px-0 md:px-32">
        <div className="bg-[#134e4a] rounded-lg py-32 px-60 flex justify-center">
          <h1 className="text-sm font-bold text-white uppercase">Blog</h1>
        </div>
        <div className="bg-[#134e4a] rounded-lg py-20 px-16 flex justify-center">
          <h1 className="text-white text-5xl font-bold">Articles & News</h1>
        </div>
      </div>

      {/* Latest Articles Section */}
      <section className="bg-white px-8 py-16">
        <div>
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h2 className="text-2xl font-bold mb-4 md:mb-0">Latest articles</h2>
            <div className="flex flex-wrap gap-4">
              {/* Category Buttons */}
              <button
                className={`px-4 py-2 rounded-full text-sm ${
                  selectedCategory === "All"
                    ? "bg-[#134e4a] text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => setSelectedCategory("All")}
              >
                All
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm ${
                  selectedCategory === "Marketing"
                    ? "bg-[#134e4a] text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => setSelectedCategory("Marketing")}
              >
                Marketing
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm ${
                  selectedCategory === "Technology"
                    ? "bg-[#134e4a] text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => setSelectedCategory("Technology")}
              >
                Technology
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm ${
                  selectedCategory === "SEO"
                    ? "bg-[#134e4a] text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => setSelectedCategory("SEO")}
              >
                SEO
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm ${
                  selectedCategory === "Social Media"
                    ? "bg-[#134e4a] text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => setSelectedCategory("Social Media")}
              >
                Social Media
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <Link to={`/articles/${article.id}`} key={article.id}>
                <div className="bg-white rounded-lg shadow-lg flex flex-col h-full p-6 cursor-pointer hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={article.image}
                    alt={`Article ${article.id}`}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="flex flex-col flex-grow mt-4">
                    <h3 className="text-lg font-semibold">{article.title}</h3>
                    <p className="text-sm text-gray-500 mt-2">{article.date}</p>
                    <p className="text-sm text-gray-700 mt-4 flex-grow">
                      {article.content}
                    </p>
                  </div>
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
      <Newsletter className="p-0" />

      {/* Footer Section */}
      <Footer className="p-0" />
    </div>
  );
};

export default BlogAndArticlesPage;
