import React from "react";

const Training = () => {
  const courses = [
    {
      id: 1,
      title: "INTERNET OF THINGS",
      subtitle: "Revolutionizing Connectivity",
      description:
        "IoT is transforming industries by connecting devices, systems, and data. From smart homes to industrial automation, it's reshaping the world.",
      image:
        "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "IoT",
      color: "from-blue-500 to-cyan-400",
    },
    {
      id: 2,
      title: "CYBERSECURITY",
      subtitle: "Protecting Digital Assets",
      description:
        "As cyber threats evolve, cybersecurity safeguards critical information, ensuring privacy and securing data from malicious attacks.",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Cybersecurity",
      color: "from-purple-600 to-indigo-500",
    },
    {
      id: 3,
      title: "DRONES",
      subtitle: "Unmanned Aerial Innovations",
      description:
        "Drones are revolutionizing sectors like agriculture, delivery, and surveillance by providing efficient, automated, and cost-effective solutions.",
      image:
        "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Drones",
      color: "from-green-500 to-teal-400",
    },
    {
      id: 4,
      title: "FULL-STACK DEVELOPMENT",
      subtitle: "End-to-End Web Solutions",
      description:
        "Full-stack development encompasses both frontend and backend technologies, providing comprehensive solutions for dynamic web applications.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Fullstack Development",
      color: "from-orange-500 to-amber-400",
    },
  ];

  return (
    <section className="bg-gray-50 body-font py-16" id="training">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-col text-center mb-16">
          <h2 className="text-xs font-bold tracking-widest text-orange-500 mb-1">
            OUR EXPERTISE
          </h2>
          <h1 className="sm:text-5xl text-3xl font-bold mb-6 text-gray-900">
            Training & Development
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-pink-500 rounded mx-auto"></div>
          <p className="max-w-2xl mx-auto mt-6 text-lg leading-relaxed text-gray-600">
            KanProkagno Innovation equips individuals with cutting-edge skills
            for the digital age through our comprehensive training programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((item, index) => (
            <div key={item.id} className="flex flex-col h-full">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                {/* Image Container with Gradient Overlay */}
                <div className="relative">
                  <img
                    className="w-full h-56 object-cover"
                    src={item.image}
                    alt={item.alt}
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-tr ${item.color} opacity-60 mix-blend-multiply`}
                  ></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-white font-bold text-xl tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-white/90 text-sm">{item.subtitle}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Button */}
                  <div className="mt-auto">
                    <button className="w-full group relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl text-white shadow-md transition-all duration-300 ease-in-out cursor-pointer">
                      <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 translate-y-full bg-orange-600 group-hover:translate-y-0 ease">
                        <span className="flex items-center">
                          Get Started{" "}
                          <span className="material-symbols-outlined ml-2">
                            arrow_forward
                          </span>
                        </span>
                      </span>
                      <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 group-hover:translate-y-[-100%] ease">
                        Enroll Now
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Training;
