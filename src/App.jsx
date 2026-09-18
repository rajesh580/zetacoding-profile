import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import MouseSpotlight from './components/MouseSpotlight';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import GEOPage from './pages/GEOPage';
import ServicesPage from './pages/ServicesPage';
import AcademicMOUsPage from './pages/AcademicMOUsPage';
import CertificationsPage from './pages/CertificationsPage';
import ContactPage from './pages/ContactPage';
import LiveAIChatbotWidget from './components/LiveAIChatbotWidget';
import AccreditationsModal from './components/AccreditationsModal';
import Footer from './components/Footer';
import { initGlobalSoundListener } from './utils/soundFX';

export default function App() {
  const [certModalOpen, setCertModalOpen] = useState(false);

  useEffect(() => {
    const cleanup = initGlobalSoundListener();
    return cleanup;
  }, []);

  return (
    <Router>
      <ScrollToTop />
      {/* Ambient Cursor Spotlight */}
      <MouseSpotlight />

      <div className="min-h-screen bg-gradient-to-b from-[#130524] via-[#0d0417] to-[#0b0314] text-slate-100 flex flex-col relative selection:bg-[#72bf44] selection:text-black font-sans">
        
        {/* Global Cosmic Purple Ambient Glow Nebulae */}
        <div className="fixed -top-28 left-1/4 w-[750px] h-[750px] bg-[#7e22ce]/22 rounded-full blur-[180px] pointer-events-none -z-10" />
        <div className="fixed top-1/4 -right-20 w-[700px] h-[700px] bg-[#9333ea]/20 rounded-full blur-[180px] pointer-events-none -z-10" />
        <div className="fixed top-2/3 -left-24 w-[750px] h-[750px] bg-[#6b21a8]/22 rounded-full blur-[190px] pointer-events-none -z-10" />
        <div className="fixed -bottom-36 right-1/4 w-[850px] h-[850px] bg-[#581c87]/25 rounded-full blur-[200px] pointer-events-none -z-10" />
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#72bf44]/6 rounded-full blur-[160px] pointer-events-none -z-10" />
        <div className="fixed inset-0 cyber-grid opacity-30 pointer-events-none -z-10" />

        {/* Global Navigation Bar */}
        <Navbar />

        {/* Multi-Page Routes */}
        <main className="flex-1 relative z-10 w-full">
          <Routes>
            <Route 
              path="/" 
              element={
                <HomePage 
                  onOpenCertModal={() => setCertModalOpen(true)}
                />
              } 
            />
            <Route 
              path="/about" 
              element={
                <AboutPage 
                  onOpenCertModal={() => setCertModalOpen(true)}
                />
              } 
            />
            <Route 
              path="/products" 
              element={
                <ProductsPage />
              } 
            />
            <Route 
              path="/products/:productId" 
              element={
                <ProductDetailPage />
              } 
            />
            <Route 
              path="/geo-ai" 
              element={
                <GEOPage />
              } 
            />
            <Route 
              path="/services" 
              element={
                <ServicesPage />
              } 
            />
            <Route 
              path="/academic-mous" 
              element={
                <AcademicMOUsPage />
              } 
            />
            <Route 
              path="/certifications" 
              element={
                <CertificationsPage 
                  onOpenCertModal={() => setCertModalOpen(true)}
                />
              } 
            />
            <Route 
              path="/digital-cards" 
              element={
                <Navigate to="/products/digital-business-card" replace />
              } 
            />
            <Route 
              path="/contact" 
              element={
                <ContactPage />
              } 
            />
            <Route 
              path="*" 
              element={
                <HomePage 
                  onOpenCertModal={() => setCertModalOpen(true)}
                />
              } 
            />
          </Routes>
        </main>

        {/* High-Tech Corporate Footer */}
        <Footer 
          onOpenCertModal={() => setCertModalOpen(true)}
        />

        {/* Floating Interactive ZetaBot AI Widget */}
        <LiveAIChatbotWidget />

        {/* Accreditations & Licenses Modal */}
        <AccreditationsModal 
          isOpen={certModalOpen} 
          onClose={() => setCertModalOpen(false)}
        />

      </div>
    </Router>
  );
}
