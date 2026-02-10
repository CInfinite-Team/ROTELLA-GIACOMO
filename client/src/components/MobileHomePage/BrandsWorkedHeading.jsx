import React from "react";
import { motion } from "framer-motion";
import { ArrowBigDown } from "lucide-react";

import { useTranslation, Trans } from "react-i18next";
const BrandsWorkedHeading = React.memo(function BrandsWorkedHeading({
  namespace = "translation",
}) {
  const { t } = useTranslation(namespace);
  return (
    <div className="flex flex-col bg-[#f5f5f5] min-h-screen items-center justify-center">
      <h2
        className="font-bold text-center mb-2 md:mb-8 text-gray-800"
        style={{ fontSize: "clamp(25px, 4vw, 77px)" }}
      >
        <Trans i18nKey="brands_heading" t={t} />
      </h2>

      <motion.button
        aria-label="Scroll down"
        initial={{ y: 0 }}
        animate={{ y: [0, 20, 0] }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.3 },
        }}
      >
        <ArrowBigDown
          className=" h-20 w-20 md:w-28 md:h-28 lg:w-[8vw] lg:h-[8vw]"
          fill="#911c28"
          color="#911c28"
        />
      </motion.button>
    </div>
  );
});

export default BrandsWorkedHeading;
