"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Lock } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;
}

// ─── Button Component ─────────────────────────────────────────────────────────

type ButtonVariant = "support" | "learnMore" | "donate";

interface ButtonProps {
  variant: ButtonVariant;
  text: string;
  href: string;
}

const Button: React.FC<ButtonProps> = ({ variant, text, href }) => {
  const isDonate = variant === "donate";

  return (
    <Link
      href={href}
      className={`
        inline-flex items-center justify-center
        px-4 h-[36px]
        rounded-[8px]
        whitespace-nowrap
        text-[13px] font-semibold font-display
        transition-all duration-200 active:scale-95
        ${isDonate
          ? "bg-[#e8a020] hover:bg-[#d4911a] text-white"
          : "bg-[#0B2545] hover:opacity-90 text-white"
        }
      `}
    >
      {text}
    </Link>
  );
};

// ─── Project Card Component ───────────────────────────────────────────────────

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col group">
      <div className="relative w-full h-[200px] overflow-hidden rounded-xl">
        <Image
          src={project.image}
          alt={project.alt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="pt-3">
        <h3 className="text-[#0B2545] font-display font-bold text-[16px] mb-1">
          {project.title}
        </h3>
        <p className="text-black/70 font-sans text-[13px] leading-relaxed mb-3">
          {project.description}
        </p>
        <Button variant="donate" text="Donate to this Cause" href="/donate" />
      </div>
    </div>
  );
}

// ─── Projects Data ────────────────────────────────────────────────────────────

const projects: Project[] = [
  {
    id: 1,
    title: "Clean Water Project",
    description: "Installing hand pumps and wells to provide safe, accessible drinking water to remote villages.",
    image: "/images/clean-water.jpg",
    alt: "Clean Water Project",
  },
  {
    id: 2,
    title: "Food Project",
    description: "Delivering essential food rations to impoverished families struggling with food insecurity.",
    image: "/images/food-project.jpg",
    alt: "Food Project",
  },
  {
    id: 3,
    title: "Free People",
    description: "Empowering marginalized individuals through education, skill-building, and social support.",
    image: "/images/free-people.jpg",
    alt: "Free People",
  },
  {
    id: 4,
    title: "Orphanage Project",
    description: "Providing a safe home, education, and loving care for orphaned and abandoned children.",
    image: "/images/orphanage.jpg",
    alt: "Orphanage Project",
  },
  {
    id: 5,
    title: "Persecution Support",
    description: "Offering legal, emotional, and financial support to those facing religious persecution.",
    image: "/images/persecution.jpg",
    alt: "Persecution Support",
  },
  {
    id: 6,
    title: "Freedom from Slavery",
    description: "Rescuing bonded laborers from brick kilns and helping them start independent, free lives.",
    image: "/images/slavery.jpg",
    alt: "Freedom from Slavery",
  },
  {
    id: 7,
    title: "Widows Ministry",
    description: "Providing monthly stipends, medical care, and vocational training to destitute widows.",
    image: "/images/widows.jpg",
    alt: "Widows Ministry",
  },
  {
    id: 8,
    title: "Youth of Mission",
    description: "Equipping the next generation with leadership skills, spiritual guidance, and education.",
    image: "/images/youth.jpg",
    alt: "Youth of Mission",
  },
];

// ─── Donation Amounts ─────────────────────────────────────────────────────────

const donationAmounts = [10, 25, 50, 100];

