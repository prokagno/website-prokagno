"use client";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch("/api/blogs");
      if (!response.ok) {
        throw new Error("Failed to fetch blogs");
      }
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setError("Failed to load blogs. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "Unknown date";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <div className="h-8 bg-gray-200 rounded w-1/4 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-2/4 mx-auto"></div>
        </div>
        <div className="-my-8 divide-y-2 divide-gray-100">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 mb-6 flex-shrink-0">
                <div className="h-40 bg-gray-200 w-full rounded mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              </div>
              <div className="md:flex-grow">
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-96">
        <p className="text-red-500 mb-4">{error}</p>
        <button
          onClick={fetchBlogs}
          className="bg-orange-500 text-white py-2 px-6 rounded hover:bg-orange-600"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Blogs - Kan ProkaGno Innovation Pvt LTD</title>
      </Head>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-3xl font-bold text-orange-500">Our Blog</h1>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Insights, news, and knowledge from our team of experts
            </p>
          </div>
          <div className="-my-8 divide-y-2 divide-gray-100">
            {blogs.map((blog) => (
              <div
                key={blog._id}
                className="py-8 flex flex-wrap md:flex-nowrap"
              >
                <div className="md:w-64 w-full mb-6 md:mb-0 flex-shrink-0 flex flex-col items-start">
                  <img
                    src={blog.image || "/placeholder.jpg"}
                    alt={blog.title}
                    className="w-full h-40 object-cover rounded"
                  />
                  <span className="font-semibold title-font text-gray-700 mt-4">
                    {blog.author}
                  </span>
                  <span className="text-gray-500 text-sm">
                    {formatDate(blog.date)}
                  </span>
                </div>
                <div className="md:flex-grow md:pl-6">
                  <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                    {blog.title}
                  </h2>
                  <p className="leading-relaxed mb-4">
                    {blog.description
                      ? `${blog.description.slice(0, 180)}...`
                      : "No description available"}
                  </p>
                  {blog.tags?.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {blog.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="bg-orange-100 text-orange-600 text-sm px-2 py-1 rounded"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <Link
                    href={`/blogs/${blog.id}`}
                    className="text-orange-500 inline-flex items-center mt-2"
                  >
                    Read More
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
