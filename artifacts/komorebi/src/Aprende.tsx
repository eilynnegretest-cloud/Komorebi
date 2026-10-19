import { useState, useEffect } from "react";
import { ArrowLeft, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
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

type Recommendation = {
  id: number;
  title: string;
  description: string;
};

type MediaItem = {
  id: number;
  title: string;
  category: string;
  description: string;
  link: string;
  image?: string; 
};

type CategoryContent = {
  id: string;
  title: string;
  mainTitle: string;
  tickerText: string;
  recommendations: Recommendation[];
  mediaRecommendations: MediaItem[];
};

const initialData: CategoryContent[] = [
  {
    id: "finanzas",
    title: "Finanzas",
    mainTitle: "Salud Financiera: El motor de tu negocio",
    tickerText: "TU DINERO, TUS REGLAS • CRECIMIENTO SOSTENIBLE • ",
    recommendations: [
      { 
        id: 1, 
        title: "Separación de cuentas",
        description: "Es un problema recurrente que las dueñas de negocio en sus etapas tempranas mezclen el dinero destinado a su emprendimiento con los gastos personales, generando una falsa ilusión de disponibilidad financiera mientras gastan capital de trabajo. Para arreglar esto, no hace falta una cuenta corporativa costosa si estás empezando como persona natural, puedes separar tus finanzas abriendo cuentas de ahorro digitales independientes en diversos bancos o neo-bancos (ej. Nu Bank, Lulo Bank, Nequi, Daviplata), designadas específicamente para tu negocio, así mismo, puedes empezar a fijar un salario propio fijo desde tu emprendimiento, esto te otorgará más orden financiero y profesionalismo." 
      },
      { 
        id: 2, 
        title: "Control de flujo de cajas",
        description: "Debes tener cuidado a la hora de revisar la rentabilidad de tu negocio, es un error común creer que entre más ingresos más rentabilidad, sin embargo, esta sólo se puede definir si analizamos la relación entre costos de producción e ingresos. Si deseas tener un mayor control sobre tu negocio, es importante llevar un registro riguroso, ya sea de forma digital o física (ej. Libretas, Google Sheets, Excel), donde tomes nota de cada peso que entra o sale de tu negocio, teniendo en cuenta cosas que muchos ignoran, como costos de transporte, empaquetado, entre otros. Vigila cuidadosamente tu capital de trabajo para no sufrir grandes pérdidas financieras." 
      },
      { 
        id: 3, 
        title: "Reinversión estratégica",
        description: "Para evitar gastar el dinero de forma poco responsable, establece un porcentaje claro de distribución de utilidades, este puede ser dividido de la siguiente forma: Un porcentaje destinado a reinvertir en mejorar tu stock o herramientas de trabajo y crecer tu negocio (ej. 30%), otro destinado a la gestión de emergencias e imprevistos (ej. 20%), muchas veces las personas ignoran este punto sin saber cuan importante es para mantener tu emprendimiento a flote frente a cualquier imprevisto del mercado, otro que será tu sueldo fijo (ej. 30%) y un último reservado para los gastos fijos de tu negocio (ej. 20%) (Nota: Estos porcentajes son una guía inicial flexible que puedes ir adaptando según las necesidades específicas de tu sector, ya sea que manejes producto físico o servicios. NO representa ni se acomoda a la realidad de todos los emprendimientos)." 
      }
    ],
    mediaRecommendations: [
      {
        id: 1,
        title: "Dimes y Billetes",
        category: "Podcast",
        description: "Un espacio práctico y ameno sobre finanzas e inversiones para comprender el dinero, las finanzas de tu negocio y la economía diaria de forma sencilla.",
        link: "https://open.spotify.com/show/1mxXuzhGMWqYDgoF0IYkE1?si=EDKR2tPmSgumgbod9Lqprw&utm_source=whatsapp",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 2,
        title: "Finanzas para No Financieros",
        category: "Podcast",
        description: "Episodios diseñados para perderle el miedo a los números, gestionando tus finanzas y proyecciones de negocio de manera ágil e intuitiva.",
        link: "https://open.spotify.com/show/2mMFgP5VSbRaxma7pkHJlA?si=fb8mPBzZSJ2hipFGLuHsfw&utm_source=whatsapp",
        image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 3,
        title: "La psicología del dinero - Morgan Housel",
        category: "Libro recomendado",
        description: "Excelente para entender cómo nuestras emociones y hábitos impactan la forma en que gastamos, ahorramos y reinvertimos.",
        link: "https://www.planetadelibros.com/libro-la-psicologia-del-dinero/325357",
        image: "https://res.cloudinary.com/x3pd9fct/image/upload/v1789953164/D_NQ_NP_900104-MLM74328177771_012024-O-libro-la-psicologia-del-dinero-morgan-housel-original.webp"
      }
    ]
  },
  {
    id: "rrhh",
    title: "Recursos Humanos",
    mainTitle: "El Factor Humano: Cómo formar y liderar a tu equipo desde cero",
    tickerText: "EL EQUIPO ES EL CORAZÓN • LIDERAZGO CON PROPÓSITO • ",
    recommendations: [
      { 
        id: 1, 
        title: "Cultura, propósito e identidad", 
        description: "Cuando se emprende sola, la cultura eres tú. Pero en cuanto entra alguien más, si no hay claridad en los valores y el propósito, la operación corre el riesgo de desalinearse. Por esta razón, antes de buscar talento, define de manera clara y honesta qué tipo de cultura quieres construir. En un entorno laboral a menudo informal, ofrecer un espacio de trabajo con propósito, flexibilidad (ideal para madres cabeza de familia o estudiantes) y un ambiente de respeto marca una diferencia radical para fidelizar a las personas, incluso cuando los sueldos iniciales son modestos." 
      },
      { 
        id: 2, 
        title: "Empezando a construir un equipo", 
        description: "Muchas emprendedoras sufren de parálisis por análisis o miedo a delegar. Piensan que contratar requiere grandes sumas de dinero o contratos formales complejos de entrada, lo que las lleva al burnout (agotamiento extremo) al negarse a pedir ayuda. Por ello es importante considerar distintos factores para dar este siguiente paso en el crecimiento de tu negocio, por ejemplo: ¿En qué momento deberías empezar a construir un equipo? Normalmente cuando las tareas operativas repetitivas te están quitando el tiempo para pensar en la estrategia, las ventas y el crecimiento del negocio. ¿Cómo empezar a formar dicho equipo? No empieces buscando empleados fijos a término indefinido. Empieza por delegar tareas puntuales mediante contratos de prestación de servicios por horas, alianzas con practicantes o universitarios que busquen experiencia, o freelancers locales. Una buena forma de iniciar es integrar miembros cercanos a tu contexto, como amigos con habilidades complementarias, esto genera una red de apoyo sólida que servirá como puente antes de dar el salto a contrataciones formales." 
      },
      { 
        id: 3, 
        title: "Liderazgo emocional", 
        description: "Gestionar personas implica gestionar emociones, frustraciones y dinámicas humanas complejas, algo que rara vez se enseña en los manuales de negocios. Desarrolla inteligencia emocional. La resiliencia es una competencia laboral vital para un equipo en crecimiento. Fomenta espacios de retroalimentación abierta y honesta donde los errores no se castiguen con temor, sino que se convierten en aprendizajes del día a día, manteniendo la motivación alta a pesar de los retos del mercado." 
      }
    ],
    mediaRecommendations: [
      { 
        id: 1, 
        title: "Liderazgo y Gestión de Equipos", 
        category: "Podcast", 
        description: "Herramientas de liderazgo, comunicación interna e inteligencia emocional para consolidar equipos de trabajo cohesionados y eficientes.", 
        link: "https://open.spotify.com/show/5CQUpGSiJzUxa9HEn2aLXs?si=ZMnjdjLCToywsinHsZEv4w&utm_source=whatsapp", 
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80" 
      },
      { 
        id: 2, 
        title: "Talento y Cultura Organizacional", 
        category: "Podcast", 
        description: "Estrategias para atraer, retener e inspirar al talento clave dentro de emprendimientos y startups en crecimiento.", 
        link: "https://open.spotify.com/show/33xIODzkEwjgYVEbuysaxM?si=vqNYRX02T06drWz4KTUFUA&utm_source=whatsapp", 
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80" 
      },
      { 
        id: 3, 
        title: "Gestión Humana en el Emprendimiento", 
        category: "Podcast", 
        description: "Consejos prácticos para pasar de la microgestión a un modelo de delegación consciente y estructurado.", 
        link: "https://open.spotify.com/show/033gK2rKzkFSuhsYdNvcjZ?si=pi-nA6OvQ5GWHAtgAi8rmQ&utm_source=whatsapp", 
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80" 
      }
    ]
  },
  {
    id: "alianzas",
    title: "Alianzas Estratégicas",
    mainTitle: "Conecta y Crece: El arte de hacer alianzas en el emprendimiento",
    tickerText: "JUNTAS LLEGAMOS MÁS LEJOS • NETWORKING REAL • ",
    recommendations: [
      { 
        id: 1, 
        title: "Networking estratégico", 
        description: "Dejar a tu negocio encerrado en su propia burbuja limita muchas oportunidades de expansión y visibilidad. Participar en programas de aceleración o incubadoras enfocadas en jóvenes e iniciativas de impacto permite entender las dinámicas del mercado real antes de arriesgar grandes sumas de dinero. Conocer de cerca las convocatorias institucionales abre puertas directas a capital semilla, mentorías gratuitas y espacios de networking estratégico." 
      },
      { 
        id: 2, 
        title: "Alianzas tácticas locales", 
        description: "Empezar a abandonar la visión de otros emprendedores como competencia directa y empezar a evaluar las posibilidades de ser aliados comerciales puede traerte una gran ventaja. Busca marcas complementarias a la tuya (por ejemplo, si vendes accesorios, alíate con una marca de moda local o de papelería de diseño) para hacer entregas cruzadas, pop-up stores locales, rifas conjuntas en Instagram o colaboraciones en ferias de emprendimiento de la ciudad. Esto divide costos de participación y multiplica el alcance ante audiencias nuevas." 
      },
      { 
        id: 3, 
        title: "Participación en ecosistemas", 
        description: "Debes dejar a un lado el miedo escénico y la inseguridad de presentar tu proyecto ante jurados, inversionistas o clientes potenciales. Pierde el miedo a presentar tu proyecto ante desconocidos. Como bien se señala en los espacios de inspiración emprendedora, 'botarse al agua' y saber hacer un pitch rápido, claro y apasionado de tu idea es la habilidad más valiosa en las etapas tempranas de un negocio. Acude a espacios de networking presenciales, asiste a hackathons, ruedas de negocios locales o charlas abiertas en universidades e incubadoras de tu ciudad para foguear tu discurso." 
      }
    ],
    mediaRecommendations: [
      { 
        id: 1, 
        title: "Sinergias y Alianzas de Negocio", 
        category: "Podcast", 
        description: "Claves sobre cómo identificar socios estratégicos, crear valor colaborativo y tejer redes de contacto sólidas.", 
        link: "https://open.spotify.com/show/1ELKTNsOhqx6kztoWnQgbC?si=tnjenz_1R46ZEFKImdQLkQ&utm_source=whatsapp", 
        image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=600&q=80" 
      },
      { 
        id: 2, 
        title: "Próximamente", 
        category: "Espacio en desarrollo", 
        description: "Nuevos contenidos y alianzas estratégicas recomendadas estarán disponibles muy pronto para impulsar tu emprendimiento.", 
        link: "#", 
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80" 
      },
      { 
        id: 3, 
        title: "Próximamente", 
        category: "Espacio en desarrollo", 
        description: "Estamos preparando más herramientas y recursos exclusivos sobre networking y colaboración.", 
        link: "#", 
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80" 
      }
    ]
  },
  {
    id: "marketing",
    title: "Marketing",
    mainTitle: "Marketing Digital: Comunica tu propuesta y construye comunidad",
    tickerText: "MEJOR HECHO QUE PERFECTO • COMUNIDAD Y CONEXIÓN • ",
    recommendations: [
      { 
        id: 1, 
        title: "Propuesta de valor", 
        description: "Enamórate de la idea propia o del producto en lugar de enamorarte del problema real que se le está resolviendo al cliente. Valida tu propuesta de valor midiendo cómo transformas verdaderamente la vida de las personas. La gente no compra características técnicas; compra alivio, identidad, belleza accessible o soluciones prácticas para su día a día. Comunica ese beneficio de forma directa y sin tecnicismos innecesarios en tus canales digitales." 
      },
      { 
        id: 2, 
        title: "Autovalidación", 
        description: "No necesitas una página web de alta gama, empaques de lujo o una identidad visual perfecta para salir al mercado. Ten muy presente este principio: el perfeccionismo es el freno de mano del emprendimiento. Mejor hecho que perfecto. Las grandes marcas no nacieron impecables; nacieron resolviendo un problema real y escalando sobre la marcha. La necesidad de masificar implica dejar de microgestionar cada detalle minúsculo y empezar a testear con clientes reales con un Producto Mínimo Viable (PMV)." 
      },
      { 
        id: 3, 
        title: "Construcción de comunidad", 
        description: "Deja de publicar en redes sólo para vender de forma fría y unidireccional, haciendo de lado la conexión con tu audiencia. Aprovecha las plataformas digitales (Instagram, TikTok o WhatsApp Business) como un canal de conversación cercana. Muestra el detrás de cámaras de tu proceso creativo, comparte los tropiezos y los aprendizajes, y apóyate en reseñas reales de clientas locales (testimonios y 'boca a boca'). La confianza digital se traduce directamente en conversiones y compras seguras en el mercado nacional." 
      }
    ],
    mediaRecommendations: [
      { 
        id: 1, 
        title: "Estrategias de Marketing Digital", 
        category: "Podcast", 
        description: "Aprende a estructurar tus campañas digitales, posicionar tu marca en redes y conectar auténticamente con tus clientes.", 
        link: "https://open.spotify.com/show/1VurcM3ZUyQR89gqIQST4q?si=LrxPFZ4pRHOUO7TqJtqpGw&utm_source=whatsapp", 
        image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=600&q=80" 
      },
      { 
        id: 2, 
        title: "Marketing para Emprendedores", 
        category: "Podcast", 
        description: "Tácticas de creación de contenido, posicionamiento orgánico y ventas enfocadas en potenciar marcas emergentes.", 
        link: "https://open.spotify.com/show/5fzudqn5tSmClSMU8AeALb?si=d4W3u-oSTdGffPUdOInwRQ&utm_source=whatsapp", 
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" 
      },
      { 
        id: 3, 
        title: "Comunidad, Branding y Ventas", 
        category: "Podcast", 
        description: "Cómo transformar seguidores en una comunidad fiel y convertir esa interacción en ventas recurrentes para tu marca.", 
        link: "https://open.spotify.com/show/6MQl81FJtz3vRcVwmMXm9u?si=-vd4s0ftSd6eULKKiVHdcw&utm_source=whatsapp", 
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80" 
      }
    ]
  },
];

export default function Aprende() {
  const [activeCategory, setActiveCategory] = useState("finanzas");
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentContent = initialData.find((cat) => cat.id === activeCategory) || initialData[0];
  const mediaList = currentContent.mediaRecommendations;

  const handleNextMedia = () => {
    setActiveMediaIndex((prev) => (prev + 1) % mediaList.length);
  };

  const handlePrevMedia = () => {
    setActiveMediaIndex((prev) => (prev - 1 + mediaList.length) % mediaList.length);
  };

  return (
    <main className="komorebi-page" style={{ minHeight: '100vh', backgroundColor: 'var(--berry)', color: 'var(--cream)' }}>

      <style>{`
        .tilt-card-1 { transform: rotate(-3.5deg) translateY(12px); }
        .tilt-card-2 { transform: rotate(2.5deg) translateY(-12px); }
        .tilt-card-3 { transform: rotate(-2deg) translateY(18px); }
        .tilt-card-4 { transform: rotate(3.5deg) translateY(-8px); }

        .tilt-card-1:hover { transform: rotate(-7deg) translateY(0px) scale(1.06); }
        .tilt-card-2:hover { transform: rotate(1.5deg) translateY(-22px) scale(1.06); }
        .tilt-card-3:hover { transform: rotate(-5.5deg) translateY(10px) scale(1.06); }
        .tilt-card-4:hover { transform: rotate(7deg) translateY(-16px) scale(1.06); }

        .bamboo-row:hover .bamboo-svg-container {
          filter: brightness(1.15) drop-shadow(0 12px 25px rgba(231, 195, 107, 0.4));
          transform: scale(1.03);
        }
        .bamboo-row:hover .content-box {
          border-color: var(--gold);
          transform: translateX(6px);
        }

        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        .ticker-track {
          display: flex;
          width: max-content;
          animation: marquee 20s linear infinite;
        }

        .ticker-track:hover {
          animation-play-state: paused;
        }

        .leaf-card {
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease, filter 0.5s ease;
          cursor: pointer;
          position: absolute;
          will-change: transform, opacity;
        }
        .leaf-card.center {
          transform: translateX(0) scale(1) rotate(-4deg);
          z-index: 10;
          opacity: 1;
          filter: drop-shadow(0 16px 32px rgba(0,0,0,0.3));
        }
        .leaf-card.left {
          transform: translateX(-320px) scale(0.75) rotate(-22deg) translateY(15px);
          z-index: 5;
          opacity: 0.55;
          filter: drop-shadow(0 8px 15px rgba(0,0,0,0.2)) brightness(0.85);
        }
        .leaf-card.right {
          transform: translateX(320px) scale(0.75) rotate(18deg) translateY(15px);
          z-index: 5;
          opacity: 0.55;
          filter: drop-shadow(0 8px 15px rgba(0,0,0,0.2)) brightness(0.85);
        }
        .leaf-card.hidden {
          transform: scale(0) opacity(0);
          pointer-events: none;
          opacity: 0;
          z-index: 0;
        }
        .leaf-card:hover {
          filter: drop-shadow(0 18px 35px rgba(74, 18, 41, 0.3)) brightness(1.05);
        }

        .ver-mas-btn:hover {
          background: var(--gold) !important;
          color: var(--berry) !important;
          transform: translateY(-2px);
        }

        .grid-background {
          background-color: #E6DEC9;
          background-image: 
            linear-gradient(to right, rgba(74, 18, 41, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(74, 18, 41, 0.08) 1px, transparent 1px);
          background-size: 32px 32px;
        }

        
        @media (max-width: 768px) {
          .bamboo-svg-container {
            display: none !important;
          }
          .content-box {
            margin-left: 0 !important;
            border-radius: 20px !important;
          }
        }
      `}</style>

      <div style={{ padding: '2.5rem 5vw' }}>
        <header style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginBottom: '2rem' }}>
          <Link href="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--gold)', fontFamily: 'var(--app-font-mono)', fontSize: '0.9rem' }}>
            <ArrowLeft size={18} /> Volver al Inicio
          </Link>
        </header>

        <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'var(--app-font-serif)', fontSize: '3.5rem', color: 'var(--gold)', margin: '0.5rem 0' }}>
            Aprende con Expertas
          </h1>
          <p style={{ fontFamily: 'var(--app-font-sans)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', color: 'var(--cream)', opacity: 0.9, lineHeight: '1.6' }}>
            Explora los pilares fundamentales para estructurar tu marca paso a paso. Selecciona uno para comenzar.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', 
          gap: '3rem', 
          marginBottom: '6rem', 
          alignItems: 'center',
          justifyItems: 'center',
          paddingTop: '1rem'
        }}>
          
          <button
            onClick={() => { setActiveCategory("finanzas"); setActiveMediaIndex(0); }}
            className="tilt-card-1"
            style={{
              background: activeCategory === "finanzas" ? 'rgba(50, 15, 30, 0.85)' : 'rgba(35, 10, 20, 0.45)',
              border: activeCategory === "finanzas" ? '3px solid var(--gold)' : '2px solid rgba(231, 195, 107, 0.25)',
              outline: '2px dashed rgba(231, 195, 107, 0.4)',
              outlineOffset: '6px',
              borderRadius: '32px',
              padding: '2.5rem 2rem',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1.5rem',
              transition: 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
              width: '100%',
              maxWidth: '290px',
              boxShadow: activeCategory === "finanzas" ? '0 15px 35px rgba(231, 195, 107, 0.35)' : '0 10px 25px rgba(0,0,0,0.3)'
            }}
          >
            <div style={{
              width: '180px',
              height: '210px',
              background: 'var(--berry)',
              border: '3px solid var(--gold)',
              borderRadius: '20px',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              alignItems: 'center',
              boxShadow: '0 10px 20px rgba(0,0,0,0.5)'
            }}>
              <div style={{ width: '50px', height: '14px', background: 'var(--teal)', borderRadius: '4px', alignSelf: 'flex-end', opacity: 0.85 }} />
              <div style={{
                width: '100%',
                height: '45px',
                background: 'var(--cream)',
                color: 'var(--berry)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--app-font-serif)',
                fontSize: '1.15rem',
                fontWeight: 'bold',
                border: '2px solid var(--gold)'
              }}>
                Finanzas
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', width: '100%', flex: 1, padding: '4px' }}>
                {[...Array(12)].map((_, i) => (
                  <div key={i} style={{ background: 'var(--teal)', borderRadius: '50%', aspectRatio: '1', opacity: 0.75 }} />
                ))}
              </div>
            </div>
            <span style={{ fontFamily: 'var(--app-font-mono)', fontSize: '1.05rem', color: 'var(--gold)', fontWeight: 'bold', letterSpacing: '0.05em' }}>
              01. Finanzas
            </span>
          </button>

          
          <button
            onClick={() => { setActiveCategory("rrhh"); setActiveMediaIndex(0); }}
            className="tilt-card-2"
            style={{
              background: activeCategory === "rrhh" ? 'rgba(50, 15, 30, 0.85)' : 'rgba(35, 10, 20, 0.45)',
              border: activeCategory === "rrhh" ? '3px solid var(--gold)' : '2px solid rgba(231, 195, 107, 0.25)',
              outline: '2px dashed rgba(231, 195, 107, 0.4)',
              outlineOffset: '6px',
              borderRadius: '32px',
              padding: '2.5rem 2rem',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1.5rem',
              transition: 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
              width: '100%',
              maxWidth: '290px',
              boxShadow: activeCategory === "rrhh" ? '0 15px 35px rgba(231, 195, 107, 0.35)' : '0 10px 25px rgba(0,0,0,0.3)'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', height: '210px', justifyContent: 'center', width: '100%' }}>
              <div style={{
                width: '110px',
                height: '105px',
                background: 'var(--cream)',
                color: 'var(--berry)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--app-font-serif)',
                fontSize: '0.95rem',
                fontWeight: 'bold',
                textAlign: 'center',
                border: '3px solid var(--gold)',
                boxShadow: '0 8px 18px rgba(0,0,0,0.4)'
              }}>
                Recursos
              </div>
              <div style={{
                width: '150px',
                height: '80px',
                background: 'var(--teal)',
                color: 'var(--cream)',
                borderRadius: '40px 40px 20px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--app-font-serif)',
                fontSize: '1.05rem',
                fontWeight: 'bold',
                border: '3px solid var(--gold)',
                boxShadow: '0 8px 18px rgba(0,0,0,0.4)'
              }}>
                humanos
              </div>
            </div>
            <span style={{ fontFamily: 'var(--app-font-mono)', fontSize: '1.05rem', color: 'var(--gold)', fontWeight: 'bold', letterSpacing: '0.05em' }}>
              02. Recursos Humanos
            </span>
          </button>

        
          <button
            onClick={() => { setActiveCategory("alianzas"); setActiveMediaIndex(0); }}
            className="tilt-card-3"
            style={{
              background: activeCategory === "alianzas" ? 'rgba(50, 15, 30, 0.85)' : 'rgba(35, 10, 20, 0.45)',
              border: activeCategory === "alianzas" ? '3px solid var(--gold)' : '2px solid rgba(231, 195, 107, 0.25)',
              outline: '2px dashed rgba(231, 195, 107, 0.4)',
              outlineOffset: '6px',
              borderRadius: '32px',
              padding: '2.5rem 2rem',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1.5rem',
              transition: 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
              width: '100%',
              maxWidth: '290px',
              boxShadow: activeCategory === "alianzas" ? '0 15px 35px rgba(231, 195, 107, 0.35)' : '0 10px 25px rgba(0,0,0,0.3)'
            }}
          >
            <div style={{ height: '210px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
              <div style={{
                width: '175px',
                height: '130px',
                position: 'relative',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.4))'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-45px',
                  width: '125px',
                  height: '115px',
                  background: 'var(--cream)',
                  border: '3px solid var(--gold)',
                  borderRadius: '8px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  paddingTop: '12px',
                  gap: '8px',
                  zIndex: 2,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.25)'
                }}>
                  <span style={{ fontFamily: 'var(--app-font-serif)', fontSize: '1.05rem', color: 'var(--berry)', fontWeight: 'bold' }}>
                    Alianzas
                  </span>
                  <div style={{ width: '80%', height: '4px', background: 'var(--berry)', opacity: 0.25, borderRadius: '2px' }} />
                  <div style={{ width: '65%', height: '4px', background: 'var(--berry)', opacity: 0.25, borderRadius: '2px' }} />
                  <div style={{ width: '75%', height: '4px', background: 'var(--berry)', opacity: 0.25, borderRadius: '2px' }} />
                </div>

                <div style={{
                  position: 'absolute',
                  bottom: '55px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '0',
                  height: '0',
                  borderLeft: '87px solid transparent',
                  borderRight: '87px solid transparent',
                  borderBottom: '65px solid var(--gold)',
                  zIndex: 3,
                  opacity: 0.95
                }} />

                <div style={{
                  width: '175px',
                  height: '60px',
                  background: 'var(--berry)',
                  border: '3px solid var(--gold)',
                  borderRadius: '0 0 12px 12px',
                  zIndex: 4,
                  boxShadow: 'inset 0 3px 6px rgba(0,0,0,0.3)'
                }} />
              </div>
            </div>
            <span style={{ fontFamily: 'var(--app-font-mono)', fontSize: '1.05rem', color: 'var(--gold)', fontWeight: 'bold', letterSpacing: '0.05em' }}>
              03. Alianzas
            </span>
          </button>

          
          <button
            onClick={() => { setActiveCategory("marketing"); setActiveMediaIndex(0); }}
            className="tilt-card-4"
            style={{
              background: activeCategory === "marketing" ? 'rgba(50, 15, 30, 0.85)' : 'rgba(35, 10, 20, 0.45)',
              border: activeCategory === "marketing" ? '3px solid var(--gold)' : '2px solid rgba(231, 195, 107, 0.25)',
              outline: '2px dashed rgba(231, 195, 107, 0.4)',
              outlineOffset: '6px',
              borderRadius: '32px',
              padding: '2.5rem 2rem',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1.5rem',
              transition: 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
              width: '100%',
              maxWidth: '290px',
              boxShadow: activeCategory === "marketing" ? '0 15px 35px rgba(231, 195, 107, 0.35)' : '0 10px 25px rgba(0,0,0,0.3)'
            }}
          >
            <div style={{ height: '210px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', width: '100%', position: 'relative' }}>
              <div style={{
                width: '80px',
                height: '130px',
                background: 'var(--cream)',
                color: 'var(--berry)',
                borderRadius: '12px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '8px 4px',
                border: '3px solid var(--gold)',
                transform: 'rotate(-6deg)',
                boxShadow: '0 10px 20px rgba(0,0,0,0.45)',
                position: 'relative'
              }}>
                <div style={{ width: '8px', height: '8px', background: 'var(--berry)', borderRadius: '50%', marginBottom: 'auto' }} />
                <span style={{ fontFamily: 'var(--app-font-serif)', fontSize: '0.95rem', fontWeight: 'bold' }}>Market</span>
                <div style={{ width: '20px', height: '3px', background: 'var(--berry)', borderRadius: '2px', marginTop: 'auto' }} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', transform: 'rotate(6deg)', boxShadow: '0 10px 20px rgba(0,0,0,0.45)', borderRadius: '8px' }}>
                <div style={{
                  width: '110px',
                  height: '85px',
                  background: 'var(--teal)',
                  color: 'var(--cream)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--app-font-mono)',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  border: '3px solid var(--gold)'
                }}>
                  ing
                </div>
                <div style={{ width: '25px', height: '10px', background: 'var(--gold)', opacity: 0.9 }} />
                <div style={{ width: '55px', height: '6px', background: 'var(--gold)', borderRadius: '3px' }} />
              </div>
            </div>
            <span style={{ fontFamily: 'var(--app-font-mono)', fontSize: '1.05rem', color: 'var(--gold)', fontWeight: 'bold', letterSpacing: '0.05em' }}>
              04. Marketing
            </span>
          </button>
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem', marginBottom: '3.5rem', position: 'relative' }}>
          <h2 style={{ fontFamily: 'var(--app-font-serif)', fontSize: '2.6rem', color: 'var(--gold)' }}>
            {currentContent.mainTitle}
          </h2>
        </div>

        <div style={{ 
          maxWidth: '980px', 
          margin: '0 auto', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '1.5rem',
          paddingBottom: '2rem',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            left: '-70px',
            top: '15%',
            background: 'var(--gold)',
            color: 'var(--berry)',
            fontFamily: 'var(--app-font-mono)',
            fontSize: '0.75rem',
            padding: '4px 10px',
            borderRadius: '6px',
            transform: 'rotate(-12deg)',
            boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
            fontWeight: 'bold',
            zIndex: 10,
            pointerEvents: 'none'
          }}>
            ✦ clave
          </div>

          <div style={{
            position: 'absolute',
            right: '-60px',
            top: '55%',
            background: 'var(--teal)',
            color: 'var(--cream)',
            fontFamily: 'var(--app-font-mono)',
            fontSize: '0.75rem',
            padding: '4px 10px',
            borderRadius: '6px',
            transform: 'rotate(10deg)',
            boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
            fontWeight: 'bold',
            zIndex: 10,
            border: '1.5px solid var(--gold)',
            pointerEvents: 'none'
          }}>
            ✨ pro tip
          </div>

          <div style={{
            position: 'absolute',
            left: '-55px',
            bottom: '10%',
            background: 'var(--gold)',
            color: 'var(--berry)',
            padding: '8px 12px',
            borderRadius: '8px',
            fontFamily: 'var(--app-font-mono)',
            fontSize: '0.75rem',
            textAlign: 'center',
            transform: 'rotate(-6deg)',
            boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
            zIndex: 10,
            border: '2px solid var(--berry)',
            pointerEvents: 'none'
          }}>
            <strong>nota:</strong> revisa bien
          </div>

          {currentContent.recommendations.map((rec, index) => {
            if (index === 0) {
              return (
                <div key={rec.id} className="bamboo-row" style={{ display: 'flex', alignItems: 'stretch', gap: '0px', position: 'relative' }}>
                  <div className="bamboo-svg-container" style={{ position: 'relative', width: '155px', flexShrink: 0, zIndex: 2, filter: 'drop-shadow(0 8px 18px rgba(0,0,0,0.45))', transition: 'all 0.3s ease', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg viewBox="0 0 155 350" preserveAspectRatio="none" width="100%" height="100%" style={{ overflow: 'visible', display: 'block', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                      <path d="M 119 120 Q 152 104 150 80 C 148 67, 132 77, 115 107 Z" fill="var(--teal)" stroke="var(--gold)" strokeWidth="2.5" strokeLinejoin="round" />
                      <path d="M 24 25 C 45 100, 45 250, 36 345 L 118 345 C 110 250, 110 100, 131 25 Z" fill="var(--teal)" stroke="var(--gold)" strokeWidth="3" />
                      <path d="M 38 35 C 50 120, 50 230, 43 325" fill="none" stroke="var(--cream)" strokeWidth="3.5" strokeLinecap="round" opacity="0.25" />
                      <path d="M 23 30 Q 77.5 38 132 30" fill="none" stroke="var(--gold)" strokeWidth="3" strokeLinecap="round" />
                      <path d="M 35 340 Q 77.5 334 120 340" fill="none" stroke="var(--gold)" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                    <span style={{ fontFamily: 'var(--app-font-mono)', fontSize: '1.45rem', color: 'var(--cream)', fontWeight: 'bold', textShadow: '0 2px 4px rgba(0,0,0,0.4)', zIndex: 3, position: 'relative' }}>01</span>
                  </div>

                  <div className="content-box" style={{ flex: 1, background: 'rgba(45, 12, 25, 0.78)', border: '2px solid rgba(231, 195, 107, 0.35)', borderLeft: '4px solid var(--gold)', borderRadius: '0 20px 20px 0', padding: '2.2rem 2.8rem', marginLeft: '-22px', boxShadow: '0 10px 25px rgba(0,0,0,0.3)', transition: 'all 0.3s ease', display: 'flex', flexDirection: 'column', gap: '0.6rem', zIndex: 1 }}>
                    <span style={{ fontFamily: 'var(--app-font-mono)', fontSize: '0.85rem', color: 'var(--gold)', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 'bold' }}>{rec.title}</span>
                    <p style={{ fontFamily: 'var(--app-font-sans)', fontSize: '1.1rem', color: 'var(--cream)', margin: 0, lineHeight: '1.6', opacity: 0.95 }}>{rec.description}</p>
                  </div>
                </div>
              );
            }

            if (index === 1) {
              return (
                <div key={rec.id} className="bamboo-row" style={{ display: 'flex', alignItems: 'stretch', gap: '0px', position: 'relative' }}>
                  <div className="bamboo-svg-container" style={{ position: 'relative', width: '155px', flexShrink: 0, zIndex: 2, filter: 'drop-shadow(0 8px 18px rgba(0,0,0,0.45))', transition: 'all 0.3s ease', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg viewBox="0 0 155 350" preserveAspectRatio="none" width="100%" height="100%" style={{ overflow: 'visible', display: 'block', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                      <path d="M 36 120 Q 3 104 5 80 C 7 67, 23 77, 40 107 Z" fill="var(--teal)" stroke="var(--gold)" strokeWidth="2.5" strokeLinejoin="round" />
                      <path d="M 30 150 Q 6 144 12 130 C 16 124, 26 130, 33 142 Z" fill="var(--teal)" stroke="var(--gold)" strokeWidth="2" strokeLinejoin="round" />
                      <path d="M 36 2 C 52 100, 52 250, 36 345 L 118 345 C 102 250, 102 100, 118 2 Z" fill="var(--teal)" stroke="var(--gold)" strokeWidth="3" />
                      <path d="M 45 20 C 55 110, 55 240, 45 325" fill="none" stroke="var(--cream)" strokeWidth="3.5" strokeLinecap="round" opacity="0.25" />
                      <path d="M 35 8 Q 77.5 16 119 8" fill="none" stroke="var(--gold)" strokeWidth="3" strokeLinecap="round" />
                      <path d="M 35 340 Q 77.5 332 119 340" fill="none" stroke="var(--gold)" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                    <span style={{ fontFamily: 'var(--app-font-mono)', fontSize: '1.45rem', color: 'var(--cream)', fontWeight: 'bold', textShadow: '0 2px 4px rgba(0,0,0,0.4)', zIndex: 3, position: 'relative' }}>02</span>
                  </div>

                  <div className="content-box" style={{ flex: 1, background: 'rgba(45, 12, 25, 0.78)', border: '2px solid rgba(231, 195, 107, 0.35)', borderLeft: '4px solid var(--gold)', borderRadius: '0 20px 20px 0', padding: '2.2rem 2.8rem', marginLeft: '-22px', boxShadow: '0 10px 25px rgba(0,0,0,0.3)', transition: 'all 0.3s ease', display: 'flex', flexDirection: 'column', gap: '0.6rem', zIndex: 1 }}>
                    <span style={{ fontFamily: 'var(--app-font-mono)', fontSize: '0.85rem', color: 'var(--gold)', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 'bold' }}>{rec.title}</span>
                    <p style={{ fontFamily: 'var(--app-font-sans)', fontSize: '1.1rem', color: 'var(--cream)', margin: 0, lineHeight: '1.6', opacity: 0.95 }}>{rec.description}</p>
                  </div>
                </div>
              );
            }

            return (
              <div key={rec.id} className="bamboo-row" style={{ display: 'flex', alignItems: 'stretch', gap: '0px', position: 'relative' }}>
                <div className="bamboo-svg-container" style={{ position: 'relative', width: '155px', flexShrink: 0, zIndex: 2, filter: 'drop-shadow(0 8px 18px rgba(0,0,0,0.45))', transition: 'all 0.3s ease', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg viewBox="0 0 155 350" preserveAspectRatio="none" width="100%" height="100%" style={{ overflow: 'visible', display: 'block', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                    <path d="M 36 2 C 50 100, 50 250, 20 345 L 134 345 C 104 250, 104 100, 118 2 Z" fill="var(--teal)" stroke="var(--gold)" strokeWidth="3" />
                    <path d="M 44 20 C 52 110, 52 240, 38 325" fill="none" stroke="var(--cream)" strokeWidth="3.5" strokeLinecap="round" opacity="0.25" />
                    <path d="M 35 8 Q 77.5 16 119 8" fill="none" stroke="var(--gold)" strokeWidth="3" strokeLinecap="round" />
                    <path d="M 19 338 Q 77.5 346 135 338" fill="none" stroke="var(--gold)" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                  <span style={{ fontFamily: 'var(--app-font-mono)', fontSize: '1.45rem', color: 'var(--cream)', fontWeight: 'bold', textShadow: '0 2px 4px rgba(0,0,0,0.4)', zIndex: 3, position: 'relative' }}>03</span>
                </div>

                <div className="content-box" style={{ flex: 1, background: 'rgba(45, 12, 25, 0.78)', border: '2px solid rgba(231, 195, 107, 0.35)', borderLeft: '4px solid var(--gold)', borderRadius: '0 20px 20px 0', padding: '2.2rem 2.8rem', marginLeft: '-22px', boxShadow: '0 10px 25px rgba(0,0,0,0.3)', transition: 'all 0.3s ease', display: 'flex', flexDirection: 'column', gap: '0.6rem', zIndex: 1 }}>
                  <span style={{ fontFamily: 'var(--app-font-mono)', fontSize: '0.85rem', color: 'var(--gold)', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 'bold' }}>{rec.title}</span>
                  <p style={{ fontFamily: 'var(--app-font-sans)', fontSize: '1.1rem', color: 'var(--cream)', margin: 0, lineHeight: '1.6', opacity: '0.95' }}>{rec.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ position: 'relative', width: '100%', margin: '2rem 0', height: '110px' }}>

        <div style={{ 
          position: 'absolute',
          top: '90px',
          left: 0,
          width: '100%', 
          backgroundColor: '#D9A736', 
          padding: '14px 0', 
          overflow: 'hidden', 
          boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
          borderTop: '2px solid rgba(74, 18, 41, 0.3)',
          borderBottom: '2px solid rgba(74, 18, 41, 0.3)',
          zIndex: 15
        }}>
          <div className="ticker-track">
            {[...Array(4)].map((_, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                <span style={{ 
                  fontFamily: 'var(--app-font-mono)', 
                  fontSize: '1.2rem', 
                  fontWeight: '900', 
                  color: 'var(--berry)', 
                  letterSpacing: '0.1em',
                  paddingRight: '2rem'
                }}>
                  {currentContent.tickerText}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ 
          position: 'absolute',
          top: '20px',
          left: 0,
          width: '100%', 
          backgroundColor: '#D9A736', 
          padding: '14px 0', 
          overflow: 'hidden', 
          transform: 'rotate(-2.5deg) scale(1.02)', 
          boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
          borderTop: '3px solid var(--berry)',
          borderBottom: '3px solid var(--berry)',
          zIndex: 20
        }}>
          <div className="ticker-track">
            {[...Array(4)].map((_, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                <span style={{ 
                  fontFamily: 'var(--app-font-mono)', 
                  fontSize: '1.2rem', 
                  fontWeight: '900', 
                  color: 'var(--berry)', 
                  letterSpacing: '0.1em',
                  paddingRight: '2rem'
                }}>
                  {currentContent.tickerText}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      <section className="grid-background" style={{ color: 'var(--berry)', padding: '3rem 5vw 5rem 5vw', position: 'relative' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center', overflow: 'visible' }}>
          <h3 style={{ fontFamily: 'var(--app-font-serif)', fontSize: '2.6rem', color: 'var(--berry)', marginBottom: '1rem' }}>
            Contenido Recomendado
          </h3>
          <p style={{ fontFamily: 'var(--app-font-sans)', fontSize: '1.05rem', color: 'var(--berry)', opacity: 0.85, marginBottom: '3.5rem', fontWeight: '500' }}>
            Explora los podcasts, libros y herramientas que seleccionamos para profundizar en este tema.
          </p>

          <div style={{ position: 'relative', height: '480px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'visible', padding: '1rem 3rem' }}>
            <button 
              onClick={handlePrevMedia}
              style={{ position: 'absolute', left: '-10px', zIndex: 30, background: 'var(--berry)', border: '2px solid var(--gold)', color: 'var(--gold)', borderRadius: '50%', width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.2)', transition: 'all 0.2s ease' }}
            >
              <ChevronLeft size={24} />
            </button>

            <button 
              onClick={handleNextMedia}
              style={{ position: 'absolute', right: '-10px', zIndex: 30, background: 'var(--berry)', border: '2px solid var(--gold)', color: 'var(--gold)', borderRadius: '50%', width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.2)', transition: 'all 0.2s ease' }}
            >
              <ChevronRight size={24} />
            </button>

            {mediaList.map((item, idx) => {
              const diff = (idx - activeMediaIndex + mediaList.length) % mediaList.length;

              let position = "hidden";
              if (diff === 0) position = "center";
              else if (diff === 1 || diff === -(mediaList.length - 1)) position = "right";
              else if (diff === mediaList.length - 1 || diff === -1) position = "left";

              if (position === "hidden") return null;

              const currentClipId = `leafClip-${idx}`;
              const leafPaths = [
                "M 130 225 C 100 200, 60 150, 75 90 C 90 30, 140 20, 175 35 C 210 50, 245 100, 230 160 C 215 220, 160 250, 130 225 Z",
                "M 160 230 C 130 220, 75 190, 65 130 C 55 70, 110 30, 160 15 C 210 30, 265 70, 255 130 C 245 190, 190 220, 160 230 Z",
                "M 190 225 C 220 200, 260 150, 245 90 C 230 30, 180 20, 145 35 C 110 50, 75 100, 90 160 C 105 220, 160 250, 190 225 Z"
              ];
              const currentLeafPath = leafPaths[idx % leafPaths.length];

              return (
                <div 
                  key={item.id} 
                  className={`leaf-card ${position}`}
                  onClick={() => setActiveMediaIndex(idx)}
                  style={{ width: '320px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                >
                  <div style={{ position: 'relative', width: '320px', height: '270px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg viewBox="0 0 320 270" width="100%" height="100%" style={{ overflow: 'visible', filter: 'drop-shadow(0 12px 22px rgba(0,0,0,0.18))' }}>
                      <defs>
                        <clipPath id={currentClipId}>
                          <path d={currentLeafPath} />
                        </clipPath>
                      </defs>

                      {item.image ? (
                        <image 
                          href={item.image} 
                          width="320" 
                          height="270" 
                          preserveAspectRatio="xMidYMid slice" 
                          clipPath={`url(#${currentClipId})`}
                        />

                      ) : (
                        <path d={currentLeafPath} fill="var(--teal)" clipPath={`url(#${currentClipId})`} />
                      )}

                      <path d={currentLeafPath} fill="none" stroke="var(--gold)" strokeWidth="4.5" strokeLinejoin="round" />

                      {idx % 3 === 0 && <path d="M 152 32 Q 130 120, 130 225" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" opacity="0.5" />}
                      {idx % 3 === 1 && <path d="M 160 20 Q 160 120, 160 225" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" opacity="0.5" />}
                      {idx % 3 === 2 && <path d="M 168 32 Q 190 120, 190 225" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" opacity="0.5" />}

                      <path d="M 225 35 Q 245 25, 255 45 C 265 60, 245 70, 230 55 Z" fill="var(--teal)" stroke="var(--gold)" strokeWidth="1.8" />
                      <path d="M 95 215 Q 75 225, 65 210 C 50 195, 70 185, 85 200 Z" fill="var(--teal)" stroke="var(--gold)" strokeWidth="1.8" />
                    </svg>
                  </div>

                  <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start', paddingLeft: '15px', marginTop: '-15px', zIndex: 12 }}>
                    <a 
                      href={item.link} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ver-mas-btn"
                      style={{
                        background: 'var(--berry)',
                        border: '2px solid var(--gold)',
                        borderRadius: '12px',
                        padding: '8px 16px',
                        color: 'var(--gold)',
                        fontFamily: 'var(--app-font-mono)',
                        fontSize: '0.85rem',
                        fontWeight: 'bold',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        boxShadow: '0 6px 15px rgba(0,0,0,0.2)',
                        transition: 'all 0.25s ease'
                      }}
                    >
                      Ver más <ArrowUpRight size={16} />
                    </a>
                  </div>

                  <div style={{
                    width: '90%',
                    background: 'var(--berry)',
                    border: '2px solid var(--gold)',
                    borderRadius: '16px',
                    padding: '1rem 1.5rem',
                    marginTop: '10px',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                    textAlign: 'left'
                  }}>
                    <div style={{ fontFamily: 'var(--app-font-serif)', fontSize: '0.95rem', color: 'var(--gold)', fontWeight: 'bold', marginBottom: '4px' }}>
                      {item.title}
                    </div>
                    <p style={{ fontFamily: 'var(--app-font-sans)', fontSize: '0.85rem', color: 'var(--cream)', margin: 0, lineHeight: '1.4', opacity: 0.95 }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '2rem' }}>
            {mediaList.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveMediaIndex(idx)}
                style={{
                  width: activeMediaIndex === idx ? '24px' : '10px',
                  height: '10px',
                  borderRadius: '50px',
                  background: activeMediaIndex === idx ? 'var(--berry)' : 'rgba(74, 18, 41, 0.3)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              />  
            ))}
          </div>
        </div>
      </section>

      
      <AdBanner />
    </main>
  );
}