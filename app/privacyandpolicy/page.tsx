"use client";

import React from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

interface Section {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  contactDetails?: { label: string; value: string; isLink?: boolean }[];
}

const sections: Section[] = [
  {
    id: "introduction",
    title: "Introduction",
    paragraphs: [
      "Welcome to Real Hope Pakistan. We respect your privacy and are committed to protecting it through our compliance with this policy. This Privacy Policy describes the types of information we may collect from you or that you may provide when you visit our website, and our practices for collecting, using, maintaining, protecting, and disclosing that information.",
      "If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us.",
    ],
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    paragraphs: [
      "We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our charitable programs, when you make a donation, when you sign up for our newsletter, or otherwise when you contact us.",
      "The personal information we collect may include:",
    ],
    bullets: [
      "Personal Details: Name, email address, postal address, and phone number.",
      "Financial Information: Payment details when making a donation (processed securely by our third-party payment processors).",
      "Communication Data: Information you provide when communicating with us.",
    ],
  },
  {
    id: "how-we-use-information",
    title: "How We Use Information",
    paragraphs: [
      "We use personal information collected via our website for a variety of organizational purposes. We process your personal information for these purposes in reliance on our legitimate interests, with your consent, and/or for compliance with our legal obligations. We may use your information to:",
    ],
    bullets: [
      "Process donations and send related information, including donation confirmations and receipts.",
      "Send administrative information to you, such as changes to our terms, conditions, and policies.",
      "Send you marketing and promotional communications in accordance with your preferences.",
    ],
  },
  {
    id: "data-protection",
    title: "Data Protection",
    paragraphs: [
      "We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. We store your personal data on secure servers and restrict access to authorized personnel only.",
      "However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure. We cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security.",
    ],
  },
  {
    id: "third-party-services",
    title: "Third-Party Services",
    paragraphs: [
      "We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill organizational obligations. We do not sell your personal information to third parties.",
      "We may use third-party service providers to help us operate our activities, such as:",
    ],
    bullets: [
      "Payment processors for secure donation handling.",
      "Email marketing platforms to send out newsletters.",
      "Analytics services to understand how our website is used.",
    ],
  },
  {
    id: "contact-us",
    title: "Contact Us",
    paragraphs: [
      "If you have questions or comments about this notice, or if you would like to update or remove your personal information from our records, please contact us:",
    ],
    contactDetails: [
      { label: "Real Hope Pakistan Email", value: "privacy@realhopepakistan.org", isLink: true },
      { label: "Phone", value: "+92 (0) 123 456 7890" },
      { label: "Address", value: "123 Hope Avenue, Islamabad, Pakistan" },
    ],
  },
];

// ─── Section Block ────────────────────────────────────────────────────────────

function SectionBlock({ section }: { section: Section }) {
  return (
    <div className="pb-7 border-b-2 border-[#0B2545]">
      <h2 className="text-[#0B2545] text-4xl font-semibold mb-3 tracking-tight">
        {section.title}
      </h2>

      {section.paragraphs?.map((para, i) => (
        <p key={i} className="text-xl leading-8 mb-2">
          {para}
        </p>
      ))}

      {section.bullets && (
        <ul className="mt-2 list-disc list-outside pl-5 space-y-1 marker:text-sm">
          {section.bullets.map((bullet, i) => (
            <li key={i} className="text-xl leading-relaxed text-gray-700">
              {bullet}
            </li>
          ))}
        </ul>
      )}

      {section.contactDetails && (
        <div className="mt-2 space-y-1">
          {section.contactDetails.map((item, i) => (
            <p key={i} className="text-xl leading-8 ">
              <span className="font-semibold">{item.label}: </span>
              {item.isLink ? (
                <a href={`mailto:${item.value}`} className="text-[#1a6fa8] hover:underline">
                  {item.value}
                </a>
              ) : (
                <span className="text-[#1a6fa8]">{item.value}</span>
              )}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PrivacyAndPolicy() {
  return (
    <div className="min-h-screen w-full bg-[#f0eeeb] px-8 md:px-16 lg:px-24 py-28">
      {/* ── Centered Header ── */}
      <div className="text-center mb-14">
        <h1 className="text-6xl font-semibold mb-3 tracking-tight">
          Privacy &amp; Policy
        </h1>
        <p className="text-2xl font-semibold">
          We are committed to protecting your personal information and personal rights.
        </p>
        <p className="text-2xl font-semibold">Last Updated: January 2026</p>
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