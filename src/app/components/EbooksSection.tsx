import { EbookCard } from "./EbookCard";

export function EbooksSection() {
  const ebooks = [
    {
      title: "Pare de Procrastinar Agora",
      description: "Aprenda técnicas práticas para vencer a procrastinação, aumentar seu foco e se tornar mais produtivo no dia a dia.",
      benefits: [
        "Mais disciplina",
        "Mais produtividade",
        "Melhor gestão do tempo",
        "Técnicas práticas e rápidas"
      ],
      imageUrl: "https://images.unsplash.com/photo-1587522384446-64daf3e2689a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxwcm9kdWN0aXZpdHklMjBmb2N1cyUyMHdvcmtzcGFjZSUyMG1pbmltYWxpc3R8ZW58MXx8fHwxNzc5NTU5NTY2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      checkoutUrl: "https://sun.eduzz.com/R9JXEB2Z0X",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      title: "Emagrecimento Inteligente",
      description: "Descubra estratégias simples para emagrecer de forma saudável, melhorar sua alimentação e conquistar mais autoestima.",
      benefits: [
        "Emagrecimento saudável",
        "Mais energia",
        "Alimentação equilibrada",
        "Hábitos sustentáveis"
      ],
      imageUrl: "https://images.unsplash.com/photo-1593431763017-c689a61b729a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxoZWFsdGh5JTIwbGlmZXN0eWxlJTIwZml0bmVzcyUyMHdlbGxuZXNzfGVufDF8fHx8MTc3OTU1OTU2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      checkoutUrl: "https://sun.eduzz.com/7WXG672O0A",
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section id="ebooks" className="py-20 bg-slate-950">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nossos Ebooks Disponíveis
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Conteúdo premium para transformar sua vida
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {ebooks.map((ebook, index) => (
            <EbookCard key={index} {...ebook} />
          ))}
        </div>
      </div>
    </section>
  );
}
