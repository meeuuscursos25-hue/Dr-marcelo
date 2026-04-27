/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" }
};
const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" }
};

const testimonials = [
  {
    id: 1,
    initial: "M",
    bgColor: "bg-secondary-container text-on-secondary-container",
    name: "Maria Lúcia C.",
    time: "2 semanas atrás",
    text: "Depois de tentar tratar meus sintomas da menopausa com vários médicos e ter minhas queixas minimizadas, finalmente encontrei alguém que me ouviu com atenção. O tratamento focado na causa raiz fez com que eu voltasse a dormir bem e recuperasse minha disposição."
  },
  {
    id: 2,
    initial: "A",
    bgColor: "bg-primary-fixed text-on-primary-fixed",
    name: "Ana Paula T.",
    time: "1 mês atrás",
    text: "O Dr. Marcelo é extremamente atencioso e baseia tudo em exames clínicos muito completos e detalhados. A abordagem integrativa me ajudou imensamente a controlar as dores da endometriose. Mudou minha vida."
  },
  {
    id: 3,
    initial: "C",
    bgColor: "bg-tertiary-container text-on-tertiary-container",
    name: "Carla M.",
    time: "3 meses atrás",
    text: "Profissional excepcional. A experiência dele na área hormonal transparece na segurança com que ele conduz o tratamento para o climatério. Me sinto muito mais leve, com energia e minha composição corporal melhorou muito."
  },
  {
    id: 4,
    initial: "J",
    bgColor: "bg-secondary-container text-on-secondary-container",
    name: "Juliana F.",
    time: "4 meses atrás",
    text: "Excelente profissional! Foi o único que conseguiu estabilizar meu quadro de SOP com uma visão global da minha saúde, indo muito além de apenas prescrever métodos paliativos."
  },
  {
    id: 5,
    initial: "R",
    bgColor: "bg-primary-fixed text-on-primary-fixed",
    name: "Roberta S.",
    time: "6 meses atrás",
    text: "Atendimento impecável desde a recepção. O Dr. Marcelo tem muita paciência para explicar cada detalhe dos tratamentos. Sinto muita confiança e a minha energia melhorou bastante."
  },
  {
    id: 6,
    initial: "L",
    bgColor: "bg-tertiary-container text-on-tertiary-container",
    name: "Luciana B.",
    time: "1 ano atrás",
    text: "Minha qualidade de vida triplicou após iniciar a abordagem hormonal integrativa sob seus cuidados. Fim do cansaço crônico e retorno da minha disposição. Indico a todas as amigas."
  }
];

