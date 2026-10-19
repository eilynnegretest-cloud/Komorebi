import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, Download, ExternalLink, FileText, X } from "lucide-react";

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

type Template = {
  id: number;
  title: string;
  pdfUrl: string;
};

const templatesData: Template[] = [
  {
    id: 1,
    title: "Plantilla Brief de Marca",
    pdfUrl: "/Plantilla Brief de marca.pdf",
  },
  {
    id: 2,
    title: "Plantilla Control de Inventario",
    pdfUrl: "/Plantilla control inventario.pdf",
  },
  {
    id: 3,
    title: "Plantilla Planificador Calendario",
    pdfUrl: "/Plantilla planificador calendario.pdf",
  },
];

export default function Plantillas() {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#E6DEC9",
        backgroundImage: `
          linear-gradient(to right, rgba(36, 154, 158, 0.08) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(36, 154, 158, 0.08) 1px, transparent 1px)
        `,
        backgroundSize: "32px 32px",
        color: "#4A1326",
        padding: "2.5rem 5vw",
        fontFamily: "var(--app-font-sans)",
        boxSizing: "border-box",
      }}
    >
      <style>{`
        .folder-card {
          position: relative;
          cursor: pointer;
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .folder-card:hover {
          transform: translateY(-10px);
        }

        .folder-paper {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 75%;
          height: 100px;
          background-color: #FFFFFF;
          border: 2px solid #249A9E;
          border-radius: 12px 12px 0 0;
          box-shadow: 0 -4px 10px rgba(0,0,0,0.08);
          transition: transform 0.35s ease, opacity 0.35s ease;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.85;
        }

        .folder-card:hover .folder-paper {
          transform: translateX(-50%) translateY(-45px);
          opacity: 1;
        }

        .folder-body {
          position: relative;
          z-index: 2;
          background-color: #249A9E;
          border: 3px solid #E7C36B;
          border-radius: 20px;
          padding: 1.8rem;
          min-height: 220px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 25px rgba(36, 154, 158, 0.25);
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .folder-card:hover .folder-body {
          border-color: #4A1326;
          box-shadow: 0 15px 35px rgba(36, 154, 158, 0.4);
        }

        .folder-inner-frame {
          width: 100%;
          height: 100%;
          border: 2px dashed #E6DEC9;
          border-radius: 12px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          box-sizing: border-box;
        }

        .folder-dots {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .folder-dot {
          width: 8px;
          height: 8px;
          background-color: #E6DEC9;
          border-radius: 50%;
          opacity: 0.8;
        }

        .folder-corner-leaf {
          position: absolute;
          bottom: 10px;
          right: 10px;
          opacity: 0.85;
          transition: transform 0.3s ease;
        }

        .folder-card:hover .folder-corner-leaf {
          transform: rotate(15deg) scale(1.1);
        }

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
        }
      `}</style>

      <header style={{ maxWidth: "1100px", margin: "0 auto", marginBottom: "2rem" }}>
        <Link
          href="/"
          style={{
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            color: "#249A9E",
            fontFamily: "var(--app-font-mono)",
            fontSize: "0.95rem",
            fontWeight: "bold",
            backgroundColor: "#FFFFFF",
            padding: "0.5rem 1.2rem",
            borderRadius: "999px",
            border: "2px solid #249A9E",
            boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
          }}
        >
          <ArrowLeft size={18} /> Volver al Inicio
        </Link>
      </header>

      <div style={{ textAlign: "center", marginBottom: "5rem", marginTop: "1rem" }}>
        <h1
          style={{
            fontFamily: "var(--app-font-serif)",
            fontSize: "3.5rem",
            color: "#249A9E",
            margin: "0 0 0.8rem 0",
            textShadow: "0 2px 4px rgba(0,0,0,0.05)",
          }}
        >
          Plantillas Descargables
        </h1>
        <p
          style={{
            fontFamily: "var(--app-font-sans)",
            fontSize: "1.2rem",
            maxWidth: "650px",
            margin: "0 auto",
            color: "#4A1326",
            opacity: 0.85,
            lineHeight: "1.6",
          }}
        >
          Haz clic en cualquiera de las carpetas para previsualizar el documento, descargarlo o abrirlo en una nueva pestaña.
        </p>
      </div>

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "3.5rem 2.5rem",
          alignItems: "end",
          paddingBottom: "4rem",
        }}
      >
        {templatesData.map((tpl) => (
          <div key={tpl.id} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div
              className="folder-card"
              onClick={() => setSelectedTemplate(tpl)}
              style={{ width: "100%", maxWidth: "310px" }}
            >
              <div className="folder-paper">
                <FileText size={24} color="#249A9E" />
              </div>

              <div className="folder-body">
                <div className="folder-inner-frame">
                  <div className="folder-dots">
                    <div className="folder-dot" />
                    <div className="folder-dot" />
                    <div className="folder-dot" />
                  </div>

                  <div
                    style={{
                      backgroundColor: "#E7C36B",
                      width: "58px",
                      height: "58px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "2px solid #FFFFFF",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                    }}
                  >
                    <FileText size={26} color="#4A1326" />
                  </div>

                  <svg
                    className="folder-corner-leaf"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#E6DEC9"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.4 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                  </svg>
                </div>
              </div>
            </div>

            <span
              style={{
                fontFamily: "var(--app-font-serif)",
                fontSize: "1.25rem",
                fontWeight: "bold",
                color: "#4A1326",
                marginTop: "1.5rem",
                textAlign: "center",
                lineHeight: "1.3",
              }}
            >
              {tpl.title}
            </span>
          </div>
        ))}
      </div>

      {selectedTemplate && (
        <div className="modal-overlay" onClick={() => setSelectedTemplate(null)}>
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "#E6DEC9",
              border: "3px solid #249A9E",
              borderRadius: "24px",
              width: "100%",
              maxWidth: "900px",
              height: "85vh",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
              position: "relative",
            }}
          >
            <div
              style={{
                backgroundColor: "#249A9E",
                padding: "1rem 1.8rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                color: "#E6DEC9",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--app-font-serif)",
                  fontSize: "1.4rem",
                  margin: 0,
                  color: "#FFFFFF",
                }}
              >
                {selectedTemplate.title}
              </h3>

              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <a
                  href={selectedTemplate.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#FFFFFF",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    fontSize: "0.9rem",
                    fontFamily: "var(--app-font-mono)",
                    backgroundColor: "rgba(255,255,255,0.15)",
                    padding: "0.4rem 0.8rem",
                    borderRadius: "8px",
                  }}
                >
                  <ExternalLink size={16} /> Abrir
                </a>

                <a
                  href={selectedTemplate.pdfUrl}
                  download
                  style={{
                    color: "#4A1326",
                    backgroundColor: "#E7C36B",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    fontSize: "0.9rem",
                    fontFamily: "var(--app-font-mono)",
                    fontWeight: "bold",
                    padding: "0.4rem 0.8rem",
                    borderRadius: "8px",
                  }}
                >
                  <Download size={16} /> Descargar
                </a>

                <button
                  onClick={() => setSelectedTemplate(null)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#FFFFFF",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    padding: "0.2rem",
                    marginLeft: "0.5rem",
                  }}
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            <div style={{ flex: 1, backgroundColor: "#525659", position: "relative" }}>
              <iframe
                src={`${selectedTemplate.pdfUrl}#toolbar=0`}
                title={selectedTemplate.title}
                width="100%"
                height="100%"
                style={{ border: "none" }}
              />
            </div>
          </div>
        </div>
      )}
      <AdBanner />
    </main>
  );
}