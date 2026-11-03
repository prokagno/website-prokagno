"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";

export default function TrainingPage() {
  const [trainings, setTrainings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetchTrainings();
  }, []);

  const fetchTrainings = async () => {
    try {
      const response = await fetch("/api/training");
      if (!response.ok) {
        throw new Error("Failed to fetch training data");
      }
      const data = await response.json();
      setTrainings(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching training data:", error);
      setError("Failed to load training data. Please try again.");
      setLoading(false);
    }
  };

  // Skeleton loader component
  const SkeletonCard = () => (
    <div className="p-4 lg:w-1/2">
      <div className="h-full bg-white shadow-md rounded-lg overflow-hidden">
        <div className="bg-gray-200 animate-pulse lg:h-48 md:h-36 w-full"></div>
        <div className="p-6">
          <div className="h-4 bg-gray-200 animate-pulse rounded w-1/4 mb-3"></div>
          <div className="h-6 bg-gray-200 animate-pulse rounded w-3/4 mb-4"></div>
          <div className="flex items-center mb-3">
            <div className="h-5 bg-gray-200 animate-pulse rounded w-16 mr-2"></div>
            <div className="h-5 bg-gray-200 animate-pulse rounded w-20"></div>
          </div>
          <div className="h-4 bg-gray-200 animate-pulse rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-200 animate-pulse rounded w-5/6 mb-2"></div>
          <div className="h-4 bg-gray-200 animate-pulse rounded w-4/6 mb-6"></div>
          <div className="h-10 bg-gray-200 animate-pulse rounded w-1/3"></div>
        </div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <div className="h-8 bg-gray-200 animate-pulse rounded w-64 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 animate-pulse rounded w-full max-w-md mx-auto"></div>
          </div>
          <div className="flex flex-wrap -m-4">
            {[...Array(4)].map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-96">
        <p className="text-red-500 mb-4">{error}</p>
        <button
          onClick={fetchTrainings}
          className="bg-orange-500 text-white py-2 px-6 rounded hover:bg-orange-600 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Training Programs - Kan ProkaGno Innovation Pvt LTD</title>
      </Head>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-3xl font-bold text-orange-500 relative after:content-[''] after:absolute after:h-1 after:w-24 after:bg-orange-500 after:bottom-0 after:left-1/2 after:-translate-x-1/2 pb-3 mb-2">
              Training Programs
            </h1>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Enhance your skills with our industry-relevant training programs
              designed to help you succeed in today's competitive market
            </p>
          </div>

          {trainings.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16">
              <p className="text-gray-500 text-center text-lg">
                No training programs available at the moment.
              </p>
            </div>
          ) : (
            <div className="flex flex-wrap -m-4">
              {trainings.map((training) => (
                <div key={training.id} className="p-4 lg:w-1/2">
                  <div className="h-full bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="relative overflow-hidden">
                      <img
                        className="lg:h-56 md:h-40 w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                        src={
                          training.image ||
                          `https://dummyimage.com/720x400/orangeFF0/fff.png&text=${encodeURIComponent(
                            training.title
                          )}`
                        }
                        alt={training.title}
                      />
                      {training.seatsAvailable <= 5 && (
                        <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                          {training.seatsAvailable} seats left!
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-2">
                        <svg
                          className="w-4 h-4 text-orange-500 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                        </svg>
                        <span className="text-sm text-gray-500">
                          {training.author}
                        </span>
                      </div>
                      <h1 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors">
                        {training.title}
                      </h1>
                      <div className="flex items-center mb-4 space-x-2">
                        <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                          {training.seatsAvailable} Seats
                        </div>
                        {training.duration && (
                          <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                            <svg
                              className="w-3 h-3 mr-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            {training.duration}
                          </div>
                        )}
                      </div>
                      <p className="leading-relaxed mb-5 text-gray-600">
                        {training.courseObjectives?.[0]?.substring(0, 120)}...
                      </p>
                      <Link
                        href={`/training/${training.id}`}
                        className="flex items-center justify-between mt-6 text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded-lg transition-colors group"
                      >
                        <span>View Details</span>
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
