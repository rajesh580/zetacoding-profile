import React from 'react';
import AboutJourney from '../components/AboutJourney';

export default function AboutPage({ onOpenCertModal }) {
  return (
    <div className="pt-8 sm:pt-12 pb-20 text-slate-100 w-full">
      {/* Main Content */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <AboutJourney onOpenCertModal={onOpenCertModal} />
      </div>
    </div>
  );
}
