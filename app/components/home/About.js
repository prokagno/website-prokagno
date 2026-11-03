import React from "react";
import Link from "next/link";

const About = () => {
  const about = [
    {
      title: "Vision",
      icon: "visibility",
      content:
        "To be a pioneer in the streams of Technology and education, transforming Technology into a strategic partner focus to deliver open ended solutions towards the business experience.",
    },
    {
      title: "Mission",
      icon: "work",
      content:
        "To provide and deliver cost-effective, consistent, trust and reliable customer-centric and enterprise solutions through innovation and agility.",
    },
    {
      title: "Objective",
      icon: "trending_up",
      content:
        "Leverage recent IT technologies to excel by merging latest processes and operations, considering delivery models and strategies for cost-effective, efficient solutions for stakeholders.",
    },
    {
      title: "KanProkagno",
      icon: "bolt",
      content:
        "KanProkagno, envisage to be an aggregator for enterprise services through current advancing technologies by harnessing synergies and scale of economy in delivering the products.",
    },
  ];
  return (
    <section className="text-gray-700 body-font min-h-screen" id="about">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-16">
          <span className="inline-block h-1 w-20 rounded bg-orange-500 mx-auto mb-4"></span>
          <h2 className="text-sm text-orange-600 tracking-widest font-bold title-font mb-2 uppercase">
            KanProkagno Innovation Private Limited
          </h2>
          <h1 className="sm:text-4xl text-3xl font-extrabold title-font mb-6 text-gray-900">
            A Dynamic and Rapidly Emerging Force
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            KanProkagno Innovation Private Limited nurtures the enterprise by
            reinventing technologies in various domains like Agri-tech,
            Healthcare, Green Energy, Education and is catering current
            scenario's technology services with agility.
          </p>
        </div>

        <div className="flex flex-wrap -m-4">
          {about.map((item, index) => (
            <div key={index} className="p-4 md:w-1/2 lg:w-1/4">
              <div className="h-full bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 overflow-hidden">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 mr-3 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500">
                    <span className="material-symbols-outlined">
                      {item.icon}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    {item.title}
                  </h2>
                </div>
                <p className="leading-relaxed text-sm text-gray-600">
                  {item.content}
                </p>
                <div className="h-1 w-10 bg-gradient-to-r from-orange-300 to-orange-500 rounded mt-4"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/about"
            className="inline-flex items-center px-8 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors duration-300 font-medium shadow-md hover:shadow-lg"
          >
            Learn More
            <span className="material-symbols-outlined ml-2">
              arrow_right_alt
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
