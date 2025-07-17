import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 mt-12 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 text-center text-gray-600 text-sm">
        <p>
          © {new Date().getFullYear()} <span className="font-semibold text-blue-600">URL Shortener</span>. All rights reserved.
        </p>
        <div className="mt-2 space-x-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">GitHub</a>
          <a href="mailto:support@example.com" className="hover:text-blue-500 transition">Contact</a>
          <a href="/terms" className="hover:text-blue-500 transition">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
