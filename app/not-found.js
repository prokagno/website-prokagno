import Link from "next/link";

export const metadata = {
  title: "Page Not Found | Kanprokagno Innovation Private Limited",
  description:
    "The requested page could not be found. Please navigate back to our homepage.",
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center py-20 px-4">
      <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
        Page Not Found
      </h2>
      <p className="text-lg text-gray-600 max-w-md mb-8">
        Sorry, we couldn't find the page you're looking for. It might have been
        removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-orange-600 text-white font-medium rounded-md hover:bg-orange-700 transition-colors duration-300"
      >
        Return to Homepage
      </Link>
    </div>
  );
}
