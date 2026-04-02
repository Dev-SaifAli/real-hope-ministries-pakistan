"use client";

import React, { useState } from "react";
import { Users, Shield, Flame, Megaphone } from "lucide-react";

// ─── Ways to Get Involved Cards Data ─────────────────────────────────────────

const involvementCards = [
  {
    icon: <Users className="w-5 h-5 text-white" />,
    title: "Volunteer With Us",
    description:
      "Help in outreach programs, food distribution and community support directly on the ground.",
  },
  {
    icon: <Shield className="w-5 h-5 text-white" />,
    title: "Partner with Us",
    description:
      "Organizations or churches can partner to support humanitarian missions and scale our impact.",
  },
  {
    icon: <Flame className="w-5 h-5 text-white" />,
    title: "Sponsor a Cause",
    description:
      "Sponsor a water pump, a child's education, or provide ongoing support for a struggling family.",
  },
  {
    icon: <Megaphone className="w-5 h-5 text-white" />,
    title: "Spread Awareness",
    description:
      "Help share our mission through social media, community events, and word of mouth.",
  },
];

// ─── Area of Interest Options ─────────────────────────────────────────────────

const areaOptions = [
  "Volunteering",
  "Partnership",
  "Sponsorship",
  "Spreading Awareness",
  "Other",
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function GetInvolved() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    areaOfInterest: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Application submitted:", formData);
  };

  return (
    <div className="min-h-screen w-full bg-white px-8 md:px-16 lg:px-24 py-20 ">

      {/* ── Section 1: Ways to Get Involved ── */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold font-display text-[#0B2545] mb-4">
          Ways to <span className="text-[#2eaa6e]">Get Involve</span>
        </h1>
        <p className="text-gray-500 font-sans text-lg leading-relaxed max-w-xl mx-auto">
          There are many ways you can contribute to our cause. Find the path
          that best fits your passion and resources.
        </p>
      </div>

      {/* ── Cards ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {involvementCards.map((card, i) => (
          <div
            key={i}
            className="bg-[#dce9f7] rounded-2xl p-6 flex flex-col gap-4"
          >
            {/* Icon box */}
            <div className="w-10 h-10 bg-[#0B2545] rounded-lg flex items-center justify-center shrink-0">
              {card.icon}
            </div>
            <div>
              <h3 className="text-[#0B2545] text-lg font-bold font-display mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 font-sans text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Section 2: Start Your Journey ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* Left */}
        <div>
          <h2 className="text-4xl font-semibold font-display text-[#0B2545] mb-4">
            Start Your <span className="text-[#2eaa6e]">Journey</span>
          </h2>
          <p className="text-gray-500 font-sans text-base max-w-xl leading-relaxed">
            Fill out the form below and our team will get back to you with the next
            steps on how you can get involved.
          </p>
        </div>

        {/* Right — Form */}
        <div className="border border-gray-200 rounded-xl px-8 py-8 space-y-5">

          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-semibold font-sans text-[#0B2545] mb-2">
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="e.g. Jane Doe"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm font-sans text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0B2545]"
            />
          </div>

          {/* Email + Phone */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold font-sans text-[#0B2545] mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="jane@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm font-sans text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0B2545]"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold font-sans text-[#0B2545] mb-2">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm font-sans text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0B2545]"
              />
            </div>
          </div>

          {/* Country + Area of Interest */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="country" className="block text-sm font-semibold font-sans text-[#0B2545] mb-2">
                Country
              </label>
              <input
                id="country"
                type="text"
                placeholder="Where are you located?"
                value={formData.country}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm font-sans text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0B2545]"
              />
            </div>
            <div>
              <label htmlFor="areaOfInterest" className="block text-sm font-semibold font-sans text-[#0B2545] mb-2">
                Area of Interest
              </label>
              <select
                id="areaOfInterest"
                value={formData.areaOfInterest}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm font-sans text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0B2545] bg-white appearance-none"
              >
                <option value="" disabled>Select an option</option>
                {areaOptions.map((opt) => (
                  <option key={opt} value={opt} className="text-gray-700">{opt}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold font-sans text-[#0B2545] mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Tell us a bit about why you want to get involved..."
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm font-sans text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0B2545] resize-none"
            />
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            className="w-full bg-[#0B2545] text-white text-sm font-semibold font-sans py-3 rounded-xl hover:bg-[#0d2e56] transition-colors duration-200"
          >
            Submit Application
          </button>

        </div>
      </div>

    </div>
  );
}