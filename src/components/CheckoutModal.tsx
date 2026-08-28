import { useState, type FormEvent } from 'react';
import { X, CheckCircle2, ShieldCheck, Lock, Sparkles, QrCode, CreditCard, ArrowRight, Download } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: 'basic' | 'premium' | 'special_offer';
}

export default function CheckoutModal({ isOpen, onClose, plan }: CheckoutModalProps) {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  let price = 'R$ 37,90';
  let planTitle = 'KIT COMPLETO 🌟 (+500 Dinâmicas + 3 Bônus)';

  if (plan === 'basic') {
    price = 'R$ 10,00';
    planTitle = 'Plano Completo (+500 Dinâmicas)';
  } else if (plan === 'special_offer') {
    price = 'R$ 21,90';
    planTitle = 'KIT COMPLETO VIP 🌟 (Oferta Especial + 3 Bônus)';
  }

  const handleCheckout = (e: FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setStep('success');
    }, 1200);
  };

  const handleReset = () => {
    setStep('form');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 text-slate-800 relative">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={handleReset}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full p-2 transition-colors z-10 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'form' ? (
          <div>
            {/* Header */}
            <div className="bg-gradient-to-r from-[#002f87] to-[#0057d9] text-white p-6">
              <span className="text-[10px] font-black bg-amber-400 text-slate-950 px-2.5 py-0.5 rounded-full uppercase tracking-wider inline-flex items-center gap-1 mb-2">
                <Sparkles className="w-3 h-3" /> Checkout Seguro
              </span>
              <h3 className="text-xl sm:text-2xl font-black">{planTitle}</h3>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl font-black text-amber-300">{price}</span>
                <span className="text-xs text-blue-100 font-semibold uppercase">Pagamento Único • Acesso Vitalício</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleCheckout} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Nome Completo
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Sensei Marcos Silva"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0057d9]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Seu Melhor E-mail
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="seuemail@exemplo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0057d9]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    WhatsApp (com DDD)
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(11) 99999-9999"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0057d9]"
                  />
                </div>
              </div>

              {/* Payment Method Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Forma de Pagamento
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('pix')}
                    className={`py-2.5 px-3 rounded-xl border flex items-center justify-center gap-2 text-xs font-bold transition-all cursor-pointer ${
                      paymentMethod === 'pix'
                        ? 'border-[#0057d9] bg-blue-50/80 text-[#0057d9]'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <QrCode className="w-4 h-4" />
                    <span>PIX (Acesso Imediato)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`py-2.5 px-3 rounded-xl border flex items-center justify-center gap-2 text-xs font-bold transition-all cursor-pointer ${
                      paymentMethod === 'card'
                        ? 'border-[#0057d9] bg-blue-50/80 text-[#0057d9]'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>Cartão de Crédito</span>
                  </button>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-[#16a34a] hover:bg-[#15803d] text-white font-extrabold text-base py-4 px-6 rounded-xl uppercase tracking-wider shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer mt-4"
              >
                {isProcessing ? (
                  <span>Processando Pedido...</span>
                ) : (
                  <>
                    <span>FINALIZAR COMPRA POR {price}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              {/* Trust footer */}
              <div className="flex items-center justify-center gap-4 text-[10px] text-slate-500 font-semibold pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Compra 100% Segura
                </span>
                <span className="flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-blue-600" /> Criptografia 256 bits
                </span>
              </div>
            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-black text-slate-900">
              Parabéns, {name || 'Sensei'}!
            </h3>
            <p className="text-sm text-slate-600">
              Seu pedido para o <strong>{planTitle}</strong> foi aprovado com sucesso!
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 text-left text-xs space-y-1.5 text-blue-900">
              <div className="font-bold text-blue-800 text-sm">✅ O que acontece agora:</div>
              <div>1. Enviamos os dados de acesso para <strong>{email || 'seu e-mail'}</strong>.</div>
              <div>2. Você também receberá uma notificação direta no seu WhatsApp <strong>{phone || 'cadastrado'}</strong>.</div>
              <div>3. Você já pode baixar os PDFs e fichas das dinâmicas.</div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={handleReset}
                className="w-full bg-[#0057d9] hover:bg-[#0047ba] text-white font-extrabold text-sm py-3.5 px-6 rounded-xl uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Download className="w-4 h-4" />
                <span>ACESSAR MATERIAL AGORA</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
