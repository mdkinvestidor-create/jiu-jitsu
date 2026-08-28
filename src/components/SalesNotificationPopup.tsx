import { useState, useEffect } from 'react';
import { CheckCircle2, ShoppingBag, ShieldCheck } from 'lucide-react';

interface PurchaseNotification {
  name: string;
  city: string;
  state: string;
  timeAgo: string;
}

// 48 unique buyers and cities across Brazil
const PURCHASES_POOL: PurchaseNotification[] = [
  { name: 'Fernanda Lima', city: 'São Paulo', state: 'SP', timeAgo: 'há 2 minutos' },
  { name: 'Sensei Rodrigo Alencar', city: 'Curitiba', state: 'PR', timeAgo: 'há 4 minutos' },
  { name: 'Mariana Souza', city: 'Belo Horizonte', state: 'MG', timeAgo: 'há 1 minuto' },
  { name: 'Prof. Lucas Guimarães', city: 'Rio de Janeiro', state: 'RJ', timeAgo: 'há 5 minutos' },
  { name: 'Camila Andrade', city: 'Porto Alegre', state: 'RS', timeAgo: 'há 3 minutos' },
  { name: 'Mestre Anderson Silva', city: 'Salvador', state: 'BA', timeAgo: 'há 2 minutos' },
  { name: 'Juliana Paiva', city: 'Fortaleza', state: 'CE', timeAgo: 'há 6 minutos' },
  { name: 'Prof. Bruno Castilho', city: 'Brasília', state: 'DF', timeAgo: 'há 1 minuto' },
  { name: 'Renata Farias', city: 'Goiânia', state: 'GO', timeAgo: 'há 3 minutos' },
  { name: 'Sensei Thiago Ramos', city: 'Campinas', state: 'SP', timeAgo: 'há 4 minutos' },
  { name: 'Patricia Nogueira', city: 'Recife', state: 'PE', timeAgo: 'há 2 minutos' },
  { name: 'Mestre Diego Martins', city: 'Florianópolis', state: 'SC', timeAgo: 'há 7 minutos' },
  { name: 'Aline Vasconcelos', city: 'Manaus', state: 'AM', timeAgo: 'há 3 minutos' },
  { name: 'Prof. Gabriel Fonseca', city: 'Vitória', state: 'ES', timeAgo: 'há 5 minutos' },
  { name: 'Beatriz Monteiro', city: 'Natal', state: 'RN', timeAgo: 'há 1 minuto' },
  { name: 'Sensei Eduardo Matos', city: 'João Pessoa', state: 'PB', timeAgo: 'há 4 minutos' },
  { name: 'Larissa Peixoto', city: 'Cuiabá', state: 'MT', timeAgo: 'há 2 minutos' },
  { name: 'Prof. Marcelo Siqueira', city: 'Santos', state: 'SP', timeAgo: 'há 6 minutos' },
  { name: 'Carolina Esteves', city: 'Campo Grande', state: 'MS', timeAgo: 'há 3 minutos' },
  { name: 'Sensei Fábio Medeiros', city: 'São José dos Campos', state: 'SP', timeAgo: 'há 1 minuto' },
  { name: 'Débora Ribeiro', city: 'Londrina', state: 'PR', timeAgo: 'há 5 minutos' },
  { name: 'Prof. Gustavo Prado', city: 'Maceió', state: 'AL', timeAgo: 'há 2 minutos' },
  { name: 'Vanessa Toledo', city: 'Ribeirão Preto', state: 'SP', timeAgo: 'há 4 minutos' },
  { name: 'Mestre Leonardo Dantas', city: 'Teresina', state: 'PI', timeAgo: 'há 3 minutos' },
  { name: 'Flávia Mendonça', city: 'Sorocaba', state: 'SP', timeAgo: 'há 2 minutos' },
  { name: 'Sensei André Tavares', city: 'Aracaju', state: 'SE', timeAgo: 'há 7 minutos' },
  { name: 'Priscila Cavalcanti', city: 'Joinville', state: 'SC', timeAgo: 'há 1 minuto' },
  { name: 'Prof. Rafael Neves', city: 'Uberlândia', state: 'MG', timeAgo: 'há 3 minutos' },
  { name: 'Tatiane Barbosa', city: 'Caxias do Sul', state: 'RS', timeAgo: 'há 4 minutos' },
  { name: 'Sensei Felipe Albuquerque', city: 'Belém', state: 'PA', timeAgo: 'há 2 minutos' },
  { name: 'Sabrina Moreira', city: 'Niterói', state: 'RJ', timeAgo: 'há 3 minutos' },
  { name: 'Prof. Henrique Santana', city: 'Maringá', state: 'PR', timeAgo: 'há 1 minuto' },
  { name: 'Carla Meireles', city: 'Blumenau', state: 'SC', timeAgo: 'há 4 minutos' },
  { name: 'Sensei Marcos Vinicius', city: 'Anápolis', state: 'GO', timeAgo: 'há 2 minutos' },
  { name: 'Luciana Guimarães', city: 'Bauru', state: 'SP', timeAgo: 'há 5 minutos' },
  { name: 'Mestre Claudio Duarte', city: 'Juiz de Fora', state: 'MG', timeAgo: 'há 2 minutos' },
  { name: 'Roberta Vasquez', city: 'Feira de Santana', state: 'BA', timeAgo: 'há 3 minutos' },
  { name: 'Prof. Vinicius Lemos', city: 'Vila Velha', state: 'ES', timeAgo: 'há 4 minutos' },
  { name: 'Daniela Fontes', city: 'Cascavel', state: 'PR', timeAgo: 'há 1 minuto' },
  { name: 'Sensei Matheus Zanetti', city: 'Piracicaba', state: 'SP', timeAgo: 'há 3 minutos' },
  { name: 'Gabriela Pires', city: 'Montes Claros', state: 'MG', timeAgo: 'há 6 minutos' },
  { name: 'Prof. Leandro Rossi', city: 'Canoas', state: 'RS', timeAgo: 'há 2 minutos' },
  { name: 'Letícia Borges', city: 'São Luís', state: 'MA', timeAgo: 'há 4 minutos' },
  { name: 'Mestre Ricardo Prado', city: 'Palmas', state: 'TO', timeAgo: 'há 1 minuto' },
  { name: 'Jéssica Antunes', city: 'Franca', state: 'SP', timeAgo: 'há 3 minutos' },
  { name: 'Sensei Paulo Victor', city: 'Caruaru', state: 'PE', timeAgo: 'há 5 minutos' },
  { name: 'Amanda Correia', city: 'Jundiaí', state: 'SP', timeAgo: 'há 2 minutos' },
  { name: 'Prof. Otávio Magalhães', city: 'Macapá', state: 'AP', timeAgo: 'há 4 minutos' },
];