export default function App() {
  return (
    <div className="bg-background text-on-background font-body-md text-body-md antialiased selection:bg-primary-container selection:text-on-primary-container">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-lg border-b border-outline-variant transition-all duration-300">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter h-[104px] grid grid-cols-2 lg:grid-cols-[auto_1fr_auto] items-center gap-8">
          
          {/* Logo */}
          <div className="flex flex-col justify-center">
            <a href="#" className="flex flex-col group">
              <span className="font-headline-md text-xl lg:text-2xl font-bold text-primary tracking-widest uppercase leading-none group-hover:text-secondary transition-colors">Dr. Marcelo</span>
              <span className="font-label-md text-[10px] md:text-xs text-on-surface-variant tracking-[0.2em] uppercase mt-1.5">Ginecologia & Saúde Hormonal</span>
            </a>
          </div>

          {/* Nav Links */}
          <div className="hidden lg:flex items-center justify-center gap-8 xl:gap-12">
            <a className="text-on-surface-variant hover:text-primary font-label-md text-sm uppercase tracking-widest transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 outline-none hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left pb-1" href="#especialidades">Especialidades</a>
            <a className="text-on-surface-variant hover:text-primary font-label-md text-sm uppercase tracking-widest transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 outline-none hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left pb-1" href="#saude-hormonal">Saúde Hormonal</a>
            <a className="text-on-surface-variant hover:text-primary font-label-md text-sm uppercase tracking-widest transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 outline-none hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left pb-1" href="#sobre">Sobre</a>
            <a className="text-on-surface-variant hover:text-primary font-label-md text-sm uppercase tracking-widest transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 outline-none hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left pb-1" href="#depoimentos">Depoimentos</a>
          </div>

          {/* CTA & Info */}
          <div className="hidden md:flex items-center justify-end gap-6">
            <button className="bg-primary text-on-primary px-8 py-3.5 rounded font-label-md text-sm uppercase tracking-widest hover:opacity-90 active:scale-95 transition-all flex items-center gap-2 shadow-sm">
              <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_today</span>
              Agendar
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center justify-end">
            <button className="text-primary p-2 flex items-center justify-center hover:bg-surface-variant transition-colors rounded">
              <span className="material-symbols-outlined text-3xl">menu</span>
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-[104px]"> {/* Offset for fixed nav */}
        {/* Hero Section */}
        <section className="relative min-h-[100svh] lg:min-h-[819px] flex items-center justify-center bg-surface-container-low px-5 md:px-8 py-20 lg:py-24 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img alt="Consultório médico moderno e acolhedor, tons terrosos, luz natural suave, ambiente sofisticado e calmo" className="w-full h-full object-cover opacity-20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-hZskMJY_vXcHwc7BTr-qyL3QJcn-FoK_FfnW_oE6-fwFVSAOp-WaLFghZ8NUBaOIJvOxqIOn-yYGVqbpsOloi5TCUDO53ee9u4GDt11m0TD5Gj8MFCVYwviROfftGYCCQflRqIo31OHQWiLHV3jBCx6yqrQZCF9GthhHXVuWyWGK5Lztaw3lX3bX0OsWglRr2bpJhuWEWf6otHQATaPAeXQLGhhwBX9HyxH_ZN5D1ymvXBz5q7RM0ayhwLUYIu44GranuhqKzz_S" />
          </div>
          <motion.div {...fadeUp} className="max-w-container-max mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
            <div className="lg:col-span-8 space-y-6 lg:space-y-8">
              <div className="inline-flex items-center gap-2 bg-surface-container-high px-4 py-2 rounded-full">
                <span className="text-primary font-label-md text-xs sm:text-sm uppercase tracking-wider">CRM-SP 78.993 | RQE 70.907</span>
              </div>
              <h1 className="font-display-lg text-4xl sm:text-5xl lg:text-[56px] leading-[1.15] lg:leading-[1.1] text-primary tracking-tight">
                Ginecologista em São José do Rio Preto com Mais de 25 Anos Cuidando da Saúde Hormonal da Mulher
              </h1>
              <p className="font-body-lg text-base sm:text-lg lg:text-xl text-on-surface-variant max-w-2xl leading-relaxed">
                Formado pela USP e FAMERP, com foco em diagnóstico preciso e abordagem integrativa. Um atendimento que vai além dos sintomas, buscando a raiz do desequilíbrio para restaurar sua qualidade de vida.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2 lg:pt-4">
                <button className="bg-primary-container text-on-primary-container w-full sm:w-auto px-6 lg:px-8 py-4 rounded font-label-md text-sm lg:text-base flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all shadow-sm">
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                  Agendar Minha Consulta pelo WhatsApp
                </button>
              </div>
              <div className="pt-8 flex items-center gap-4 border-t border-outline-variant">
                <div className="flex -space-x-4">
                  {/* Abstract avatars for social proof */}
                  <div className="w-10 h-10 rounded-full bg-surface-container-highest border-2 border-surface flex items-center justify-center text-xs text-on-surface-variant">M</div>
                  <div className="w-10 h-10 rounded-full bg-secondary-container border-2 border-surface flex items-center justify-center text-xs text-on-secondary-container">A</div>
                  <div className="w-10 h-10 rounded-full bg-primary-fixed border-2 border-surface flex items-center justify-center text-xs text-on-primary-fixed">R</div>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">Mais de <span className="font-semibold text-primary">15.000</span> pacientes atendidas.</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Elevação de Consciência */}
        <section className="py-16 md:py-24 px-5 md:px-8 bg-surface" id="saude-hormonal">
          <div className="max-w-container-max mx-auto">
            <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-12 lg:mb-16 space-y-4">
              <h2 className="font-headline-lg text-3xl md:text-4xl lg:text-[40px] leading-tight text-primary">Você se identifica com algum desses sinais?</h2>
              <p className="font-body-lg text-base md:text-lg text-on-surface-variant">O corpo fala. Sintomas que muitas vezes são ignorados ou normalizados podem ser o início de um desequilíbrio hormonal profundo.</p>
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {/* Sinais Cards */}
              <div className="bg-surface-container-lowest p-6 md:p-8 rounded-xl border border-outline-variant hover:shadow-md transition-shadow">
                <span className="material-symbols-outlined text-secondary text-3xl md:text-4xl mb-4">device_thermostat</span>
                <h3 className="font-headline-md text-xl md:text-2xl text-primary mb-2">Ondas de Calor</h3>
                <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">Fogachos intensos que interrompem o sono e o bem-estar diário, típicos do climatério.</p>
              </div>
              <div className="bg-surface-container-lowest p-6 md:p-8 rounded-xl border border-outline-variant hover:shadow-md transition-shadow">
                <span className="material-symbols-outlined text-secondary text-3xl md:text-4xl mb-4">mood_bad</span>
                <h3 className="font-headline-md text-xl md:text-2xl text-primary mb-2">Irritabilidade</h3>
                <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">Oscilações de humor inexplicáveis, ansiedade e dificuldade de lidar com o estresse cotidiano.</p>
              </div>
              <div className="bg-surface-container-lowest p-6 md:p-8 rounded-xl border border-outline-variant hover:shadow-md transition-shadow">
                <span className="material-symbols-outlined text-secondary text-3xl md:text-4xl mb-4">monitor_weight</span>
                <h3 className="font-headline-md text-xl md:text-2xl text-primary mb-2">Dificuldade de Emagrecer</h3>
                <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">Ganho de peso mesmo com dieta e exercícios, frequentemente ligado à resistência insulínica.</p>
              </div>
              <div className="bg-surface-container-lowest p-6 md:p-8 rounded-xl border border-outline-variant hover:shadow-md transition-shadow">
                <span className="material-symbols-outlined text-secondary text-3xl md:text-4xl mb-4">battery_0_bar</span>
                <h3 className="font-headline-md text-xl md:text-2xl text-primary mb-2">Cansaço Crônico</h3>
                <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">Fadiga persistente desde o acordar, falta de energia para atividades rotineiras.</p>
              </div>
              <div className="bg-surface-container-lowest p-6 md:p-8 rounded-xl border border-outline-variant hover:shadow-md transition-shadow md:col-span-2 lg:col-span-2 flex flex-col justify-center">
                <h3 className="font-headline-md text-xl md:text-2xl text-primary mb-3">A Importância de Ouvir</h3>
                <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">A verdadeira medicina começa com uma escuta ativa. Cada sintoma é uma peça do quebra-cabeça. Não se trata apenas de prescrever remédios, mas de entender o seu contexto de vida, suas queixas e mapear o seu perfil hormonal de forma individualizada.</p>
              </div>
            </motion.div>
            <motion.div {...fadeIn} transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }} className="flex justify-center mt-12 md:mt-16">
              <button className="bg-primary-container text-on-primary-container w-full sm:w-auto px-6 lg:px-8 py-4 rounded font-label-md text-sm lg:text-base flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all shadow-sm">
                <span className="material-symbols-outlined text-[20px]">chat</span>
                Agendar Minha Consulta pelo WhatsApp
              </button>
            </motion.div>
          </div>
        </section>

        {/* Por que o Dr. Marcelo? */}
        <section className="py-16 md:py-24 px-5 md:px-8 bg-surface-container-lowest" id="sobre">
          <div className="max-w-container-max mx-auto">
            <motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 lg:order-1 space-y-4 md:space-y-6">
                <h2 className="font-headline-lg text-3xl md:text-4xl lg:text-[40px] leading-tight text-primary">Por que o Dr. Marcelo?</h2>
                <div className="space-y-4 font-body-lg text-base md:text-lg text-on-surface-variant leading-relaxed">
                  <p>O Dr. Marcelo se formou em Medicina na Faculdade de Medicina de Ribeirão Preto da Universidade de São Paulo, uma das formações mais exigentes do país. Fez Mestrado e Doutorado em Ciências da Saúde pela FAMERP, o que significa que seu atendimento não é baseado em opinião. É baseado em pesquisa.</p>
                  <p>Com mais de 25 anos dedicados à ginecologia em São José do Rio Preto, ele acumulou especializações que poucos médicos da região têm. Pós-graduação em Sexualidade Humana pela USP, especialização em Longevidade com o Dr. Ítalo Rachid, pós-graduação em Prática Ortomolecular, formação em Medicina Estatística pela FACIS. Membro da FEBRASGO, do Conselho Regional do Grupo Longevidade Saudável e do Comitê Científico da SOBRAF.</p>
                  <p>Na prática, isso significa uma coisa simples: ele enxerga sua saúde de forma completa. Não trata só o sintoma. Investiga a causa. E monta um protocolo que faz sentido para o seu corpo, não para uma média estatística.</p>
                  <p>Atende pela Unimed e particular. Consultas de segunda a sexta, das 8h às 18h, na Rua Floriano Peixoto, 2575, Santos Dumont, São José do Rio Preto.</p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <img alt="Dr. Marcelo em seu consultório" className="w-full rounded-xl object-cover shadow-sm h-[350px] md:h-[500px]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuApbNDU3-lVl6xiv1DrhIy_C0b8GrgzI_URE5AYcQrl6cfvt7LdbeiVIFHwWwCW1Nct2zYmrD7no11pb_NB3PCqXoflxcvVdIWMZizXRQymrgXdAiKTSdxPHrL5hV8lV9U1diqRaJiP2V_aWEMtA6kXBGP-g-ABb8QJZDQ-z1QyuXxwtUEJK7VOF4ql9_rInKDx0F66rXuBgfXbgOSg03ZuINeunqi-y5lXLBhhZHUX1uaUne_Tf0DDGrCvCrb75qPyBBhnX1nDMhLL" />
              </div>
            </motion.div>
            <motion.div {...fadeIn} transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }} className="flex justify-center mt-12 md:mt-16">
              <button className="bg-primary-container text-on-primary-container w-full sm:w-auto px-6 lg:px-8 py-4 rounded font-label-md text-sm lg:text-base flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all shadow-sm">
                <span className="material-symbols-outlined text-[20px]">chat</span>
                Agendar Minha Consulta pelo WhatsApp
              </button>
            </motion.div>
          </div>
        </section>

        {/* Diferenciais */}
        <section className="py-16 md:py-24 px-5 md:px-8 bg-surface" id="diferenciais">
          <div className="max-w-container-max mx-auto">
            <motion.h2 {...fadeUp} className="font-headline-lg text-3xl md:text-4xl lg:text-[40px] leading-tight text-primary text-center mb-12 lg:mb-16 max-w-3xl mx-auto">O que torna o atendimento do Dr. Marcelo diferente</motion.h2>
            
            <motion.div {...fadeUp} transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }} className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl sm:text-3xl relative top-[1px]">troubleshoot</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-xl md:text-2xl text-primary mb-2 sm:mb-3">Diagnóstico de profundidade</h3>
                  <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">Enquanto a maioria das consultas termina nos exames convencionais, o Dr. Marcelo utiliza bioimpedância, dosagens séricas completas e exames de imagem para encontrar o que os exames de rotina não mostram.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl sm:text-3xl relative top-[1px]">fingerprint</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-xl md:text-2xl text-primary mb-2 sm:mb-3">Protocolo 100% individualizado</h3>
                  <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">Nenhuma paciente sai com o mesmo tratamento. Seu histórico, seus exames, sua rotina e seus objetivos definem o protocolo. Não o contrário.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl sm:text-3xl relative top-[1px]">psychiatry</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-xl md:text-2xl text-primary mb-2 sm:mb-3">Abordagem integrativa</h3>
                  <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">Reposição hormonal, fitoterapia, nutracêuticos e orientações de estilo de vida são combinados quando necessário. O objetivo é tratar a causa, não administrar sintomas indefinidamente.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl sm:text-3xl relative top-[1px]">history_edu</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-xl md:text-2xl text-primary mb-2 sm:mb-3">Mais de 25 anos de experiência e atualização</h3>
                  <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">Mais de 25 anos de experiência, Mestrado, Doutorado e atualização constante. Isso significa que a ciência mais recente chega até você na forma de uma consulta acolhedora e personalizada.</p>
                </div>
              </div>
            </motion.div>
            <motion.div {...fadeIn} transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }} className="flex justify-center mt-12 md:mt-16">
              <button className="bg-primary-container text-on-primary-container w-full sm:w-auto px-6 lg:px-8 py-4 rounded font-label-md text-sm lg:text-base flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all shadow-sm">
                <span className="material-symbols-outlined text-[20px]">chat</span>
                Agendar Minha Consulta pelo WhatsApp
              </button>
            </motion.div>
          </div>
        </section>

        {/* Serviços / Especialidades (Bento Grid) */}
        <section className="py-16 md:py-24 px-5 md:px-8 bg-surface-container-low" id="especialidades">
          <div className="max-w-container-max mx-auto">
            <motion.div {...fadeUp} className="mb-10 md:mb-16">
              <h2 className="font-headline-lg text-3xl md:text-4xl lg:text-[40px] leading-tight text-primary mb-4">Cuidado Especializado e Integrativo</h2>
              <p className="font-body-lg text-base md:text-lg text-on-surface-variant max-w-2xl leading-relaxed">Tratamentos focados na raiz do problema, utilizando a medicina baseada em evidências para restaurar o equilíbrio do seu corpo.</p>
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
              {/* Card 1 (Large) */}
              <div className="lg:col-span-2 bg-surface-container-lowest p-6 md:p-8 rounded-xl border border-outline-variant flex flex-col justify-between relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow">
                <div className="z-10 relative">
                  <div className="bg-secondary-container/30 w-fit px-3 py-1 rounded-full mb-4 md:mb-6">
                    <span className="text-on-secondary-container font-label-md text-xs uppercase tracking-wider">Foco Principal</span>
                  </div>
                  <h3 className="font-headline-md text-2xl md:text-[32px] md:leading-[1.2] text-primary mb-3 md:mb-4">Menopausa e Climatério</h3>
                  <p className="text-on-surface-variant text-sm md:text-[17px] leading-relaxed max-w-md">Transição suave com reposição hormonal bioidêntica quando indicada, controle de sintomas (fogachos, ressecamento vaginal) e proteção óssea e cardiovascular.</p>
                </div>
                <span className="material-symbols-outlined absolute -bottom-8 -right-8 text-9xl text-surface-container opacity-50 group-hover:scale-110 transition-transform duration-700" style={{ fontVariationSettings: "'FILL' 1" }}>spa</span>
              </div>
              {/* Card 2 */}
              <div className="bg-surface-container-lowest p-6 md:p-8 rounded-xl border border-outline-variant flex flex-col shadow-sm hover:shadow-md transition-shadow">
                <span className="material-symbols-outlined text-secondary text-3xl md:text-4xl mb-4">water_drop</span>
                <h3 className="font-headline-md text-[20px] md:text-2xl leading-tight text-primary mb-3">Endometriose</h3>
                <p className="text-on-surface-variant text-sm md:text-[15px] leading-relaxed flex-1">Abordagem clínica focada no alívio da dor pélvica, preservação da fertilidade e controle do processo inflamatório crônico.</p>
              </div>
              {/* Card 3 */}
              <div className="bg-surface-container-lowest p-6 md:p-8 rounded-xl border border-outline-variant flex flex-col shadow-sm hover:shadow-md transition-shadow">
                <span className="material-symbols-outlined text-secondary text-3xl md:text-4xl mb-4">cycle</span>
                <h3 className="font-headline-md text-[20px] md:text-2xl leading-tight text-primary mb-3">Síndrome dos Ovários Policísticos</h3>
                <p className="text-on-surface-variant text-sm md:text-[15px] leading-relaxed flex-1">Tratamento focado na resistência insulínica, controle do hiperandrogenismo (acne, pelos) e regulação do ciclo menstrual.</p>
              </div>
              {/* Card 4 */}
              <div className="bg-surface-container-lowest p-6 md:p-8 rounded-xl border border-outline-variant flex flex-col shadow-sm hover:shadow-md transition-shadow">
                <span className="material-symbols-outlined text-secondary text-3xl md:text-4xl mb-4">balance</span>
                <h3 className="font-headline-md text-[20px] md:text-2xl leading-tight text-primary mb-3">Desequilíbrios Hormonais</h3>
                <p className="text-on-surface-variant text-sm md:text-[15px] leading-relaxed flex-1">Investigação e correção de distúrbios tireoidianos, fadiga adrenal e alterações no ciclo menstrual e libido.</p>
              </div>
              {/* Card 5 */}
              <div className="bg-surface-container-lowest p-6 md:p-8 rounded-xl border border-outline-variant flex flex-col shadow-sm hover:shadow-md transition-shadow">
                <span className="material-symbols-outlined text-secondary text-3xl md:text-4xl mb-4">monitor_heart</span>
                <h3 className="font-headline-md text-[20px] md:text-2xl leading-tight text-primary mb-3">Suporte Metabólico</h3>
                <p className="text-on-surface-variant text-sm md:text-[15px] leading-relaxed flex-1">Acompanhamento da composição corporal e otimização metabólica para suporte ao emagrecimento saudável e longevidade.</p>
              </div>
            </motion.div>
            <motion.div {...fadeIn} transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }} className="flex justify-center mt-12 md:mt-16">
              <button className="bg-primary-container text-on-primary-container w-full sm:w-auto px-6 lg:px-8 py-4 rounded font-label-md text-sm lg:text-base flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all shadow-sm">
                <span className="material-symbols-outlined text-[20px]">chat</span>
                Agendar Minha Consulta pelo WhatsApp
              </button>
            </motion.div>
          </div>
        </section>

        {/* Depoimentos */}
        <section className="py-16 md:py-24 px-5 md:px-8 bg-surface" id="depoimentos">
          <div className="max-w-container-max mx-auto">
            <motion.div {...fadeUp} className="text-center mb-10 md:mb-16">
              <h2 className="font-headline-lg text-3xl md:text-4xl lg:text-[40px] leading-tight text-primary mb-4">O que dizem nossas pacientes</h2>
              <p className="font-body-lg text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">Avaliações reais no Google de pacientes que resgataram sua vitalidade com um cuidado verdadeiramente individualizado.</p>
            </motion.div>
            
            <motion.div {...fadeUp} transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }} className="w-full relative overflow-hidden group pb-4">
              <div className="flex gap-6 animate-marquee w-max group-hover:[animation-play-state:paused]">
                {/* First Set */}
                {testimonials.map((t) => (
                  <div key={`t1-${t.id}`} className="bg-surface-container-lowest p-6 flex flex-col h-full rounded-xl shadow-sm border border-outline-variant/60 w-[300px] md:w-[380px] shrink-0">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex justify-center items-center font-bold text-lg ${t.bgColor}`}>{t.initial}</div>
                        <div>
                          <p className="font-label-md text-primary leading-tight">{t.name}</p>
                          <p className="text-xs text-on-surface-variant mt-0.5">{t.time}</p>
                        </div>
                      </div>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                    </div>
                    <div className="flex text-[#fbbc04] mb-3 -ml-0.5">
                      <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    </div>
                    <p className="text-on-surface-variant flex-grow text-sm leading-relaxed whitespace-normal">
                      "{t.text}"
                    </p>
                  </div>
                ))}
                {/* Duplicate Set for infinite scroll loop */}
                {testimonials.map((t) => (
                  <div key={`t2-${t.id}`} className="bg-surface-container-lowest p-6 flex flex-col h-full rounded-xl shadow-sm border border-outline-variant/60 w-[300px] md:w-[380px] shrink-0">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex justify-center items-center font-bold text-lg ${t.bgColor}`}>{t.initial}</div>
                        <div>
                          <p className="font-label-md text-primary leading-tight">{t.name}</p>
                          <p className="text-xs text-on-surface-variant mt-0.5">{t.time}</p>
                        </div>
                      </div>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                    </div>
                    <div className="flex text-[#fbbc04] mb-3 -ml-0.5">
                      <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    </div>
                    <p className="text-on-surface-variant flex-grow text-sm leading-relaxed whitespace-normal">
                      "{t.text}"
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div {...fadeIn} transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }} className="flex justify-center mt-12 md:mt-16">
              <button className="bg-primary-container text-on-primary-container w-full sm:w-auto px-6 lg:px-8 py-4 rounded font-label-md text-sm lg:text-base flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all shadow-sm">
                <span className="material-symbols-outlined text-[20px]">chat</span>
                Agendar Minha Consulta pelo WhatsApp
              </button>
            </motion.div>
          </div>
        </section>

        {/* Localização e Horário */}
        <section className="py-16 md:py-24 px-5 md:px-8 bg-surface-container-low" id="localizacao">
          <div className="max-w-container-max mx-auto">
            <motion.div {...fadeUp} className="text-center mb-10 md:mb-16">
              <h2 className="font-headline-lg text-3xl md:text-4xl lg:text-[40px] leading-tight text-primary mb-4">Onde Atendemos</h2>
              <p className="font-body-lg text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
                Venha nos fazer uma visita. Um ambiente acolhedor projetado para oferecer conforto e foco completo na sua saúde.
              </p>
            </motion.div>
            
            <motion.div {...fadeUp} transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }} className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
              
              {/* Informações */}
              <div className="bg-surface-container-lowest p-6 md:p-8 rounded-xl border border-outline-variant shadow-sm flex flex-col justify-center space-y-8">
                <div>
                  <h3 className="font-headline-md text-xl md:text-2xl text-primary mb-4 flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary">schedule</span>
                    Horário de Funcionamento
                  </h3>
                  <ul className="space-y-3 text-on-surface-variant text-base md:text-lg">
                    <li className="flex justify-between items-center border-b border-outline-variant/30 pb-2">
                      <span>Segunda a Quinta</span>
                      <span className="font-medium text-primary">08:00 - 18:00</span>
                    </li>
                    <li className="flex justify-between items-center border-b border-outline-variant/30 pb-2">
                      <span>Sexta-feira</span>
                      <span className="font-medium text-primary">09:00 - 18:00</span>
                    </li>
                    <li className="flex justify-between items-center text-on-surface-variant/70 italic">
                      <span>Sábados, Domingos e Feriados</span>
                      <span>Fechado</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-headline-md text-xl md:text-2xl text-primary mb-4 flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary">location_on</span>
                    Nossa Localização
                  </h3>
                  <p className="text-on-surface-variant leading-relaxed text-base md:text-lg">
                    Av. José Munia, 4500 - Sala 123<br />
                    Jardim Redentor<br />
                    São José do Rio Preto - SP, 15000-000
                  </p>
                </div>
              </div>

              {/* Mapa */}
              <div className="h-[350px] lg:h-auto w-full min-h-[350px] rounded-xl overflow-hidden shadow-sm border border-outline-variant relative group bg-surface-container">
                {/* Embed Map (Google Maps) */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3729.832791832962!2d-49.390886823867664!3d-20.838421880765955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bdade332561ea5%3A0x633fd054efafddbb!2sAv.%20Jos%C3%A9%20Munia%2C%20S%C3%A3o%20Jos%C3%A9%20do%20Rio%20Preto%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1714578132912!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 z-0"
                  title="Localização do Consultório no Google Maps"
                ></iframe>
                
                {/* Overlay link para clicar e abrir rotas */}
                <a 
                  href="https://maps.google.com/?q=Av.+José+Munia,+4500+-+São+José+do+Rio+Preto" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10 bg-black/0 hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 hover:opacity-100"
                  aria-label="Abrir no Google Maps"
                >
                  <span className="bg-surface text-primary px-4 py-2 rounded shadow-sm font-label-md flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span className="material-symbols-outlined">map</span>
                    Ver Rotas e Mapa Maior
                  </span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 md:py-24 lg:py-[100px] px-5 md:px-8 bg-primary text-on-primary">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8">
            <h2 className="font-display-lg text-3xl sm:text-4xl md:text-[44px] lg:text-[52px] leading-[1.15] lg:leading-[1.1] text-on-primary tracking-tight">Sua saúde hormonal merece atenção especializada.</h2>
            <p className="font-body-lg text-base md:text-lg text-on-primary-container max-w-2xl mx-auto leading-relaxed">
              Não normalize o desconforto. Agende uma avaliação e vamos juntos construir um plano terapêutico para devolver sua vitalidade e bem-estar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 md:pt-8">
              <button className="bg-surface text-primary w-full sm:w-auto px-6 md:px-8 py-4 rounded font-label-md text-sm md:text-base flex items-center justify-center gap-2 hover:bg-surface-container-low active:scale-95 transition-all shadow-sm">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_today</span>
                Agendar Consulta
              </button>
              <button className="border border-outline-variant text-on-primary w-full sm:w-auto px-6 md:px-8 py-4 rounded font-label-md text-sm md:text-base flex items-center justify-center gap-2 hover:bg-white/5 active:scale-95 transition-all">
                <span className="material-symbols-outlined">call</span>
                (17) 99999-9999
              </button>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-outline-variant bg-surface-container-lowest pt-10 md:pt-16 pb-8">
        <div className="max-w-container-max mx-auto flex flex-col items-center text-center px-5 md:px-8 gap-6 text-sm text-on-surface-variant leading-relaxed">
          <div className="font-headline-md text-lg lg:text-xl font-semibold text-primary uppercase tracking-widest">
            Dr. Marcelo Alexandre de Matos
          </div>
          <p className="opacity-90 max-w-md">
            © 2024 Dr. Marcelo Alexandre de Matos - CRM 12345. Especialista em Saúde Hormonal Feminina.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-4 md:mt-2">
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Termos de Uso</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Política de Privacidade</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Contato</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Localização</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
