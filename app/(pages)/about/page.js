"use client";
import React, { useEffect } from "react";
import Image from "next/image";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const team = [
    {
      name: "Kalpana Ponnekanti",
      role: "Founder",
      image: "https://dummyimage.com/80x80",
      bio: "Visionary leader with extensive experience in strategic planning and business development.",
    },
    {
      name: "Dr. Krishna Prasad Ponnekenti",
      role: "CEO",
      image: "https://dummyimage.com/80x80",
      bio: "Expert in organizational leadership with a proven track record of driving business growth.",
    },
    {
      name: "Renu Gunturu",
      role: "Advisor",
      image: "https://dummyimage.com/84x84",
      bio: "Strategic consultant specializing in market analysis and business optimization.",
    },
    {
      name: "Attaluri Saida Rao",
      role: "Advisor",
      image: "https://dummyimage.com/88x88",
      bio: "Industry veteran providing invaluable guidance on operational excellence.",
    },
    {
      name: "V Durgeshwar Rao",
      role: "Developer",
      image: "https://dummyimage.com/92x92",
      bio: "Talented software engineer with expertise in creating innovative technical solutions.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-50 to-orange-100">
        <div className="container mx-auto px-5 py-24">
          <div className="flex flex-col md:flex-row items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
                About Us
                <br className="hidden lg:inline-block" />
                <span className="text-orange-500">Our Story</span>
              </h1>
              <p className="mb-8 leading-relaxed text-gray-600">
                Founded with a vision to innovate and transform, our company has
                grown from a small startup to a recognized leader in our field.
                We believe in creating solutions that make a difference, with a
                team dedicated to excellence and innovation.
              </p>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg transition-all duration-300">
                  Our Services
                </button>
                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg transition-all duration-300">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                className="object-cover object-center rounded-lg shadow-xl"
                alt="hero"
                src="https://dummyimage.com/720x600"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h2 className="sm:text-3xl text-2xl font-medium text-gray-900 mb-4">
              Our Mission & Values
            </h2>
            <div className="h-1 w-20 bg-orange-500 rounded mx-auto"></div>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500 mt-8">
              We are committed to delivering exceptional value through
              innovation, integrity, and excellence. Our mission is to empower
              our clients with transformative solutions that drive growth and
              success.
            </p>
          </div>
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg hover:shadow-lg transition-all duration-300">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="text-orange-500 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
                <h2 className="title-font font-medium text-xl text-gray-900 mb-3">
                  Innovation
                </h2>
                <p className="leading-relaxed">
                  We constantly explore new ideas and technologies to stay ahead
                  of the curve and provide cutting-edge solutions.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg hover:shadow-lg transition-all duration-300">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="text-orange-500 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <h2 className="title-font font-medium text-xl text-gray-900 mb-3">
                  Integrity
                </h2>
                <p className="leading-relaxed">
                  We conduct our business with the highest ethical standards,
                  building trust through transparency and accountability.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg hover:shadow-lg transition-all duration-300">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="text-orange-500 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                </svg>
                <h2 className="title-font font-medium text-xl text-gray-900 mb-3">
                  Excellence
                </h2>
                <p className="leading-relaxed">
                  We strive for excellence in everything we do, delivering
                  high-quality solutions that exceed expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="text-gray-600 body-font bg-gray-50">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h2 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Our Work Showcase
              </h2>
              <div className="h-1 w-20 bg-orange-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-600">
              Explore our portfolio showcasing our successful projects and
              innovative solutions. Each image represents our commitment to
              quality and excellence in meeting our clients' needs.
            </p>
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block rounded-lg hover:opacity-90 transition-all duration-300"
                  src="https://dummyimage.com/500x300"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block rounded-lg hover:opacity-90 transition-all duration-300"
                  src="https://dummyimage.com/501x301"
                />
              </div>
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block rounded-lg hover:opacity-90 transition-all duration-300"
                  src="https://dummyimage.com/600x360"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block rounded-lg hover:opacity-90 transition-all duration-300"
                  src="https://dummyimage.com/601x361"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block rounded-lg hover:opacity-90 transition-all duration-300"
                  src="https://dummyimage.com/502x302"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block rounded-lg hover:opacity-90 transition-all duration-300"
                  src="https://dummyimage.com/503x303"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Meet Our Team
            </h2>
            <div className="h-1 w-20 bg-orange-500 rounded mx-auto mb-4"></div>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Our talented team of professionals brings diverse expertise and
              experience to deliver exceptional results. Together, we work
              collaboratively to achieve our mission and serve our clients with
              dedication.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {team.map((member, index) => (
              <div className="p-4 lg:w-1/3 md:w-1/2 w-full" key={index}>
                <div className="h-full flex flex-col items-center text-center border-2 border-gray-200 border-opacity-60 rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                  <img
                    alt={`team member ${member.name}`}
                    className="w-24 h-24 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mb-4"
                    src={member.image}
                  />
                  <div className="w-full">
                    <h2 className="text-gray-900 title-font font-medium text-lg">
                      {member.name}
                    </h2>
                    <h3 className="text-orange-500 mb-3">{member.role}</h3>
                    <p className="mb-4 text-gray-600">{member.bio}</p>
                    <div className="flex justify-center">
                      <a className="text-gray-500 hover:text-orange-500 cursor-pointer mx-1">
                        <svg
                          fill="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </a>
                      <a className="text-gray-500 hover:text-orange-500 cursor-pointer mx-1">
                        <svg
                          fill="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </a>
                      <a className="text-gray-500 hover:text-orange-500 cursor-pointer mx-1">
                        <svg
                          fill="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-gray-600 body-font bg-gradient-to-r from-orange-50 to-orange-100">
        <div className="container px-5 py-16 mx-auto">
          <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
            <h2 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">
              Ready to work with us? Get in touch today!
            </h2>
            <button className="flex-shrink-0 text-white bg-orange-500 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg mt-10 sm:mt-0 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
