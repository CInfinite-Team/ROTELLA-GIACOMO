import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || 'en';

  return (
    <div className="min-h-screen bg-[#f5f5f5] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
        <Link to={`/${currentLang}`} className="text-[#911c28] hover:text-[#a73535] font-semibold mb-6 inline-block">
          ← {t('back_to_home', 'Back to Home')}
        </Link>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('privacy_policy_title', 'Privacy Policy')}</h1>
        <p className="text-sm text-gray-600 mb-8">{t('last_updated', 'Last updated')}: {new Date().toLocaleDateString()}</p>

        <div className="space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('privacy_sec1_title', '1. Introduction')}</h2>
            <p className="mb-4">
              {t('privacy_sec1_content', "Welcome to Rotella Giacomo's website. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.")}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('privacy_sec2_title', '2. Data Controller')}</h2>
            <p className="mb-4 whitespace-pre-line">
              {t('privacy_sec2_content', "Rotella Giacomo\nEmail: rotellagiacomo@gmail.com\nWebsite: www.rotellagiacomo.com")}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('privacy_sec3_title', '3. Data We Collect')}</h2>
            <p className="mb-4">{t('privacy_sec3_content', 'We may collect, use, store and transfer different kinds of personal data about you:')}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t('privacy_sec3_item1', 'Identity Data: Name, title')}</li>
              <li>{t('privacy_sec3_item2', 'Contact Data: Email address, telephone number')}</li>
              <li>{t('privacy_sec3_item3', 'Technical Data: IP address, browser type, time zone, operating system')}</li>
              <li>{t('privacy_sec3_item4', 'Usage Data: Information about how you use our website')}</li>
              <li>{t('privacy_sec3_item5', 'Marketing Data: Your preferences in receiving marketing from us')}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('privacy_sec4_title', '4. How We Use Your Data')}</h2>
            <p className="mb-4">{t('privacy_sec4_content', 'We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:')}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t('privacy_sec4_item1', 'To provide and improve our services')}</li>
              <li>{t('privacy_sec4_item2', 'To communicate with you about our services')}</li>
              <li>{t('privacy_sec4_item3', 'To send you marketing communications (with your consent)')}</li>
              <li>{t('privacy_sec4_item4', 'To analyze website usage and improve user experience')}</li>
              <li>{t('privacy_sec4_item5', 'To comply with legal obligations')}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('privacy_sec5_title', '5. Legal Basis for Processing (GDPR)')}</h2>
            <p className="mb-4">{t('privacy_sec5_content', 'Under GDPR, we process your personal data based on:')}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t('privacy_sec5_item1', 'Consent: You have given clear consent for us to process your personal data for a specific purpose')}</li>
              <li>{t('privacy_sec5_item2', 'Contract: Processing is necessary for a contract we have with you')}</li>
              <li>{t('privacy_sec5_item3', 'Legal obligation: Processing is necessary for us to comply with the law')}</li>
              <li>{t('privacy_sec5_item4', 'Legitimate interests: Processing is necessary for our legitimate interests or the legitimate interests of a third party')}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('privacy_sec6_title', '6. Data Sharing')}</h2>
            <p className="mb-4">{t('privacy_sec6_content', 'We may share your personal data with:')}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t('privacy_sec6_item1', 'Service Providers: Calendly (scheduling), analytics providers')}</li>
              <li>{t('privacy_sec6_item2', 'Professional Advisers: Lawyers, accountants, consultants')}</li>
              <li>{t('privacy_sec6_item3', 'Regulatory Authorities: When required by law')}</li>
            </ul>
            <p className="mt-4">{t('privacy_sec6_footer', 'We require all third parties to respect the security of your personal data and to treat it in accordance with the law.')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('privacy_sec7_title', '7. International Transfers')}</h2>
            <p className="mb-4">
              {t('privacy_sec7_content', 'Some of our external third parties are based outside the European Economic Area (EEA). Whenever we transfer your personal data out of the EEA, we ensure a similar degree of protection is afforded to it by implementing appropriate safeguards.')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('privacy_sec8_title', '8. Data Security')}</h2>
            <p className="mb-4">
              {t('privacy_sec8_content', 'We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. We limit access to your personal data to those who have a genuine business need to know it.')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('privacy_sec9_title', '9. Data Retention')}</h2>
            <p className="mb-4">
              {t('privacy_sec9_content', 'We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('privacy_sec10_title', '10. Your Legal Rights (GDPR)')}</h2>
            <p className="mb-4">{t('privacy_sec10_content', 'Under GDPR, you have the right to:')}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t('privacy_sec10_item1', 'Access: Request access to your personal data')}</li>
              <li>{t('privacy_sec10_item2', 'Correction: Request correction of your personal data')}</li>
              <li>{t('privacy_sec10_item3', 'Erasure: Request erasure of your personal data')}</li>
              <li>{t('privacy_sec10_item4', 'Object: Object to processing of your personal data')}</li>
              <li>{t('privacy_sec10_item5', 'Restriction: Request restriction of processing your personal data')}</li>
              <li>{t('privacy_sec10_item6', 'Data Portability: Request transfer of your personal data')}</li>
              <li>{t('privacy_sec10_item7', 'Withdraw Consent: Withdraw consent at any time')}</li>
            </ul>
            <p className="mt-4">
              {t('privacy_sec10_footer', 'To exercise any of these rights, please contact us at:')} <a href="mailto:rotellagiacomo@gmail.com" className="text-[#911c28] hover:text-[#a73535] underline">rotellagiacomo@gmail.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('privacy_sec11_title', '11. Cookies')}</h2>
            <p className="mb-4">
              {t('privacy_sec11_content', 'Our website uses cookies to distinguish you from other users. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site. For detailed information on the cookies we use and the purposes for which we use them, see our')} <Link to={`/${currentLang}/cookie-policy`} className="text-[#911c28] hover:text-[#a73535] underline">{t('cookie_policy', 'Cookie Policy')}</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('privacy_sec12_title', '12. Third-Party Links')}</h2>
            <p className="mb-4">
              {t('privacy_sec12_content', 'This website may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('privacy_sec13_title', '13. Changes to This Policy')}</h2>
            <p className="mb-4">
              {t('privacy_sec13_content', 'We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last updated" date.')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('privacy_sec14_title', '14. Contact Us')}</h2>
            <p className="mb-4">
              {t('privacy_sec14_content', 'If you have any questions about this privacy policy or our privacy practices, please contact us:')}
            </p>
            <p>
              <strong>{t('email', 'Email')}:</strong> <a href="mailto:rotellagiacomo@gmail.com" className="text-[#911c28] hover:text-[#a73535] underline">rotellagiacomo@gmail.com</a><br />
              <strong>{t('phone', 'Phone')}:</strong> <a href="tel:+393920034695" className="text-[#911c28] hover:text-[#a73535] underline">+39 3920034695</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('privacy_sec15_title', '15. Supervisory Authority')}</h2>
            <p className="mb-4">
              {t('privacy_sec15_content', 'You have the right to make a complaint at any time to the Italian Data Protection Authority (Garante per la protezione dei dati personali) or your local supervisory authority for data protection issues.')}
            </p>
            <p>
              <strong>{t('privacy_sec15_footer', 'Garante per la protezione dei dati personali Website:')}</strong><br />
              <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-[#911c28] hover:text-[#a73535] underline">www.garanteprivacy.it</a>
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

export default PrivacyPolicy;
