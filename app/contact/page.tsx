"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

// ─── Contact Details Data ─────────────────────────────────────────────────────

const contactDetails = [
  { icon: <Mail className="w-5 h-5 text-[#0B2545]" />, value: "absd@gmail.com" },
  { icon: <Phone className="w-5 h-5 text-[#0B2545]" />, value: "+1 (555) 000-0000" },
  { icon: <MapPin className="w-5 h-5 text-[#0B2545]" />, value: "123 Hope Street, Lahore, Pakistan" },
];

// ─── Form Fields Data ─────────────────────────────────────────────────────────

const formFields = [
  { id: "fullName",  label: "Full Name", type: "text",  placeholder: "Name" },
  { id: "email",    label: "Email",     type: "email", placeholder: "Enter Your email" },
  { id: "phone",    label: "Phone",     type: "tel",   placeholder: "1 (555) 000-0000" },
  { id: "website",  label: "Website",   type: "url",   placeholder: "www.example.com" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen w-full bg-white px-8 md:px-16 lg:px-24 py-20 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* ── Left Column ── */}
        <div>
          {/* Heading */}
          <h1 className="text-4xl font-bold text-[#0B2545] mb-4">
            Get in <span className="text-[#2eaa6e]">Touch</span>
          </h1>

          {/* Sub-text */}
          <p className="text-gray-600 text-base leading-relaxed mb-8">
            If you have any questions about our work or would like to support
            our mission, feel free to contact us.
          </p>

          {/* Contact Details label */}
          <h2 className="text-base font-bold font-sans text-[#0B2545] mb-4">
            Contact details
          </h2>

          {/* Contact Card */}
          <div className="bg-[#f0f2f4] rounded-lg px-6 py-5 space-y-5 w-full max-w-sm">
            {contactDetails.map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="flex-shrink-0">{item.icon}</div>
                <span className="text-gray-700 text-sm font-sans">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right Column ── */}
        <div>
          <h2 className="text-2xl font-bold font-display text-[#0B2545] mb-6">
            Send Us a Message
          </h2>

          {/* Form Card */}
          <div className="bg-[#f0f2f4] rounded-lg px-8 py-8 space-y-5">

            {/* Text / Email / Tel / URL fields */}
            {formFields.map((field) => (
              <div key={field.id}>
                <label htmlFor={field.id} className="block text-sm font-semibold font-sans text-[#0B2545] mb-2">
                  {field.label}
                </label>
                <input
                  id={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={formData[field.id as keyof typeof formData]}
                  onChange={handleChange}
                  className="w-full bg-white border border-transparent rounded-md px-4 py-3 text-sm font-sans text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0B2545]"
                />
              </div>
            ))}

            {/* Message textarea */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold font-sans text-[#0B2545] mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Enter Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-white border border-transparent rounded-md px-4 py-3 text-sm font-sans text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0B2545] resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-[#0B2545] text-white text-sm font-semibold font-sans py-3 rounded-xl hover:bg-[#0d2e56] transition-colors duration-200"
            >
              Send Message
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}