import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-yellow-100 text-gray-800 p-8 py-8">
      {/* Large Footer */}
      <div className="hidden lg:block container mx-auto max-w-screen-xl text-center">
        <div className="mb-4">
          <Image src="/assets/logo/primary.svg" alt="RealFi Logo" width={160} height={32} />
        </div>
        <div className="text-lg text-teal-600 font-bold mb-4">
          Technology that helps users unlock opportunity in emerging markets
        </div>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://youtube.com/@Real_Fi" target="_blank" rel="noopener noreferrer">
            <Image src="/assets/social/youtube.svg" alt="YouTube" width={24} height={24} />
          </a>
          <a href="https://x.com/realfi_co" target="_blank" rel="noopener noreferrer">
            <Image src="/assets/social/x.svg" alt="Twitter" width={24} height={24} />
          </a>
          <a href="https://linkedin.com/company/real-fi" target="_blank" rel="noopener noreferrer">
            <Image src="/assets/social/linkedin.svg" alt="LinkedIn" width={24} height={24} />
          </a>
        </div>
        <div className="text-sm mb-4">
          <a href="https://realfi.co/cookie-policy.pdf" className="text-teal-600 hover:text-teal-800 px-2">Cookie Policy</a>
          <a href="https://static.iohk.io/terms/iog-privacy-policy.pdf" className="text-teal-600 hover:text-teal-800 px-2">Privacy Policy</a>
          <a href="https://static.iohk.io/terms/iohktermsandconditions.pdf" className="text-teal-600 hover:text-teal-800 px-2">Terms and Conditions</a>
        </div>
        <div className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Input Output Global Inc.
        </div>
      </div>

      {/* Mobile Footer */}
      <div className="block lg:hidden container mx-auto px-4 text-center">
        <div className="mb-4 inline-block">
          <Image src="/assets/logo/primary.svg" alt="RealFi Logo" width={120} height={16} />
        </div>
        <div className="text-sm text-teal-600 font-bold mb-4">
          Unlocking opportunity in emerging markets
        </div>
        <div className="text-xs text-gray-600">
          &copy; {new Date().getFullYear()} Input Output Global Inc.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
