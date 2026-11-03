"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Head from "next/head";

export default function CourseDetailsPage() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetchCourseDetails();
  }, [id]);

  const fetchCourseDetails = async () => {
    try {
      const response = await fetch(`/api/courses/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch course details");
      }
      const data = await response.json();
      setCourse(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching course details:", error);
      setError("Failed to load course details. Please try again.");
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

  if (error || !course) {
    return (
      <div className="flex flex-col items-center justify-center h-96">
        <p className="text-red-500 mb-4">{error || "Course not found"}</p>
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
        <title>{course.title} - Kan ProkaGno Innovation Pvt LTD</title>
      </Head>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                COURSE DETAILS
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                {course.title}
              </h1>
              <div className="flex mb-4 border-b-2 border-gray-100 pb-4">
                <div className="flex-grow text-orange-500 border-b-2 border-orange-500 py-2 text-lg px-1">
                  Description
                </div>
              </div>
              <p className="leading-relaxed mb-4">{course.description}</p>
              <div className="flex border-t border-gray-100 py-2">
                <span className="text-gray-500">Instructor</span>
                <span className="ml-auto text-gray-900">
                  {course.instructor}
                </span>
              </div>
              <div className="flex border-t border-gray-100 py-2">
                <span className="text-gray-500">Duration</span>
                <span className="ml-auto text-gray-900">{course.duration}</span>
              </div>
              <div className="flex border-t border-b mb-6 border-gray-100 py-2">
                <span className="text-gray-500">Price</span>
                <span className="ml-auto text-gray-900">${course.price}</span>
              </div>
              <div className="flex items-center">
                <button className="flex ml-auto text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded">
                  Enroll Now
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <i className="fas fa-heart"></i>
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <i className="fas fa-share"></i>
                </button>
              </div>
            </div>
            <img
              alt={course.title}
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={
                course.image ||
                `https://dummyimage.com/720x400/orangeFF0/fff.png&text=${encodeURIComponent(
                  course.title
                )}`
              }
            />
          </div>
        </div>
      </section>
    </>
  );
}
