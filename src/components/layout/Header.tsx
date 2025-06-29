import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faStar, faDesktop, faTag, faUsers, faUserPlus, faArrowRight, faBars, faTimes, faSun, faMoon, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { useDarkMode } from '../../context/DarkModeContext';
import { useTranslation } from '../../hooks/useTranslation';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { t } = useTranslation();

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-800/50 shadow-sm ${scrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20 px-4 md:px-0">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center group transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center justify-center h-12 w-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-md group-hover:shadow-blue-500/30 mr-3 group-hover:-rotate-6 transition-all duration-300">
                <svg className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">PulseGuard</span>
            </Link>
          </div>
          
          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
            <div className="bg-gray-100/80 dark:bg-gray-800/80 rounded-full px-1.5 py-1.5 flex items-center space-x-1 backdrop-blur-sm">
              <Link to="/" className="nav-link group px-4 py-2 hover:bg-white dark:hover:bg-gray-700 rounded-full">
                <span className="font-medium">{t('navigation')}</span>
                <span className="nav-link-indicator"></span>
              </Link>
              <Link to="/features" className="nav-link group px-4 py-2 hover:bg-white dark:hover:bg-gray-700 rounded-full">
                <span className="font-medium">{t('features')}</span>
                <span className="nav-link-indicator"></span>
              </Link>
              <Link to="/app" className="nav-link group px-4 py-2 hover:bg-white dark:hover:bg-gray-700 rounded-full">
                <span className="font-medium">{t('app')}</span>
                <span className="nav-link-indicator"></span>
              </Link>
              <Link to="/pricing" className="nav-link group px-4 py-2 hover:bg-white dark:hover:bg-gray-700 rounded-full">
                <span className="font-medium">{t('pricing')}</span>
                <span className="nav-link-indicator"></span>
              </Link>
              <Link to="/team" className="nav-link group px-4 py-2 hover:bg-white dark:hover:bg-gray-700 rounded-full">
                <span className="font-medium">{t('team')}</span>
                <span className="nav-link-indicator"></span>
              </Link>
              <Link to="/status" className="nav-link group px-4 py-2 hover:bg-white dark:hover:bg-gray-700 rounded-full">
                <span className="font-medium">{t('status')}</span>
                <span className="nav-link-indicator"></span>
              </Link>
            </div>
          </nav>
          
          {/* Action Buttons - Right Side */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Dark Mode Toggle */}
            <button 
              onClick={toggleDarkMode}
              className="flex items-center justify-center p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors bg-gray-100 dark:bg-gray-800 rounded-full"
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} className="text-blue-500" />
            </button>
            
            <Link to="https://app.pulseguard.nl" className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full group hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
              <span className="relative">{t('dashboard')}</span>
              <FontAwesomeIcon icon={faArrowRight} className="text-xs ml-1.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          {/* Mobile Menu Toggle */}
          <div className="flex items-center md:hidden">
            {/* Dark Mode Toggle for Mobile */}
            <button 
              onClick={toggleDarkMode}
              className="flex items-center justify-center p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors bg-gray-100 dark:bg-gray-800 rounded-full mr-2"
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} className="text-blue-500" />
            </button>
          
            <Link to="https://app.pulseguard.nl" className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full group hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 mr-2">
              <span className="relative">{t('dashboard')}</span>
              <FontAwesomeIcon icon={faArrowRight} className="text-xs ml-1.5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center justify-center h-10 w-10 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg focus:outline-none"
            >
              <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} className="text-xl" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white dark:bg-gray-800 shadow-2xl absolute top-full left-0 right-0 border-t border-gray-200 dark:border-gray-700 rounded-b-2xl overflow-hidden`}>
        <div className="py-3 px-4 space-y-2 max-h-[80vh] overflow-y-auto">
          <Link to="/" className="mobile-nav-link flex items-center py-3 px-4 rounded-xl group" onClick={() => setMobileMenuOpen(false)}>
            <div className="h-8 w-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-3">
              <FontAwesomeIcon icon={faHome} className="text-blue-500" />
            </div>
            <span className="font-medium">{t('navigation')}</span>
          </Link>
          
          <Link to="/features" className="mobile-nav-link flex items-center py-3 px-4 rounded-xl group" onClick={() => setMobileMenuOpen(false)}>
            <div className="h-8 w-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center mr-3">
              <FontAwesomeIcon icon={faStar} className="text-indigo-500" />
            </div>
            <span className="font-medium">{t('features')}</span>
          </Link>
          
          <Link to="/app" className="mobile-nav-link flex items-center py-3 px-4 rounded-xl group" onClick={() => setMobileMenuOpen(false)}>
            <div className="h-8 w-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mr-3">
              <FontAwesomeIcon icon={faDesktop} className="text-purple-500" />
            </div>
            <span className="font-medium">{t('app')}</span>
          </Link>
          
          <Link to="/pricing" className="mobile-nav-link flex items-center py-3 px-4 rounded-xl group" onClick={() => setMobileMenuOpen(false)}>
            <div className="h-8 w-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mr-3">
              <FontAwesomeIcon icon={faTag} className="text-green-500" />
            </div>
            <span className="font-medium">{t('pricing')}</span>
          </Link>
          
          <Link to="/team" className="mobile-nav-link flex items-center py-3 px-4 rounded-xl group" onClick={() => setMobileMenuOpen(false)}>
            <div className="h-8 w-8 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center mr-3">
              <FontAwesomeIcon icon={faUsers} className="text-amber-500" />
            </div>
            <span className="font-medium">{t('team')}</span>
          </Link>
          
          <Link to="/status" className="mobile-nav-link flex items-center py-3 px-4 rounded-xl group" onClick={() => setMobileMenuOpen(false)}>
            <div className="h-8 w-8 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center mr-3">
              <FontAwesomeIcon icon={faChartLine} className="text-teal-500" />
            </div>
            <span className="font-medium">{t('status')}</span>
          </Link>
          
          <Link to="https://app.pulseguard.nl/register" className="mobile-nav-link flex items-center py-3 px-4 rounded-xl group" onClick={() => setMobileMenuOpen(false)}>
            <div className="h-8 w-8 bg-sky-100 dark:bg-sky-900/30 rounded-lg flex items-center justify-center mr-3">
              <FontAwesomeIcon icon={faUserPlus} className="text-sky-500" />
            </div>
            <span className="font-medium">{t('register')}</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header; 