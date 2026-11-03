"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Service = () => {
  const servicesData = [
    {
      title: "Theme of Concept (ToC)",
      content:
        "A clear roadmap is crucial for product success. Our Theme of Concept (ToC) service ensures clarity and precision from the start, setting a solid foundation for your ideas to thrive.",
      image:
        "https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      icon: "📝",
    },
    {
      title: "Nearshore Outsourcing",
      content:
        "Unlock new opportunities with our Nearshore Outsourcing services. Leverage a global talent pool to scale operations efficiently and cost-effectively, ensuring seamless integration with your business needs.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      icon: "🌐",
    },
    {
      title: "Product-Based Experiential Learning",
      content:
        "Equip your team with hands-on expertise through our Product-Based Experiential Learning services, designed to enhance capabilities and drive success in dynamic product-driven environments.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      icon: "🧠",
    },
    {
      title: "Design, Develop, and Deploy (DDD)",
      content:
        "From concept to launch, our Design, Develop, and Deploy (DDD) service offers complete product development solutions, ensuring a streamlined process that delivers impactful results.",
      image:
        "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      icon: "🚀",
    },
  ];

  return (
    <section
      className="bg-gradient-to-b from-white to-gray-50 py-20"
      id="services"
    >
      <div className="container px-5 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-orange-500 text-sm font-semibold tracking-wider uppercase">
            What we offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-gray-900">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto my-4 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            KanProkagno Innovation offers cutting-edge solutions to help
            businesses thrive in the digital age. Our innovative approaches
            drive growth and ensure lasting success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <span className="text-4xl p-4">{service.icon}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.content}</p>
                  <div className="mt-6">
                    <button className="text-orange-500 font-medium flex items-center group-hover:text-orange-600">
                      Learn more
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-1 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
