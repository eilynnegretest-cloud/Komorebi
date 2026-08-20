import { ArrowDown, ArrowUpRight, Instagram, Mail, MessageCircle } from 'lucide-react';
import { type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';

const queryClient = new QueryClient();

const aboutCards = [
  {
    number: '01 / MIRADA',
    title: 'Aprender con curiosidad',
    copy: 'Un lugar para acercarnos al español desde las preguntas que nos mueven.',
  },
  {
    number: '02 / RITMO',
    title: 'Planificar sin prisa',
    copy: 'Pequeños pasos, buenas pausas y una forma más amable de avanzar.',
  },
  {
    number: '03 / VÍNCULO',
    title: 'Compartir lo vivido',
    copy: 'Ideas, hallazgos y conversaciones que hacen del camino algo colectivo.',
  },
];

const stages = [
  {
    number: '01',
    tag: 'Aprende',
    title: 'Learning',
    copy: 'Recoge palabras, referencias y preguntas. Todo empieza con mirar de cerca.',
    board: 'board--learning',
    note: 'una palabra nueva',
  },
  {
    number: '02',
    tag: 'Organiza',
    title: 'Planning',
    copy: 'Dale forma a tu tiempo con una planificación que deja espacio para lo inesperado.',
    board: 'board--planning',
    note: 'esta semana',
  },
  {
    number: '03',
    tag: 'Conecta',
    title: 'Sharing',
    copy: 'Comparte tu proceso. Lo que aprendes crece cuando encuentra otra mirada.',
    board: 'board--sharing',
    note: 'para compartir',
  },
];

function Board({ variant, note }: { variant: string; note: string }) {
  return (
    <div className={`board ${variant}`} data-testid={`board-${variant}`}>
      <div className="board-topline">
        <span>komorebi / espacio</span>
        <span>•••</span>
      </div>
      <div className="board-layout">
        <div className="board-sidebar" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="board-main" aria-hidden="true">
          <div className="board-line" />
          <div className="board-line short" />
          <div className="board-line" />
          <div className="board-line short" />
        </div>
      </div>
      <div className="board-note">{note}</div>
    </div>
  );
}

function Home() {
  return (
    <main className="komorebi-page" data-testid="page-komorebi">
      <header className="site-header">
        <a className="mini-mark" href="#inicio" data-testid="link-home">Komorebi</a>
        <nav className="nav-pill" aria-label="Navegación principal">
          <a href="#sobre" data-testid="link-sobre">Sobre</a>
          <a href="#camino" data-testid="link-camino">Camino</a>
          <a href="#contacto" data-testid="link-contacto">Contacto</a>
        </nav>
      </header>

      <section className="hero" id="inicio" data-testid="section-inicio">
        <div className="reveal">
          <p className="hero-kicker">un espacio para lo que está por venir</p>
          <h1 className="wordmark" data-testid="text-wordmark">Komorebi</h1>
          <p className="hero-copy reveal-delay">
            Aprender, planificar y compartir el español desde un lugar más <em>humano.</em>
          </p>
          <a className="text-link reveal-delay-2" href="#sobre" data-testid="link-descubrir">
            Descubre el espacio <ArrowDown aria-hidden="true" />
          </a>
        </div>
        <div className="scroll-note" aria-hidden="true">baja despacio</div>
      </section>

      <section className="section" id="sobre" data-testid="section-sobre">
        <div className="section-heading">
          <div>
            <p className="section-kicker">/ una forma de estar</p>
            <h2 className="section-title">Sobre<br />Komorebi</h2>
          </div>
          <p className="section-intro">
            Komorebi es la luz que se cuela entre las hojas. <strong>También puede ser una manera de aprender.</strong>
          </p>
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

      <section className="section process-section" id="camino" data-testid="section-camino">
        <div className="process-heading">
          <div>
            <p className="section-kicker">/ el camino</p>
            <h2 className="section-title">Una cosa<br />lleva a otra</h2>
          </div>
          <p>Una pequeña estructura para dejar que las ideas respiren, se ordenen y encuentren a alguien.</p>
        </div>
        <div className="stage-list">
          {stages.map((stage) => (
            <article className="stage" key={stage.number} data-testid={`stage-${stage.number}`}>
              <div className="stage-marker">
                <span className="stage-number">{stage.number}</span>
                <span className="stage-tag">{stage.tag}</span>
              </div>
              <div className="stage-content">
                <h3>{stage.title}</h3>
                <p>{stage.copy}</p>
                <Board variant={stage.board} note={stage.note} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section contact-section" id="contacto" data-testid="section-contacto">
        <div className="contact-shell">
          <p className="section-kicker">/ seguimos hablando</p>
          <h2 className="contact-title">Contáctanos</h2>
          <p className="contact-subtitle">¿Tienes una idea, una pregunta o simplemente quieres saludar? La puerta está abierta.</p>
          <div className="contact-grid">
            <a className="contact-block" href="https://wa.me/34600000000" target="_blank" rel="noreferrer" data-testid="link-whatsapp">
              <MessageCircle aria-hidden="true" />
              <span className="contact-label">WhatsApp</span>
              <span className="contact-detail">+34 600 000 000 <ArrowUpRight aria-hidden="true" size={14} /></span>
            </a>
            <a className="contact-block" href="mailto:hola@komorebi.es" data-testid="link-email">
              <Mail aria-hidden="true" />
              <span className="contact-label">Escríbenos</span>
              <span className="contact-detail">hola@komorebi.es <ArrowUpRight aria-hidden="true" size={14} /></span>
            </a>
            <a className="contact-block" href="https://instagram.com/komorebi.espacio" target="_blank" rel="noreferrer" data-testid="link-instagram">
              <Instagram aria-hidden="true" />
              <span className="contact-label">Instagram</span>
              <span className="contact-detail">@komorebi.espacio <ArrowUpRight aria-hidden="true" size={14} /></span>
            </a>
          </div>
          <footer className="footer-row">
            <span>© 2024 Komorebi · Hecho con calma</span>
            <a href="#inicio" data-testid="link-volver-arriba">Volver arriba ↑</a>
          </footer>
        </div>
      </section>
    </main>
  );
}

function Router() {
  return (
    <RoutedErrorBoundary>
      <Switch>
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
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;