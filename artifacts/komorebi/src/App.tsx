import { 
  ArrowDown,
  ArrowUpRight,
  Instagram,
  Mail,
  ExternalLink,
  X,
} from "lucide-react";
import { type ReactNode, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorBoundary } from "@/components/error-boundary";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Experiencia from "./Experiencia";
import Juegos from "./Juegos";
import Aprende from "./Aprende";
import Plantillas from "./Plantillas";
import { Route, Switch, useLocation, Link, Router as WouterRouter } from "wouter";

const bambusImg = "/bambu komorebi.png";
const imgFeminista = "/imagen-feminista.jpg";
const imgHojasMesa = "/imagen-hojas-mesa.jpg";
const imgMujer = "/imagen-mujer.jpg";
const imgTrabajando = "/imagen-trabajando.jpg";

const queryClient = new QueryClient();

const aboutCards = [
  {
    number: "¿QUÉ ES KOMOREBI?",
    title: "El destello inicial de tu camino emprendedor. ",
    copy: "Un espacio cercano y sin exclusiones para guiar a mujeres de cualquier edad a dar sus primeros pasos en el mundo digital, ordenar sus ideas y hacer crecer sus marcas con claridad y confianza.",
  },
  {
    number: "NUESTRA ESCENCIA",
    title: "Un proyecto construido desde la transparencia y la sororidad.",
    copy: "Creemos en el aprendizaje compartido y en crecer juntas, transformando el caos de emprender en un camino acompañado, honesto y sostenible.",
  },
  {
    number: "NUESTRA GUÍA",
    title: "Simplificamos tu llegada al mundo digital.",
    copy: "Combinamos historias reales, consejos prácticos, herramientas descargables, juegos de estrategia y una red de apoyo para que expongas tu negocio paso a paso, a tu propio ritmo.",
  },
];

const stages = [
  {
    id: "learning",
    number: "01",
    tag: "Aprende",
    title: "Learning",
    copy: "Aprende de las experiencias de nuestra comunidad y avanza con seguridad, paso a paso.",
    textBox: "Conoce las experiencias reales de otras emprendedoras que, como nosotras, empezaron desde cero. Aquí compartimos tanto los grandes aciertos como los obstáculos que superamos, para que te sientas acompañada en cada decisión. Además, encontrarás consejos prácticos de expertas que te darán la confianza necesaria para dar tus primeros pasos digitales.",
    card1Title: "Aprende con expertas",
    card1Sub: "Guías claras y tips profesionales para tu negocio",
    card2Title: "La voz de la experiencia",
    card2Sub: "Historias reales y sin filtros de mujeres emprendedoras.",
  },
  {
    id: "planning",
    number: "02",
    tag: "Organiza",
    title: "Planning",
    copy: "Organiza tu negocio con calma y claridad. Descarga, planifica y hazlo realidad.",
    textBox: "Para transformar tu idea en un negocio digital, necesitas un plan. En esta sección encontrarás herramientas, plantillas descargables y dinámicas de planificación designedas para organizar tus ideas de forma visual, sencilla y efectiva. Define tu rumbo y pon orden en tu emprendimiento sin sentirte abrumada.",
    card1Title: "Plantillas descargables",
    card1Sub: "Plantillas y herramientas prácticas listas para descargar y ordenar tu negocio.",
    card2Title: "Tests y juegos",
    card2Sub: "Dinámicas visuales y sencillas para estructurar tu marca de forma divertida.",
  },
  {
    id: "sharing",
    number: "03",
    tag: "Conecta",
    title: "Sharing",
    copy: "Un lugar para tejer redes, compartir conocimiento y crecer de la mano de otras mujeres.",
    textBox: "Un espacio seguro basado en la sororidad y el apoyo mutuo. Entra a nuestro foro para compartir tus retos, celebrar tus victorias, hacer preguntas y tejer redes con otras mujeres que entienden perfectamente el camino de emprender. ",
    card1Title: "Comunidad Discord",
    card1Sub: "Únete a nuestro servidor",
  },
];

