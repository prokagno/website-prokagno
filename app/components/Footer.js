import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-10 shadow-inner">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <h5 className="text-orange-600 font-semibold text-lg uppercase mb-4">
              KanProKagno Innovation Private Limited
            </h5>
            <p className="text-gray-600 text-sm">
              Our mission is to provide the best quality products and services
              to our customers. We are committed to excellence and innovation in
              everything we do, delivering solutions that make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-orange-600 font-semibold text-lg uppercase mb-4">
              Quick Links
            </h5>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="hover:text-orange-600 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-orange-600 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="hover:text-orange-600 transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-orange-600 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h5 className="text-orange-600 font-semibold text-lg uppercase mb-4">
              Follow Us
            </h5>
            <div className="flex space-x-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-600 transition-colors text-2xl"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-600 transition-colors text-2xl"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-600 transition-colors text-2xl"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-600 transition-colors text-2xl"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h5 className="text-orange-600 font-semibold text-lg uppercase mb-4">
              Contact Us
            </h5>
            <p className="text-gray-600 mb-2 flex items-center">
              <span className="material-symbols-outlined text-orange-600 mr-2">
                email
              </span>
              <a
                href="mailto:kanprokagno@gmail.com"
                className="hover:text-orange-600"
              >
                kanprokagno@gmail.com
              </a>
            </p>
            <p className="text-gray-600 mb-2 flex items-center">
              <span className="material-symbols-outlined text-orange-600 mr-2">
                phone
              </span>
              <a href="tel:+918985930500" className="hover:text-orange-600">
                +91 89859 30500
              </a>
            </p>
            <p className="text-gray-600 mb-1">GSTIN: 37AAKCK9945K1ZO</p>
            <p className="text-gray-600 mb-1">DPIIT: DIPP169455</p>
            <p className="text-gray-600">MSME: UDYAM-AP-10-0065264</p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-200"></div>

        {/* Company Address */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h5 className="text-lg font-bold text-orange-600 uppercase mb-2">
              Registered Office
            </h5>
            <p className="text-gray-600 leading-relaxed flex items-center">
              <span className="material-symbols-outlined text-orange-600 mr-2">
                location_on
              </span>
              17-2-40, Chinakakani, Mangalagiri, Guntur, Andhra Pradesh 522503
            </p>
          </div>
          <div>
            <h5 className="text-lg font-bold text-orange-600 uppercase mb-2">
              Office Address
            </h5>
            <p className="text-gray-600 leading-relaxed flex items-center">
              <span className="material-symbols-outlined text-orange-600 mr-2">
                location_on
              </span>
              17-2-40, Chinakakani, Mangalagiri, Guntur, Andhra Pradesh 522503
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-200"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col lg:flex-row items-center justify-between py-5 md:py-0 text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} KanProKagno Innovation Private Limited.
            All rights reserved.
          </p>
          <p>Designed by KanProKagno Innovation Private Limited Team.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
