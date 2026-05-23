import { motion } from "motion/react";
import { Zap, BookOpen, Clock, Smartphone, Headphones } from "lucide-react";

export function Benefits() {
  const benefits = [
    {
      icon: Zap,
      title: "Acesso imediato",
      description: "Receba seu ebook instantaneamente após a compra"
    },
    {
      icon: BookOpen,
      title: "Conteúdo prático",
      description: "Informações diretas e aplicáveis no seu dia a dia"
    },
    {
      icon: Clock,
      title: "Leitura rápida",
      description: "Otimizado para leitura objetiva e eficiente"
    },
    {
      icon: Smartphone,
      title: "Material digital",
      description: "Acesse de qualquer dispositivo, a qualquer hora"
    },
    {
      icon: Headphones,
      title: "Suporte online",
      description: "Tire suas dúvidas com nossa equipe especializada"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Por que escolher nossos ebooks?
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Benefícios que fazem a diferença
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center p-6 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl hover:border-amber-500/50 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-2xl mb-4 shadow-lg shadow-amber-500/30">
                  <Icon className="w-8 h-8 text-slate-950" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-slate-400">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
