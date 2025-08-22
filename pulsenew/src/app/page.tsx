"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Linkedin, Github, Instagram, Twitter, Check } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { GridBackground } from "@/components/GridBackground";

export default function Home() {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-white dark:bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full px-4 py-20 text-center overflow-hidden bg-white dark:bg-black min-h-screen flex items-center">
        <GridBackground onHoverChange={setIsHovered} />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
        <div className="relative z-20 max-w-4xl mx-auto w-full">
          <h1
            className={`text-[61px] font-bold leading-[65px] tracking-[-1.921px] mb-6 transition-all duration-300 ${
              isHovered
                ? "bg-gradient-to-b from-blue-600 to-purple-600 bg-clip-text text-transparent"
                : "text-black dark:text-white"
            }`}
          >
            {t('heroTitle')}
          </h1>
          <p className="text-2xl font-medium text-gray-600 dark:text-gray-300 tracking-[-0.42px] mb-12">
            {t('homeHeroSubtitle')}
          </p>

          {/* Action buttons */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <a
              href="mailto:info@pulseguard.nl"
              className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:transform hover:scale-105 flex items-center gap-3"
            >
              {t('requestDemo')}
              <span className="text-xl">→</span>
            </a>
          </div>

          {/* Feature List */}
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 mb-12 backdrop-blur-sm">
            {/* Mobile Layout */}
            <div className="md:hidden space-y-3">
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">5 monitors for <strong>free</strong></span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">5+ integrations</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-red-500 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">Real-time alerts</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-purple-500 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">Public status pages</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">AI insights</span>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full">
                  <Check className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">5 monitors for <strong>free</strong></span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                  <Check className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">5+ integrations</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-full">
                  <Check className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">Real-time alerts</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full">
                  <Check className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">Public status pages</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-full">
                  <Check className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">AI insights</span>
              </div>
            </div>
          </div>

          {/* Heartbeat graphic */}
          <div className="relative z-10 flex justify-center mb-16">
            <div className="animate-pulse-continuous">
              <Image
                src="/assets/heartbeat.svg"
                alt="Heartbeat monitor"
                width={1000}
                height={120}
                className="max-w-full h-auto dark:invert dark:brightness-0"
              />
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-8">
            <a href="https://www.linkedin.com/company/pulseguardnl" className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://x.com/pulseguard_hq" className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white transition-all duration-300 hover:scale-110" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/pulseguard_/" className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:bg-pink-100 dark:hover:bg-pink-900/30 hover:text-pink-600 dark:hover:text-pink-400 transition-all duration-300 hover:scale-110" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://github.com/pulseguardhq" className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white transition-all duration-300 hover:scale-110" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Trusted by section */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <div className="border-t border-gray-200 dark:border-gray-700 mb-8"></div>
        <p className="text-center text-black dark:text-foreground font-medium mb-8">{t('heroTrustedBy')}</p>
        <div className="flex justify-center items-center gap-12 flex-wrap">
          <div className="flex items-center justify-center h-16" title="IM Digital">
            <Image 
              src="https://imdigital.info/logo(gray-google).png" 
              alt="IM Digital" 
              width={120}
              height={48}
              className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
              unoptimized
            />
          </div>
          <div className="flex items-center justify-center h-16" title="CHE">
            <Image 
              src="https://www.che.nl/themes/custom/che/images/logos/logo.svg" 
              alt="CHE" 
              width={120}
              height={48}
              className="h-12 opacity-60 hover:opacity-100 transition-opacity"
              unoptimized
            />
          </div>
          <div className="flex items-center justify-center h-16" title="Arjan den Hartog">
            <Image 
              src="https://arjandenhartog.com/favicon.ico" 
              alt="Arjan den Hartog" 
              width={48}
              height={48}
              className="h-12 opacity-60 hover:opacity-100 transition-opacity"
              unoptimized
            />
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8"></div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {/* PulseGuard */}
          <Link href="/guard" className="bg-[#f6f5f4] dark:bg-secondary rounded-xl p-6 h-[181px] hover:shadow-lg transition-all duration-300 group">
            <div className="mb-6">
              <div className="w-8 h-8 bg-[#fff6d6] rounded-md flex items-center justify-center mb-4">
                <Image
                  src="/assets/pulseguard-logo.svg"
                  alt="PulseGuard"
                  width={20}
                  height={20}
                />
              </div>
              <h3 className="text-[19.688px] font-bold text-black dark:text-foreground tracking-[-0.236px] group-hover:text-blue-600 transition-colors">
                PulseGuard
              </h3>
            </div>
            <p className="text-[13.5px] text-black dark:text-muted-foreground leading-[19px] tracking-[0.101px]">
              {t('homeGuardDesc')}
            </p>
          </Link>

          {/* PulseFiles */}
          <Link href="/files" className="bg-[#f6f5f4] dark:bg-secondary rounded-xl p-6 h-[181px] hover:shadow-lg transition-all duration-300 group">
            <div className="mb-6">
              <div className="w-8 h-8 bg-[#fce9e8] rounded-md flex items-center justify-center mb-4">
                <Image
                  src="/assets/files-icon.svg"
                  alt="PulseFiles"
                  width={20}
                  height={20}
                />
              </div>
              <h3 className="text-[19.375px] font-bold text-black dark:text-foreground tracking-[-0.236px] group-hover:text-blue-600 transition-colors">
                PulseFiles
              </h3>
            </div>
            <p className="text-[13.5px] text-black dark:text-muted-foreground leading-[19px] tracking-[0.101px]">
              {t('homeFilesDesc')}
            </p>
          </Link>

          {/* PulseCRM */}
          <Link href="/crm" className="bg-[#f6f5f4] dark:bg-secondary rounded-xl p-6 h-[181px] hover:shadow-lg transition-all duration-300 group">
            <div className="mb-6">
              <div className="w-8 h-8 bg-[#e2ecf3] rounded-md flex items-center justify-center mb-4">
                <Image
                  src="/assets/crm-icon.svg"
                  alt="PulseCRM"
                  width={20}
                  height={20}
                />
              </div>
              <h3 className="text-[19.688px] font-bold text-black dark:text-foreground tracking-[-0.236px] group-hover:text-blue-600 transition-colors">
                PulseCRM
              </h3>
            </div>
            <p className="text-[13.5px] text-black dark:text-muted-foreground leading-[19px] tracking-[0.101px]">
              {t('homeCrmDesc')}
            </p>
          </Link>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4">
        <div className="bg-[#F6F5F4] dark:bg-secondary rounded-xl p-8">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/assets/security-icon.svg"
                alt="Monitor icon"
                width={26}
                height={26}
              />
            </div>
            <h2 className="text-[18px] font-bold text-black dark:text-foreground tracking-[-0.13px] mb-4">
              {t('homeSection1Title')}
            </h2>
            <p className="text-base text-[#121212] dark:text-muted-foreground tracking-[0.008px] leading-[23px] max-w-[508px]">
              {t('homeSection1Desc')}
            </p>
          </div>

          {/* Dashboard mockup */}
          <div className="flex justify-center">
            <div className="w-full max-w-[956px] aspect-[956/493] bg-white dark:bg-card rounded-xl border border-black/10 dark:border-border shadow-sm overflow-hidden">
              <Image
                src="/assets/pulsedashboard.png"
                alt="Dashboard Preview"
                width={3801}
                height={1914}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Domain Information Section */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4">
        <div className="bg-[#F6F5F4] dark:bg-secondary rounded-xl p-8">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/assets/security-icon.svg"
                alt="Domain info icon"
                width={26}
                height={26}
              />
            </div>
            <h2 className="text-[18px] font-bold text-black dark:text-foreground tracking-[-0.13px] mb-4">
              {t('homeSection2Title')}
            </h2>
            <p className="text-base text-[#121212] dark:text-muted-foreground tracking-[0.008px] leading-[23px] max-w-[508px]">
              {t('homeSection2Desc')}
            </p>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-[956px] aspect-[956/493] bg-white dark:bg-card rounded-xl border border-black/10 dark:border-border shadow-sm overflow-hidden">
              <Image
                src="/assets/website-monitoring.png"
                alt="Website monitoring preview"
                width={956}
                height={493}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* PulseAI Section */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4">
        <div className="bg-[#F6F5F4] dark:bg-secondary rounded-xl p-8">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/assets/security-icon.svg"
                alt="AI icon"
                width={26}
                height={26}
              />
            </div>
            <h2 className="text-[18px] font-bold text-black dark:text-foreground tracking-[-0.13px] mb-4">
              {t('homeAiTitle')}
            </h2>
            <p className="text-base text-[#121212] dark:text-muted-foreground tracking-[0.008px] leading-[23px] max-w-[508px]">
              {t('homeAiDesc')}
            </p>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-[956px] aspect-[956/493] bg-white dark:bg-card rounded-xl border border-black/10 dark:border-border shadow-sm overflow-hidden">
              <Image
                src="/assets/pulseai.png"
                alt="PulseAI preview"
                width={956}
                height={493}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        </div>
      </section>

    </div>
  );
}
