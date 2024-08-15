import React, { useState } from "react";
import { Link } from "react-router-dom";
import Newsletter from "../components/Newsletter"; // Adjust the path as needed
import Footer from "../components/Footer"; // Adjust the path as needed

const BlogAndArticlesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const articles = [
    {
      id: 1,
      category: "Marketing",
      title:
        "Digital Transformation: How Direct Marketing has evolved in Canada during the Pandemic",
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
    },
  ];

  const filteredArticles =
    selectedCategory === "All"
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

  return (
    <>
      <div className=" bg-teal-50 p-8">
        {/* Header Section */}
        <div className="mx-auto w-10/12 lg:w-[95%]">
          <header className="mentors-hero rounded-lg bg-[#003C3C] text-white ">
            <h1 className="lg:text-3xl lg:font-bold">Blogs & Articles</h1>
          </header>
        </div>

        {/* Latest Articles Section */}
        <section className="bg-white px-8 py-16">
          <div>
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <h2 className="text-2xl font-bold mb-4 md:mb-0">
                Latest articles
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
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
                  <div className="  flex flex-col h-full  cursor-pointer ">
                    <img
                      src={article.image}
                      alt={`Article ${article.id}`}
                      className="h-60 overflow-hidden rounded-xl "
                    />

                    <div className="flex items-center gap-4 text-[#88A0A0] mt-2 ">
                      <h3>Getting Started.</h3>
                      <p className="">{article.date}</p>
                    </div>
                    <div className="flex flex-col flex-grow mt-4">
                      <h3 className="text-lg font-semibold text-[#093B3B]">
                        {article.title}
                      </h3>
                      <p className="text-sm mt-4  text-[#88A0A0]">
                        {article.content}
                      </p>
                    </div>
                    <span className="mt-5 text-[#167063] hover:underline font-semibold inline-block ">
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
      </div>
      <Footer className="p-0" />
    </>
  );
};

export default BlogAndArticlesPage;
