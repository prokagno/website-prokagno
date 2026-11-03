"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Head from "next/head";

export default function BlogDetailsPage() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetchBlogDetails();
  }, [id]);

  const fetchBlogDetails = async () => {
    try {
      const response = await fetch(`/api/blogs/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch blog details");
      }
      const data = await response.json();
      setBlog(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching blog details:", error);
      setError("Failed to load blog details. Please try again.");
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "No date available";
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
        <div className="lg:w-4/5 mx-auto">
          <div className="mb-12">
            {/* Skeleton for title */}
            <div className="h-10 bg-gray-200 rounded w-3/4 mb-4 animate-pulse"></div>

            {/* Skeleton for author/date */}
            <div className="flex items-center mb-4">
              <div className="h-4 bg-gray-200 rounded w-24 mr-4 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-32 animate-pulse"></div>
            </div>

            {/* Skeleton for tags */}
            <div className="mb-8 flex flex-wrap">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-6 bg-gray-200 rounded-full w-16 mr-2 mb-2 animate-pulse"
                ></div>
              ))}
            </div>

            {/* Skeleton for image */}
            <div className="w-full h-96 bg-gray-200 rounded mb-12 animate-pulse"></div>

            {/* Skeleton for content */}
            <div className="h-6 bg-gray-200 rounded w-full mb-4 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded w-5/6 mb-4 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded w-full mb-4 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded w-4/5 mb-4 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded w-full mb-4 animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="flex flex-col items-center justify-center h-96">
        <p className="text-red-500 mb-4">{error || "Blog not found"}</p>
        <button
          onClick={() => window.history.back()}
          className="bg-orange-500 text-white py-2 px-6 rounded hover:bg-orange-600"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{blog.title} - Kan ProkaGno Innovation Pvt LTD</title>
      </Head>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto">
            <div className="mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {blog.title}
              </h1>
              <div className="flex items-center mb-4 text-gray-500">
                <span className="mr-4">
                  <i className="fas fa-user mr-2"></i> {blog.author}
                </span>
                {blog.date && (
                  <span>
                    <i className="fas fa-calendar mr-2"></i>{" "}
                    {formatDate(blog.date)}
                  </span>
                )}
              </div>

              {/* Display tags */}
              <div className="mb-8 flex flex-wrap">
                {blog.tags &&
                  blog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-800 text-sm font-medium mr-2 mb-2 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
              </div>

              <img
                src={
                  blog.image ||
                  `https://dummyimage.com/1200x600/eee/999.png&text=${encodeURIComponent(
                    blog.title
                  )}`
                }
                alt={blog.title}
                className="w-full h-auto object-cover object-center rounded mb-12"
              />

              {/* Display description if available */}
              {blog.description && (
                <div className="prose prose-lg max-w-none mb-8">
                  <p className="text-xl font-semibold text-gray-700 leading-relaxed">
                    {blog.description}
                  </p>
                </div>
              )}

              {/* Display content if available */}
              {blog.content && (
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {blog.content}
                  </p>
                </div>
              )}
            </div>

            <div className="py-8 border-t border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Share this article</h3>
              <div className="flex space-x-4">
                <a className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="bg-blue-400 hover:bg-blue-500 text-white p-2 rounded">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="bg-red-600 hover:bg-red-700 text-white p-2 rounded">
                  <i className="fab fa-pinterest"></i>
                </a>
                <a className="bg-green-600 hover:bg-green-700 text-white p-2 rounded">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>

            <div className="mt-8">
              <button
                onClick={() => window.history.back()}
                className="bg-gray-100 text-gray-700 py-2 px-6 rounded-full hover:bg-gray-200"
              >
                <i className="fas fa-arrow-left mr-2"></i> Back to all blogs
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
