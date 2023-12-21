'use client';

import '@wevisdemo/ui/styles/cookie-consent.css';
import { initMsClarity } from '@/utils/msClarity';
import WvCookieConsent from '@wevisdemo/ui/react/cookie-consent';

export default function Consent() {
  const cookieOptions = ['Functionality', 'Performance', 'Advertising'];

  const onCookieAccept = (option: any) => {
    if (option.Performance) initMsClarity();
  };

  return (
    <WvCookieConsent
      policyUrl="https://wevis.info/cookies_1-3/"
      cookieOptions={cookieOptions}
      onAccept={onCookieAccept}
    />
  );
}
