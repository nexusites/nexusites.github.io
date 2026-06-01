import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Mail, ExternalLink, ArrowUpRight, Cloud, Boxes, GitBranch, Terminal, ShieldCheck, Database } from 'lucide-react'
import ParticleBackground from './components/ParticleBackground.jsx'
import { content } from './content.js'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.08 } }),
}

const groupIcons = [Cloud, Database, Boxes, GitBranch, Terminal, ShieldCheck]

export default function App() {
  const [lang, setLang] = useState('it')
  const t = content[lang]

  return (
    <div className="relative min-h-screen">
      <ParticleBackground />

      {/* NAV */}
      <nav className="fixed top-0 inset-x-0 z-50 glass">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-mono text-sm text-accent">
            Riccardo Lotronto
          </span>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-6 font-mono text-xs text-slate-400">
              <a href="#about" className="hover:text-accent transition">{t.nav.about}</a>
              <a href="#skills" className="hover:text-accent transition">{t.nav.skills}</a>
              <a href="#projects" className="hover:text-accent transition">{t.nav.projects}</a>
              <a href="#path" className="hover:text-accent transition">{t.nav.path}</a>
              <a href="#contact" className="hover:text-accent transition">{t.nav.contact}</a>
            </div>
            <button
              onClick={() => setLang(lang === 'it' ? 'en' : 'it')}
              className="font-mono text-xs border border-edge rounded-md px-3 py-1.5 text-slate-300 hover:text-accent hover:border-accent transition"
            >
              {lang === 'it' ? 'EN' : 'IT'}
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="max-w-5xl mx-auto px-6 pt-40 pb-28">
        <motion.p variants={fadeUp} initial="hidden" animate="show" className="font-mono text-sm text-accent mb-5">{t.hero.tag}</motion.p>
        <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={1}
          className="font-display font-bold leading-[1.05] tracking-tight text-4xl sm:text-6xl mb-6">
          {t.hero.title1} <span className="gradient-text">{t.hero.title2}</span> {t.hero.title3}
        </motion.h1>
        <motion.p variants={fadeUp} initial="hidden" animate="show" custom={2}
          className="text-slate-400 text-lg max-w-2xl mb-9">{t.hero.lead}</motion.p>
        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={3} className="flex flex-wrap gap-4">
          <a href="#projects" className="font-mono text-sm bg-accent text-ink font-medium px-6 py-3 rounded-lg hover:-translate-y-0.5 transition">{t.hero.cta1}</a>
          <a href="#contact" className="font-mono text-sm border border-edge px-6 py-3 rounded-lg hover:border-accent hover:text-accent transition">{t.hero.cta2}</a>
        </motion.div>
      </header>

      <Section id="about" label={t.about.label} title={t.about.title}>
        <div className="space-y-4 text-slate-300 max-w-2xl leading-relaxed">
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <p className="font-mono text-sm text-accent">{t.about.p3}</p>
        </div>
      </Section>

      <Section id="skills" label={t.skills.label} title={t.skills.title}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.skills.groups.map((g, i) => {
            const Icon = groupIcons[i % groupIcons.length]
            return (
              <motion.div key={g.name} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
                className="glass glow-border rounded-xl p-5 transition">
                <div className="flex items-center gap-2 mb-3">
                  <Icon size={16} className="text-accent" />
                  <h3 className="font-mono text-xs text-slate-400 uppercase tracking-wider">{g.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span key={s} className="font-mono text-xs bg-ink/60 border border-edge text-slate-200 px-2.5 py-1 rounded-md">{s}</span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </Section>

      <Section id="projects" label={t.projects.label} title={t.projects.title}>
        <div className="grid md:grid-cols-2 gap-5">
          {t.projects.items.map((p, i) => (
            <motion.article key={p.n} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
              className="glass glow-border rounded-2xl p-6 transition group">
              <div className="flex items-start justify-between mb-3">
                <span className="font-mono text-xs text-slate-500">{p.n}</span>
                <ArrowUpRight size={18} className="text-slate-600 group-hover:text-accent transition" />
              </div>
              <h3 className="font-display font-bold text-xl mb-2">{p.name}</h3>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {p.stack.map((s) => (
                  <span key={s} className="font-mono text-[11px] bg-ink/60 border border-edge text-slate-400 px-2 py-0.5 rounded">{s}</span>
                ))}
              </div>
              <div className="flex gap-4 font-mono text-sm">
                <a href={p.github} target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 text-accent hover:text-accent3 transition">
                  <Github size={15} /> GitHub
                </a>
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 text-accent hover:text-accent3 transition">
                    <ExternalLink size={15} /> {t.projects.live}
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section id="path" label={t.path.label} title={t.path.title}>
        <div className="relative border-l border-edge ml-2 space-y-8 pl-8">
          {t.path.items.map((it, i) => (
            <motion.div key={it.title} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i} className="relative">
              <span className="absolute -left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-accent shadow-[0_0_12px_2px_rgba(94,234,212,0.5)]" />
              <span className="font-mono text-xs text-accent3">{it.time}</span>
              <h3 className="font-display font-semibold text-lg mt-1">{it.title}</h3>
              <p className="text-slate-400 text-sm mt-1 max-w-xl">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="contact" label={t.contact.label} title={t.contact.title}>
        <p className="text-slate-400 max-w-xl mb-7">{t.contact.lead}</p>
        <div className="flex flex-wrap gap-4 font-mono text-sm">
          <a href="mailto:lotrontoriccardo@gmail.com"
            className="inline-flex items-center gap-2 glass glow-border px-5 py-3 rounded-xl transition">
            <Mail size={16} className="text-accent" /> lotrontoriccardo@gmail.com
          </a>
          <a href="https://github.com/nexusites" target="_blank" rel="noopener"
            className="inline-flex items-center gap-2 glass glow-border px-5 py-3 rounded-xl transition">
            <Github size={16} className="text-accent" /> github.com/nexusites
          </a>
          {/* Aggiungi qui il tuo LinkedIn quando lo crei / Add your LinkedIn here when ready */}
        </div>
      </Section>

      <footer className="max-w-5xl mx-auto px-6 py-10 border-t border-edge text-center font-mono text-xs text-slate-500">
        {t.footer} · © 2026 Riccardo Lotronto
      </footer>
    </div>
  )
}

function Section({ id, label, title, children }) {
  return (
    <section id={id} className="max-w-5xl mx-auto px-6 py-16 border-t border-edge/60">
      <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
        className="font-mono text-xs text-accent3 uppercase tracking-widest mb-3">{label}</motion.p>
      <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}
        className="font-display font-bold text-2xl sm:text-3xl mb-8">{title}</motion.h2>
      {children}
    </section>
  )
}
