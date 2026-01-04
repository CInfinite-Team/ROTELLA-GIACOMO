import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import image from '../../assets/pics/image.png'
import { useViewportAnimation } from '../animations/ScrollAnimations'
import { useTranslation } from 'react-i18next';

const ServiceItem = ({ s, t }) => {
  const titleRef = useViewportAnimation({ animationClass: 'animate-in stagger-2' });
  const imgRef = useViewportAnimation({ animationClass: 'animate-in stagger-4' });

  return (
    <div className='flex flex-col items-center gap-5  '>
      <div
        className='font-bold text-center text-[#181818] relative fade-in slide-up h-[100px] flex items-center justify-center'
        ref={titleRef}
        style={{ fontSize: "clamp(16px, 3vw, 30px)" }}
      >
        {s.title}
        <p className={`opacity-0 select-none sm:hidden ${s.title === t('service_other') ? 'hidden' : ''} `}>{s.title}</p>
      </div>
      <div ref={imgRef} className='max-h-[60vh] sm:max-h-[70vh] lg:aspect-video 2xl:max-h-[80vh] shadow-xl w-full max-w-[90vw] fade-in-blur overflow-hidden rounded-xl'>
        <img
          src={s.img}
          loading='lazy'
          decoding='async'
          width='651' height='434'
          className='w-full h-full object-contain sm:object-cover rounded-xl'
          alt={s.title}
        />
      </div>
    </div>
  )
}

const Services = React.memo(function Services() {
  const { t } = useTranslation();
  const [swiperInstance, setSwiperInstance] = React.useState(null);
  const sectionRef = React.useRef(null);

  React.useEffect(() => {
    if (!swiperInstance || !sectionRef.current) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Reset to first slide and start autoplay
          swiperInstance.slideToLoop(0, 0);
          swiperInstance.autoplay.start();
        } else {
          // Stop autoplay when not in view to preserve resources and allow reset on re-entry
          swiperInstance.autoplay.stop();
        }
      });
    }, { threshold: 0.1 });

    observer.observe(sectionRef.current);
    return () => {
      if (observer) observer.disconnect();
    };
  }, [swiperInstance]);

  const services = [
    {
      title: t('service_website'),
      img: image
    },
    {
      title: t('service_seo'),
      img: "https://images.unsplash.com/photo-1709281847780-2b34c28853c0?q=80&w=870&auto=format&fit=crop"
    },
    {
      title: t('service_social'),
      img: "https://images.unsplash.com/photo-1615494488092-b13b68fe0eb5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: t('service_other'),
      img: "https://images.unsplash.com/photo-1557167668-6eb71e76b603?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ]

  return (
    <div ref={sectionRef} className="bg-[#f5f5f5]  relative min-h-screen flex items-center justify-center pt-8 pb-16 px-4 md:px-20">

      <div className="relative w-full max-w-7xl mx-auto">
      <Swiper
        onSwiper={setSwiperInstance}
        modules={[Autoplay, Navigation]}
        spaceBetween={16}
        slidesPerView={1}

        navigation={{
          nextEl: '.services-next',
          prevEl: '.services-prev'
        }}
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true,
        }}
        speed={900}
        loop
        className="w-full relative"
      >
        {services.map((s, i) => (
          <SwiperSlide key={i}>
            <ServiceItem s={s} t={t} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className=" hidden lg:block services-prev absolute left-4 lg:-left-10 top-[55%] transform  -translate-y-1/2 mt-4 bg-white/90 hover:bg-white text-gray-800 rounded-full p-1 shadow-lg transition-all duration-200 hover:scale-110 z-50 cursor-pointer border border-gray-200">
        <svg className="w-5 h-5 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </div>

      <div className="hidden lg:block services-next absolute right-4 lg:-right-10 top-[55%] transform -translate-y-1/2 mt-4 bg-white/90 hover:bg-white text-gray-800 rounded-full p-1 shadow-lg transition-all duration-200 hover:scale-110 z-50 cursor-pointer border border-gray-200">
        <svg className="w-5 h-5 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
      </div>

    </div>
  )
})

export default Services
