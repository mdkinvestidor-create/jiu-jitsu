import { useState } from 'react';
import PromoBanner from './components/PromoBanner';
import HeroSection from './components/HeroSection';
import ProductCarouselSection from './components/ProductCarouselSection';
import FeaturesSection from './components/FeaturesSection';
import TargetAudienceSection from './components/TargetAudienceSection';
import FloatingImagesSection from './components/FloatingImagesSection';
import BonusSection from './components/BonusSection';
import PricingSection from './components/PricingSection';
import GuaranteeSection from './components/GuaranteeSection';
import CheckoutModal from './components/CheckoutModal';
import SpecialOfferModal from './components/SpecialOfferModal';
import SalesNotificationPopup from './components/SalesNotificationPopup';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSpecialOfferOpen, setIsSpecialOfferOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'basic' | 'premium' | 'special_offer'>('premium');

  const scrollToPricing = () => {
    const pricingElem = document.getElementById('planos');
    if (pricingElem) {
      pricingElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      setSelectedPlan('premium');
      setIsModalOpen(true);
    }
  };

  const handleSelectPlan = (plan: 'basic' | 'premium') => {
    if (plan === 'basic') {
      // Quando o usuário clica em "ESCOLHER KIT BÁSICO", abre o popup com a super oferta do Kit Completo por 29,90
      setIsSpecialOfferOpen(true);
    } else {
      setSelectedPlan('premium');
      setIsModalOpen(true);
    }
  };

  const handleAcceptSpecialOffer = () => {
    setIsSpecialOfferOpen(false);
    setSelectedPlan('special_offer');
    setIsModalOpen(true);
  };

  const handleDeclineToBasic = () => {
    setIsSpecialOfferOpen(false);
    setSelectedPlan('basic');
    setIsModalOpen(true);
  };

  return (
    <div id="landing-page-root" className="min-h-screen bg-white flex flex-col font-sans selection:bg-[#0057d9] selection:text-white pt-[36px] sm:pt-[40px]">
      {/* Fixed Top Promo Banner */}
      <PromoBanner />

      {/* Hero Section */}
      <HeroSection onCtaClick={scrollToPricing} />

      {/* Prévia do Produto com Carrossel Automático (Fundo Branco, 9x16 Duplo) */}
      <ProductCarouselSection />

      {/* Para Quem É? */}
      <TargetAudienceSection />

      {/* Prints e Provas Sociais com Bordas Azuis */}
      <FloatingImagesSection />

      {/* Bônus Exclusivos */}
      <BonusSection onCtaClick={scrollToPricing} />

      {/* O Que Você Vai Receber? */}
      <FeaturesSection />

      {/* Garantia Incondicional 7 Dias */}
      <GuaranteeSection />

      {/* Invista Na Qualidade Das Suas Aulas (Preços & Timer) */}
      <PricingSection onSelectPlan={handleSelectPlan} />

      {/* Special Offer / Downsell Modal for Basic Plan selection (R$ 29,90) */}
      <SpecialOfferModal
        isOpen={isSpecialOfferOpen}
        onClose={() => setIsSpecialOfferOpen(false)}
        onAcceptOffer={handleAcceptSpecialOffer}
        onDeclineToBasic={handleDeclineToBasic}
      />

      {/* Checkout / Acquisition Modal */}
      <CheckoutModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        plan={selectedPlan}
      />

      {/* Real-time Sales Notification Popups */}
      <SalesNotificationPopup />
    </div>
  );
}
