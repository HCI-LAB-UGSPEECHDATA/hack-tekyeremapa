import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import "../styles/FAQSection.css";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="faqs" className={`faq-item ${isOpen ? "open" : ""}`}>
      <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        <span className="font-medium text-gray-900 text-lg">{question}</span>
        <div className="ml-4 flex-shrink-0 text-gray-400 faq-icon">
          {isOpen ? (
            <ChevronUp className="h-6 w-6" />
          ) : (
            <ChevronDown className="h-6 w-6" />
          )}
        </div>
      </button>
      <div className="faq-answer">
        <p>{answer}</p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "Who is a speech impaired person?",
      answer:
        "A speech-impaired person is someone who experiences difficulty in producing spoken language or communicating verbally due to a condition or disorder affecting their speech. The conditions include stuttering/stammering, cleft palate, down syndrome, cerebral palsy, etc.",
    },
    {
      question: "Why take part in the hackathon?",
      answer:
        "This hackathon presents a unique opportunity to develop real-world solutions to real-world problems, making a meaningful impact on the lives of millions of individuals with speech impairments.",
    },
    {
      question: "Who can participate in the hackathon?",
      answer:
        "We highly encourage diverse teams to apply. Each team can have up to five members, including at least one female and, preferably, one individual with speech impairment.",
    },

    {
      question: "Whom should we contact?",
      answer:
        "You can contact speechdata@ug.edu.gh or visit the HCI Lab, Department of Computer Science, University of Ghana, Legon",
    },
  ];

  return (
    <div className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <div className="faq-content space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
