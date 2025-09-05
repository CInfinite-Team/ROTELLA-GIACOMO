import React, { useState } from 'react';
import { useViewportAnimation } from '../../components/animations/ScrollAnimations';
import {ChevronDown} from 'lucide-react';
const FAQ = () => {
  // FAQ data with questions and answers
  const faqData = [
    {
      question: 'What marketing services do you offer?',
      answer: 'I offer a comprehensive range of marketing services including social media management, content creation, SEO optimization, website maintenance, PPC campaigns, email marketing, and strategic planning tailored to your business needs.'
    },
    {
      question: 'How much does your marketing service cost?',
      answer: 'My standard marketing package starts at €1,000 per month, which includes end-to-end execution and strategy. Custom packages are available based on your specific requirements and business size.'
    },
    {
      question: 'How long does it take to see results from marketing efforts?',
      answer: 'Results vary depending on your industry, competition, and current market position. Typically, you can expect to see initial improvements within 1-2 months, with more significant results appearing after 3-6 months of consistent strategy implementation.'
    },
    {
      question: 'Do you work with businesses in specific industries?',
      answer: 'I have experience working with businesses across various industries including Luxury, Fashion, SaaS, Tech, Fitness, Lifestyle, and Real Estate. My approach is adaptable to different market segments and business models.'
    },
    {
      question: 'What is your approach to social media marketing?',
      answer: 'My approach to social media marketing involves creating a tailored strategy based on your target audience, developing engaging content, implementing consistent posting schedules, managing community engagement, and utilizing data analytics to continuously optimize performance.'
    },
    {
      question: 'How do you measure marketing success?',
      answer: 'I measure success through various KPIs including website traffic, conversion rates, engagement metrics, lead generation, ROI, and ultimately, business growth. Regular reporting and analytics reviews ensure we track progress and adjust strategies as needed.'
    },
  ];

  // State to track which FAQ item is open
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle function to open/close FAQ items
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-5 px-[35px] xl:px-[70px] py-10 fade-in" ref={useViewportAnimation()}>
      <h2 className="text-3xl text-center font-bold mt-8 mb-8" ref={useViewportAnimation()}>
        Frequently Asked Questions
      </h2>
      
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div 
            key={index} 
            className={`border border-gray-200 rounded-lg shadow-lg bg-[#f3ebe3]  overflow-hidden slide-up stagger-${index % 5 + 1}`}
            ref={useViewportAnimation()}
          >
            <button
              className="flex justify-between items-center w-full p-5 text-left  rounded-sm transition-colors"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-semibold text-lg text-gray-800">{faq.question}</span>
              <span className="text-2xl transition-transform duration-300" style={{ transform: activeIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                <ChevronDown/>
              </span>
            </button>
            
            <div 
              className="overflow-hidden transition-all duration-300 ease-in-out"
              style={{ maxHeight: activeIndex === index ? '500px' : '0px', opacity: activeIndex === index ? 1 : 0 }}
            >
              <div className="p-5 bg-[#f3ebe3] text-gray-600">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;