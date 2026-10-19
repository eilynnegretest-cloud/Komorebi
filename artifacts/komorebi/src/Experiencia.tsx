import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, Play, ArrowUpRight } from "lucide-react";

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

const emprendedoras = [
  {
    id: 1,
    nombre: "Milena Gil Tenjo",
    profesion: "Fundadora y dueña de club de patinaje Trueno",
    descripcion: "Entrenadora y fundadora de Trueno, un club de patinaje donde impulsa el desarrollo deportivo y la confianza de sus alumnos a través de una metodología basada en la disciplina y la superación personal",
    imagen: "https://res.cloudinary.com/x3pd9fct/image/upload/v1788749047/Captura_de_pantalla_392.png",
    videos: [
      { titulo: "Video 1: La historia de Milena", link: "https://youtu.be/ZaBCEgPqOgE?si=szelJ2dIQLTjeDDJ" },
      { titulo: "Video 2: Reinvención y liderazgo", link: "https://youtu.be/qTyUc3ETkYk?si=wai8wdCmSDQ-8Ww3" }
    ]
  },
  {
    id: 2,
    nombre: "Daniela Amaya",
    profesion: "Fundadora y dueña de Elevate StudioX",
    descripcion: "Fundadora de una agencia de marketing digital, producción audiovisual y creación de contenido enfocada en el crecimiento de marcas. Lidera proyectos multimedia con tecnología de punta y ha colaborado con empresas nacionales e internacionales de diversos sectores, como gastronomía y eventos, adaptando soluciones creativas a las necesidades de cada industria.",
    imagen: "", 
    videos: [
      { titulo: "Video 1: Proceso creativo", link: "#" },
      { titulo: "Video 2: Monetización", link: "#" }
    ]
  },
  {
    id: 3,
    nombre: "Valentina Domínguez",
    profesion: "Fundadora y dueña de Trenzando Tejido, líder red de hacedores de oficio artesanal de Engativá",
    descripcion: "Antropóloga, artista y gestora cultural con experiencia en transformación social, pedagogía artística y fortalecimiento comunitario. Es fundadora de Trenzando Tejido y lidera la red de hacedores de oficio artesanal de Engativá, impulsando la preservación de saberes tradicionales, la equidad de género y las economías solidarias. Su labor articula el arte, la salud mental, la apropiación del espacio público y la capacitación en técnicas artesanales y marketing para emprendimientos locales, con el respaldo de entidades como la Alcaldía Local de Engativá.",
    imagen: "", 
    videos: [
      { titulo: "Video 1: Primeros pasos", link: "#" },
      { titulo: "Video 2: Organización", link: "#" }
    ]
  }
];

