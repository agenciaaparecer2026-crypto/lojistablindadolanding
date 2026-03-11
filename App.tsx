/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  CheckCircle, 
  Star, 
  Users, 
  Award, 
  PlayCircle, 
  ArrowRight, 
  ChevronDown,
  Lock,
  Zap,
  ShieldCheck,
  Trophy,
  AlertTriangle,
  TrendingDown,
  User,
  BookOpen,
  Target,
  ShoppingBag,
  Store,
  Info,
  Instagram,
  Youtube,
  XCircle
} from "lucide-react";

const Navbar = () => (
  <motion.nav 
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/5"
  >
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg gold-bg flex items-center justify-center premium-shadow">
          <Trophy className="text-black w-6 h-6" />
        </div>
        <span className="text-2xl md:text-3xl font-bold gold-text tracking-tighter">LOJISTA BLINDADO</span>
      </div>
      <div className="hidden lg:flex items-center gap-10 text-[12px] uppercase tracking-[0.2em] font-bold text-zinc-400">
        <a href="#problema" className="hover:text-premium-gold transition-colors">O Problema</a>
        <a href="#autoridade" className="hover:text-premium-gold transition-colors">Especialista</a>
        <a href="#curso" className="hover:text-premium-gold transition-colors">O Curso</a>
        <a href="https://www.hotmart.com" target="_blank" rel="noopener noreferrer" className="px-8 py-3 gold-bg text-black font-bold rounded-full hover:scale-105 transition-all shadow-lg shadow-gold-600/20">
          GARANTIR VAGA
        </a>
      </div>
    </div>
  </motion.nav>
);

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
    {/* Background elements */}
    <div className="absolute inset-0 z-0">
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-premium-gold/20 rounded-full blur-[160px]" 
      />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />
    </div>

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="inline-flex items-center gap-2 px-6 py-3 border border-premium-gold/20 bg-premium-gold/5 rounded-full text-[12px] tracking-[0.4em] uppercase mb-8 text-premium-gold font-black"
        >
          <Zap size={14} /> ALERTA ESTRATÉGICO PARA LOJISTAS
        </motion.div>
        
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-black leading-[1] mb-8 max-w-6xl mx-auto text-balance tracking-tighter">
          Milhares de lojas estão fechando por não competirem com <span className="gold-text">Gigantes Digitais.</span>
        </h1>
        
        <p className="text-xl md:text-3xl text-zinc-400 max-w-5xl mx-auto mb-10 font-semibold leading-tight text-balance">
          Se você compra na Feira da Madrugada, provavelmente paga o mesmo preço que a <span className="text-white">Shopee e Shein</span> vendem para o cliente final.
        </p>
        
        <div className="p-8 md:p-10 glass-card rounded-3xl inline-block mb-10 border-premium-gold/10">
          <p className="text-2xl md:text-3xl gold-text font-black italic tracking-tighter">
            "Descobri o método para comprar melhor, vender com margem e dominar seu mercado."
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-8">
          <motion.a 
            href="https://www.hotmart.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-20 py-8 gold-bg text-black font-black text-2xl md:text-3xl rounded-2xl shadow-[0_20px_50px_rgba(146,99,21,0.3)] flex items-center justify-center gap-4 group transition-all"
          >
            QUERO APRENDER O MÉTODO 
            <ArrowRight size={32} className="group-hover:translate-x-2 transition-transform" />
          </motion.a>
          
          <div className="flex items-center gap-8 text-zinc-500 text-sm uppercase tracking-[0.2em] font-black">
            <span className="flex items-center gap-2"><ShieldCheck size={20} className="text-premium-gold" /> Acesso Vitalício</span>
            <span className="w-1.5 h-1.5 bg-zinc-800 rounded-full" />
            <span className="flex items-center gap-2"><Users size={20} className="text-premium-gold" /> +15k Alunos</span>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="mt-16 flex flex-col items-center"
      >
        <ChevronDown className="text-premium-gold/40 animate-bounce w-10 h-10" />
      </motion.div>
    </div>
  </section>
);

