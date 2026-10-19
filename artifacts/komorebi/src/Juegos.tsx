import { useState } from "react";
import { ArrowLeft, Sparkles, CheckCircle2, RefreshCw, Droplets, Flame, Sun, Heart, Zap, Leaf, ClipboardCheck, ArrowRight, Lightbulb } from "lucide-react";
import { Link } from "wouter";

function AdBanner() {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "800px",
        margin: "3rem auto 1rem auto",
        backgroundColor: "rgba(36, 154, 158, 0.15)",
        border: "2px dashed #249A9E",
        borderRadius: "16px",
        padding: "1.2rem",
        textAlign: "center",
        boxSizing: "border-box",
      }}
    >
      <span
        style={{
          display: "block",
          fontFamily: "var(--app-font-mono)",
          fontSize: "0.75rem",
          color: "#249A9E",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          marginBottom: "0.4rem",
        }}
      >
        Espacio Publicitario / Anuncio
      </span>

      <div
        style={{
          backgroundColor: "#E6DEC9",
          borderRadius: "8px",
          padding: "1.5rem",
          color: "#4A1326",
          fontFamily: "var(--app-font-sans)",
          fontSize: "0.9rem",
          border: "1px solid rgba(74, 19, 38, 0.15)",
        }}
      >
         <em>Publicidad</em> 
      </div>
    </div>
  );
}

interface VibeProfile {
  name: string;
  title: string;
  description: string;
  palettes: string[][];
  fonts: string[];
  iconStyle: string;
  avatarBg: string;
  iconComponent: React.ReactNode;
}

const vibeProfiles: Record<string, VibeProfile> = {
  laguna: {
    name: "Laguna",
    title: "La Esencia Profunda y Serena",
    description: "Transmites calma absoluta, misterio sutil y una confianza inquebrantable. Tu marca fluye con elegancia silenciosa y profundidad.",
    palettes: [
      ["#1b4965", "#62b6cb", "#bee9e8", "#5fa8d3"],
      ["#249a9e", "#ffffff", "#123537"],
      ["#48cae4", "#03045e"]
    ],
    fonts: ["Cinzel", "Montserrat", "Lato", "Cormorant Garamond"],
    iconStyle: "Líneas fluidas, formas orgánicas acuáticas y minimalismo elegante.",
    avatarBg: "#1b4965",
    iconComponent: <Droplets size={40} color="#e7c36b" />
  },
  belladona: {
    name: "Belladona",
    title: "La Esencia Magnética y Enigmática",
    description: "Posees un atractivo oscuro, sofisticado y cautivador. Tu marca no pasa desapercibida; seduce, impone y deja huella.",
    palettes: [
      ["#3a0ca3", "#7209b7", "#f72585", "#4cc9f0"],
      ["#2b091e", "#560bad", "#b5179e"],
      ["#4a1326", "#e7c36b"]
    ],
    fonts: ["Playfair Display", "Cormorant Garamond", "Cinzel", "Montserrat"],
    iconStyle: "Contrastes dramáticos, trazos finos, detalles lujosos y góticos sutiles.",
    avatarBg: "#4a1326",
    iconComponent: <Flame size={40} color="#e7c36b" />
  },
  solsticio: {
    name: "Solsticio",
    title: "La Esencia Radiante y Vital",
    description: "Irradias energía cálida, optimismo expansivo y luz propia. Tu proyecto ilumina y contagia vitalidad a cualquier espacio.",
    palettes: [
      ["#f77f00", "#fcbf49", "#eae2b7", "#d62828"],
      ["#ffb703", "#fb8500", "#023047"],
      ["#dda15e", "#606c38"]
    ],
    fonts: ["Syne", "Poppins", "Quicksand", "Space Grotesk"],
    iconStyle: "Geometrías solares, destellos, formas orgánicas cálidas y alegres.",
    avatarBg: "#f4a261",
    iconComponent: <Sun size={40} color="#4a1326" />
  },
  terciopelo: {
    name: "Terciopelo",
    title: "La Esencia Acogedora y Nostálgica",
    description: "Eres un refugio de suavidad y afecto. Envuelves a quienes te leen en una atmósfera de calidez hogareña y tacto delicado.",
    palettes: [
      ["#dda15e", "#bc6c25", "#283618", "#fefae0"],
      ["#99582a", "#bb9457", "#ffe5d9"],
      ["#6f1d1b", "#bb8588"]
    ],
    fonts: ["Quicksand", "Lora", "Comfortaa", "Merriweather"],
    iconStyle: "Texturas suaves, esquinas redondeadas, trazos amables tipo doodle.",
    avatarBg: "#bc6c25",
    iconComponent: <Heart size={40} color="#fefae0" />
  },
  neon: {
    name: "Neón",
    title: "La Esencia Disruptiva y Eléctrica",
    description: "Rompes esquemas con una energía moderna, vanguardista y audaz. Tu marca es puro pulso digital, velocidad y contraste.",
    palettes: [
      ["#00f5d4", "#7b2cbf", "#f72585", "#3a0ca3"],
      ["#ff0054", "#ff5400", "#ffbd00"],
      ["#06d6a0", "#118ab2"]
    ],
    fonts: ["Space Grotesk", "Fredoka", "Syne", "Poppins"],
    iconStyle: "Bloques de color sólidos, alta saturación, estética glitch y moderna.",
    avatarBg: "#7b2cbf",
    iconComponent: <Zap size={40} color="#00f5d4" />
  },
  botanica: {
    name: "Botánica",
    title: "La Esencia Orgánica y Silvestre",
    description: "Vives en sintonía con la tierra, lo artesanal y lo genuino. Tu proyecto huele a bosque, raíces y procesos conscientes.",
    palettes: [
      ["#283618", "#606c38", "#dda15e", "#283618"],
      ["#38b000", "#007200", "#ccff33"],
      ["#31572c", "#90a955"]
    ],
    fonts: ["Itim", "Lora", "Merriweather", "Nunito"],
    iconStyle: "Elementos botánicos finos, imperfecciones naturales y estilo rústico.",
    avatarBg: "#606c38",
    iconComponent: <Leaf size={40} color="#fefae0" />
  }
};

