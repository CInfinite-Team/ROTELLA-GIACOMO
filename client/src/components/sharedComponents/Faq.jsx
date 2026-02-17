import { useTranslation } from "react-i18next";
import React, { useState, useMemo, useCallback } from "react";
import { useCurrency } from "../../context/CurrencyContext";
import { useViewportAnimation } from "../../components/animations/ScrollAnimations";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
const FAQ = React.memo(function FAQ({
  namespace = "translation",
  page = "Home",
}) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [startIndex, setStartIndex] = useState(0);
  const { t } = useTranslation(["translation", "maas", "fractional"]);
  const { formatPrice, currentPrice, discountPrice } = useCurrency();

  const allItems = useMemo(
    () => [
      // Home FAQs - these use the "translation" namespace translations
      {
        page: "Home",
        category: "General",
        question: t("translation:faq_q1"),
        answer: t("translation:faq_a1"),
      },
      {
        page: "Home",
        category: "General",
        question: t("translation:faq_q2"),
        answer: t("translation:faq_a2", { price: formatPrice(discountPrice) }),
      },
      // MaaS FAQs - these use the "maas" namespace translations
      {
        page: "MaaS",
        category: "MaaS",
        question: t("maas:faq_q1"),
        answer: t("maas:faq_a1"),
      },
      {
        page: "MaaS",
        category: "MaaS",
        question: t("maas:faq_q2"),
        answer: t("maas:faq_a2", { price: formatPrice(discountPrice) }),
      },
      {
        page: "MaaS",
        category: "MaaS",
        question: t("maas:faq_q3"),
        answer: t("maas:faq_a3"),
      },
      {
        page: "MaaS",
        category: "MaaS",
        question: t("maas:faq_q4"),
        answer: t("maas:faq_a4"),
      },
      {
        page: "MaaS",
        category: "MaaS",
        question: t("maas:faq_q5"),
        answer: t("maas:faq_a5"),
      },
      {
        page: "MaaS",
        category: "MaaS",
        question: t("maas:faq_q6"),
        answer: t("maas:faq_a6"),
      },
      // Fractional Marketing FAQs - these use the "fractional" namespace translations
      {
        page: "Fractional Marketing",
        category: "Fractional Marketing",
        question: t("fractional:faq_q1"),
        answer: t("fractional:faq_a1"),
      },
      {
        page: "Fractional Marketing",
        category: "Fractional Marketing",
        question: t("fractional:faq_q2"),
        answer: t("fractional:faq_a2", { price: formatPrice(discountPrice) }),
      },
      {
        page: "Fractional Marketing",
        category: "Fractional Marketing",
        question: t("fractional:faq_q3"),
        answer: t("fractional:faq_a3"),
      },
      {
        page: "Fractional Marketing",
        category: "Fractional Marketing",
        question: t("fractional:faq_q4"),
        answer: t("fractional:faq_a4"),
      },
      {
        page: "Fractional Marketing",
        category: "Fractional Marketing",
        question: t("fractional:faq_q5"),
        answer: t("fractional:faq_a5"),
      },
      {
        page: "Fractional Marketing",
        category: "Fractional Marketing",
        question: t("fractional:faq_q6"),
        answer: t("fractional:faq_a6"),
      },
    ],
    [t, formatPrice, discountPrice],
  );

  const pageCategories = useMemo(() => {
    const pages = new Set(allItems.map((item) => item.page));
    // Remove "Home" from the filter buttons
    pages.delete("Home");
    return ["All", ...Array.from(pages)];
  }, [allItems]);

  const filteredItems = useMemo(() => {
    if (selectedCategory === "All") {
      // Show all FAQs including Home FAQs
      return allItems;
    }
    // Filter by specific page
    return allItems.filter((item) => item.page === selectedCategory);
  }, [selectedCategory, allItems]);

  const itemsPerView = 4; // Show 4 items at a time

  const toggleFAQ = useCallback((index) => {
    setActiveIndex((current) => (current === index ? null : index));
  }, []);

  const handleNext = () => {
    if (startIndex + itemsPerView < filteredItems.length) {
      setStartIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  // Reset startIndex when category changes
  React.useEffect(() => {
    setStartIndex(0);
    setActiveIndex(null);
  }, [selectedCategory]);

  return (
    <div
      className="flex flex-col bg-[#F5F5F5] min-h-screen items-center justify-center lg:gap-5 sm:px-[15px] xl:px-[70px] py-4 sm:py-10 fade-in"
      ref={useViewportAnimation()}
    >
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
        <h2
          className="whitespace-nowrap text-center font-bold mb-4 sm:mb-6"
          style={{ fontSize: "clamp(20px, 3vw, 60px)" }}
          ref={useViewportAnimation()}
        >
          {t("faq_title")}
        </h2>

        {/* Page Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-3 sm:mb-6 xl:mb-10">
          {pageCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-lg cursor-pointer font-bold transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-red-800 text-white shadow-lg scale-105"
                  : "border-2 border-red-800 text-red-800 hover:bg-red-50"
              }`}
              style={{ fontSize: "clamp(12px, 1.2vw, 18px)" }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full flex items-center ">
          <div className="flex-1 overflow-hidden  pr-12 sm:pr-16 lg:pr-20">
            <motion.div
              className="space-y-1 md:space-y-2 lg:space-y-4"
              initial={false}
              animate={{ y: 0 }}
            >
              <AnimatePresence mode="popLayout">
                {filteredItems
                  .slice(startIndex, startIndex + itemsPerView)
                  .map((faq, index) => (
                    <motion.div
                      key={faq.question}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className={`border border-gray-200 rounded-lg shadow-lg bg-red-800 overflow-hidden`}
                    >
                      <button
                        className="flex justify-between items-center w-full p-3 sm:p-4 xl:p-5 text-left rounded-sm transition-colors cursor-pointer"
                        onClick={() => toggleFAQ(startIndex + index)}
                      >
                        <span
                          className="font-semibold text-white pr-4"
                          style={{ fontSize: "clamp(12px, 1.2vw, 22px)" }}
                        >
                          {faq.question}
                        </span>
                        <span
                          className="text-2xl transition-transform duration-300 text-white flex-shrink-0"
                          style={{
                            transform:
                              activeIndex === startIndex + index
                                ? "rotate(180deg)"
                                : "rotate(0deg)",
                          }}
                        >
                          <ChevronDown size={20} className="cursor-pointer" />
                        </span>
                      </button>

                      <motion.div
                        initial={false}
                        animate={{
                          height:
                            activeIndex === startIndex + index ? "auto" : 0,
                          opacity: activeIndex === startIndex + index ? 1 : 0,
                        }}
                        className="overflow-hidden bg-red-800 text-white"
                      >
                        <div
                          className="p-3 sm:p-4 lg:p-5 border-t border-red-700/50"
                          style={{ fontSize: "clamp(11px, 1.1vw, 20px)" }}
                        >
                          {faq.answer}
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Navigation Buttons Fixed Relative to the Container Height */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-10">
            <button
              onClick={handlePrev}
              disabled={startIndex === 0}
              className={`p-2 rounded-full w-fit border-2 border-red-800 text-red-800 transition-all ${
                startIndex === 0
                  ? "opacity-20 cursor-not-allowed"
                  : "hover:bg-red-800 hover:text-white cursor-pointer"
              }`}
            >
              <ChevronUp className="w-4 h-4 sm:w-6 sm:h-6 cursor-pointer" />
            </button>

            <button
              onClick={handleNext}
              disabled={startIndex + itemsPerView >= filteredItems.length}
              className={`p-2 rounded-full w-fit border-2 border-red-800 text-red-800 transition-all ${
                startIndex + itemsPerView >= filteredItems.length
                  ? "opacity-20 cursor-not-allowed"
                  : "hover:bg-red-800 hover:text-white cursor-pointer"
              }`}
            >
              <ChevronDown className="w-4 h-4 sm:w-6 sm:h-6 cursor-pointer" />
            </button>
          </div>
        </div>

        {/* Page Indicator */}
        <div className="mt-4 text-gray-500 font-medium text-sm">
          {Math.min(startIndex + 1, filteredItems.length)} -{" "}
          {Math.min(startIndex + itemsPerView, filteredItems.length)} of{" "}
          {filteredItems.length}
        </div>
      </div>
    </div>
  );
});

export default FAQ;
