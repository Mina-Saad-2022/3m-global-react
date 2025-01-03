import React, { useEffect } from 'react';

const ScrollToTopAndPreloader = () => {
  // Scroll to Top Functionality
  useEffect(() => {
    const scrollToTop = document.getElementById('scroll-top');
    const handleScroll = () => {
      if (window.scrollY > 300) {
        scrollToTop.style.display = 'flex';
      } else {
        scrollToTop.style.display = 'none';
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Preloader Effect
  useEffect(() => {
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
      if (preloader) {
        preloader.style.display = 'none';
      }
    });
  }, []);

  return (
    <>
      {/* Scroll to Top Button */}
      <a
        href="#"
        id="scroll-top"
        className="scroll-top d-flex align-items-center justify-content-center"
        onClick={scrollToTop}
        style={{ display: 'none' }}
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>

      {/* Preloader */}
      <div id="preloader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default ScrollToTopAndPreloader;