const gameRounds = [
  { 
    id: 1, 
    category: "Ronda 1: Estilos y tonos iniciales", 
    words: [
      {text: "agua clara", vibe: "laguna"}, 
      {text: "sombra misteriosa", vibe: "belladona"}, 
      {text: "luz brillante", vibe: "solsticio"}, 
      {text: "tacto suave", vibe: "terciopelo"}, 
      {text: "color llamativo", vibe: "neon"}, 
      {text: "estilo natural", vibe: "botanica"},
      {text: "eco lejano", vibe: "laguna"},
      {text: "silencio tranquilo", vibe: "belladona"},
      {text: "mañana fresca", vibe: "solsticio"},
      {text: "estilo casero", vibe: "terciopelo"}
    ] 
  },
  { 
    id: 2, 
    category: "Ronda 2: Ambiente y carácter", 
    words: [
      {text: "paso tranquilo", vibe: "laguna"}, 
      {text: "estilo reservado", vibe: "belladona"}, 
      {text: "energía alegre", vibe: "solsticio"}, 
      {text: "abrazo cálido", vibe: "terciopelo"}, 
      {text: "ritmo rápido", vibe: "neon"}, 
      {text: "ritmo campestre", vibe: "botanica"},
      {text: "paz mental", vibe: "laguna"},
      {text: "toque elegante", vibe: "belladona"},
      {text: "ideas claras", vibe: "solsticio"},
      {text: "esencia de planta", vibe: "botanica"}
    ] 
  },
  { 
    id: 3, 
    category: "Ronda 3: Formas y trazos", 
    words: [
      {text: "línea continua", vibe: "laguna"}, 
      {text: "borde fino", vibe: "belladona"}, 
      {text: "curva abierta", vibe: "solsticio"}, 
      {text: "borde suave", vibe: "terciopelo"}, 
      {text: "figura moderna", vibe: "neon"}, 
      {text: "trazo libre", vibe: "botanica"},
      {text: "onda ligera", vibe: "laguna"},
      {text: "sombra sutil", vibe: "belladona"},
      {text: "punto de luz", vibe: "solsticio"},
      {text: "forma orgánica", vibe: "botanica"}
    ] 
  },
  { 
    id: 4, 
    category: "Ronda 4: Ritmos de trabajo", 
    words: [
      {text: "pausa y piensa", vibe: "laguna"}, 
      {text: "presencia fuerte", vibe: "belladona"}, 
      {text: "impulso alegre", vibe: "solsticio"}, 
      {text: "descanso cómodo", vibe: "terciopelo"}, 
      {text: "cambio total", vibe: "neon"}, 
      {text: "paso constante", vibe: "botanica"},
      {text: "constancia líquida", vibe: "laguna"},
      {text: "estilo único", vibe: "belladona"},
      {text: "idea espontánea", vibe: "solsticio"},
      {text: "lugar seguro", vibe: "terciopelo"}
    ] 
  },
  { 
    id: 5, 
    category: "Ronda 5: Elementos visuales", 
    words: [
      {text: "cielo despejado", vibe: "laguna"}, 
      {text: "noche elegante", vibe: "belladona"}, 
      {text: "sol de mediodía", vibe: "solsticio"}, 
      {text: "hogar dulce", vibe: "terciopelo"}, 
      {text: "onda digital", vibe: "neon"}, 
      {text: "bosque verde", vibe: "botanica"},
      {text: "reflejo de agua", vibe: "laguna"},
      {text: "tono oscuro", vibe: "belladona"},
      {text: "rayo de sol", vibe: "solsticio"},
      {text: "tierra y rocío", vibe: "botanica"}
    ] 
  },
  { 
    id: 6, 
    category: "Ronda 6: Niveles de energía", 
    words: [
      {text: "equilibrio diario", vibe: "laguna"}, 
      {text: "atracción única", vibe: "belladona"}, 
      {text: "energía viva", vibe: "solsticio"}, 
      {text: "cariño sincero", vibe: "terciopelo"}, 
      {text: "onda eléctrica", vibe: "neon"}, 
      {text: "paz natural", vibe: "botanica"},
      {text: "aire fresco", vibe: "laguna"},
      {text: "toque sutil", vibe: "belladona"},
      {text: "calor humano", vibe: "solsticio"},
      {text: "calma profunda", vibe: "terciopelo"}
    ] 
  },
  { 
    id: 7, 
    category: "Ronda 7: Sensaciones al crear", 
    words: [
      {text: "mente clara", vibe: "laguna"}, 
      {text: "mirada fija", vibe: "belladona"}, 
      {text: "ánimo arriba", vibe: "solsticio"}, 
      {text: "abrazo tierno", vibe: "terciopelo"}, 
      {text: "estilo moderno", vibe: "neon"}, 
      {text: "memoria verde", vibe: "botanica"},
      {text: "paz firme", vibe: "laguna"},
      {text: "carácter fuerte", vibe: "belladona"},
      {text: "optimismo puro", vibe: "solsticio"},
      {text: "ayuda dulce", vibe: "terciopelo"}
    ] 
  },
  { 
    id: 8, 
    category: "Ronda 8: Enfoques de marca", 
    words: [
      {text: "orden tranquilo", vibe: "laguna"}, 
      {text: "toque exclusivo", vibe: "belladona"}, 
      {text: "luz abierta", vibe: "solsticio"}, 
      {text: "trato amable", vibe: "terciopelo"}, 
      {text: "estilo audaz", vibe: "neon"}, 
      {text: "esencia viva", vibe: "botanica"},
      {text: "fluidez simple", vibe: "laguna"},
      {text: "perfil fino", vibe: "belladona"},
      {text: "calor solar", vibe: "solsticio"},
      {text: "refugio cálido", vibe: "terciopelo"}
    ] 
  },
  { 
    id: 9, 
    category: "Ronda 9: Expresiones de marca", 
    words: [
      {text: "ritmo constante", vibe: "laguna"}, 
      {text: "sombra fina", vibe: "belladona"}, 
      {text: "chispa vital", vibe: "solsticio"}, 
      {text: "voz suave", vibe: "terciopelo"}, 
      {text: "impacto visual", vibe: "neon"}, 
      {text: "raíz fuerte", vibe: "botanica"},
      {text: "agua limpia", vibe: "laguna"},
      {text: "mirada atenta", vibe: "belladona"},
      {text: "sonrisa abierta", vibe: "solsticio"},
      {text: "paso seguro", vibe: "botanica"}
    ] 
  },
  { 
    id: 10, 
    category: "Ronda 10: Universos de marca", 
    words: [
      {text: "espacio azul", vibe: "laguna"}, 
      {text: "estilo nocturno", vibe: "belladona"}, 
      {text: "tarde activa", vibe: "solsticio"}, 
      {text: "abrigo seguro", vibe: "terciopelo"}, 
      {text: "onda urbana", vibe: "neon"}, 
      {text: "espacio verde", vibe: "botanica"},
      {text: "espejo de agua", vibe: "laguna"},
      {text: "misterio suave", vibe: "belladona"},
      {text: "foco de luz", vibe: "solsticio"},
      {text: "rincón acogedor", vibe: "terciopelo"}
    ] 
  },
];

