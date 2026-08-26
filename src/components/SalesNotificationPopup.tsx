import { useState, useEffect } from 'react';
import { CheckCircle2, ShoppingBag } from 'lucide-react';

interface PurchaseNotification {
  name: string;
  gender: 'female' | 'male';
  avatarUrl: string;
  city: string;
  state: string;
  timeAgo: string;
}

// 48 completely unique people and cities across Brazil with gender-specific photos
const PURCHASES_POOL: PurchaseNotification[] = [
  {
    name: 'Fernanda Lima',
    gender: 'female',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    city: 'São Paulo',
    state: 'SP',
    timeAgo: 'há 2 minutos',
  },
  {
    name: 'Sensei Rodrigo Alencar',
    gender: 'male',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    city: 'Curitiba',
    state: 'PR',
    timeAgo: 'há 4 minutos',
  },
  {
    name: 'Mariana Souza',
    gender: 'female',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    city: 'Belo Horizonte',
    state: 'MG',
    timeAgo: 'há 1 minuto',
  },
  {
    name: 'Prof. Lucas Guimarães',
    gender: 'male',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    city: 'Rio de Janeiro',
    state: 'RJ',
    timeAgo: 'há 5 minutos',
  },
  {
    name: 'Camila Andrade',
    gender: 'female',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    city: 'Porto Alegre',
    state: 'RS',
    timeAgo: 'há 3 minutos',
  },
  {
    name: 'Mestre Anderson Silva',
    gender: 'male',
    avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80',
    city: 'Salvador',
    state: 'BA',
    timeAgo: 'há 2 minutos',
  },
  {
    name: 'Juliana Paiva',
    gender: 'female',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    city: 'Fortaleza',
    state: 'CE',
    timeAgo: 'há 6 minutos',
  },
  {
    name: 'Prof. Bruno Castilho',
    gender: 'male',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
    city: 'Brasília',
    state: 'DF',
    timeAgo: 'há 1 minuto',
  },
  {
    name: 'Renata Farias',
    gender: 'female',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    city: 'Goiânia',
    state: 'GO',
    timeAgo: 'há 3 minutos',
  },
  {
    name: 'Sensei Thiago Ramos',
    gender: 'male',
    avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80',
    city: 'Campinas',
    state: 'SP',
    timeAgo: 'há 4 minutos',
  },
  {
    name: 'Patricia Nogueira',
    gender: 'female',
    avatarUrl: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=150&auto=format&fit=crop&q=80',
    city: 'Recife',
    state: 'PE',
    timeAgo: 'há 2 minutos',
  },
  {
    name: 'Mestre Diego Martins',
    gender: 'male',
    avatarUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80',
    city: 'Florianópolis',
    state: 'SC',
    timeAgo: 'há 7 minutos',
  },
  {
    name: 'Aline Vasconcelos',
    gender: 'female',
    avatarUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&auto=format&fit=crop&q=80',
    city: 'Manaus',
    state: 'AM',
    timeAgo: 'há 3 minutos',
  },
  {
    name: 'Prof. Gabriel Fonseca',
    gender: 'male',
    avatarUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80',
    city: 'Vitória',
    state: 'ES',
    timeAgo: 'há 5 minutos',
  },
  {
    name: 'Beatriz Monteiro',
    gender: 'female',
    avatarUrl: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&auto=format&fit=crop&q=80',
    city: 'Natal',
    state: 'RN',
    timeAgo: 'há 1 minuto',
  },
  {
    name: 'Sensei Eduardo Matos',
    gender: 'male',
    avatarUrl: 'https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?w=150&auto=format&fit=crop&q=80',
    city: 'João Pessoa',
    state: 'PB',
    timeAgo: 'há 4 minutos',
  },
  {
    name: 'Larissa Peixoto',
    gender: 'female',
    avatarUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
    city: 'Cuiabá',
    state: 'MT',
    timeAgo: 'há 2 minutos',
  },
  {
    name: 'Prof. Marcelo Siqueira',
    gender: 'male',
    avatarUrl: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80',
    city: 'Santos',
    state: 'SP',
    timeAgo: 'há 6 minutos',
  },
  {
    name: 'Carolina Esteves',
    gender: 'female',
    avatarUrl: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&auto=format&fit=crop&q=80',
    city: 'Campo Grande',
    state: 'MS',
    timeAgo: 'há 3 minutos',
  },
  {
    name: 'Sensei Fábio Medeiros',
    gender: 'male',
    avatarUrl: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=150&auto=format&fit=crop&q=80',
    city: 'São José dos Campos',
    state: 'SP',
    timeAgo: 'há 1 minuto',
  },
  {
    name: 'Débora Ribeiro',
    gender: 'female',
    avatarUrl: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=150&auto=format&fit=crop&q=80',
    city: 'Londrina',
    state: 'PR',
    timeAgo: 'há 5 minutos',
  },
  {
    name: 'Prof. Gustavo Prado',
    gender: 'male',
    avatarUrl: 'https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?w=150&auto=format&fit=crop&q=80',
    city: 'Maceió',
    state: 'AL',
    timeAgo: 'há 2 minutos',
  },
  {
    name: 'Vanessa Toledo',
    gender: 'female',
    avatarUrl: 'https://images.unsplash.com/photo-1548142813-c348350df52b?w=150&auto=format&fit=crop&q=80',
    city: 'Ribeirão Preto',
    state: 'SP',
    timeAgo: 'há 4 minutos',
  },
  {
    name: 'Mestre Leonardo Dantas',
    gender: 'male',
    avatarUrl: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=150&auto=format&fit=crop&q=80',
    city: 'Teresina',
    state: 'PI',
    timeAgo: 'há 3 minutos',
  },
  {
    name: 'Flávia Mendonça',
    gender: 'female',
    avatarUrl: 'https://images.unsplash.com/photo-1509783236416-c9ad59bae472?w=150&auto=format&fit=crop&q=80',
    city: 'Sorocaba',
    state: 'SP',
    timeAgo: 'há 2 minutos',
  },
  {
    name: 'Sensei André Tavares',
    gender: 'male',
    avatarUrl: 'https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?w=150&auto=format&fit=crop&q=80',
    city: 'Aracaju',
    state: 'SE',
    timeAgo: 'há 7 minutos',
  },
  {
    name: 'Priscila Cavalcanti',
    gender: 'female',
    avatarUrl: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&auto=format&fit=crop&q=80',
    city: 'Joinville',
    state: 'SC',
    timeAgo: 'há 1 minuto',
  },
  {
    name: 'Prof. Rafael Neves',
    gender: 'male',
    avatarUrl: 'https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?w=150&auto=format&fit=crop&q=80',
    city: 'Uberlândia',
    state: 'MG',
    timeAgo: 'há 3 minutos',
  },
  {
    name: 'Tatiane Barbosa',
    gender: 'female',
    avatarUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&auto=format&fit=crop&q=80',
    city: 'Caxias do Sul',
    state: 'RS',
    timeAgo: 'há 4 minutos',
  },
  {
    name: 'Sensei Felipe Albuquerque',
    gender: 'male',
    avatarUrl: 'https://images.unsplash.com/photo-1519764622345-23439dd774f7?w=150&auto=format&fit=crop&q=80',
    city: 'Belém',
    state: 'PA',
    timeAgo: 'há 2 minutos',
  },
  {
    name: 'Sabrina Moreira',
    gender: 'female',
    avatarUrl: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=150&auto=format&fit=crop&q=80',
    city: 'Niterói',
    state: 'RJ',
    timeAgo: 'há 3 minutos',
  },
  {
    name: 'Prof. Henrique Santana',
    gender: 'male',
    avatarUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&auto=format&fit=crop&q=80',
    city: 'Maringá',
    state: 'PR',
    timeAgo: 'há 1 minuto',
  },
  {
    name: 'Carla Meireles',
    gender: 'female',
    avatarUrl: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&auto=format&fit=crop&q=80',
    city: 'Blumenau',
    state: 'SC',
    timeAgo: 'há 4 minutos',
  },
  {
    name: 'Sensei Marcos Vinicius',
    gender: 'male',
    avatarUrl: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=150&auto=format&fit=crop&q=80',
    city: 'Anápolis',
    state: 'GO',
    timeAgo: 'há 2 minutos',
  },
  {
    name: 'Luciana Guimarães',
    gender: 'female',
    avatarUrl: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=150&auto=format&fit=crop&q=80',
    city: 'Bauru',
    state: 'SP',
    timeAgo: 'há 5 minutos',
  },
  {
    name: 'Mestre Claudio Duarte',
    gender: 'male',
    avatarUrl: 'https://images.unsplash.com/photo-1528892952291-009c663ce843?w=150&auto=format&fit=crop&q=80',
    city: 'Juiz de Fora',
    state: 'MG',
    timeAgo: 'há 2 minutos',
  },
  {
    name: 'Roberta Vasquez',
    gender: 'female',
    avatarUrl: 'https://images.unsplash.com/photo-1541823709867-1b206113eafd?w=150&auto=format&fit=crop&q=80',
    city: 'Feira de Santana',
    state: 'BA',
    timeAgo: 'há 3 minutos',
  },
  {
    name: 'Prof. Vinicius Lemos',
    gender: 'male',
    avatarUrl: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=150&auto=format&fit=crop&q=80',
    city: 'Vila Velha',
    state: 'ES',
    timeAgo: 'há 4 minutos',
  },
  {
    name: 'Daniela Fontes',
    gender: 'female',
    avatarUrl: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=150&auto=format&fit=crop&q=80',
    city: 'Cascavel',
    state: 'PR',
    timeAgo: 'há 1 minuto',
  },
  {
    name: 'Sensei Matheus Zanetti',
    gender: 'male',
    avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80',
    city: 'Piracicaba',
    state: 'SP',
    timeAgo: 'há 3 minutos',
  },
  {
    name: 'Gabriela Pires',
    gender: 'female',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    city: 'Montes Claros',
    state: 'MG',
    timeAgo: 'há 6 minutos',
  },
  {
    name: 'Prof. Leandro Rossi',
    gender: 'male',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    city: 'Canoas',
    state: 'RS',
    timeAgo: 'há 2 minutos',
  },
  {
    name: 'Letícia Borges',
    gender: 'female',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    city: 'São Luís',
    state: 'MA',
    timeAgo: 'há 4 minutos',
  },
  {
    name: 'Mestre Ricardo Prado',
    gender: 'male',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
    city: 'Palmas',
    state: 'TO',
    timeAgo: 'há 1 minuto',
  },
  {
    name: 'Jéssica Antunes',
    gender: 'female',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    city: 'Franca',
    state: 'SP',
    timeAgo: 'há 3 minutos',
  },
  {
    name: 'Sensei Paulo Victor',
    gender: 'male',
    avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80',
    city: 'Caruaru',
    state: 'PE',
    timeAgo: 'há 5 minutos',
  },
  {
    name: 'Amanda Correia',
    gender: 'female',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    city: 'Jundiaí',
    state: 'SP',
    timeAgo: 'há 2 minutos',
  },
  {
    name: 'Prof. Otávio Magalhães',
    gender: 'male',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    city: 'Macapá',
    state: 'AP',
    timeAgo: 'há 4 minutos',
  },
];

export default function SalesNotificationPopup() {
  const [purchaseQueue, setPurchaseQueue] = useState<PurchaseNotification[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [imgError, setImgError] = useState(false);

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
      // When it disappears, wait 9 seconds before showing the next unique person
      nextTimer = setTimeout(() => {
        setImgError(false);
        setCurrentIndex((prev) => {
          if (purchaseQueue.length > 0 && prev + 1 < purchaseQueue.length) {
            return prev + 1;
          }
          return prev; // Never restart with duplicates once entire sequence completed
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
        {/* Person Photo with Small Verified Green Badge */}
        <div className="relative flex-shrink-0">
          {!imgError ? (
            <img
              src={currentPurchase.avatarUrl}
              alt={currentPurchase.name}
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
              className="w-12 h-12 rounded-full object-cover border-2 border-emerald-500 shadow-md ring-2 ring-emerald-100"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-base shadow-md">
              {currentPurchase.name.charAt(0)}
            </div>
          )}
          
          <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center shadow-xs">
            <CheckCircle2 className="w-3 h-3 text-white" />
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
            <ShoppingBag className="w-3 h-3 flex-shrink-0" />
            <span className="truncate">Adquiriu o Kit Completo</span>
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

