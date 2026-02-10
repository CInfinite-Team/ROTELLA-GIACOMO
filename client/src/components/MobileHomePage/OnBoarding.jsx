import React from "react";
import { useViewportAnimation } from "../animations/ScrollAnimations";
import { useTranslation, Trans } from "react-i18next";
import { Highlight } from "../animations/hero-highlight";
const OnBoarding = React.memo(function OnBoarding({
  namespace = "translation",
}) {
  const { t } = useTranslation(namespace);
  return (
    <div className="flex bg-[#f5f5f5]  min-h-screen w-full px-4 py-10 md:py-20">
      <div className="flex flex-col gap-4 md:gap-6 w-full max-w-screen-xl mx-auto my-auto">
        <h2
          className="font-bold fade-in text-center lg:text-left text-gray-900 max-w-2xl 2xl:max-w-4xl"
          ref={useViewportAnimation()}
          style={{
            fontSize: "clamp(24px, min(3.5vw, 7vh), 87px)",
            lineHeight: "1.1",
          }}
        >
          <Trans
            i18nKey="onboarding_title"
            t={t}
            components={{
              1: <Highlight className="text-white leading-tight" />,
            }}
          />
        </h2>

        <ol className="space-y-4 md:space-y-8 font-medium  max-w-3xl 2xl:max-w-4xl">
          <li
            className="font-semibold slide-left text-center lg:text-left text-[#181818]"
            ref={useViewportAnimation()}
            style={{ fontSize: "clamp(18px, min(2vw, 4vh), 32px)" }}
          >
            {t("onboarding_step1")}
          </li>
          <li
            className="font-semibold slide-right text-center lg:text-left text-[#181818]"
            ref={useViewportAnimation()}
            style={{ fontSize: "clamp(18px, min(2vw, 4vh), 32px)" }}
          >
            {t("onboarding_step2")}
          </li>
          <li
            className="font-semibold slide-left text-center lg:text-left text-[#181818]"
            ref={useViewportAnimation()}
            style={{ fontSize: "clamp(18px, min(2vw, 4vh), 32px)" }}
          >
            {t("onboarding_step3")}
          </li>
        </ol>

        <p
          className="text-center lg:text-left text-gray-600 font-medium fade-in inline-block w-full max-w-3xl"
          ref={useViewportAnimation()}
          style={{ fontSize: "clamp(16px, min(1.2vw, 2.5vh), 20px)" }}
        >
          {t("onboarding_footer")}
        </p>
      </div>
    </div>
  );
});

export default OnBoarding;
