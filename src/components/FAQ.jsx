import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { question: "When and where is the event taking place?", 
        answer: "The event will be held on [dates] at [venue]. The venue is centrally located at [address], easily accessible by public transportation, and offers parking for attendees." },
    { question: " How do I purchase tickets?",
       answer: "The GTCO Fashion weekend allows free entry. You can get the free tickets online through our official website at [link]. " },
    { question: "What should I wear to Fashion Weekend?",
         answer: "There is no strict dress code, but we encourage guests to come dressed stylishly! Whether you're in casual chic, high fashion, or your unique personal style, it's a weekend to express yourself creatively. Comfortable shoes are recommended for walking around the event space." 
        },
    {
        question: "Are there any activities besides fashion shows?", 
        answer: "Yes! In addition to runway shows, we have pop-up shops, styling workshops, fashion panel discussions, and networking opportunities with industry professionals. Check out the full schedule on our website."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full text-left p-4 bg-orange-100 rounded-md hover:bg-gray-200 focus:outline-none"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <span className={`transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </div>
          </button>
          {activeIndex === index && (
            <div className="p-4 text-gray-700 bg-white border border-gray-200 rounded-b-md">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