export default function SalesNotificationPopup() {
  const [purchaseQueue, setPurchaseQueue] = useState<PurchaseNotification[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Initialize a randomized queue on client-side mount without repeating
  useEffect(() => {
    // Shuffle the unique pool
    const shuffled = [...PURCHASES_POOL].sort(() => Math.random() - 0.5);
    setPurchaseQueue(shuffled);
    setCurrentIndex(0);
  }, []);

  useEffect(() => {
    // 1. Appears shortly after user enters (1.5s initial delay)
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    return () => clearTimeout(initialTimer);
  }, []);

  useEffect(() => {
    let hideTimer: NodeJS.Timeout;
    let nextTimer: NodeJS.Timeout;

    if (isVisible) {
      // Keep visible on screen for 4.8 seconds
      hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 4800);
    } else {
      // When it disappears, wait 9 seconds before showing the next unique purchase
      nextTimer = setTimeout(() => {
        setCurrentIndex((prev) => {
          if (purchaseQueue.length > 0 && prev + 1 < purchaseQueue.length) {
            return prev + 1;
          }
          return prev;
        });
        setIsVisible(true);
      }, 9000);
    }

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(nextTimer);
    };
  }, [isVisible, purchaseQueue.length]);

  const currentPurchase = purchaseQueue[currentIndex] || PURCHASES_POOL[0];

  if (!currentPurchase) return null;

  return (
    <div
      id="sales-notification-popup"
      className={`fixed top-12 left-4 z-40 max-w-[350px] sm:max-w-[390px] w-full transition-all duration-500 ease-out transform pointer-events-none ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 -translate-y-6 scale-95 pointer-events-none'
      }`}
    >
      <div className="bg-white/95 backdrop-blur-md border border-emerald-500/40 rounded-2xl p-3 shadow-2xl flex items-center gap-3 text-slate-800 pointer-events-auto">
        {/* Shopping / Purchase Icon Badge */}
        <div className="relative flex-shrink-0">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 text-white flex items-center justify-center shadow-lg border border-emerald-400/40">
            <ShoppingBag className="w-6 h-6 text-white drop-shadow-sm" />
          </div>
          
          <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center shadow-xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-white" />
          </span>
        </div>

        {/* Purchase Info Text */}
        <div className="flex-1 min-w-0 text-left">
          <div className="flex items-center justify-between gap-1">
            <p className="text-xs font-black text-slate-900 truncate">
              {currentPurchase.name}
            </p>
            <span className="text-[10px] text-slate-400 font-semibold whitespace-nowrap">
              {currentPurchase.timeAgo}
            </span>
          </div>

          <p className="text-[11px] text-emerald-700 font-bold leading-tight mt-0.5 flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 flex-shrink-0 text-emerald-600" />
            <span className="truncate">Compra Confirmada • Kit Completo</span>
          </p>

          <p className="text-[10px] text-slate-500 font-medium flex items-center gap-1 mt-0.5 truncate">
            <span>📍</span>
            <span>{currentPurchase.city} - {currentPurchase.state}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

