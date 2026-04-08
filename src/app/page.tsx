'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

/* ─── Animation helpers ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
};

const transition = {
  duration: 0.8,
  ease: [0.32, 0.72, 0, 1] as const,
};

function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ ...transition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Sections ─── */

function Nav() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2rem)] max-w-5xl">
      <div className="backdrop-blur-2xl bg-white/[0.08] rounded-full border border-white/[0.1] shadow-[0_8px_32px_-8px_rgba(0,0,0,0.4)] px-6 py-3 flex items-center justify-between">
        <a href="#" className="font-bold text-lg tracking-tight text-white">
          HJ<span className="text-cyan-400">_WEB</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a href="#avantages" className="hover:text-white transition-colors duration-300">Avantages</a>
          <a href="#realisations" className="hover:text-white transition-colors duration-300">Realisations</a>
          <a href="#tarif" className="hover:text-white transition-colors duration-300">Tarif</a>
          <a href="#contact" className="hover:text-white transition-colors duration-300">Contact</a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-500/[0.07] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center pt-32 pb-20 lg:py-0">
        {/* Left: Text */}
        <div className="max-w-xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 bg-cyan-500/10 text-cyan-400 rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-semibold mb-8 border border-cyan-500/20">
              <span className="relative w-2 h-2 rounded-full bg-cyan-400">
                <span className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-40" />
              </span>
              Disponible pour de nouveaux projets
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-[800] tracking-tighter leading-[0.92] text-white mb-6">
              Votre site web.<br/>
              <span className="text-cyan-400">Votre vitrine.</span><br/>
              Mon expertise.
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-[50ch] mb-10">
              Je cree des sites internet sur mesure, modernes et performants pour les entreprises qui veulent se demarquer en ligne. Un investissement, pas une depense.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-wrap gap-4">
              <a href="#avantages" className="inline-flex items-center gap-2 border border-white/10 text-white px-7 py-4 rounded-full font-semibold text-base hover:bg-white/5 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]">
                En savoir plus
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right: Visual */}
        <Reveal delay={0.4} className="relative hidden lg:block">
          <div className="bg-white/[0.06] rounded-[2rem] p-1.5 border border-white/[0.1]">
            <div className="bg-zinc-800/60 rounded-[calc(2rem-0.375rem)] overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]">
              {/* Browser mockup */}
              <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                </div>
                <div className="flex-1 mx-3 bg-white/5 rounded-lg px-3 py-1.5 text-xs text-zinc-500 font-mono">
                  votre-entreprise.fr
                </div>
              </div>
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
                alt="Exemple de site web professionnel"
                width={800}
                height={500}
                className="w-full h-[400px] object-cover"
                priority
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Avantages() {
  const avantages = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m16 12-4-4-4 4"/><path d="M12 16V8"/></svg>
      ),
      title: 'Visibilite 24h/24',
      desc: 'Votre site travaille pour vous en permanence. Vos clients vous trouvent a tout moment, meme en dehors de vos horaires d\'ouverture. Vous existez la ou vos clients cherchent : sur Google.',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
      ),
      title: 'Credibilite instantanee',
      desc: 'En 2024, un client qui ne trouve pas votre site passe au concurrent. Un site professionnel rassure, inspire confiance et montre que vous prenez votre activite au serieux.',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
      ),
      title: 'Nouveaux clients chaque mois',
      desc: 'Un site bien construit attire des visiteurs via Google, les reseaux sociaux et le bouche-a-oreille numerique. C\'est votre meilleur commercial, et il ne dort jamais.',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/></svg>
      ),
      title: 'Presentez vos services clairement',
      desc: 'Fini les explications par telephone. Votre site liste vos prestations, vos tarifs, vos horaires. Vos clients arrivent deja informes, prets a travailler avec vous.',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
      ),
      title: 'Rentabilise en quelques clients',
      desc: 'A 250 euros, votre site est rentabilise des les premiers clients qu\'il vous apporte. C\'est l\'investissement le plus rentable que vous ferez pour votre activite.',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
      ),
      title: 'Demarquez-vous de la concurrence',
      desc: 'Beaucoup de vos concurrents n\'ont pas de site, ou un site obsolete. Un site moderne vous place immediatement devant eux dans l\'esprit de vos clients potentiels.',
    },
  ];

  return (
    <section id="avantages" className="py-28 md:py-40 px-6 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-20">
          <Reveal>
            <span className="inline-block bg-cyan-500/10 text-cyan-400 rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-semibold mb-6 border border-cyan-500/20">
              Pourquoi un site web ?
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-[800] tracking-tighter leading-[0.95] text-white mb-4">
              Votre entreprise merite<br/>d&apos;etre visible en ligne
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-zinc-400 text-base leading-relaxed max-w-[55ch] mx-auto">
              En 2024, 80% des consommateurs recherchent une entreprise en ligne avant de la contacter. Sans site, vous etes invisible pour la majorite de vos clients potentiels.
            </p>
          </Reveal>
        </div>

        {/* Grid 2-col zig-zag */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {avantages.map((item, i) => (
            <Reveal key={i} delay={i * 0.08} className={i % 2 === 1 ? 'md:mt-8' : ''}>
              <div className="group bg-white/[0.05] rounded-[2rem] p-1.5 border border-white/[0.1] hover:border-cyan-500/20 transition-all duration-600 ease-[cubic-bezier(0.32,0.72,0,1)]">
                <div className="bg-zinc-800/50 rounded-[calc(2rem-0.375rem)] p-8 md:p-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] h-full">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors duration-500">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg tracking-tight mb-2">{item.title}</h3>
                      <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Realisations() {
  return (
    <section id="realisations" className="py-28 md:py-40 px-6 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-20">
          <Reveal>
            <span className="inline-block bg-cyan-500/10 text-cyan-400 rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-semibold mb-6 border border-cyan-500/20">
              Portfolio
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-[800] tracking-tighter leading-[0.95] text-white mb-4">
              Ce que je realise<br/>pour mes clients
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-zinc-400 text-base leading-relaxed max-w-[50ch] mx-auto">
              Des sites modernes, rapides et qui convertissent. Chaque projet est unique et construit sur mesure.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
          {/* Project 1 — wide */}
          <Reveal className="md:col-span-3">
            <div className="group bg-white/[0.05] rounded-[2rem] p-1.5 border border-white/[0.1] hover:border-cyan-500/20 transition-all duration-600 ease-[cubic-bezier(0.32,0.72,0,1)]">
              <div className="bg-zinc-800/50 rounded-[calc(2rem-0.375rem)] overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]">
                <Image
                  src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=800&auto=format&fit=crop&sat=50&bri=10"
                  alt="Site web coaching fitness"
                  width={800}
                  height={450}
                  className="w-full h-64 object-cover brightness-150 saturate-[1.6] contrast-[1.1] group-hover:scale-[1.02] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
                />
                <div className="p-8">
                  <span className="text-cyan-400 text-xs uppercase tracking-[0.15em] font-semibold">Coaching fitness</span>
                  <h3 className="text-white font-bold text-xl tracking-tight mt-2 mb-2">Antho Audia Coaching</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">Site vitrine complet pour un coach sportif independant. Hero immersif, sections tarifs, temoignages et prise de contact.</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Project 2 — narrow */}
          <Reveal delay={0.1} className="md:col-span-2">
            <div className="group bg-white/[0.05] rounded-[2rem] p-1.5 border border-white/[0.1] hover:border-cyan-500/20 transition-all duration-600 ease-[cubic-bezier(0.32,0.72,0,1)] h-full">
              <div className="bg-zinc-800/50 rounded-[calc(2rem-0.375rem)] overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] h-full flex flex-col">
                <Image
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=600&auto=format&fit=crop"
                  alt="Table de restaurant chic"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] grayscale group-hover:grayscale-0 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
                />
                <div className="p-8 flex-grow">
                  <span className="text-cyan-400 text-xs uppercase tracking-[0.15em] font-semibold">Restauration</span>
                  <h3 className="text-white font-bold text-xl tracking-tight mt-2 mb-2">Votre prochain projet ?</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">Restaurant, artisan, prestataire de services... Votre activite merite un site a la hauteur de votre savoir-faire.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Processus() {
  const steps = [
    { num: '01', title: 'Echange', desc: 'On discute de votre activite, vos besoins et vos objectifs. Je vous conseille sur la meilleure approche.' },
    { num: '02', title: 'Conception', desc: 'Je cree votre site sur mesure avec un design moderne et professionnel. Vous validez chaque etape.' },
    { num: '03', title: 'Livraison', desc: 'Votre site est en ligne, optimise et pret a accueillir vos premiers visiteurs.' },
  ];

  return (
    <section className="py-28 md:py-40 px-6 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="lg:sticky lg:top-32">
                <span className="inline-block bg-cyan-500/10 text-cyan-400 rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-semibold mb-6 border border-cyan-500/20">
                  Comment ca marche
                </span>
                <h2 className="text-4xl md:text-5xl font-[800] tracking-tighter leading-[0.95] text-white mb-6">
                  Simple.<br/>Rapide.<br/>Efficace.
                </h2>
                <p className="text-zinc-400 text-base leading-relaxed max-w-[45ch]">
                  Pas de jargon technique, pas de process complique. En trois etapes, votre site est en ligne.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 space-y-5">
            {steps.map((step, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="group bg-white/[0.05] rounded-[2rem] p-1.5 border border-white/[0.1] hover:border-cyan-500/20 transition-all duration-600 ease-[cubic-bezier(0.32,0.72,0,1)]">
                  <div className="bg-zinc-800/50 rounded-[calc(2rem-0.375rem)] p-8 md:p-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]">
                    <div className="flex items-start gap-6">
                      <span className="text-cyan-400/30 font-mono text-5xl font-bold leading-none tracking-tighter">{step.num}</span>
                      <div>
                        <h3 className="text-white font-bold text-xl tracking-tight mb-2">{step.title}</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Tarif() {
  return (
    <section id="tarif" className="py-28 md:py-40 px-6 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-500/[0.05] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <Reveal>
            <span className="inline-block bg-cyan-500/10 text-cyan-400 rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-semibold mb-6 border border-cyan-500/20">
              Tarif
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-[800] tracking-tighter leading-[0.95] text-white mb-4">
              Un prix clair.<br/>Pas de surprise.
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="bg-white/[0.02] rounded-[2rem] p-1.5 border border-cyan-500/20">
            <div className="bg-zinc-800/50 rounded-[calc(2rem-0.375rem)] p-10 md:p-14 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] text-center">
              <div className="text-zinc-400 text-sm uppercase tracking-[0.15em] font-medium mb-4">Site internet complet</div>
              <div className="text-6xl md:text-7xl font-[800] text-white tracking-tighter mb-2">
                250<span className="text-2xl text-zinc-500 font-normal ml-2">&euro;</span>
              </div>
              <p className="text-zinc-500 text-sm mb-10 max-w-md mx-auto">
                Un site professionnel, moderne et performant. Paiement unique, sans abonnement cache.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-lg mx-auto mb-10">
                {[
                  'Design sur mesure',
                  'Responsive mobile/tablette',
                  'Optimise pour Google (SEO)',
                  'Formulaire de contact',
                  'Hebergement 1 an inclus',
                  'Nom de domaine inclus',
                  'Livraison sous 7 jours',
                  'Modifications incluses',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-zinc-300">
                    <span className="w-5 h-5 rounded-full bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    {item}
                  </div>
                ))}
              </div>

            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-28 md:py-40 px-6 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="max-w-2xl mx-auto text-center">
        <Reveal>
          <span className="inline-block bg-cyan-500/10 text-cyan-400 rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-semibold mb-6 border border-cyan-500/20">
            Contact
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-[800] tracking-tighter leading-[0.95] text-white mb-6">
            Parlons de votre projet
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-zinc-400 text-base leading-relaxed max-w-[50ch] mx-auto mb-10">
            Decrivez-moi votre activite et vos besoins. Je vous recontacte sous 24h avec une proposition personnalisee.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <form className="space-y-5 text-left" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="nom" className="block text-sm font-medium text-zinc-300 mb-2">Nom</label>
                <input type="text" id="nom" name="nom" required className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-3.5 text-white text-sm placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500/40 transition-all duration-300" placeholder="Votre nom" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">Email</label>
                <input type="email" id="email" name="email" required className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-3.5 text-white text-sm placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500/40 transition-all duration-300" placeholder="votre@email.com" />
              </div>
            </div>
            <div>
              <label htmlFor="activite" className="block text-sm font-medium text-zinc-300 mb-2">Votre activite</label>
              <input type="text" id="activite" name="activite" className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-3.5 text-white text-sm placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500/40 transition-all duration-300" placeholder="Ex: Plombier, Coach sportif, Restaurant..." />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">Votre besoin</label>
              <textarea id="message" name="message" rows={4} className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-3.5 text-white text-sm placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500/40 transition-all duration-300 resize-none" placeholder="Decrivez-moi votre projet en quelques mots..." />
            </div>
            <button type="submit" className="w-full bg-cyan-500 text-zinc-950 px-7 py-4 rounded-full font-semibold text-base hover:bg-cyan-400 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-15px_rgba(34,211,238,0.3)] active:scale-[0.98] flex items-center justify-center gap-3">
              Envoyer ma demande
              <span className="w-8 h-8 rounded-full bg-zinc-950/20 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </span>
            </button>
            <p className="text-center text-zinc-600 text-xs">Reponse garantie sous 24h. Devis gratuit et sans engagement.</p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-bold text-lg tracking-tight text-white">
          HJ<span className="text-cyan-400">_WEB</span>
        </div>
        <div className="text-zinc-600 text-xs">
          2024 HJ_WEB — Jordan Hummel. Tous droits reserves.
        </div>
      </div>
    </footer>
  );
}

/* ─── Page ─── */

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <Avantages />
      <Realisations />
      <Processus />
      <Tarif />
      <Contact />
      <Footer />
    </div>
  );
}
