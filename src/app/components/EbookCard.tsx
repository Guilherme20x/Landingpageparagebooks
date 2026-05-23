import { motion } from "motion/react";
import { CheckCircle, ExternalLink } from "lucide-react";

interface EbookCardProps {
  title: string;
  description: string;
  benefits: string[];
  imageUrl: string;
  checkoutUrl: string;
  gradient: string;
}

export function EbookCard({ title, description, benefits, imageUrl, checkoutUrl, gradient }: EbookCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
      className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

      <div className="relative h-64 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
      </div>

      <div className="relative p-8">
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-slate-300 mb-6 leading-relaxed">{description}</p>

        <div className="space-y-3 mb-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 text-slate-200"
            >
              <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
              <span>{benefit}</span>
            </motion.div>
          ))}
        </div>

        <a
          href={checkoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-slate-950 px-6 py-3 rounded-xl font-semibold shadow-lg shadow-amber-500/30 transition-all duration-300 flex items-center justify-center gap-2"
          >
            Comprar Agora
            <ExternalLink className="w-4 h-4" />
          </motion.button>
        </a>
      </div>
    </motion.div>
  );
}