function Home() {
  const [activeTab, setActiveTab] = useState("learning");
  const [isDiscordModalOpen, setIsDiscordModalOpen] = useState(false);
  const currentStage = stages.find((s) => s.id === activeTab) || stages[0];

  return (
    <main className="komorebi-page" data-testid="page-komorebi">
      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(74, 19, 38, 0.75);
          backdrop-filter: blur(6px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 100;
          padding: 1.5rem;
          box-sizing: border-box;
          animation: fadeIn 0.3s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>

      <div className="bamboos-frame" aria-hidden="true">
        <div className="bamboo-side left">
          <img src={bambusImg} alt="" className="bamboo-item item-0" />
          <img src={bambusImg} alt="" className="bamboo-item item-1" />
          <img src={bambusImg} alt="" className="bamboo-item item-2" />
          <img src={bambusImg} alt="" className="bamboo-item item-3" />
          <img src={bambusImg} alt="" className="bamboo-item item-4" />
          <img src={bambusImg} alt="" className="bamboo-item item-5" />
          <img src={bambusImg} alt="" className="bamboo-item item-6" />
          <img src={bambusImg} alt="" className="bamboo-item item-7" />
        </div>
        <div className="bamboo-side right">
          <img src={bambusImg} alt="" className="bamboo-item item-0" />
          <img src={bambusImg} alt="" className="bamboo-item item-1" />
          <img src={bambusImg} alt="" className="bamboo-item item-2" />
          <img src={bambusImg} alt="" className="bamboo-item item-3" />
          <img src={bambusImg} alt="" className="bamboo-item item-4" />
          <img src={bambusImg} alt="" className="bamboo-item item-5" />
          <img src={bambusImg} alt="" className="bamboo-item item-6" />
          <img src={bambusImg} alt="" className="bamboo-item item-7" />
        </div>
      </div>

      <header className="site-header">
        <nav className="nav-pill" aria-label="Navegación principal">
          <a href="#inicio" data-testid="link-home">Komorebi</a>
          <a href="#sobre" data-testid="link-sobre">Sobre Komorebi</a>
          <a href="#camino" data-testid="link-camino">Contenidos</a>
          <a href="#contacto" data-testid="link-contacto">Contacto</a>
        </nav>
      </header>

      <section 
        className="hero" 
        id="inicio" 
        data-testid="section-inicio"
        style={{
          backgroundImage: `linear-gradient(rgba(35, 8, 18, 0.92), rgba(60, 12, 28, 0.95)), url(${imgFeminista})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          maxWidth: '100vw'
        }}
      >
        <div className="reveal" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', width: '100%', position: 'relative', zIndex: 10, pointerEvents: 'auto' }}>
          <p className="hero-kicker">Bienvenida</p>
          <div className="wordmark logo-wrapper" role="img" aria-label="Komorebi" data-testid="text-wordmark" style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '0.2rem 0' }}>
            <img 
              src="https://res.cloudinary.com/x3pd9fct/image/upload/v1790714346/Komorebi_gif.gif" 
              alt="Komorebi Animación" 
              className="komorebi-gif-animacion"
              style={{ 
                width: '100%',
                maxWidth: '1200px',
                height: 'auto',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                position: 'relative',
                top: '-0.5rem',
                pointerEvents: 'none'
              }} 
            />
          </div>
          <p className="hero-copy reveal-delay" style={{ marginTop: '0.2rem', marginBottom: '1.2rem' }}>
            El destello inicial de tu camino emprendedor
          </p>
          <a className="text-link reveal-delay-2" href="#camino" data-testid="link-descubrir" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.55rem', padding: '0.7rem 1.1rem',
            border: '1px solid var(--teal)', borderRadius: '999px', background: 'var(--teal)',
            color: 'var(--cream)', fontFamily: 'var(--app-font-mono)', fontSize: '0.62rem',
            letterSpacing: '0.1em', textDecoration: 'none', textTransform: 'uppercase',
            position: 'relative', zIndex: 20, cursor: 'pointer', pointerEvents: 'auto'
          }}>
            Ir a contenidos <ArrowDown aria-hidden="true" size={14} />
          </a>
        </div>
      </section>

      <section 
        className="section" 
        id="sobre" 
        data-testid="section-sobre"
        style={{
          backgroundImage: `linear-gradient(rgba(74, 19, 38, 0.85), rgba(74, 19, 38, 0.75)), url(${imgHojasMesa})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          maxWidth: '100vw',
          paddingLeft: '6vw',
          paddingRight: '6vw'
        }}
      >
        <div className="section-heading">
          <div>
            <h2 className="section-title">Sobre<br />Komorebi</h2>
          </div>
        </div>
        <div className="about-grid">
          {aboutCards.map((card) => (
            <article className="about-card" key={card.number} data-testid={`card-about-${card.number.slice(0, 2)}`}>
              <span className="card-number">{card.number}</span>
              <h3>{card.title}</h3>
              <p>{card.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section 
        className="section process-section" 
        id="camino" 
        data-testid="section-camino"
        style={{
          backgroundImage: `linear-gradient(rgba(74, 19, 38, 0.8), rgba(74, 19, 38, 0.9)), url(${imgMujer})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          maxWidth: '100vw',
          paddingLeft: '6vw',
          paddingRight: '6vw'
        }}
      >
        <div className="process-heading">
          <div>
            <h2 className="section-title">Contenidos</h2>
          </div>
        </div>

        <div className="hsr-carousel-wrapper" style={{ display: 'flex', gap: '2.5rem', alignItems: 'flex-start', marginTop: '2rem' }}>
          <div className="hsr-bubbles-menu" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', paddingTop: '1rem' }}>
            {stages.map((stage) => (
              <button
                key={stage.id}
                onClick={() => setActiveTab(stage.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  opacity: activeTab === stage.id ? 1 : 0.5,
                  transition: 'all 0.3s ease',
                  textAlign: 'left'
                }}
              >
                <div 
                  className="bubble-circle" 
                  style={{
                    width: '65px',
                    height: '65px',
                    borderRadius: '50%',
                    border: '2px solid var(--gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: activeTab === stage.id ? 'rgba(231, 195, 107, 0.25)' : 'transparent',
                    boxShadow: activeTab === stage.id ? '0 0 15px rgba(231, 195, 107, 0.4)' : 'none'
                  }}
                >
                  <span style={{ fontFamily: 'var(--app-font-mono)', fontSize: '0.85rem', color: 'var(--cream)', fontWeight: 'bold' }}>
                    {stage.number}
                  </span>
                </div>
                <span style={{ fontFamily: 'var(--app-font-serif)', color: 'var(--cream)', fontSize: '1.2rem', fontWeight: 'bold' }}>
                  {stage.title}
                </span>
              </button>
            ))}
          </div>

          <div 
            key={currentStage.id}
            className="hsr-display-panel" 
            style={{ 
              flex: 1,
              border: '2px solid var(--gold)',
              borderRadius: '24px',
              padding: '2.5rem',
              backgroundColor: 'rgba(45, 12, 28, 0.75)',
              backdropFilter: 'blur(14px)',
              boxShadow: '0 12px 35px rgba(0,0,0,0.4)',
              animation: 'fadeInSlide 0.4s ease-in-out'
            }}
          >
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontFamily: 'var(--app-font-serif)', fontSize: '2.5rem', color: 'var(--gold)', marginBottom: '0.5rem' }}>
                {currentStage.title}
              </h3>
              <p style={{ fontFamily: 'var(--app-font-sans)', fontSize: '1.05rem', color: 'var(--cream)', opacity: '0.9' }}>
                {currentStage.copy}
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '2rem', alignItems: 'center' }}>
              <div 
                style={{ 
                  backgroundColor: '#249A9E', 
                  borderRadius: '16px', 
                  padding: '1.8rem', 
                  color: 'var(--berry)',
                  fontFamily: 'var(--app-font-sans)',
                  fontSize: '0.95rem',
                  lineHeight: '1.5',
                  whiteSpace: 'pre-line',
                  boxShadow: 'inset 0 2px 5px rgba(0,0,0,0.1)',
                  minHeight: '260px'
                }}
              >
                {currentStage.textBox}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {currentStage.id === "sharing" ? (
                  <div onClick={() => setIsDiscordModalOpen(true)} style={{ textDecoration: 'none', display: 'block' }}>
                    <div style={{
                      backgroundColor: 'rgba(70, 15, 40, 0.9)',
                      border: '1px solid rgba(231, 195, 107, 0.4)',
                      borderRadius: '14px',
                      padding: '1.2rem',
                      cursor: 'pointer',
                      transition: 'transform 0.2s ease, border-color 0.2s ease',
                    }} className="interactive-card">
                      <div style={{ fontFamily: 'var(--app-font-serif)', fontSize: '1.1rem', color: 'var(--cream)', fontWeight: 'bold' }}>
                        {currentStage.card1Title}
                      </div>
                      <div style={{ fontFamily: 'var(--app-font-mono)', fontSize: '0.8rem', color: 'var(--gold)', marginTop: '0.3rem' }}>
                        {currentStage.card1Sub}
                      </div>
                    </div>
                  </div>
                ) : currentStage.id === "learning" ? (
                  <Link href="/aprende" style={{ textDecoration: 'none', display: 'block' }}>
                    <div style={{
                      backgroundColor: 'rgba(70, 15, 40, 0.9)',
                      border: '1px solid rgba(231, 195, 107, 0.4)',
                      borderRadius: '14px',
                      padding: '1.2rem',
                      cursor: 'pointer',
                      transition: 'transform 0.2s ease, border-color 0.2s ease',
                    }} className="interactive-card">
                      <div style={{ fontFamily: 'var(--app-font-serif)', fontSize: '1.1rem', color: 'var(--cream)', fontWeight: 'bold' }}>
                        {currentStage.card1Title}
                      </div>
                      <div style={{ fontFamily: 'var(--app-font-mono)', fontSize: '0.8rem', color: 'var(--gold)', marginTop: '0.3rem' }}>
                        {currentStage.card1Sub}
                      </div>
                    </div>
                  </Link>
                ) : (
                  <Link href="/plantillas" style={{ textDecoration: 'none', display: 'block' }}>
                    <div style={{
                      backgroundColor: 'rgba(70, 15, 40, 0.9)',
                      border: '1px solid rgba(231, 195, 107, 0.4)',
                      borderRadius: '14px',
                      padding: '1.2rem',
                      cursor: 'pointer',
                      transition: 'transform 0.2s ease, border-color 0.2s ease',
                    }} className="interactive-card">
                      <div style={{ fontFamily: 'var(--app-font-serif)', fontSize: '1.1rem', color: 'var(--cream)', fontWeight: 'bold' }}>
                        {currentStage.card1Title}
                      </div>
                      <div style={{ fontFamily: 'var(--app-font-mono)', fontSize: '0.8rem', color: 'var(--gold)', marginTop: '0.3rem' }}>
                        {currentStage.card1Sub}
                      </div>
                    </div>
                  </Link>
                )}

                {currentStage.card2Title && (
                  <Link 
                    href={currentStage.id === "planning" ? "/juegos" : "/experiencia"} 
                    style={{ textDecoration: 'none', display: 'block' }}
                  >
                    <div 
                      style={{
                        backgroundColor: 'rgba(70, 15, 40, 0.9)',
                        border: '1px solid rgba(231, 195, 107, 0.4)',
                        borderRadius: '14px',
                        padding: '1.2rem',
                        cursor: 'pointer',
                        transition: 'transform 0.2s ease, border-color 0.2s ease',
                      }}
                      className="interactive-card"
                    >
                      <div style={{ fontFamily: 'var(--app-font-serif)', fontSize: '1.1rem', color: 'var(--cream)', fontWeight: 'bold' }}>
                        {currentStage.card2Title}
                      </div>
                      <div style={{ fontFamily: 'var(--app-font-mono)', fontSize: '0.8rem', color: 'var(--gold)', marginTop: '0.3rem' }}>
                        {currentStage.card2Sub}
                      </div>
                    </div>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section 
        className="section contact-section" 
        id="contacto" 
        data-testid="section-contacto"
        style={{
          backgroundImage: `linear-gradient(rgba(74, 19, 38, 0.9), rgba(74, 19, 38, 0.8)), url(${imgTrabajando})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          maxWidth: '100vw',
          paddingLeft: '6vw',
          paddingRight: '6vw'
        }}
      >
        <div className="contact-shell">
          <h2 className="contact-title">Contáctanos</h2>
          <p className="contact-subtitle">
            ¿Tienes una idea, una pregunta o simplemente quieres saludar? La puerta está abierta.
          </p>
          <div className="contact-grid">
            <a className="contact-block" href="https://www.tiktok.com/@komorebi_guia" target="_blank" rel="noreferrer" data-testid="link-tiktok">
              <svg 
                viewBox="0 0 24 24" 
                width="24" 
                height="24" 
                style={{ width: '24px', height: '24px', fill: 'var(--gold)', marginBottom: '0.3rem', display: 'block' }}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
              <span className="contact-label">TikTok</span>
              <span className="contact-detail">@komorebi_guia <ArrowUpRight aria-hidden="true" size={14} /></span>
            </a>

            <a className="contact-block" href="mailto:minekoagencia@gmail.com" data-testid="link-email">
              <Mail aria-hidden="true" />
              <span className="contact-label">Escríbenos</span>
              <span className="contact-detail">minekoagencia@gmail.com <ArrowUpRight aria-hidden="true" size={14} /></span>
            </a>

            <a className="contact-block" href="https://www.instagram.com/komorebi_guia/" target="_blank" rel="noreferrer" data-testid="link-instagram">
              <Instagram aria-hidden="true" />
              <span className="contact-label">Instagram</span>
              <span className="contact-detail">@komorebi_guia <ArrowUpRight aria-hidden="true" size={14} /></span>
            </a>
          </div>
          <footer className="footer-row">
            <span>© 2026 Mineko · Todos los derechos reservados</span>
            <a href="#inicio" data-testid="link-volver-arriba">Volver arriba ↑</a>
          </footer>
        </div>
      </section>

      {isDiscordModalOpen && (
        <div className="modal-overlay" onClick={() => setIsDiscordModalOpen(false)}>
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "#E6DEC9",
              border: "3px solid #249A9E",
              borderRadius: "24px",
              width: "100%",
              maxWidth: "500px",
              padding: "2.5rem 2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              position: "relative",
              boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
              color: "#4A1326",
            }}
          >
            <button
              onClick={() => setIsDiscordModalOpen(false)}
              style={{
                position: "absolute",
                top: "15px",
                right: "15px",
                background: "none",
                border: "none",
                color: "#4A1326",
                cursor: "pointer",
                padding: "0.2rem",
              }}
            >
              <X size={24} />
            </button>

            <div
              style={{
                backgroundColor: "#249A9E",
                width: "65px",
                height: "65px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1.2rem",
                boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
                border: "2px solid #E7C36B",
              }}
            >
              <svg viewBox="0 0 24 24" width="30" height="30" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.927 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </div>

            <h3 style={{ fontFamily: "var(--app-font-serif)", fontSize: "1.8rem", color: "#249A9E", marginBottom: "0.8rem" }}>
              Comunidad Komorebi
            </h3>

            <p style={{ fontFamily: "var(--app-font-sans)", fontSize: "1rem", lineHeight: "1.5", marginBottom: "1.8rem", opacity: 0.9 }}>
              Únete a nuestro servidor de Discord para compartir tus retos, celebrar tus victorias y tejer redes con otras emprendedoras.
            </p>

            <a
              href="https://discord.gg/uadu4Nx37"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "#249A9E",
                color: "#FFFFFF",
                fontFamily: "var(--app-font-mono)",
                fontSize: "0.95rem",
                fontWeight: "bold",
                padding: "0.8rem 1.6rem",
                borderRadius: "999px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                boxShadow: "0 6px 15px rgba(36, 154, 158, 0.3)",
                transition: "transform 0.2s ease",
              }}
            >
              Unirme al servidor <ExternalLink size={16} />
            </a>
          </div>
        </div>
      )}
    </main>
  );
}

function Router() {
  const baseUrl = import.meta.env.BASE_URL ? import.meta.env.BASE_URL.replace(/\/$/, "") : "";
  return (
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/juegos" component={Juegos} />
        <Route path="/experiencia" component={Experiencia} />
        <Route path="/aprende" component={Aprende} />
        <Route path="/plantillas" component={Plantillas} />
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  const baseUrl = import.meta.env.BASE_URL ? import.meta.env.BASE_URL.replace(/\/$/, "") : "";
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={baseUrl}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
/*hola amiga*/