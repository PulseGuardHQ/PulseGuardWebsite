import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faPlay } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from '../../hooks/useTranslation';

const partners = [
  {
      name: 'IM Digital',
      logo: 'https://imdigital.info/logo(gray-google).png',
      url: 'https://imdigital.info',
      },
    {
      name: 'CHE',
      logo: 'https://www.che.nl/themes/custom/che/images/logos/logo.svg',
      url: 'https://www.che.nl',
    },
    {
      name: 'Arjan den Hartog',
      logo: 'https://arjandenhartog.com/favicon.ico',
      url: 'https://arjandenhartog.com',
    },
    
  ];

const Hero: React.FC = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const { t } = useTranslation();

  const playVideo = () => {
    setIsVideoPlaying(true);
    const iframe = document.getElementById('dashboard-video') as HTMLIFrameElement;
    if (iframe) {
      const currentSrc = iframe.src;
      iframe.src = currentSrc.replace('autoplay=0', 'autoplay=1');
    }
  };

  return (
    <section id="hero" className="pt-20 md:pt-32 pb-28 bg-gradient-to-br from-blue-900 via-indigo-900 to-violet-900 relative overflow-hidden" role="banner">
      {/* Enhanced background patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" aria-hidden="true"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(99,102,241,0.15),transparent_70%)]" aria-hidden="true"></div>
      
      {/* Simplified animated shapes with better positioning */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-[80px] animate-pulse" aria-hidden="true"></div>
      <div 
        className="absolute bottom-10 left-10 w-72 h-72 bg-violet-500/10 rounded-full blur-[80px] animate-pulse" 
        style={{ animationDelay: '1.5s' }}
        aria-hidden="true"
      ></div>
      
      {/* Clean container for content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <header className="lg:w-1/2 text-center lg:text-left">
            
            {/* Cleaner heading with better typography and SEO optimization */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span dangerouslySetInnerHTML={{ __html: t('heroTitle').replace('peacemaker', '<span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">peacemaker</span>') }} />
            </h1>
            
            {/* Enhanced description with LSI keywords */}
            <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
              {t('heroSubtitle')}
            </p>
            
            {/* Cleaner CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="https://pulseguard.nl/features/detailed" 
                className="btn-primary"
                aria-label={t('heroCtaPrimary') + " - Learn about PulseGuard monitoring features"}
              >
                <span className="font-semibold">{t('heroCtaPrimary')}</span>
                <FontAwesomeIcon icon={faChevronRight} className="ml-2 text-sm group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </a>
              <Link 
                to="https://app.pulseguard.nl/register" 
                className="btn-secondary"
                aria-label={t('heroCtaSecondary') + " - Start your free PulseGuard trial"}
              >
                <span className="font-semibold">{t('heroCtaSecondary')}</span>
              </Link>
            </div>
            
          
            {/* Partners section */}
            <div className="mt-12 pt-6 border-t border-white/10 max-w-xl mx-auto lg:mx-0">
              <p className="text-sm text-blue-200 mb-4 font-medium text-center lg:text-left">{t('heroTrustedBy')}</p>
              <div className="mx-auto grid max-w-lg grid-cols-3 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {partners.map((partner) => (
                  <a
                    key={partner.name}
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="col-span-1 flex justify-center opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300"
                  >
                    <div className="bg-white p-2 rounded-lg shadow-md flex items-center justify-center w-full h-12 dark:bg-gray-100">
                      <img
                        className="max-h-8 w-auto object-contain"
                        src={partner.logo}
                        alt={`${partner.name} - Trusted PulseGuard partner`}
                        loading="lazy"
                        width="120"
                        height="32"
                      />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </header>
          
          <div className="lg:w-1/2">
            {/* Cleaner browser mockup */}
            <div className="browser-mockup">
              {/* Browser header */}
              <div className="browser-header">
                <div className="browser-buttons">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="browser-address-bar w-64 flex items-center justify-center">
                    <i className="fas fa-lock text-green-400 text-xs mr-1"></i>
                    app.pulseguard.nl
                  </div>
                </div>
              </div>
              
              <div className="relative overflow-hidden" style={{ paddingTop: '56.25%' }}>
                {/* Video thumbnail overlay */}
                {!isVideoPlaying && (
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-gray-900 to-blue-900 flex items-center justify-center z-10 cursor-pointer"
                    onClick={playVideo}
                  >
                    {/* Main dashboard image */}
                    <img 
                      src="/images/dashboard.png" 
                      alt="PulseGuard Dashboard Preview" 
                      className="absolute inset-0 w-full h-full object-cover opacity-80"
                    />
                    
                    {/* Simple overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
                    
                    {/* Play button */}
                    <div className="play-button-ring absolute w-20 h-20 rounded-full border-2 border-white/40 flex items-center justify-center z-10">
                      <div className="play-button-inner absolute w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                        <FontAwesomeIcon icon={faPlay} className="text-white text-xl pl-1" />
                      </div>
                    </div>
                    
                    {/* Simple video title */}
                    <div className="absolute bottom-6 left-0 right-0 text-center px-6 z-10">
                      <div className="inline-block bg-black/30 backdrop-blur px-4 py-2 rounded-full">
                        <h3 className="text-white text-lg font-medium">Watch the demo</h3>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* YouTube iframe */}
                <iframe 
                  id="dashboard-video" 
                  src="https://www.youtube.com/embed/Vb84FkDt6Hk?rel=0&modestbranding=1&autoplay=0&enablejsapi=1&origin=https://pulseguard.nl" 
                  title="PulseGuard Dashboard Video" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen 
                  loading="lazy" 
                  className="rounded-b-2xl absolute inset-0 w-full h-full z-0"
                ></iframe>
              </div>
            </div>
            
            {/* Stats cards */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 transition-all duration-300 hover:bg-white/15">
                <div className="text-2xl font-bold text-white mb-1">99.9%</div>
                <div className="text-blue-200 text-sm">Uptime guarantee</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 transition-all duration-300 hover:bg-white/15">
                <div className="text-2xl font-bold text-white mb-1">24/7</div>
                <div className="text-blue-200 text-sm">Monitoring</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 transition-all duration-300 hover:bg-white/15">
                <div className="text-2xl font-bold text-white mb-1">5 min</div>
                <div className="text-blue-200 text-sm">Setup time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 