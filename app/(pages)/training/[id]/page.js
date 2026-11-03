"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Head from "next/head";
import Link from "next/link";

export default function TrainingDetailsPage() {
  const { id } = useParams();
  const [training, setTraining] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("objectives");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetchTrainingDetails();
  }, [id]);

  const fetchTrainingDetails = async () => {
    try {
      const response = await fetch(`/api/training/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch training details");
      }
      const data = await response.json();
      setTraining(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching training details:", error);
      setError("Failed to load training details. Please try again.");
      setLoading(false);
    }
  };

  const tabClasses = (tab) => `
        px-4 py-2 text-sm font-medium rounded-t-lg 
        ${
          activeTab === tab
            ? "bg-orange-500 text-white"
            : "bg-white text-gray-700 hover:bg-gray-100"
        }
        cursor-pointer transition-colors
    `;

  if (loading) {
    return (
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* Skeleton for left column */}
          <div className="lg:w-1/3 mb-8 lg:mb-0 lg:pr-8">
            <div className="sticky top-24">
              {/* Skeleton image */}
              <div className="w-full h-64 rounded-lg bg-gray-200 animate-pulse mb-6"></div>

              <div className="bg-white rounded-lg shadow-md p-6">
                {/* Skeleton title */}
                <div className="h-8 bg-gray-200 rounded w-3/4 mb-2 animate-pulse"></div>
                {/* Skeleton author */}
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-4 animate-pulse"></div>

                {/* Skeleton tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <div className="h-6 bg-gray-200 rounded w-24 animate-pulse"></div>
                  <div className="h-6 bg-gray-200 rounded w-32 animate-pulse"></div>
                </div>

                {/* Skeleton button */}
                <div className="h-12 bg-gray-200 rounded-lg w-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Skeleton for right column */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Skeleton tabs */}
              <div className="flex overflow-x-auto bg-gray-100 border-b p-2">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="h-8 bg-gray-200 rounded w-24 mx-2 animate-pulse"
                  ></div>
                ))}
              </div>

              {/* Skeleton content */}
              <div className="p-6">
                {/* Skeleton heading */}
                <div className="h-7 bg-gray-200 rounded w-1/3 mb-6 animate-pulse"></div>

                {/* Skeleton list items */}
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className="flex items-start mb-4">
                    <div className="h-5 w-5 bg-gray-200 rounded-full mr-2 animate-pulse"></div>
                    <div className="h-5 bg-gray-200 rounded w-full animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !training) {
    return (
      <div className="flex flex-col items-center justify-center h-96">
        <p className="text-red-500 mb-4">{error || "Training not found"}</p>
        <Link
          href="/training"
          className="bg-orange-500 text-white py-2 px-6 rounded hover:bg-orange-600"
        >
          Back to All Training Programs
        </Link>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{training.title} - Kan ProkaGno Innovation Pvt LTD</title>
      </Head>

      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* Left column - Image and basic info */}
          <div className="lg:w-1/3 mb-8 lg:mb-0 lg:pr-8">
            <div className="sticky top-24">
              <img
                className="w-full h-auto rounded-lg shadow-md mb-6"
                src={
                  training.image ||
                  `https://dummyimage.com/600x400/orange/fff.png&text=${encodeURIComponent(
                    training.title
                  )}`
                }
                alt={training.title}
              />

              <div className="bg-white rounded-lg shadow-md p-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  {training.title}
                </h1>
                <p className="text-gray-600 mb-4">By {training.author}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {training.seatsAvailable && (
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                      {training.seatsAvailable} seats available
                    </span>
                  )}
                  {training.timeToRead && (
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                      {training.timeToRead} min read
                    </span>
                  )}
                  {training.date && (
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">
                      {training.date}
                    </span>
                  )}
                </div>

                <button className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors duration-300">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>

          {/* Right column - Content */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Tabs */}
              <div className="flex overflow-x-auto bg-gray-100 border-b">
                <div
                  className={tabClasses("objectives")}
                  onClick={() => setActiveTab("objectives")}
                >
                  Objectives
                </div>
                <div
                  className={tabClasses("outcomes")}
                  onClick={() => setActiveTab("outcomes")}
                >
                  Outcomes
                </div>
                <div
                  className={tabClasses("syllabus")}
                  onClick={() => setActiveTab("syllabus")}
                >
                  Syllabus
                </div>
                <div
                  className={tabClasses("guidelines")}
                  onClick={() => setActiveTab("guidelines")}
                >
                  Guidelines
                </div>
                {training.optional && (
                  <div
                    className={tabClasses("optional")}
                    onClick={() => setActiveTab("optional")}
                  >
                    {training.optional.title || "Optional"}
                  </div>
                )}
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {activeTab === "objectives" && (
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-4">
                      Course Objectives
                    </h2>
                    <ul className="space-y-3">
                      {training.courseObjectives?.map((objective, index) => (
                        <li key={index} className="flex items-start">
                          <div className="flex-shrink-0 h-5 w-5 text-orange-500 mt-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <span className="ml-2">{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === "outcomes" && (
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-4">
                      Course Outcomes
                    </h2>
                    <ul className="space-y-3">
                      {training.courseOutcomes?.map((outcome, index) => (
                        <li key={index} className="flex items-start">
                          <div className="flex-shrink-0 h-5 w-5 text-orange-500 mt-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <span className="ml-2">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === "syllabus" && (
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-4">
                      Course Syllabus
                    </h2>
                    <div className="space-y-6">
                      {training.courseSyllabus?.map((unit, index) => (
                        <div
                          key={index}
                          className="border-l-4 border-orange-500 pl-4"
                        >
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-gray-900">
                              Unit {unit.unit}: {unit.title}
                            </h3>
                            <span className="text-sm bg-orange-100 text-orange-800 px-2 py-1 rounded">
                              {unit.duration}
                            </span>
                          </div>
                          <ul className="mt-3 space-y-2">
                            {unit.topics.map((topic, tIndex) => (
                              <li key={tIndex} className="text-gray-700">
                                • {topic}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "guidelines" && training.guidelines && (
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-4">
                      Guidelines
                    </h2>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-green-600 mb-2">
                        Do's
                      </h3>
                      <ul className="space-y-2 bg-green-50 p-4 rounded-lg">
                        {training.guidelines.dos?.map((item, index) => (
                          <li key={index} className="text-gray-700">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-red-600 mb-2">
                        Don'ts
                      </h3>
                      <ul className="space-y-2 bg-red-50 p-4 rounded-lg">
                        {training.guidelines.donts?.map((item, index) => (
                          <li key={index} className="text-gray-700">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {activeTab === "optional" && training.optional && (
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-4">
                      {training.optional.title}
                    </h2>
                    <ul className="space-y-3">
                      {training.optional.topics?.map((topic, index) => (
                        <li key={index} className="flex items-start">
                          <div className="flex-shrink-0 h-5 w-5 text-orange-500 mt-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                              <path
                                fillRule="evenodd"
                                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <span className="ml-2">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/training"
                className="inline-flex items-center text-orange-500 hover:text-orange-600"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  ></path>
                </svg>
                Back to All Training Programs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
