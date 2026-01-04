import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LanguageSwitcher from '../sharedComponents/LanguageSwitcher';

const TermsAndConditions = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || 'en';

  return (
    <div className="min-h-screen bg-[#f5f5f5] py-12 px-4 sm:px-6 lg:px-8">
      <LanguageSwitcher/>
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
        <Link to={`/${currentLang}`} className="text-[#911c28] hover:text-[#a73535] font-semibold mb-6 inline-block">
          ← {t('back_to_home', 'Back to Home')}
        </Link>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('terms_policy', 'Terms & Conditions')}</h1>
        <p className="text-sm text-gray-600 mb-8">{t('last_updated', 'Last updated')}: {new Date().toLocaleDateString()}</p>

        <div className="space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms_sec1_title', '1. Agreement to Terms')}</h2>
            <p className="mb-4">{t('terms_sec1_content', 'By accessing our website, you agree to be bound by these terms and conditions. If you disagree with any part of these terms, you may not access the service.')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms_sec2_title', '2. Intellectual Property')}</h2>
            <p className="mb-4">{t('terms_sec2_content', 'The service and its original content, features, and functionality are and will remain the exclusive property of Rotella Giacomo and its licensors.')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms_sec3_title', '3. Governing Law')}</h2>
            <p className="mb-4">{t('terms_sec3_content', 'These Terms shall be governed and construed in accordance with the laws of Italy, without regard to its conflict of law provisions.')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms_sec4_title', '4. Contact Us')}</h2>
            <p className="mb-4">
              {t('terms_sec4_content', 'If you have any questions about these Terms, please contact us at:')}{' '}
              <a href="mailto:rotellagiacomo@gmail.com" className="text-[#911c28] hover:text-[#a73535] underline font-semibold">
                rotellagiacomo@gmail.com
              </a>
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

export default TermsAndConditions;
