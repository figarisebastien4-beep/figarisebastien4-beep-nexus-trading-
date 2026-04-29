import { motion, AnimatePresence } from 'motion/react';
import { Check, Zap, Crown, X } from 'lucide-react';

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PricingModal({ isOpen, onClose }: PricingModalProps) {
  const plans = [
    {
      name: 'Gratuit',
      price: '0',
      features: ['Paper trading basique', '1 bot de trading', 'Données avec délai'],
      icon: <Zap className="w-5 h-5 text-gray-400" />,
      buttonText: 'Plan Actuel',
      buttonClass: 'bg-gray-800 text-gray-400 cursor-default',
      isPro: false,
    },
    {
      name: 'Pro',
      price: '29',
      features: [
        'Tous les bots de trading',
        'Données en temps réel',
        'RSI, MACD, indicateurs avancés',
        'Alertes de prix',
      ],
      icon: <Zap className="w-5 h-5 text-cyan-400" />,
      buttonText: 'Choisir Pro',
      buttonClass: 'bg-cyan-500 hover:bg-cyan-600 text-black',
      link: 'https://www.paypal.me/mangaforge1/29',
      isPro: true,
    },
    {
      name: 'Elite',
      price: '99',
      features: [
        'Tout le plan Pro',
        'Support prioritaire',
        'Stratégies exclusives',
        'Accès API',
      ],
      icon: <Crown className="w-5 h-5 text-cyan-400" />,
      buttonText: 'Choisir Elite',
      buttonClass: 'bg-cyan-500 hover:bg-cyan-600 text-black',
      link: 'https://www.paypal.me/mangaforge1/99',
      isPro: false,
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0f172a] border border-gray-800 w-full max-w-5xl rounded-3xl overflow-hidden relative"
              id="pricing-modal"
            >
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"
                id="close-modal-btn"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="p-8 md:p-12">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Choisissez votre forfait
                  </h2>
                  <p className="text-gray-400">
                    Optimisez vos performances avec nos outils de trading avancés.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {plans.map((plan) => (
                    <div
                      key={plan.name}
                      className={`relative flex flex-col p-8 rounded-2xl bg-[#1e293b]/50 border ${
                        plan.isPro ? 'border-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.1)]' : 'border-gray-800'
                      }`}
                      id={`plan-${plan.name.toLowerCase()}`}
                    >
                      {plan.isPro && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-500 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                          Recommandé
                        </div>
                      )}

                      <div className="flex items-center gap-3 mb-4">
                        {plan.icon}
                        <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                      </div>

                      <div className="mb-8">
                        <span className="text-4xl font-bold text-white">{plan.price}€</span>
                        <span className="text-gray-400">/mois</span>
                      </div>

                      <ul className="space-y-4 mb-8 flex-grow">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                            <Check className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {plan.link ? (
                        <a
                          href={plan.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-full py-3 rounded-full font-bold text-center transition-all transform hover:scale-[1.02] active:scale-[0.98] ${plan.buttonClass}`}
                          id={`btn-choose-${plan.name.toLowerCase()}`}
                        >
                          {plan.buttonText}
                        </a>
                      ) : (
                        <button
                          disabled
                          className={`w-full py-3 rounded-full font-bold text-center ${plan.buttonClass}`}
                          id={`btn-current-${plan.name.toLowerCase()}`}
                        >
                          {plan.buttonText}
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
