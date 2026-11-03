"use client";
import React from "react";
import { motion } from "framer-motion";

const Moto = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const milestones = [
    {
      title: "Imagine",
      description:
        "We imagine the future and bring solutions that are transformative",
      icon: (
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      ),
    },
    {
      title: "Ideate",
      description:
        "We ideate solutions that are efficient, scalable, flexible, feasible and cost effective",
      icon: (
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      ),
    },
    {
      title: "Innovate",
      description:
        "We innovate solutions with agility and cutting-edge technology",
      icon: (
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="5" r="3"></circle>
          <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
        </svg>
      ),
    },
    {
      title: "Implement",
      description:
        "We implement solutions that are robust, reliable and cost effective",
      icon: (
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      ),
    },
    {
      title: "Integrate",
      description:
        "We integrate solutions that are scalable, flexible and built for the future",
      icon: (
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
          <path d="M22 4L12 14.01l-3-3"></path>
        </svg>
      ),
    },
  ];

  return (
    <section
      className="text-gray-600 body-font min-h-screen flex items-center justify-center py-16 bg-gradient-to-b from-white to-gray-50"
      id="moto"
    >
      <div className="container px-5 py-12 mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="flex flex-col text-center w-full mb-16"
        >
          <motion.h1
            variants={itemVariants}
            className="sm:text-4xl text-3xl font-bold title-font mb-4 text-gray-900"
          >
            Our Motto
          </motion.h1>
          <motion.div
            variants={itemVariants}
            className="h-1 w-24 bg-orange-500 rounded mx-auto"
          ></motion.div>
          <motion.p
            variants={itemVariants}
            className="lg:w-2/3 mx-auto leading-relaxed text-base mt-6 text-gray-600"
          >
            KanProkagno brings solutions that are efficient, scalable, flexible,
            feasible and cost effective with agility. We transform ideas into
            reality.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-wrap w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          <div className="lg:w-3/5 md:w-4/5 sm:w-full mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex relative pb-12"
              >
                {index !== milestones.length - 1 && (
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                )}
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-300 inline-flex items-center justify-center text-white relative z-10 shadow-lg">
                  {milestone.icon}
                </div>
                <div className="flex-grow pl-6">
                  <h2 className="font-medium title-font text-lg text-gray-900 mb-1 tracking-wider">
                    {milestone.title}
                  </h2>
                  <p className="leading-relaxed">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Moto;