const Problem = () => (
  <section id="problema" className="py-20 px-6 relative">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-12 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="lg:col-span-7"
        >
          <div className="inline-block px-5 py-2 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-[12px] font-black tracking-[0.2em] uppercase mb-6">
            O Cenário Atual
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tighter">
            O Ciclo que está <br /><span className="gold-text">Destruindo seu Lucro</span>
          </h2>
          <p className="text-2xl text-zinc-400 mb-10 leading-relaxed font-medium">
            A maioria dos lojistas segue o mesmo roteiro: viaja para São Paulo, enfrenta a Feira da Madrugada, aplica o markup padrão e espera vender.
          </p>
          
          <div className="space-y-6">
            <div className="glass-card p-10 rounded-3xl border-l-8 border-l-premium-gold bg-gradient-to-r from-premium-gold/5 to-transparent">
              <p className="text-2xl md:text-3xl text-zinc-200 leading-tight font-bold">
                O erro fatal: <span className="text-white">você está pagando no atacado o que o seu cliente vê no varejo da internet.</span>
              </p>
            </div>
            <p className="text-4xl md:text-5xl font-black gold-text italic tracking-tighter">Como sua loja sobrevive assim?</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-5"
        >
          <div className="glass-card p-1 rounded-[40px] gold-border premium-shadow">
            <div className="bg-zinc-950 rounded-[38px] p-12">
              <div className="flex justify-between items-center mb-12">
                <span className="text-[12px] font-black tracking-[0.3em] uppercase text-zinc-500">Comparativo de Mercado</span>
                <ShoppingBag className="text-premium-gold w-6 h-6" />
              </div>
              
              <div className="space-y-10">
                <div className="flex justify-between items-center group">
                  <span className="text-zinc-400 text-lg group-hover:text-zinc-200 transition-colors">Custo em São Paulo</span>
                  <span className="text-2xl font-black">R$ 60,00</span>
                </div>
                <div className="flex justify-between items-center group">
                  <span className="text-zinc-400 text-lg group-hover:text-zinc-200 transition-colors">Seu Preço de Venda</span>
                  <span className="text-2xl font-black gold-text">R$ 130,00</span>
                </div>
                <div className="pt-10 border-t border-zinc-800">
                  <div className="bg-red-500/5 border border-red-500/20 p-8 rounded-2xl flex justify-between items-center">
                    <div>
                      <span className="block text-[12px] font-black text-red-500 uppercase tracking-widest mb-1">Preço na Internet</span>
                      <span className="text-zinc-200 text-base">Shopee / Shein / Temu</span>
                    </div>
                    <span className="text-4xl font-black text-red-500">R$ 79,00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Consequences = () => (
  <section className="py-32 px-6 relative">
    <div className="max-w-7xl mx-auto">
      <div className="section-divider mb-32" />
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="order-2 lg:order-1 flex justify-center"
        >
          <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
            <div className="absolute inset-0 bg-premium-gold/5 rounded-full blur-[100px] animate-pulse" />
            <div className="relative z-10 w-full h-full border border-premium-gold/10 rounded-full overflow-hidden flex items-center justify-center p-4">
              <div className="w-full h-full border border-premium-gold/20 rounded-full overflow-hidden flex items-center justify-center relative">
                <img 
                  src="https://picsum.photos/seed/store-closing-main/800/800" 
                  alt="Loja de roupas fechando as portas" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <XCircle size={80} className="text-red-500/80" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2"
        >
          <h2 className="text-5xl md:text-8xl font-black mb-10 leading-tight tracking-tighter">
            O Perigo <span className="gold-text">Invisível</span>
          </h2>
          <p className="text-2xl text-zinc-400 mb-12 font-medium">Sem a estratégia correta, sua loja está apenas "trocando dinheiro".</p>
          
          <div className="grid gap-6 mb-12">
            {[
              { label: "Margens Esmagadas", desc: "Você trabalha mais para ganhar cada vez menos." },
              { label: "Estoque Parado", desc: "Produtos que não competem com o preço online." },
              { label: "Risco de Fechamento", desc: "A insustentabilidade financeira a longo prazo." }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 p-8 glass-card rounded-3xl border-white/5 hover:border-premium-gold/20 transition-all group">
                <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0 border border-white/10 group-hover:border-premium-gold/50 transition-all">
                  <img 
                    src={`https://picsum.photos/seed/closed-shop-${i}/200/200`} 
                    alt="Loja fechando" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="text-2xl font-black text-white mb-2 tracking-tight">{item.label}</h4>
                  <p className="text-lg text-zinc-500 font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-10 bg-zinc-900/50 rounded-[40px] border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full gold-bg" />
            <p className="text-2xl italic text-zinc-300 leading-relaxed font-medium">
              "A verdade é dura: <span className="text-white font-black">Não é falta de esforço.</span> É falta de acesso à informação estratégica sobre fornecedores e inteligência de compra."
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Authority = () => (
  <section id="autoridade" className="py-24 px-6 bg-zinc-950/30">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex-1 relative"
        >
          <div className="relative z-10">
            <div className="absolute -inset-1 gold-bg blur-xl opacity-20 rounded-[42px]" />
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
              alt="José Carlos Santos" 
              className="relative z-10 rounded-[40px] border border-white/10 shadow-2xl grayscale brightness-90"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -right-8 z-20 bg-zinc-900 p-10 rounded-3xl border border-premium-gold/30 premium-shadow hidden md:block">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[12px] font-black tracking-widest text-zinc-500 uppercase">Especialista Ativo</span>
              </div>
              <h4 className="text-3xl font-black gold-text tracking-tighter">José Carlos Santos</h4>
              <p className="text-[12px] text-zinc-400 uppercase tracking-[0.2em] mt-1 font-bold">20 Anos de Experiência</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <div className="inline-block px-5 py-2 border border-premium-gold/20 rounded-lg text-premium-gold text-[12px] font-black tracking-[0.2em] uppercase mb-8">
            A Mente por trás do Método
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-10 leading-[1.1] tracking-tighter">
            Quem descobriu <br /><span className="gold-text">esse caminho?</span>
          </h2>
          <div className="space-y-8 text-xl text-zinc-400 leading-relaxed font-medium">
            <p>Sou de Caratinga, Minas Gerais, e dediquei mais de <span className="text-white font-black">20 anos ao marketing estratégico</span> e os últimos 3 anos vivendo o dia a dia de uma loja física de moda feminina.</p>
            <p>Ao ver o mercado ser engolido pelo digital, decidi parar tudo. <span className="text-white font-bold">Passei semanas em São Paulo</span> infiltrado em fabricantes, fornecedores e polos de produção que a maioria dos lojistas nem sabe que existem.</p>
            <div className="p-10 glass-card rounded-3xl border-premium-gold/10">
              <p className="text-3xl gold-text font-black italic leading-tight tracking-tighter">
                "Codifiquei um método de compra que permite competir de igual para igual com a internet, mantendo margens de lucro saudáveis."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const CourseInfo = () => (
  <section id="curso" className="py-24 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter">Treinamento <span className="gold-text">Direto ao Ponto</span></h2>
          <p className="text-2xl text-zinc-400 max-w-4xl mx-auto font-medium leading-relaxed">
            45 minutos de pura estratégia. Sem enrolação, sem teorias. Apenas o que você precisa aplicar amanhã para mudar seus resultados.
          </p>
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-14 rounded-[40px] border-white/5 hover:border-premium-gold/20 transition-all"
        >
          <div className="w-20 h-20 rounded-2xl gold-bg flex items-center justify-center mb-12 premium-shadow">
            <BookOpen className="text-black w-10 h-10" />
          </div>
          <h3 className="text-4xl font-black mb-12 tracking-tighter">O Plano de Ação</h3>
          <div className="grid gap-8">
            {[
              "O jogo real do atacado de alta performance",
              "Os erros fatais nas compras em São Paulo",
              "Onde encontrar os fornecedores 'invisíveis'",
              "Estratégia de precificação competitiva",
              "Como vender sem sacrificar sua margem"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-5 text-zinc-300 group">
                <div className="w-8 h-8 rounded-full border border-premium-gold/30 flex items-center justify-center shrink-0 mt-1 group-hover:bg-premium-gold group-hover:text-black transition-all">
                  <CheckCircle size={18} />
                </div>
                <span className="text-xl font-medium">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-card p-14 rounded-[40px] border-premium-gold/20 bg-gradient-to-br from-premium-gold/5 to-transparent"
        >
          <div className="w-20 h-20 rounded-2xl bg-zinc-900 flex items-center justify-center mb-12 border border-premium-gold/20">
            <Target className="text-premium-gold w-10 h-10" />
          </div>
          <h3 className="text-4xl font-black mb-12 tracking-tighter">Para quem é o Método?</h3>
          <div className="grid gap-8">
            {[
              "Lojistas iniciantes que buscam o caminho certo",
              "Lojistas experientes com margens em queda",
              "Quem quer vencer a guerra contra o online",
              "Donos de boutiques de moda feminina",
              "Compradores assíduos do Brás e Bom Retiro"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-5 text-zinc-300 group">
                <div className="w-8 h-8 rounded-full bg-premium-gold/10 flex items-center justify-center shrink-0 mt-1 group-hover:bg-premium-gold group-hover:text-black transition-all">
                  <Users size={18} className="text-premium-gold group-hover:text-black" />
                </div>
                <span className="text-xl font-medium">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const LearningOutcomes = () => (
  <section className="py-24 bg-zinc-950/50 relative overflow-hidden">
    <div className="max-w-5xl mx-auto px-6 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">Sua Nova <span className="gold-text">Realidade</span></h2>
        <p className="text-zinc-500 uppercase tracking-[0.3em] text-[12px] font-black">O que você leva ao finalizar</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {[
          "Blindagem contra plataformas digitais",
          "Fim dos erros de compra em São Paulo",
          "Acesso aos melhores fornecedores",
          "Margens de lucro reais e sustentáveis",
          "Poder de competição com a internet"
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-8 p-10 glass-card rounded-[32px] border-white/5 hover:border-premium-gold/30 transition-all group"
          >
            <div className="w-14 h-14 rounded-2xl gold-bg flex items-center justify-center text-black premium-shadow group-hover:scale-110 transition-transform">
              <ShieldCheck size={32} />
            </div>
            <span className="text-2xl text-zinc-200 font-bold tracking-tight">{item}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="py-32 px-6 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-premium-gold/5 to-transparent pointer-events-none" />
    
    <div className="max-w-6xl mx-auto text-center relative z-10">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="glass-card p-16 md:p-28 rounded-[60px] border-premium-gold/30 premium-shadow relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-3 gold-bg" />
        
        <h2 className="text-5xl md:text-8xl font-black mb-10 leading-[1] tracking-tighter">
          Sua loja precisa <br /><span className="gold-text">disso agora.</span>
        </h2>
        
        <p className="text-2xl md:text-3xl text-zinc-400 mb-16 max-w-4xl mx-auto font-medium leading-tight">
          Este conhecimento é o divisor de águas entre quem vai fechar as portas e quem vai dominar o mercado de moda feminina.
        </p>
        
        <div className="flex flex-col items-center gap-12">
          <motion.a 
            href="https://www.hotmart.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
            className="w-full inline-flex py-10 gold-bg text-black font-black text-3xl md:text-5xl rounded-3xl shadow-[0_30px_60px_rgba(146,99,21,0.4)] transition-all items-center justify-center gap-6 group"
          >
            ACESSAR O CURSO AGORA 
            <ArrowRight size={48} className="group-hover:translate-x-3 transition-transform" />
          </motion.a>

          <div className="flex flex-wrap items-center justify-center gap-12 text-[12px] uppercase tracking-[0.2em] font-black text-zinc-500">
            <span className="flex items-center gap-3"><ShieldCheck size={24} className="text-premium-gold" /> 7 Dias de Garantia</span>
            <span className="flex items-center gap-3"><Lock size={24} className="text-premium-gold" /> Pagamento Seguro</span>
            <span className="flex items-center gap-3"><Zap size={24} className="text-premium-gold" /> Acesso Imediato</span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-16 px-6 border-t border-white/5 bg-black relative overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-premium-gold/20 to-transparent" />
    
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg gold-bg flex items-center justify-center premium-shadow">
            <Trophy className="text-black w-6 h-6" />
          </div>
          <span className="text-3xl font-black gold-text tracking-tighter">LOJISTA BLINDADO</span>
        </div>
        
        <div className="flex flex-wrap justify-center gap-10 text-[12px] uppercase tracking-[0.3em] font-black text-zinc-500">
          <a href="#problema" className="hover:text-premium-gold transition-colors">O Problema</a>
          <a href="#autoridade" className="hover:text-premium-gold transition-colors">Especialista</a>
          <a href="#curso" className="hover:text-premium-gold transition-colors">O Curso</a>
        </div>

        <div className="flex gap-6">
          <a href="#" className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center text-zinc-500 hover:border-premium-gold/50 hover:text-premium-gold transition-all bg-white/5">
            <Instagram size={24} />
          </a>
          <a href="#" className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center text-zinc-500 hover:border-premium-gold/50 hover:text-premium-gold transition-all bg-white/5">
            <Youtube size={24} />
          </a>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-10 border-t border-white/5 text-[12px] uppercase tracking-[0.2em] text-zinc-600 font-black">
        <p>© 2026 Lojista Blindado. Todos os direitos reservados.</p>
        <div className="flex gap-10">
          <a href="#" className="hover:text-zinc-400 transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-zinc-400 transition-colors">Privacidade</a>
          <a href="#" className="hover:text-zinc-400 transition-colors">Suporte</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="bg-black text-white selection:bg-premium-gold selection:text-black">
      <Navbar />
      <Hero />
      <Problem />
      <Consequences />
      <Authority />
      <CourseInfo />
      <LearningOutcomes />
      <FinalCTA />
      <Footer />
    </div>
  );
}
