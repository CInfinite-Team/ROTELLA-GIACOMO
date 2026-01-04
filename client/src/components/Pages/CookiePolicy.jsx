import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LanguageSwitcher from '../sharedComponents/LanguageSwitcher';
import CookieConsent from '../sharedComponents/CookieConsent';

const CookiePolicy = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || 'en';

  const handleResetCookies = () => {
    window.dispatchEvent(new Event('openCookieSettings'));
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] py-12 px-4 sm:px-6 lg:px-8">
    <LanguageSwitcher/>
    <CookieConsent />
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
        <Link to={`/${currentLang}`} className="text-[#911c28] hover:text-[#a73535] font-semibold mb-6 inline-block">
          ← {t('back_to_home', 'Back to Home')}
        </Link>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('cookie_policy', 'Cookie Policy')}</h1>
        <p className="text-sm text-gray-600 mb-8">{t('last_updated', 'Last updated')}: {new Date().toLocaleDateString()}</p>

        <div className="space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('cookie_sec1_title', '1. What Are Cookies?')}</h2>
            <p className="mb-4">
              {t('cookie_sec1_content', 'Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site.')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('cookie_sec2_title', '2. How We Use Cookies')}</h2>
            <p className="mb-4">
              {t('cookie_sec2_content', 'We use cookies to enhance your browsing experience, serve personalized content, analyze our traffic, and understand where our visitors are coming from. We use different types of cookies to run our website and services.')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('cookie_sec3_title', '3. Types of Cookies We Use')}</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-[#911c28] pl-4">
                <h3 className="font-bold text-gray-900 mb-2">{t('cookie_sec3_essential_title', 'Strictly Necessary Cookies')}</h3>
                <p className="text-sm">{t('cookie_sec3_essential_desc', 'These cookies are essential for the website to function properly. They enable basic functions like page navigation and access to secure areas. The website cannot function properly without these cookies.')}</p>
              </div>

              <div className="border-l-4 border-[#911c28] pl-4">
                <h3 className="font-bold text-gray-900 mb-2">{t('cookie_sec3_functional_title', 'Functional Cookies')}</h3>
                <p className="text-sm">{t('cookie_sec3_functional_desc', 'These cookies enable enhanced functionality and personalization, such as language preferences and region selection. They may be set by us or by third-party providers.')}</p>
              </div>

              <div className="border-l-4 border-[#911c28] pl-4">
                <h3 className="font-bold text-gray-900 mb-2">{t('cookie_sec3_analytics_title', 'Analytics Cookies')}</h3>
                <p className="text-sm">{t('cookie_sec3_analytics_desc', 'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website and services.')}</p>
              </div>

              <div className="border-l-4 border-[#911c28] pl-4">
                <h3 className="font-bold text-gray-900 mb-2">{t('cookie_sec3_marketing_title', 'Marketing Cookies')}</h3>
                <p className="text-sm">{t('cookie_sec3_marketing_desc', 'These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user.')}</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('cookie_sec4_title', '4. Third-Party Cookies')}</h2>
            <p className="mb-4">
              {t('cookie_sec4_content', 'In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website and deliver advertisements on and through the website.')}
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t('cookie_sec4_item1', 'Google Analytics for website traffic analysis')}</li>
              <li>{t('cookie_sec4_item2', 'Calendly for appointment scheduling')}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('cookie_sec5_title', '5. Cookie Duration')}</h2>
            <p className="mb-4">{t('cookie_sec5_content', 'Cookies can be either "session" cookies or "persistent" cookies:')}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t('cookie_sec5_item1', 'Session Cookies: These are temporary cookies that expire when you close your browser')}</li>
              <li>{t('cookie_sec5_item2', 'Persistent Cookies: These cookies remain on your device for a set period or until you delete them')}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('cookie_sec6_title', '6. Managing Your Cookie Preferences')}</h2>
            <p className="mb-4">
              {t('cookie_sec6_content', 'You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by clicking on the appropriate opt-out links provided in the cookie consent banner.')}
            </p>
            
            <div className="bg-[#f5f5f5] p-6 rounded-lg my-4">
              <h3 className="font-bold text-gray-900 mb-3">{t('cookie_sec6_change_settings_title', 'Change Your Cookie Settings')}</h3>
              <p className="mb-4">{t('cookie_sec6_change_settings_desc', 'Click the button below to review and change your cookie preferences:')}</p>
              <button
                onClick={handleResetCookies}
                className="bg-[#911c28] hover:bg-[#a73535] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                {t('manage_cookie_preferences', 'Manage Cookie Preferences')}
              </button>
            </div>

            <p className="mt-4">
              You can also set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. 
              If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('cookie_sec7_title', '7. Browser Settings')}</h2>
            <p className="mb-4">{t('cookie_sec7_content', 'Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set, visit:')}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-[#911c28] hover:text-[#a73535] underline">www.aboutcookies.org</a></li>
              <li><a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-[#911c28] hover:text-[#a73535] underline">www.allaboutcookies.org</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('cookie_sec8_title', '8. Do Not Track Signals')}</h2>
            <p className="mb-4">
              {t('cookie_sec8_content', 'Some browsers incorporate a "Do Not Track" (DNT) feature that signals to websites you visit that you do not want to have your online activity tracked. We currently do not respond to DNT signals.')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('cookie_sec9_title', '9. Updates to This Cookie Policy')}</h2>
            <p className="mb-4">
              {t('cookie_sec9_content', 'We may update this Cookie Policy from time to time in order to reflect changes to the cookies we use or for other operational, legal, or regulatory reasons. Please revisit this Cookie Policy regularly to stay informed about our use of cookies.')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('cookie_sec10_title', '10. Contact Us')}</h2>
            <p className="mb-4">
              {t('cookie_sec10_content', 'If you have any questions about our use of cookies or other technologies, please contact us:')}
            </p>
            <p>
              <strong>{t('email', 'Email')}:</strong> <a href="mailto:rotellagiacomo@gmail.com" className="text-[#911c28] hover:text-[#a73535] underline">rotellagiacomo@gmail.com</a><br />
              <strong>{t('phone', 'Phone')}:</strong> <a href="tel:+393920034695" className="text-[#911c28] hover:text-[#a73535] underline">+39 3920034695</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('cookie_sec11_title', '11. More Information')}</h2>
            <p className="mb-4">
              {t('cookie_sec11_content', 'For more information about how we handle your personal data, please see our')}{' '}
              <Link to={`/${currentLang}/privacy-policy`} className="text-[#911c28] hover:text-[#a73535] underline font-semibold">
                {t('privacy_policy_title', 'Privacy Policy')}
              </Link>.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link to={`/${currentLang}`} className="text-[#911c28] hover:text-[#a73535] font-semibold">
            ← {t('back_to_home', 'Back to Home')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
