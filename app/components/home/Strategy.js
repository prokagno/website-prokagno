import React from "react";
import Head from "next/head"; // Import Head for adding CSS link

const Strategy = () => {
  const strategyItems = [
    { text: "Artificial Intelligence & Machine Learning", icon: "smart_toy" },
    { text: "Blockchain", icon: "link" },
    { text: "Business Analytics", icon: "analytics" },
    { text: "Cyber Security", icon: "security" },
    { text: "Data and Stream Analytics", icon: "bar_chart" },
    { text: "Data Science", icon: "data_object" },
    { text: "Deep Learning", icon: "psychology" },
    { text: "Drone Technology", icon: "flight" },
    { text: "Finance Analytics", icon: "attach_money" },
    { text: "Internet of Things", icon: "devices" },
    { text: "Robotic Automation", icon: "precision_manufacturing" },
    { text: "Robotics", icon: "robot" },
  ];

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </Head>
      <section
        className="bg-gradient-to-b from-white to-gray-50 py-24"
        id="strategy"
      >
        <div className="container px-6 mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-orange-500">Strategy</span>
            </h2>
            <div className="h-1 w-24 bg-orange-500 rounded mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg">
              KanProkagno Innovation Pvt LTD is committed to delivering
              innovative solutions that drive business growth and success. Our
              strategy is centered around leveraging emerging technologies and
              industry trends to provide cutting-edge services that meet our
              clients' evolving needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            {strategyItems.map((item) => (
              <div
                key={item.text}
                className="bg-white shadow-lg rounded-xl p-6 h-full flex items-center hover:shadow-xl transition-all duration-300 hover:border-l-4 hover:border-orange-500 group"
              >
                <span className="material-symbols-outlined text-orange-500 text-2xl group-hover:scale-110 transition-transform">
                  {item.icon}
                </span>
                <span className="font-medium text-gray-800 ml-3 cursor-pointer">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Strategy;
