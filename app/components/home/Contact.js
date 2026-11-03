"use client";
import React, { useState } from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      toast.dismiss();
      return toast.error("Please fill all required fields");
    }

    setLoading(true);

    // Show loading toast to provide feedback
    const loadingToast = toast.loading("Sending your message...");

    try {
      const response = await axios.post("/api/contact", formData);

      if (response.status === 201) {
        toast.dismiss(loadingToast);
        toast.success("Message sent successfully! We'll get back to you soon.");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Error sending message", error);
      toast.dismiss(loadingToast);
      const errorMessage =
        error.response?.data?.error ||
        "Failed to send message. Please try again later.";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section
        className="bg-gradient-to-b from-white to-orange-50 py-16"
        id="contact"
      >
        {/* Rest of the component remains the same until the form */}

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            {/* Header content remains the same */}
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have questions or want to collaborate? We'd love to hear from you.
              Fill out the form below and our team will respond promptly.
            </p>
          </motion.div>

          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-10 lg:mb-0">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                {/* Contact info section remains unchanged */}
                <div className="h-64 bg-gray-300 relative">
                  <iframe
                    width="100%"
                    height="100%"
                    className="absolute inset-0"
                    frameBorder="0"
                    title="map"
                    marginHeight="0"
                    marginWidth="0"
                    scrolling="no"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.5391208584447!2d83.35266477548147!3d17.766342183186875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395bb822b88177%3A0x31d47b1faa2cd674!2sHarsha%20Towers!5e0!3m2!1sen!2sin!4v1720768319856!5m2!1sen!2sin"
                  ></iframe>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                    Contact Information
                  </h3>

                  <div className="flex items-start mb-6">
                    <div className="flex items-center justify-center bg-orange-100 rounded-full p-3 mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-orange-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-medium mb-1">
                        Address
                      </h4>
                      <p className="text-gray-600">
                        17-2-40, Chinakakani, Mangalagiri, Guntur, Andhra
                        Pradesh 522503
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start mb-6">
                    <div className="flex items-center justify-center bg-orange-100 rounded-full p-3 mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-orange-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-medium mb-1">Email</h4>
                      <p className="text-gray-600">info@prokagno.co.in</p>
                      <p className="text-gray-600">KanProkagno@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center justify-center bg-orange-100 rounded-full p-3 mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-orange-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-medium mb-1">Phone</h4>
                      <p className="text-gray-600">+91 8985930500</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="w-full lg:w-1/2 px-4">
              <motion.form
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                onSubmit={handleSubmit}
                className={`bg-white rounded-2xl shadow-xl p-8 relative ${
                  loading ? "opacity-75" : ""
                }`}
              >
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 text-sm font-medium mb-2"
                  >
                    Name <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={loading}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-200 disabled:opacity-60"
                    placeholder="Your Name"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 text-sm font-medium mb-2"
                  >
                    Email <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={loading}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-200 disabled:opacity-60"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className="block text-gray-700 text-sm font-medium mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={loading}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-200 disabled:opacity-60"
                    placeholder="How can we help you?"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 text-sm font-medium mb-2"
                  >
                    Message <span className="text-orange-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={loading}
                    rows="4"
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-200 resize-none disabled:opacity-60"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center disabled:bg-orange-400"
                >
                  {loading ? (
                    <div className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </div>
                  ) : (
                    <>
                      Send Message
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </>
                  )}
                </button>
              </motion.form>
            </div>
          </div>
        </div>
      </section>
      <Toaster position="bottom-center" />
    </>
  );
};

export default Contact;
