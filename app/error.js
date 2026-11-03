'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center py-20 px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-4">Something Went Wrong</h1>
      <p className="text-lg text-gray-700 max-w-md mb-8">
        We apologize for the inconvenience. An unexpected error has occurred.
      </p>
      <div className="flex flex-col md:flex-row gap-4">
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors duration-300"
        >
          Try Again
        </button>
        <Link 
          href="/"
          className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-100 transition-colors duration-300"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}
