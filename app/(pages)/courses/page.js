"use client";
import React, { useEffect, useState } from "react";
import Head from "next/head";

export default function CoursesPage() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await fetch("/api/courses");
      if (!response.ok) {
        throw new Error("Failed to fetch courses");
      }
      const data = await response.json();
      setCourses(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching courses:", error);
      setError("Failed to load courses. Please try again.");
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-96">
        <p className="text-red-500 mb-4">{error}</p>
        <button
          onClick={fetchCourses}
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
        <title>Courses - Kan ProkaGno Innovation Pvt LTD</title>
      </Head>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-3xl font-bold text-orange-500">Our Courses</h1>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Enhance your skills with our industry-relevant courses designed to
              help you succeed in today's competitive market
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {courses.map((course) => (
              <div key={course.id} className="p-4 lg:w-1/3">
                <div className="h-full bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 hover:shadow-xl transition-all duration-300">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={
                      course.image ||
                      `https://dummyimage.com/720x400/orangeFF0/fff.png&text=${encodeURIComponent(
                        course.title
                      )}`
                    }
                    alt={course.title}
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      {course.duration}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      {course.title}
                    </h1>
                    <p className="leading-relaxed mb-3">{course.description}</p>
                    <p className="text-orange-500 font-bold text-xl mb-5">
                      ${course.price}
                    </p>
                    <div className="flex items-center flex-wrap">
                      <button className="bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-orange-600 focus:outline-none">
                        Enroll Now
                      </button>
                      <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <i className="fas fa-user mr-1"></i> {course.instructor}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
