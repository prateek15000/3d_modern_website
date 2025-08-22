import React from "react";
import { footerLinks } from "../constants";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Call to Action */}
        <div className="text-center md:text-left space-y-2">
          <p className="font-semibold text-sm md:text-base">
            More ways to shop:{" "}
            <span className="underline hover:text-white cursor-pointer transition">
              Find an Apple Store
            </span>{" "}
            or{" "}
            <span className="underline hover:text-white cursor-pointer transition">
              other retailer
            </span>{" "}
            near you.
          </p>
          <p className="font-semibold text-sm md:text-base">
            Or call <span className="text-white">000800-040-1966</span>
          </p>
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-gray-700"></div>

        {/* Footer Links & Social Icons */}
        <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
          <p className="font-semibold text-sm md:text-base">
            © 2025 Prateek Mittal. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start items-center space-x-4 md:space-x-6">
            {footerLinks.map((link, i) => (
              <p
                key={link}
                className="font-semibold text-sm md:text-base hover:text-white cursor-pointer transition"
              >
                {link} {i !== footerLinks.length - 1 && <span className="mx-1">|</span>}
              </p>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-2 md:mt-0">
            {[FaFacebook, FaTwitter, FaLinkedin, FaInstagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-transform transform hover:scale-110"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
