import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarker,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="bg-base-200">
        <div className="footer p-10 text-base-content container mx-auto">
          <div>
            <div>
              <Link to="/" className="text-2xl font-bold">
                Coffee Store
              </Link>
              <p>
                Always ready to be your friend. Come & Contact with us to share
                your memorable moments, to share with your best companion.
              </p>
            </div>
            <div>
              <div className="grid grid-cols-4 gap-4 my-2">
                <Link to="https://www.facebook.com/">
                  <FaFacebook className="text-2xl" />
                </Link>
                <Link to="https://www.twitter.com/">
                  <FaTwitter className="text-2xl" />
                </Link>
                <Link to="https://www.instagram.com/">
                  <FaInstagram className="text-2xl" />
                </Link>
                <Link to="https://www.linkedin.com/">
                  <FaLinkedin className="text-2xl" />
                </Link>
              </div>
            </div>
            <div className="mt-3">
              <Link to="/" className="text-2xl font-bold">
                Get in Touch
              </Link>
              <p className="flex justify-start items-center gap-2 mt-2">
                <FaPhone /> +88 01533 333 333
              </p>
              <p className="flex justify-start items-center gap-2 my-2">
                <FaEnvelope /> dev1.monirul@gmail.com
              </p>
              <p className="flex justify-start items-center gap-2">
                <FaMapMarker /> Mirpur-1, Dhaka-1216
              </p>
            </div>
          </div>
          <div>
            <span className="footer-title">Newsletter</span>
            <div className="form-control w-80">
              <label className="label">
                <span className="label-text">Enter your email address</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered w-full pr-16"
                />
                <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundImage: "url('/images/more/15.jpg')" }}>
        <p className="text-white text-center py-4">
          Copyright Coffee Store ! All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