const diagnosticQuestions = [
  { id: 1, category: "Claridad Estratégica", text: "¿Tienes definido claramente qué problema único resuelve tu producto o servicio para tus clientes?" },
  { id: 2, category: "Claridad Estratégica", text: "¿Cuentas con una propuesta de valor escrita que puedas explicar en menos de 30 segundos?" },
  { id: 3, category: "Identidad Visual", text: "¿Tu marca utiliza una paleta de colores y tipografías consistente en todas tus publicaciones y productos?" },
  { id: 4, category: "Identidad Visual", text: "¿Sientes que la imagen visual actual de tu negocio refleja fielmente su verdadera calidad y profesionalismo?" },
  { id: 5, category: "Gestión Operativa", text: "¿Llevas un registro ordenado de tus ingresos, gastos y costos de producción de forma regular?" },
  { id: 6, category: "Gestión Operativa", text: "¿Tienes procesos estandarizados o plantillas para atender a tus clientes y entregar tus pedidos sin estrés?" },
  { id: 7, category: "Presencia Digital", text: "¿Publicas contenido o interactúas con tu comunidad en redes sociales o canales digitales de manera constante?" },
  { id: 8, category: "Presencia Digital", text: "¿Tu negocio cuenta con un espacio propio centralizado (como una web, catálogo digital o landing) más allá de las redes?" },
  { id: 9, category: "Relación con Clientes", text: "¿Realizas seguimiento o pides retroalimentación a las personas que ya te han comprado?" },
  { id: 10, category: "Relación con Clientes", text: "¿Tienes una estrategia clara para retener a tus clientes y lograr que te comprueben o recomienden de nuevo?" },
  { id: 11, category: "Modelo de Ingresos", text: "¿Tus precios actuales cubren cómodamente todos tus costos operativos, materiales y tu propio tiempo de trabajo?" },
  { id: 12, category: "Modelo de Ingresos", text: "¿Exploras o cuentas con más de una fuente o línea de ingresos dentro de tu mismo emprendimiento?" },
  { id: 13, category: "Innovación y Adaptación", text: "¿Dedicas tiempo semanalmente a investigar tendencias, aprender nuevas habilidades o mejorar tus productos?" },
  { id: 14, category: "Bienestar y Enfoque", text: "¿Logras mantener un equilibrio saludable entre el tiempo que le dedicas a tu negocio y tu descanso personal?" },
  { id: 15, category: "Visión de Futuro", text: "¿Tienes trazadas metas claras y medibles para los próximos 6 meses de tu emprendimiento?" }
];

