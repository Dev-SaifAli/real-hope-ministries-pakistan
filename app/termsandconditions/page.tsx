"use client";

import React from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

interface Section {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
}

const sections: Section[] = [
  {
    id: "introduction",
    title: "Introduction",
    paragraphs: [
      "Welcome to Real Hope Pakistan. By accessing and using our website, you agree to comply with and be bound by the following terms and conditions of use. If you disagree with any part of these terms and conditions, please do not use our website.",
      "The term 'Real Hope Pakistan' or 'us' or 'we' refers to the owner of the website. The term 'you' refers to the user or viewer of our website.",
    ],
  },
  {
    id: "use-of-website",
    title: "Use of Website",
    paragraphs: [
      "The content of the pages of this website is for your general information and use only. It is subject to change without notice. Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable.",
    ],
    bullets: [
      "You must not use this website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website.",
      "You must not use this website in any way which is unlawful, illegal, fraudulent or harmful, or in connection with any unlawful, illegal, fraudulent or harmful purpose or activity.",
      "You must not use this website to copy, store, host, transmit, send, use, publish or distribute any material which consists of (or is linked to) any spyware, computer virus, Trojan horse, worm, keystroke logger, rootkit or other malicious computer software.",
    ],
  },
  {
    id: "donations-policy",
    title: "Donations Policy",
    paragraphs: [
      "Real Hope Pakistan is a registered non-profit organization. All donations made through our website are voluntary and non-refundable. We are committed to ensuring that your donations are used effectively for the causes mentioned on our platform.",
      "In the event that a specific project is fully funded or cancelled, we reserve the right to reallocate your donation to another project where the need is greatest, ensuring your contribution still makes a meaningful impact.",
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    paragraphs: [
      "This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, graphics, and text. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.",
      "All trademarks reproduced in this website, which are not the property of, or licensed to the operator, are acknowledged on the website.",
    ],
  },
  {
    id: "changes-to-terms",
    title: "Changes to Terms",
    paragraphs: [
      "Real Hope Pakistan may revise these terms and conditions from time to time. Revised terms and conditions will apply to the use of this website from the date of the publication of the revised terms and conditions. Please check this page regularly to ensure you are familiar with the current version.",
    ],
  },
];

// ─── Section Block ────────────────────────────────────────────────────────────

function SectionBlock({ section }: { section: Section }) {
  return (
    <div className="pb-7 border-b-2 border-[#0B2545] ">
      <h2 className="text-[#0B2545] text-4xl font-semibold mb-3 tracking-tight">
        {section.title}
      </h2>

      {section.paragraphs?.map((para, i) => (
        <p key={i} className="text-xl leading-8 mb-2">
          {para}
        </p>
      ))}

      {section.bullets && (
        <ul className="mt-2 list-disc list-outside pl-5 space-y-1 marker:text-sm ">
          {section.bullets.map((bullet, i) => (
            <li key={i} className="text-xl leading-relaxed text-gray-700">
              {bullet}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen w-full bg-[#f0eeeb] px-8 md:px-16 lg:px-24 py-28">
      {/* ── Centered Header ── */}
      <div className="text-center mb-14">
        <h1 className="text-6xl font-semibold mb-3 tracking-tight font-display ">
          Terms &amp; Conditions
        </h1>
        <p className="text-2xl font-semibold ">
          Please read this terms &amp; conditions before using our website.
        </p>
        <p className="text-2xl font-semibold ">Last Updated: January 2026</p>
      </div>

      {/* ── Left-aligned Sections, full width ── */}
      <div className="space-y-10 w-full">
        {sections.map((section) => (
          <SectionBlock key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
}
