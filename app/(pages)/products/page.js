"use client";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";

export default function ProductsPage() {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    // For demonstration purposes, we'll use client-side generated data
    // In a real app, you would fetch from an API like:
    // fetch('/api/products').then(res => res.json()).then(data => setProductsData(data))

    const generateProducts = () => {
      const categories = ["All", "Electronics", "Fashion", "Home", "Sports"];
      return Array.from({ length: 25 }).map((_, index) => ({
        id: index + 1,
        name: `Product ${index + 1}`,
        category: categories[index % categories.length] || "Misc",
        price: (index + 1) * 10,
        image: `https://dummyimage.com/42${index + 0}x26${index + 0}`,
      }));
    };

    setProductsData(generateProducts());
  }, []);

  const categories = ["All", "Electronics", "Fashion", "Home", "Sports"];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState(100);
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageTransition, setPageTransition] = useState(false);
  const itemsPerPage = 8;

  const filteredProducts = productsData.filter(
    (product) =>
      (selectedCategory === "All" || product.category === selectedCategory) &&
      product.price <= priceRange &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  useEffect(() => {
    setPageTransition(true);
    const timer = setTimeout(() => {
      setPageTransition(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [currentPage]);

  const resetFilters = () => {
    setSelectedCategory("All");
    setPriceRange(100);
    setSearchTerm("");
  };

  return (
    <>
      <Head>
        <title>Products - Kan ProkaGno Innovation Pvt LTD</title>
      </Head>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-orange-500">Our Products</h1>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Discover our range of innovative products designed to meet your
              needs
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
            <div className="flex flex-grow items-center gap-2 w-full sm:w-auto">
              <div className="flex items-center bg-white border border-gray-300 rounded-full px-4 py-2 shadow-sm flex-grow hover:border-orange-500 hover:shadow-lg">
                <i className="fas fa-search text-gray-500 mr-2"></i>
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-transparent focus:outline-none text-sm"
                />
              </div>
              <button
                onClick={() => setShowFilters(true)}
                className="flex items-center bg-orange-500 text-white p-2 rounded-full shadow-lg hover:bg-orange-600 focus:outline-none"
              >
                <i className="fas fa-filter"></i>
                <span className="ml-2 hidden sm:inline">Filters</span>
              </button>
            </div>
          </div>

          {showFilters && (
            <>
              <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50"></div>
              <div className="bg-white w-11/12 sm:w-1/2 lg:w-1/3 p-6 rounded-lg shadow-lg relative transform transition-all duration-300 ease-in-out animate-fade-in">
                <button
                  onClick={() => setShowFilters(false)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                  <i className="fas fa-times"></i>
                </button>
                <h2 className="text-xl font-semibold mb-6 text-gray-800">
                  Filters
                </h2>

                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">
                    Category:
                  </label>
                  <select
                    className="w-full border border-gray-300 rounded-lg p-2 focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    value={selectedCategory}
                  >
                    {categories.map((category, index) => (
                      <option key={index} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">
                    Max Price: ${priceRange}
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    step="10"
                    value={priceRange}
                    onChange={(e) => setPriceRange(Number(e.target.value))}
                    className="w-full accent-orange-500"
                  />
                </div>

                <button
                  onClick={() => setShowFilters(false)}
                  className="bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-orange-600 focus:outline-none"
                >
                  Apply Filters
                </button>
              </div>
            </>
          )}

          <div
            className={`flex flex-wrap -m-4 transition-opacity duration-300 ${
              pageTransition ? "opacity-0" : "opacity-100"
            }`}
          >
            {currentProducts.length > 0 ? (
              currentProducts.map((product) => (
                <div
                  key={product.id}
                  className="lg:w-1/4 md:w-1/2 p-4 w-full group"
                >
                  <div className="block relative h-48 rounded overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                    <img
                      alt={product.name}
                      className="object-cover object-center w-full h-full block"
                      src={product.image}
                    />
                    <div className="absolute inset-0 bg-gray-600 bg-opacity-70 flex items-center justify-center">
                      <span className="text-white text-xl font-bold tracking-wide">
                        Coming Soon
                      </span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      {product.category.toUpperCase()}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium group-hover:text-orange-500 transition-colors">
                      {product.name}
                    </h2>
                    <p className="mt-1 font-semibold">
                      ₹{product.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center w-full py-16">
                <i className="fas fa-frown text-gray-400 text-5xl mb-4"></i>
                <p className="text-gray-500 text-center mt-4 text-lg">
                  No products found matching your criteria
                </p>
                <button
                  onClick={resetFilters}
                  className="mt-4 text-orange-500 hover:text-orange-600"
                >
                  Reset filters
                </button>
              </div>
            )}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center mt-12">
              <div className="inline-flex items-center rounded-md shadow-sm">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className={`px-4 py-2 text-sm font-medium rounded-l-lg border ${
                    currentPage === 1
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-white text-gray-700 hover:bg-orange-500 hover:text-white border-gray-300"
                  }`}
                >
                  <i className="fas fa-chevron-left mr-1"></i> Previous
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-4 py-2 text-sm font-medium border-t border-b ${
                        currentPage === page
                          ? "bg-orange-500 text-white border-orange-500"
                          : "bg-white text-gray-700 hover:bg-gray-50 border-gray-300"
                      }`}
                    >
                      {page}
                    </button>
                  )
                )}

                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 text-sm font-medium rounded-r-lg border ${
                    currentPage === totalPages
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-white text-gray-700 hover:bg-orange-500 hover:text-white border-gray-300"
                  }`}
                >
                  Next <i className="fas fa-chevron-right ml-1"></i>
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