export default function Juegos() {
  const [currentView, setCurrentView] = useState<"menu" | "juego1" | "juego2">("menu");

  const [currentRound, setCurrentRound] = useState(0);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [vibeScores, setVibeScores] = useState<Record<string, number>>({ 
    laguna: 0, belladona: 0, solsticio: 0, terciopelo: 0, neon: 0, botanica: 0 
  });
  const [gameFinished, setGameFinished] = useState(false);
  const [finalVibe, setFinalVibe] = useState<VibeProfile | null>(null);

  const [diagStep, setDiagStep] = useState(0); 
  const [diagAnswers, setDiagAnswers] = useState<number[]>([]); 

  const handleWordClick = (wordObj: { text: string; vibe: string }) => {
    if (selectedWords.includes(wordObj.text)) {
      setSelectedWords(selectedWords.filter(w => w !== wordObj.text));
      setVibeScores(prev => ({ ...prev, [wordObj.vibe]: prev[wordObj.vibe] - 1 }));
    } else {
      if (selectedWords.length < 4) {
        setSelectedWords([...selectedWords, wordObj.text]);
        setVibeScores(prev => ({ ...prev, [wordObj.vibe]: prev[wordObj.vibe] + 1 }));
      }
    }
  };

  const handleNextRound = () => {
    setSelectedWords([]);
    if (currentRound < gameRounds.length - 1) {
      setCurrentRound(currentRound + 1);
    } else {
      let highestVibe = "laguna";
      let maxScore = -1;
      for (const [vibe, score] of Object.entries(vibeScores)) {
        if (score > maxScore) {
          maxScore = score;
          highestVibe = vibe;
        }
      }
      setFinalVibe(vibeProfiles[highestVibe] || vibeProfiles.laguna);
      setGameFinished(true);
    }
  };

  const resetGame1 = () => {
    setCurrentRound(0);
    setSelectedWords([]);
    setVibeScores({ laguna: 0, belladona: 0, solsticio: 0, terciopelo: 0, neon: 0, botanica: 0 });
    setGameFinished(false);
    setFinalVibe(null);
  };

  const handleDiagAnswer = (value: number) => {
    const updated = [...diagAnswers, value];
    setDiagAnswers(updated);
    if (diagStep < diagnosticQuestions.length - 1) {
      setDiagStep(diagStep + 1);
    } else {
      setDiagStep(diagnosticQuestions.length);
    }
  };

  const resetGame2 = () => {
    setDiagStep(0);
    setDiagAnswers([]);
  };

  const totalDiagScore = diagAnswers.reduce((a, b) => a + b, 0);
  const maxPossibleDiag = diagnosticQuestions.length * 2;
  const diagPercentage = Math.round((totalDiagScore / maxPossibleDiag) * 100);

  const getDiagnosticTips = () => {
    const tips = [];
    const strategicScore = (diagAnswers[0] || 0) + (diagAnswers[1] || 0);
    const visualScore = (diagAnswers[2] || 0) + (diagAnswers[3] || 0);
    const operationalScore = (diagAnswers[4] || 0) + (diagAnswers[5] || 0);
    const digitalScore = (diagAnswers[6] || 0) + (diagAnswers[7] || 0);
    const financialScore = (diagAnswers[10] || 0) + (diagAnswers[11] || 0);

    if (strategicScore <= 2) {
      tips.push({ title: "Enfoca tu propuesta de valor", text: "Dedica una tarde a escribir exactamente qué problema solucionas y quién es tu cliente ideal. La claridad atrae ventas automáticas." });
    }
    if (visualScore <= 2) {
      tips.push({ title: "Unifica tu identidad visual", text: "Establece una paleta de 3 o 4 colores fijos y usa plantillas limpias. La coherencia visual transmite profesionalismo al instante." });
    }
    if (operationalScore <= 2) {
      tips.push({ title: "Ordena tus finanzas y procesos", text: "Abre una hoja de cálculo básica para registrar cada ingreso y gasto diario. El control operativo reduce el estrés y evita pérdidas." });
    }
    if (digitalScore <= 2) {
      tips.push({ title: "Centraliza tu presencia digital", text: "No dependas únicamente de las redes sociales. Crea una landing page o catálogo web limpio donde tus clientes puedan ver todo centralizado." });
    }
    if (financialScore <= 2) {
      tips.push({ title: "Revisa tu estructura de precios", text: "Asegúrate de incluir todos tus costos ocultos y valora tu tiempo de trabajo. Tus precios deben permitirte crecer, no solo sobrevivir." });
    }

    if (tips.length === 0) {
      tips.push({ title: "¡Excelente desempeño general!", text: "Tienes bases muy sólidas en tu negocio. Tu siguiente gran paso es escalar, delegar tareas repetitivas y buscar nuevos canales de expansión." });
    }

    return tips;
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundImage: `
        radial-gradient(rgba(231, 195, 107, 0.12) 1.5px, transparent 1.5px),
        linear-gradient(rgba(107, 29, 56, 0.75), rgba(107, 29, 56, 1)),
        url('https://res.cloudinary.com/x3pd9fct/image/upload/v1788758415/patronkomorebi.png'),
        linear-gradient(rgba(74, 19, 38, 0.8), rgba(74, 19, 38, 2.5))
      `,
      backgroundSize: '24px 24px, cover, 300px auto, cover',
      backgroundRepeat: 'repeat, no-repeat, repeat, no-repeat',
      backgroundPosition: '0 0, center, center, center',
      backgroundAttachment: 'fixed',
      padding: '1.5rem 3vw', 
      color: '#e6dec9', 
      fontFamily: 'var(--app-font-sans, sans-serif)' 
    }}>

      
      <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
        {currentView === "menu" ? (
          <Link href="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#e7c36b', fontFamily: 'var(--app-font-mono, monospace)', fontSize: '0.85rem' }}>
            <ArrowLeft size={16} /> Volver a la página principal
          </Link>
        ) : (
          <button 
            onClick={() => { setCurrentView("menu"); resetGame1(); resetGame2(); }}
            style={{ background: 'none', border: 'none', color: '#e7c36b', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontFamily: 'var(--app-font-mono, monospace)', fontSize: '0.85rem' }}
          >
            <ArrowLeft size={16} /> Volver al menú de juegos
          </button>
        )}
        <span style={{ fontFamily: 'var(--app-font-mono, monospace)', fontSize: '0.75rem', color: '#249a9e', letterSpacing: '0.1em' }}>KOMOREBI · ZONA INTERACTIVA</span>
      </div>

      
      {currentView === "menu" && (
        <div 
          style={{ 
            maxWidth: '900px', 
            margin: '0 auto', 
            textAlign: 'center', 
            animation: 'fadeInSlide 0.4s ease',
            backgroundColor: 'rgba(50, 12, 28, 0.85)',
            backdropFilter: 'blur(8px)',
            borderRadius: '24px',
            padding: '2rem 1.2rem',
            border: '2px solid rgba(231, 195, 107, 0.3)',
            boxShadow: '0 15px 35px rgba(0,0,0,0.4)'
          }}
        >
          <h1 style={{ fontFamily: 'var(--app-font-serif, serif)', fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#e7c36b', marginBottom: '0.8rem' }}>
            Tests y Juegos Komorebi
          </h1>
          <p style={{ fontSize: '1rem', opacity: '0.9', marginBottom: '2rem', maxWidth: '600px', marginInline: 'auto', lineHeight: '1.5' }}>
            Explora dinámicas interactivas diseñadas para darle estructura, claridad y alma a tu emprendimiento. Elige tu herramienta:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            
            <div 
              onClick={() => setCurrentView("juego1")}
              style={{
                backgroundColor: 'rgba(40, 10, 22, 0.9)',
                border: '2px solid rgba(231, 195, 107, 0.4)',
                borderRadius: '20px',
                padding: '2rem 1.5rem',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
              }}
              className="interactive-card"
            >
              <div style={{ width: '45px', height: '45px', borderRadius: '12px', background: 'rgba(231, 195, 107, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.2rem', color: '#e7c36b' }}>
                <Sparkles size={22} />
              </div>
              <h3 style={{ fontFamily: 'var(--app-font-serif, serif)', fontSize: '1.5rem', color: '#e7c36b', marginBottom: '0.6rem' }}>
                ¿Cuál es la esencia de tu negocio?
              </h3>
              <p style={{ fontSize: '0.9rem', opacity: '0.85', lineHeight: '1.5', marginBottom: '1.2rem' }}>
                Elige conceptos y atmósferas ronda a ronda en una libreta interactiva para descubrir cuál de los 6 arquetipos representa tu marca.
              </p>
              <span style={{ fontFamily: 'var(--app-font-mono, monospace)', fontSize: '0.8rem', color: '#249a9e', fontWeight: 'bold' }}>
                Jugar ahora →
              </span>
            </div>

            
            <div 
              onClick={() => setCurrentView("juego2")}
              style={{
                backgroundColor: 'rgba(40, 10, 22, 0.9)',
                border: '2px solid rgba(36, 154, 158, 0.4)',
                borderRadius: '20px',
                padding: '2rem 1.5rem',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
              }}
              className="interactive-card"
            >
              <div style={{ width: '45px', height: '45px', borderRadius: '12px', background: 'rgba(36, 154, 158, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.2rem', color: '#249a9e' }}>
                <ClipboardCheck size={22} />
              </div>
              <h3 style={{ fontFamily: 'var(--app-font-serif, serif)', fontSize: '1.5rem', color: '#249a9e', marginBottom: '0.6rem' }}>
                Diagnóstico Exprés de Negocio
              </h3>
              <p style={{ fontSize: '0.9rem', opacity: '0.85', lineHeight: '1.5', marginBottom: '1.2rem' }}>
                Responde un cuestionario rápido de 15 preguntas sobre tu desempeño operativo y recibe tips personalizados de acción.
              </p>
              <span style={{ fontFamily: 'var(--app-font-mono, monospace)', fontSize: '0.8rem', color: '#e7c36b', fontWeight: 'bold' }}>
                Iniciar diagnóstico →
              </span>
            </div>
          </div>
        </div>
      )}

      
      {currentView === "juego1" && (
        <div 
          style={{ 
            maxWidth: '900px', 
            margin: '0 auto', 
            animation: 'fadeInSlide 0.4s ease',
            backgroundColor: 'rgba(50, 12, 28, 0.88)',
            backdropFilter: 'blur(8px)',
            borderRadius: '24px',
            padding: '1.2rem',
            border: '2px solid rgba(231, 195, 107, 0.3)',
            boxShadow: '0 15px 35px rgba(0,0,0,0.4)'
          }}
        >
          {!gameFinished ? (
            <div style={{
              backgroundColor: '#f4f1de',
              color: '#2b2b2b',
              borderRadius: '14px',
              border: '6px solid #35101c',
              boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
              overflow: 'hidden',
              position: 'relative',
              backgroundImage: 'linear-gradient(#e2decb 1px, transparent 1px)',
              backgroundSize: '100% 32px'
            }}>
              <div style={{ padding: '1.2rem 1.5rem', borderBottom: '2px solid #dcd6c0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.8rem', background: '#fdfbf7' }}>
                <div>
                  <span style={{ fontFamily: 'var(--app-font-mono, monospace)', fontSize: '0.7rem', color: '#6b1d38', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    {gameRounds[currentRound].category}
                  </span>
                  <h2 style={{ fontFamily: 'var(--app-font-serif, serif)', fontSize: '1.15rem', color: '#4a1326', margin: '0.2rem 0 0 0' }}>
                    Escoge hasta 4 opciones que encajen con tu marca
                  </h2>
                </div>
                <div style={{ fontFamily: 'var(--app-font-mono, monospace)', fontSize: '1.1rem', fontWeight: 'bold', color: '#6b1d38', background: '#e7c36b33', padding: '0.3rem 0.8rem', borderRadius: '8px' }}>
                  {currentRound + 1} / {gameRounds.length}
                </div>
              </div>

              <div style={{ padding: '1.5rem 1.2rem', minHeight: '280px' }}>
                <p style={{ fontSize: '0.85rem', fontStyle: 'italic', color: '#666', marginBottom: '1.2rem' }}>
                  (Seleccionadas: {selectedWords.length}/4)
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.8rem' }}>
                  {gameRounds[currentRound].words.map((wordObj, idx) => {
                    const isSelected = selectedWords.includes(wordObj.text);
                    return (
                      <button
                        key={idx}
                        onClick={() => handleWordClick(wordObj)}
                        style={{
                          backgroundColor: isSelected ? '#6b1d38' : '#ffffff',
                          color: isSelected ? '#ffffff' : '#2b2b2b',
                          border: '2px solid',
                          borderColor: isSelected ? '#6b1d38' : '#d0c8b0',
                          borderRadius: '10px',
                          padding: '0.7rem 1rem',
                          textAlign: 'left',
                          fontFamily: 'var(--app-font-serif, serif)',
                          fontSize: '0.95rem',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          boxShadow: isSelected ? '0 4px 12px rgba(107, 29, 56, 0.3)' : '0 2px 5px rgba(0,0,0,0.05)'
                        }}
                      >
                        <span>{wordObj.text}</span>
                        {isSelected && <CheckCircle2 size={16} color="#e7c36b" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div style={{ padding: '1.2rem 1.5rem', background: '#fdfbf7', borderTop: '2px solid #dcd6c0', display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  onClick={handleNextRound}
                  disabled={selectedWords.length === 0}
                  style={{
                    backgroundColor: selectedWords.length > 0 ? '#6b1d38' : '#cccccc',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '999px',
                    padding: '0.7rem 1.8rem',
                    fontFamily: 'var(--app-font-mono, monospace)',
                    fontSize: '0.8rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    cursor: selectedWords.length > 0 ? 'pointer' : 'not-allowed',
                    transition: 'background 0.2s ease',
                    width: '100%',
                    maxWidth: '220px'
                  }}
                >
                  {currentRound === gameRounds.length - 1 ? "Ver Resultado Final →" : "Siguiente Ronda →"}
                </button>
              </div>
            </div>
          ) : (
            <div style={{
              backgroundColor: 'rgba(40, 10, 22, 0.95)',
              border: '2px solid #e7c36b',
              borderRadius: '20px',
              padding: '2rem 1.5rem',
              boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
              textAlign: 'center'
            }}>
              <span style={{ fontFamily: 'var(--app-font-mono, monospace)', fontSize: '0.75rem', color: '#e7c36b', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                Resultado del Análisis de Esencia
              </span>

              <h2 style={{ fontFamily: 'var(--app-font-serif, serif)', fontSize: 'clamp(1.8rem, 4vw, 2.3rem)', color: '#ffffff', margin: '0.5rem 0 1.2rem 0' }}>
                La esencia de tu negocio es <span style={{ color: '#e7c36b' }}>{finalVibe?.name}</span>
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{
                  width: '90px',
                  height: '90px',
                  borderRadius: '50%',
                  backgroundColor: finalVibe?.avatarBg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '3px solid #e7c36b',
                  boxShadow: '0 0 20px rgba(231,195,107,0.4)'
                }}>
                  {finalVibe?.iconComponent}
                </div>
                <h3 style={{ fontFamily: 'var(--app-font-serif, serif)', fontSize: '1.3rem', color: '#e7c36b', margin: 0 }}>
                  {finalVibe?.title}
                </h3>
                <p style={{ maxWidth: '600px', fontSize: '0.95rem', lineHeight: '1.5', opacity: '0.9', margin: 0 }}>
                  {finalVibe?.description}
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.2rem', textAlign: 'left', marginBottom: '2rem' }}>
                <div style={{ backgroundColor: 'rgba(30, 8, 18, 0.8)', padding: '1.2rem', borderRadius: '14px', border: '1px solid rgba(231,195,107,0.2)' }}>
                  <h4 style={{ fontFamily: 'var(--app-font-serif, serif)', color: '#e7c36b', marginBottom: '0.8rem', fontSize: '1.05rem' }}>
                    Paletas de Colores Sugeridas
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginTop: '0.8rem' }}>
                    {finalVibe?.palettes.map((palette, pIdx) => (
                      <div key={pIdx} style={{ display: 'flex', gap: '0.4rem', alignItems: 'center', flexWrap: 'wrap' }}>
                        <span style={{ fontSize: '0.75rem', fontFamily: 'var(--app-font-mono, monospace)', color: '#aaa', width: '45px' }}>
                          {palette.length} col.
                        </span>
                        {palette.map((hex, i) => (
                          <div key={i} title={hex} style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: hex, border: '2px solid #ffffff33' }} />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ backgroundColor: 'rgba(30, 8, 18, 0.8)', padding: '1.2rem', borderRadius: '14px', border: '1px solid rgba(231,195,107,0.2)' }}>
                  <h4 style={{ fontFamily: 'var(--app-font-serif, serif)', color: '#e7c36b', marginBottom: '0.8rem', fontSize: '1.05rem' }}>
                    Tipografías y Estilo Visual
                  </h4>
                  <div style={{ marginBottom: '1rem' }}>
                    <span style={{ fontSize: '0.75rem', color: '#aaa', display: 'block', marginBottom: '0.3rem' }}>Fuentes recomendadas:</span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {finalVibe?.fonts.map((font, fIdx) => (
                        <span key={fIdx} style={{ background: 'rgba(231,195,107,0.1)', color: '#e7c36b', padding: '0.2rem 0.5rem', borderRadius: '6px', fontSize: '0.8rem', fontFamily: 'var(--app-font-mono, monospace)' }}>
                          {font}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: '#aaa', display: 'block', marginBottom: '0.2rem' }}>Estilo de iconos:</span>
                    <p style={{ fontSize: '0.85rem', margin: 0, opacity: '0.9' }}>{finalVibe?.iconStyle}</p>
                  </div>
                </div>
              </div>

              <button
                onClick={resetGame1}
                style={{
                  backgroundColor: '#e7c36b',
                  color: '#35101c',
                  border: 'none',
                  borderRadius: '999px',
                  padding: '0.8rem 2rem',
                  fontFamily: 'var(--app-font-mono, monospace)',
                  fontSize: '0.85rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'transform 0.2s ease',
                  width: '100%',
                  maxWidth: '260px',
                  justifyContent: 'center'
                }}
              >
                <RefreshCw size={16} /> Repetir Test de Esencia
              </button>
            </div>
          )}
        </div>
      )}

      
      {currentView === "juego2" && (
        <div 
          style={{ 
            maxWidth: '800px', 
            margin: '0 auto', 
            animation: 'fadeInSlide 0.4s ease',
            backgroundColor: 'rgba(50, 12, 28, 0.9)',
            backdropFilter: 'blur(8px)',
            borderRadius: '24px',
            padding: '1.5rem',
            border: '2px solid rgba(36, 154, 158, 0.4)',
            boxShadow: '0 15px 35px rgba(0,0,0,0.4)'
          }}
        >
          {diagStep < diagnosticQuestions.length ? (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span style={{ fontFamily: 'var(--app-font-mono, monospace)', fontSize: '0.75rem', color: '#249a9e', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  {diagnosticQuestions[diagStep].category}
                </span>
                <span style={{ fontFamily: 'var(--app-font-mono, monospace)', fontSize: '0.85rem', color: '#e6dec9', background: 'rgba(36, 154, 158, 0.2)', padding: '0.3rem 0.8rem', borderRadius: '8px' }}>
                  Pregunta {diagStep + 1} de {diagnosticQuestions.length}
                </span>
              </div>

              
              <div style={{ width: '100%', height: '6px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '3px', marginBottom: '1.8rem', overflow: 'hidden' }}>
                <div style={{ width: `${((diagStep) / diagnosticQuestions.length) * 100}%`, height: '100%', backgroundColor: '#249a9e', transition: 'width 0.3s ease' }} />
              </div>

              <h2 style={{ fontFamily: 'var(--app-font-serif, serif)', fontSize: 'clamp(1.3rem, 3.5vw, 1.7rem)', color: '#ffffff', marginBottom: '2rem', lineHeight: '1.4' }}>
                {diagnosticQuestions[diagStep].text}
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <button
                  onClick={() => handleDiagAnswer(2)}
                  style={{
                    backgroundColor: 'rgba(36, 154, 158, 0.15)',
                    border: '2px solid #249a9e',
                    borderRadius: '14px',
                    padding: '1rem 1.2rem',
                    color: '#ffffff',
                    fontFamily: 'var(--app-font-sans, sans-serif)',
                    fontSize: '1rem',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                  className="diagnostic-btn"
                >
                  <span>Sí, totalmente / Casi siempre</span>
                  <ArrowRight size={18} color="#249a9e" />
                </button>

                <button
                  onClick={() => handleDiagAnswer(1)}
                  style={{
                    backgroundColor: 'rgba(231, 195, 107, 0.1)',
                    border: '2px solid rgba(231, 195, 107, 0.5)',
                    borderRadius: '14px',
                    padding: '1rem 1.2rem',
                    color: '#ffffff',
                    fontFamily: 'var(--app-font-sans, sans-serif)',
                    fontSize: '1rem',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                  className="diagnostic-btn"
                >
                  <span>A veces / En proceso</span>
                  <ArrowRight size={18} color="#e7c36b" />
                </button>

                <button
                  onClick={() => handleDiagAnswer(0)}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '14px',
                    padding: '1rem 1.2rem',
                    color: '#ffffff',
                    fontFamily: 'var(--app-font-sans, sans-serif)',
                    fontSize: '1rem',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                  className="diagnostic-btn"
                >
                  <span>No / Muy poco</span>
                  <ArrowRight size={18} color="#aaaaaa" />
                </button>
              </div>
            </div>
          ) : (
            <div style={{ textAlign: 'center' }}>
              <span style={{ fontFamily: 'var(--app-font-mono, monospace)', fontSize: '0.75rem', color: '#249a9e', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                Informe de Diagnóstico General
              </span>

              <h2 style={{ fontFamily: 'var(--app-font-serif, serif)', fontSize: 'clamp(1.8rem, 4vw, 2.3rem)', color: '#ffffff', margin: '0.5rem 0 0.8rem 0' }}>
                Tu puntaje de salud de negocio: <span style={{ color: '#249a9e' }}>{diagPercentage}%</span>
              </h2>

              <div style={{ width: '100%', maxWidth: '280px', height: '12px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '6px', margin: '0 auto 2rem auto', overflow: 'hidden' }}>
                <div style={{ width: `${diagPercentage}%`, height: '100%', backgroundColor: '#249a9e' }} />
              </div>

              <h3 style={{ fontFamily: 'var(--app-font-serif, serif)', fontSize: '1.25rem', color: '#e7c36b', marginBottom: '1.2rem', textAlign: 'left' }}>
                Recomendaciones prioritarias para ti:
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '2rem', textAlign: 'left' }}>
                {getDiagnosticTips().map((tip, idx) => (
                  <div key={idx} style={{ backgroundColor: 'rgba(30, 8, 18, 0.8)', border: '1px solid rgba(36, 154, 158, 0.3)', borderRadius: '14px', padding: '1rem', display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                    <div style={{ background: 'rgba(36, 154, 158, 0.2)', padding: '0.5rem', borderRadius: '8px', color: '#249a9e', marginTop: '0.1rem', flexShrink: 0 }}>
                      <Lightbulb size={20} />
                    </div>
                    <div>
                      <h4 style={{ fontFamily: 'var(--app-font-serif, serif)', fontSize: '1.05rem', color: '#e7c36b', margin: '0 0 0.2rem 0' }}>
                        {tip.title}
                      </h4>
                      <p style={{ fontSize: '0.9rem', opacity: '0.9', margin: 0, lineHeight: '1.4' }}>
                        {tip.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={resetGame2}
                style={{
                  backgroundColor: '#249a9e',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '999px',
                  padding: '0.8rem 2rem',
                  fontFamily: 'var(--app-font-mono, monospace)',
                  fontSize: '0.85rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'transform 0.2s ease',
                  width: '100%',
                  maxWidth: '260px',
                  justifyContent: 'center'
                }}
              >
                <RefreshCw size={16} /> Repetir Diagnóstico
              </button>
            </div>
          )}
        </div>
      )}
      <AdBanner />
    </div>
  );
}
