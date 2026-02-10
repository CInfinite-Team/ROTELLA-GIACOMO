import React from "react";
// import Giacomo from '../../assets/Giacomo.webp'
// Import brand logos
import BardeLogo from "../../assets/Brands/Barde.svg";
import Biota from "../../assets/Brands/Biota.svg";
import Top10 from "../../assets/Brands/Top10.svg";
import Risin from "../../assets/Brands/Risin.svg";
import PitchBook from "../../assets/Brands/PitchBook.svg";
import GucciLogo from "../../assets/Brands/GUCCI.svg";
import KannanLogo from "../../assets/Brands/Kannan.svg";
import KukrejaLogo from "../../assets/Brands/Kukreja.svg";
import LanesLogo from "../../assets/Brands/Lanes.svg";
import OffbeatsLogo from "../../assets/Brands/OFFBEATS.svg";
import SapaniLogo from "../../assets/Brands/Sapani.svg";
import BadgerMap from "../../assets/Brands/BadgerMap.svg";
import WebSiteSetup from "../../assets/Brands/WebSiteSetup.svg";
import AIXSummit from "../../assets/Brands/AIXSummit.svg";
import DogNBay from "../../assets/Brands/DogNBay.svg";
import JackWills from "../../assets/Brands/JackWills.svg";
import { PopupButton } from "react-calendly";
import CountUp from "react-countup";
import { useTranslation, Trans } from "react-i18next";
import { useCurrency } from "../../context/CurrencyContext";

const brands = [
  {
    logo: GucciLogo,
    name: "GUCCI",
  },

  {
    logo: KukrejaLogo,
    name: "KUKREJA INFRASTRUCTURES",
  },
  {
    logo: BardeLogo,
    name: "RADIANCE CLINIC",
  },

  {
    logo: AIXSummit,
    name: "AIX SUMMIT",
  },
  {
    logo: Top10,
    name: "Top 10 London",
  },

  {
    logo: KannanLogo,
    name: "KANAN INTERNATIONAL",
  },

  {
    logo: DogNBay,
    name: "DOCK & BAY",
  },

  {
    logo: LanesLogo,
    name: "LANES LONDON",
  },
  {
    logo: Risin,
    name: "RISIN VENTURES",
  },

  {
    logo: BadgerMap,
    name: "BADGER MAPS",
  },

  {
    logo: Biota,
    name: "BIOTA",
  },
  {
    logo: OffbeatsLogo,
    name: "OFFBEAT STUDIOS",
  },
  {
    logo: SapaniLogo,
    name: "MIKALI SAPANI",
  },
  {
    logo: PitchBook,
    name: "Pitch Book",
  },
  {
    logo: JackWills,
    name: "JACK WILLS",
  },
  {
    logo: WebSiteSetup,
    name: "WEBSITESETUP",
  },
];

export default function Hero({ namespace = "translation" }) {
  const { t } = useTranslation(namespace);
  const { currentPrice, discountPrice, symbol } = useCurrency();

  return (
    <div className="bg-[#f4f4f4]  flex items-center justify-center">
      <div className="relative w-full flex flex-col justify-center gap-[clamp(10px,9vh,60px)] items-center  min-h-screen p-4  overflow-hidden">
        <div className="flex flex-col w-full lg:flex-row justify-between items-center lg:items-start relative z-10">
          {/* Left Content Section */}
          <div className="w-full   text-center flex flex-col items-center ">
            <p className="font-semibold text-[clamp(10px,2vmin,14px)] md:text-lg tracking-widest text-gray-600 mb-4">
              ROTELLA GIACOMO
            </p>
            <h1 className="text-[clamp(1.25rem,4vmin,2.25rem)] md:text-4xl font-bold text-gray-800 !leading-tight ">
              {t("hero_role")}{" "}
              <span>
                {t("hero_for")}{" "}
                <span className="text-[#911c28]">{t("hero_target")}</span>
              </span>
            </h1>

            <h2 className="mt-4 md:mt-8 text-[clamp(0.875rem,2.5vmin,1.5rem)] md:text-2xl  text-gray-700 max-w-[500px] ">
              {t("hero_subtitle_pt1")}{" "}
              <span className="text-[##911c28] font-semibold">
                {t("hero_subtitle_pt2")}
              </span>
            </h2>

            {/* Right Content Section */}
            <div className="w-fit mt-3 md:mt-0  pb-4 lg:pb-0 flex flex-col items-center ">
              <p className="text-[clamp(1.25rem,3.5vmin,2rem)] font-bold text-[#911c28] mb">
                {symbol}
                <CountUp
                  start={discountPrice}
                  end={currentPrice}
                  duration={6}
                  separator=","
                  enableScrollSpy
                  scrollSpyOnce
                />
                {t("hero_price_suffix")}
              </p>
            </div>

            <div className="flex gap-5 md:gap-10 mt-3 items-center justify-center ">
              <div className="flex flex-col items-center">
                <PopupButton
                  url="https://calendly.com/rgiacomo"
                  rootElement={document.getElementById("root")}
                  text={t("lets_talk")}
                  className="mt-8 bg-[#911c28] hover:bg-[#a73535] text-white text-[clamp(12px,2vmin,16px)] md:text-lg font-bold py-[clamp(12px,2vmin,20px)] px-5 md:px-20 w-fit md:py-5 rounded-full shadow-lg transition-colors duration-300"
                />
                <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                  <div className="flex -space-x-2">
                    {brands.slice(5, 9).map((brand, i) => (
                      <div
                        key={i}
                        className="w-[clamp(1.5rem,4vmin,2rem)] h-[clamp(1.5rem,4vmin,2rem)] rounded-full border-2 border-white bg-[#f7efe8] flex items-center justify-center overflow-hidden"
                      >
                        <img
                          src={brand.logo}
                          alt={brand.name}
                          className="w-full h-full object-cover p-[2px]"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-bold text-gray-800 text-sm leading-none">
                      {t("hero_credibility_stat")}
                    </span>
                    <span className="text-xs text-gray-600 leading-tight">
                      {t("hero_credibility_text")}
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-[clamp(160px,35vmin,320px)] h-[clamp(160px,35vmin,320px)] md:w-80 md:h-80 overflow-hidden shadow-2xl border-4 border-[#911c28] rounded-xl flex-shrink-0">
                <img
                  src="/Giacomo.webp"
                  srcSet="/Giacomo.webp 300w, /Giacomo.webp 400w"
                  sizes="(max-width: 768px) 300px, (max-width: 1280px) 400px"
                  alt="Rotella Giacomo"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  width="400"
                  height="400"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt- w-full overflow-hidden ">
          <div className="flex items-center  space-x-10  animate-scroll">
            {brands.concat(brands).map((brand, index) => (
              <div key={index} className="flex-shrink-0">
                <img
                  className="h-[clamp(1rem,6vh,3rem)] w-auto px-3 object-contain "
                  src={brand.logo}
                  alt={brand.name}
                  loading="eager"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
