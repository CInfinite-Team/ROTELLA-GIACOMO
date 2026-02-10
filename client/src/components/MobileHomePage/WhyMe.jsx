import React from "react";
import { useViewportAnimation } from "../animations/ScrollAnimations";
import { useTranslation, Trans } from "react-i18next";
import BlurText from "../animations/BlurText";
const WhyMe = React.memo(function WhyMe({ namespace = "translation" }) {
  const { t, i18n } = useTranslation(namespace);
  return (
    <div className="flex flex-col  bg-[#f5f5f5] gap-5 justify-center min-h-screen">
      <h2
        className=" text-[#911c28] font-bold  text-center lg:text-left slide-up !leading-snug"
        ref={useViewportAnimation()}
        style={{ fontSize: "clamp(46px, 3.5vw, 87px)" }}
      >
        {t("whyme_title")}
      </h2>

      <div
        className={` w-[80%] ${i18n.language === "fr" || i18n.language === "es" ? "whitespace-normal" : "whitespace-nowrap"} text-center lg:text-left w-full font-bold mb-10  slide-up !leading-snug`}
        ref={useViewportAnimation()}
        style={{ fontSize: "clamp(22px, 2.8vw, 67px)" }}
      >
        <Trans i18nKey="whyme_point1" t={t} />
        <BlurText
          text={t(`whyme_point2_part1`)}
          delay={150}
          animateBy="words"
          direction="top"
          className="text-2xl whitespace-nowrap  !leading-snug"
          style={{ fontSize: "clamp(22px, 2.8vw, 67px)" }}
        />
        <BlurText
          text={t(`whyme_point2_part2`)}
          delay={150}
          animateBy="words"
          direction="top"
          className="text-2xl whitespace-nowrap !leading-snug"
          style={{ fontSize: "clamp(22px, 2.8vw, 67px)" }}
        />
      </div>
    </div>
  );
});

export default WhyMe;