export default function Experiencia() {
  const [activa, setActiva] = useState(emprendedoras[0]);

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .experiencia-grid {
            grid-template-columns: 1fr !important;
          }
          .experiencia-card {
            padding: 4.5rem 1.25rem 2rem 1.25rem !important;
            margin-top: 3.5rem !important;
          }
          .experiencia-titulo {
            font-size: 1.8rem !important;
            white-space: normal !important;
            text-align: center !important;
            padding: 0.3rem 1rem !important;
          }
          .experiencia-nombre {
            font-size: 2.2rem !important;
          }
          .experiencia-img-container {
            height: 280px !important;
          }
        }
        .video-link-item:hover {
          border-color: var(--gold, #E7C36B) !important;
          background-color: rgba(36, 154, 158, 0.25) !important;
          transform: translateY(-2px);
        }
      `}</style>
      <div style={{  
        minHeight: '100vh',  
        backgroundColor: '#3A1520', 
        backgroundImage: activa.imagen 
          ? `linear-gradient(rgba(74, 19, 38, 0.85), rgba(74, 19, 38, 0.85)), url(${activa.imagen})`
          : 'none',  
        backgroundRepeat: 'no-repeat',  
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#4A1326',  
        padding: '2.5rem 1rem',
        fontFamily: 'var(--app-font-sans)',
        boxSizing: 'border-box',
        position: 'relative',
        transition: 'background-image 0.5s ease-in-out'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

          <Link href="/" style={{  
            color: 'var(--teal, #249A9E)',  
            textDecoration: 'none',  
            fontWeight: 'bold',  
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '1.5rem',
            backgroundColor: 'rgba(74, 19, 38, 0.85)',
            padding: '0.5rem 1rem',
            borderRadius: '999px',
            border: '1px solid #249A9E'
          }}>
            <ArrowLeft size={18} /> Volver al inicio
          </Link>

          <div className="experiencia-card" style={{  
            backgroundColor: '#F4E8D1',  
            border: '3px solid #249A9E',  
            borderRadius: '24px',  
            padding: '4rem 2.5rem 2.5rem 2.5rem', 
            boxShadow: '0 12px 40px rgba(0,0,0,0.5)',
            color: '#4A1326',
            position: 'relative',
            marginTop: '3rem'
          }}>

            <div style={{  
              position: 'absolute',
              top: '-32px', 
              left: '50%',
              transform: 'translateX(-50%)', 
              zIndex: 10,
              width: '90%',
              textAlign: 'center'
            }}>
              <h1 className="experiencia-titulo" style={{  
                fontFamily: 'var(--app-font-serif)',  
                fontSize: '3.6rem',  
                color: 'var(--gold, #E7C36B)',
                margin: 0,
                textShadow: '0 2px 5px rgba(0,0,0,0.5)',
                backgroundColor: '#6B1D38', 
                padding: '0.2rem 1.5rem',
                borderRadius: '12px',
                border: '2px solid #249A9E',
                display: 'inline-block'
              }}>
                La voz de la experiencia
              </h1>
            </div>

            <p style={{ fontSize: '1.15rem', marginTop: '1rem', marginBottom: '2rem', color: '#5A2A3A', fontStyle: 'italic', fontWeight: '500', textAlign: 'center' }}>
              Explora las vivencias, consejos y aprendizajes de quienes ya abrieron brecha.
            </p>

            <div className="experiencia-grid" style={{  
              display: 'grid',  
              gridTemplateColumns: '1.2fr 1fr',  
              gap: '2.5rem',
              alignItems: 'center',
              marginBottom: '3rem'
            }}>

              <div>
                <h2 className="experiencia-nombre" style={{  
                  fontFamily: 'var(--app-font-serif)',  
                  fontSize: '3.2rem',  
                  margin: '0 0 0.5rem 0',
                  color: '#4A1326',
                  lineHeight: '1.1'
                }}>
                  {activa.nombre}
                </h2>

                <div style={{  
                  display: 'inline-block',
                  backgroundColor: '#249A9E',
                  color: '#F4E8D1',
                  padding: '0.4rem 1.2rem',
                  borderRadius: '8px',
                  fontWeight: 'bold',
                  fontSize: '0.95rem',
                  marginBottom: '1.5rem',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
                }}>
                  {activa.profesion}
                </div>

                <p style={{ fontSize: '1.05rem', lineHeight: '1.6', color: '#3A1520', marginBottom: '1.8rem' }}>
                  {activa.descripcion}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  {activa.videos.map((vid, idx) => (
                    <a 
                      key={idx} 
                      href={vid.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="video-link-item"
                      style={{  
                        display: 'flex',  
                        alignItems: 'center',  
                        justifyContent: 'space-between',
                        backgroundColor: 'rgba(36, 154, 158, 0.15)',
                        padding: '0.9rem 1.1rem',
                        borderRadius: '12px',
                        border: '1px solid #249A9E',
                        textDecoration: 'none',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                        <Play size={18} color="#249A9E" />
                        <span style={{ fontSize: '0.95rem', color: '#4A1326', fontWeight: '600' }}>{vid.titulo}</span>
                      </div>
                      <ArrowUpRight size={16} color="#249A9E" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="experiencia-img-container" style={{  
                width: '100%',  
                height: '400px',  
                backgroundColor: 'rgba(74, 19, 38, 0.08)',  
                borderRadius: '18px',
                border: '2px dashed #249A9E',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                color: '#5A2A3A',
                padding: '1rem',
                fontWeight: '500',
                overflow: 'hidden'
              }}>
                {activa.imagen ? (
                  <img src={activa.imagen} alt={activa.nombre} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }} />
                ) : (
                  <span>[ Espacio para Imagen de {activa.nombre} ]</span>
                )}
              </div>

            </div>

            <div style={{  
              display: 'flex',  
              justifyContent: 'center',  
              gap: '1rem',  
              flexWrap: 'wrap',
              paddingTop: '1.5rem',
              borderTop: '2px solid rgba(36, 154, 158, 0.3)'
            }}>
              {emprendedoras.map((item) => (
                <div  
                  key={item.id}
                  onClick={() => setActiva(item)}
                  style={{  
                    width: '120px',  
                    height: '85px',  
                    backgroundColor: activa.id === item.id ? '#249A9E' : 'rgba(74, 19, 38, 0.1)',  
                    borderRadius: '14px',
                    border: activa.id === item.id ? '2px solid #4A1326' : '1px solid #249A9E',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: activa.id === item.id ? '0 4px 12px rgba(0,0,0,0.2)' : 'none',
                    transform: activa.id === item.id ? 'scale(1.05)' : 'scale(1)',
                    padding: '0.5rem',
                    textAlign: 'center'
                  }}
                >
                  <span style={{  
                    fontSize: '0.85rem',  
                    fontWeight: 'bold',  
                    color: activa.id === item.id ? '#F4E8D1' : '#4A1326'  
                  }}>
                    {item.nombre}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>
        <AdBanner />
      </div>
    </>
  );
}