import React from 'react'
import { Phone,Mail } from 'lucide-react'
import { useTranslation, Trans } from 'react-i18next';
function Footer() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || 'en';

  return (
     <footer className='text-sm md:text-xl pb-10 h-screen flex flex-col items-center lg:items-start gap-5 justify-center lg:px-[100px]'>
       <p className='text-center lg:text-left'>
         <Trans i18nKey="footer_luxury_text" components={{ 1: <a href="https://www.luxury-method.com/" target='_blank' className='underline font-semibold pl-1' /> }} />
       </p>
        <div className='flex justify-center lg:justify-start  w-full flex-col'>
       <p className='font-bold mb-2 text-center lg:text-left'>{t('footer_contact_text')}</p>
        <a href='tel:+393920034695' className='underline mb-2 text-center lg:text-left flex items-center w-full justify-center lg:justify-start gap-2 font-semibold'><Phone size={20}/> +39 3920034695</a> 
        <a href='mailto:rotellagiacomo@gmail.com' className='underline text-center lg:text-left flex w-full items-center justify-center lg:justify-start gap-2 font-semibold'><Mail size={20}/>  rotellagiacomo@gmail.com</a> 
</div>
         <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 mt-2 mb-2 text-sm text-gray-600">
           <a href={`/${currentLang}/privacy-policy`} className="hover:underline hover:text-[#911c28] transition-colors">{t('privacy_policy')}</a>
           <span className="hidden lg:block">•</span>
           <a href={`/${currentLang}/cookie-policy`} className="hover:underline hover:text-[#911c28] transition-colors">{t('cookie_policy')}</a>
           <span className="hidden lg:block">•</span>
           <a href={`/${currentLang}/terms-and-conditions`} className="hover:underline hover:text-[#911c28] transition-colors text-center">{t('terms_policy')}</a>
         </div>


      </footer>
  )
}

export default Footer