const trustPoints = [
  {
    title: "Text Deductible",
    description: "All donations are 100% tax-deductible in applicable countries.",
  },
  {
    title: "Secure Process",
    description: "Your payment information is encrypted and securely processed.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Donation() {
  const [donationType, setDonationType] = useState<"one-time" | "monthly">("one-time");
  const [selectedAmount, setSelectedAmount] = useState<number | "custom">(50);
  const [customAmount, setCustomAmount] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className="min-h-screen w-full bg-white px-8 md:px-16 lg:px-24 py-16">

      {/* ── Section 1: Heading ── */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold font-display text-[#0B2545] mb-3">
          Way You can <span className="text-[#2eaa6e]">Help</span>
        </h1>
        <p className="text-gray-500 font-sans text-sm leading-relaxed max-w-sm mx-auto">
          Choose a specific cause to support and make a direct impact on the lives of those in need.
        </p>
      </div>

      {/* ── Section 2: Project Cards Grid ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* ── Section 3: Make a Difference + Donation Form ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* Left */}
        <div>
          <h2 className="text-4xl font-bold font-display text-[#0B2545] mb-3">
            Make a <span className="text-[#2eaa6e]">Difference</span> Today
          </h2>
          <p className="text-gray-500 font-sans text-sm leading-relaxed mb-6">
            Your generosity transforms communities. Select an amount below to contribute.
          </p>

          <div className="space-y-4">
            {trustPoints.map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#2eaa6e] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#0B2545] font-semibold font-sans text-sm">{point.title}</p>
                  <p className="text-gray-500 font-sans text-sm">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Donation Form */}
        <div className="border border-gray-200 rounded-xl px-8 py-8 space-y-5">

          {/* One-time / Monthly toggle */}
          <div className="flex rounded-md border border-gray-200 overflow-hidden">
            <button
              onClick={() => setDonationType("one-time")}
              className={`flex-1 py-2 text-sm font-semibold font-sans transition-colors duration-200 ${
                donationType === "one-time"
                  ? "bg-white text-[#0B2545]"
                  : "bg-gray-100 text-gray-500"
              }`}
            >
              One-time donation
            </button>
            <button
              onClick={() => setDonationType("monthly")}
              className={`flex-1 py-2 text-sm font-semibold font-sans transition-colors duration-200 ${
                donationType === "monthly"
                  ? "bg-[#0B2545] text-white"
                  : "bg-gray-100 text-gray-500"
              }`}
            >
              Monthly support
            </button>
          </div>

          {/* Select Amount */}
          <div>
            <p className="text-sm font-semibold font-sans text-[#0B2545] mb-3">Select Amount</p>
            <div className="flex flex-wrap gap-2">
              {donationAmounts.map((amt) => (
                <button
                  key={amt}
                  onClick={() => setSelectedAmount(amt)}
                  className={`px-5 py-2 rounded-md text-sm font-semibold font-sans border transition-colors duration-200 ${
                    selectedAmount === amt
                      ? "bg-[#e8a020] text-white border-[#e8a020]"
                      : "bg-white text-[#0B2545] border-gray-300 hover:border-[#0B2545]"
                  }`}
                >
                  ${amt}
                </button>
              ))}
              {selectedAmount === "custom" ? (
                <input
                  type="number"
                  placeholder="Amount"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className="px-3 py-2 rounded-md text-sm font-sans border border-[#e8a020] w-24 focus:outline-none"
                />
              ) : (
                <button
                  onClick={() => setSelectedAmount("custom")}
                  className="px-5 py-2 rounded-md text-sm font-semibold font-sans border border-gray-300 text-[#0B2545] hover:border-[#0B2545] transition-colors duration-200"
                >
                  Custom
                </button>
              )}
            </div>
          </div>

          {/* Your Details */}
          <div>
            <p className="text-sm font-semibold font-sans text-[#0B2545] mb-3">Your Details</p>

            {/* First + Last Name */}
            <div className="grid grid-cols-2 gap-3 mb-3">
              <div>
                <label htmlFor="firstName" className="block text-xs font-semibold font-sans text-[#0B2545] mb-1">First Name</label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm font-sans text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0B2545]"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-xs font-semibold font-sans text-[#0B2545] mb-1">Last Name</label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm font-sans text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0B2545]"
                />
              </div>
            </div>

            {/* Email + Country */}
            <div className="grid grid-cols-2 gap-3 mb-3">
              <div>
                <label htmlFor="email" className="block text-xs font-semibold font-sans text-[#0B2545] mb-1">Email Address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="john.doe@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm font-sans text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0B2545]"
                />
              </div>
              <div>
                <label htmlFor="country" className="block text-xs font-semibold font-sans text-[#0B2545] mb-1">Country</label>
                <select
                  id="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm font-sans text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0B2545] bg-white"
                >
                  <option value="">United States</option>
                  <option value="pk">Pakistan</option>
                  <option value="uk">United Kingdom</option>
                  <option value="ca">Canada</option>
                  <option value="au">Australia</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-xs font-semibold font-sans text-[#0B2545] mb-1">Message (optional)</label>
              <textarea
                id="message"
                rows={3}
                placeholder="Message here"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm font-sans text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0B2545] resize-none"
              />
            </div>
          </div>

          {/* Donate Button */}
          <button className="w-full bg-[#0B2545] text-white text-sm font-semibold font-sans py-3 rounded-md hover:bg-[#0d2e56] transition-colors duration-200 flex items-center justify-center gap-2">
            <Lock className="w-4 h-4" />
            Donate Securely with PayPal
          </button>

        </div>
      </div>
    </div>
  );
}