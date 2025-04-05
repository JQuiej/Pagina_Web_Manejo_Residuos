"use client";
import { useState } from "react";

export default function DepartamentosMapaPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const dataDepartamentos = [
    { nombre: "Alta Verapaz", puntaje: 55, comentarios: "Genera residuos por actividad agrícola" },
    { nombre: "Baja Verapaz", puntaje: 35, comentarios: "Infraestructura limitada" },
    { nombre: "Chimaltenango", puntaje: 55, comentarios: "Crecimiento poblacional y urbano" },
    { nombre: "Chiquimula", puntaje: 35, comentarios: "Necesita mayor inversión en reciclaje" },
    { nombre: "El Progreso", puntaje: 50, comentarios: "Zona en desarrollo" },
    { nombre: "Escuintla", puntaje: 60, comentarios: "Alta actividad industrial y portuaria" },
    { nombre: "Guatemala", puntaje: 80, comentarios: "Zona urbana con programas de reciclaje" },
    { nombre: "Huehuetenango", puntaje: 50, comentarios: "Amplias zonas rurales" },
    { nombre: "Izabal", puntaje: 70, comentarios: "Mejor manejo en zonas turísticas" },
    { nombre: "Jalapa", puntaje: 45, comentarios: "Retos por crecimiento poblacional" },
    { nombre: "Jutiapa", puntaje: 60, comentarios: "Iniciativas de reciclaje en crecimiento" },
    { nombre: "Petén", puntaje: 40, comentarios: "Amplia extensión territorial" },
    { nombre: "Quetzaltenango", puntaje: 65, comentarios: "Buen sistema de separación y reciclaje" },
    { nombre: "Quiché", puntaje: 55, comentarios: "Programas en desarrollo" },
    { nombre: "Retalhuleu", puntaje: 55, comentarios: "Necesita mejoras en infraestructura" },
    { nombre: "Sacatepéquez", puntaje: 65, comentarios: "Destaca por sus iniciativas locales" },
    { nombre: "San Marcos", puntaje: 40, comentarios: "Retos en gestión de residuos" },
    { nombre: "Santa Rosa", puntaje: 45, comentarios: "Zona en transición hacia mejores prácticas" },
    { nombre: "Sololá", puntaje: 70, comentarios: "Buen manejo en áreas urbanas" },
    { nombre: "Suchitepéquez", puntaje: 45, comentarios: "Necesita reforzar su sistema de reciclaje" },
    { nombre: "Totonicapán", puntaje: 50, comentarios: "Zona rural con desafíos de gestión" },
    { nombre: "Zacapa", puntaje: 30, comentarios: "Bajo manejo de residuos" },
  ];

  function getColor(score: number): string {
    if (score <= 40) return "#f8d7da"; // rojo claro
    if (score <= 60) return "#fff3cd"; // amarillo claro
    if (score <= 80) return "#d1ecf1"; // celeste claro
    return "#d4edda";                 // verde claro
  }

  return (
    <>
      {/* ---------- BARRA DE NAVEGACIÓN (mismo diseño que en los anteriores) ---------- */}
      <header className="top-nav">
        <div className="nav-container">
          <div className="nav-left">
            <img src="/images/logo.png" alt="Logo Recicla UMG" className="logo" />
            <span className="logo-text">Recicla UMG</span>
          </div>
          <div className="nav-right">
            {/* Enlaces de escritorio */}
            <nav className="nav-links">
              <a href="/" className="nav-link">Inicio</a>
              <a href="/departamentos" className="nav-link">Estadisticas</a>
              <a href="/mapa" className="nav-link">Mapa de Residuos</a>
              <a href="/clasificador" className="nav-link">Clasificador</a>
            </nav>
            {/* Botón hamburguesa para móvil */}
            <button className="hamburger" onClick={toggleMenu}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          </div>
        </div>
        {/* Menú móvil, se muestra al hacer clic en la hamburguesa */}
        {isMenuOpen && (
          <nav className="mobile-menu">
            <a href="/" className="nav-link" onClick={toggleMenu}>Inicio</a>
            <a href="/departamentos" className="nav-link" onClick={toggleMenu}>Estadisticas</a>
            <a href="/mapa" className="nav-link" onClick={toggleMenu}>Mapa de Residuos</a>
            <a href="/clasificador" className="nav-link" onClick={toggleMenu}>Clasificador</a>
          </nav>
        )}
      </header>

      {/* ---------- CONTENIDO PRINCIPAL: CENTRADO Y LIMITADO ---------- */}
      <div className="content-container">
        <main className="content">
          <h1>Mapa de Guatemala y Estadísticas de Manejo de Residuos</h1>
          <section className="map-section">
            <img src="/images/guatemala.png" alt="Mapa de Guatemala" className="map-image" />
          </section>

          <section className="legend-section">
            <h2>Leyenda del Manejo de Residuos (0-100)</h2>
            <ul className="legend-list">
              <li>
                <span className="color-box" style={{ background: "#f8d7da" }}></span>
                0 - 40: Manejo deficiente
              </li>
              <li>
                <span className="color-box" style={{ background: "#fff3cd" }}></span>
                41 - 60: Necesita mejoras
              </li>
              <li>
                <span className="color-box" style={{ background: "#d1ecf1" }}></span>
                61 - 80: Progreso adecuado
              </li>
              <li>
                <span className="color-box" style={{ background: "#d4edda" }}></span>
                81 - 100: Muy buen manejo
              </li>
            </ul>
          </section>

          <section className="stats-section">
            <h2>Estadísticas por Departamento</h2>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Departamento</th>
                    <th>Puntaje (0-100)</th>
                    <th>Comentarios</th>
                  </tr>
                </thead>
                <tbody>
                  {dataDepartamentos.map((dept, index) => (
                    <tr key={index} style={{ backgroundColor: getColor(dept.puntaje) }}>
                      <td>{dept.nombre}</td>
                      <td>{dept.puntaje}</td>
                      <td>{dept.comentarios}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </main>

        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} Recicla UMG. Todos los derechos reservados.</p>
        </footer>
      </div>

      <style jsx>{`
        /* ---------- RESETEO BÁSICO ---------- */
        * {
          box-sizing: border-box;
        }
        body, html {
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
        }

/* ---------- NAV: IGUAL A TUS OTROS EJEMPLOS ---------- */
        .top-nav {
          background: #fff;
          padding: 0.5rem 2rem;
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: nowrap; /* evita que se rompa el nav en 2 filas */
        }
        .nav-left {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-shrink: 0; /* evita que se encoja */
        }
        .logo {
          max-height: 40px;
          object-fit: contain;
        }
        .logo-text {
          font-size: 1rem;
          font-weight: bold;
          color: #000;
        }
        .nav-right {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-shrink: 0; /* evita que se encoja */
        }
        /* Enlaces con borde negro */
        .nav-links {
          display: flex;
          gap: 1rem;
        }
        .nav-link {
          display: inline-block;
          padding: 0.5rem 1.2rem;
          background-color: transparent;
          color: #000;
          border: 1px solid #000;
          border-radius: 6px;
          text-decoration: none;
          font-size: 1rem;
          font-weight: 500;
          transition: background-color 0.2s ease, color 0.2s ease;
          cursor: pointer;
        }
        .nav-link:hover,
        .nav-link:focus {
          background-color: #000;
          color: #fff;
        }
        /* Botón hamburguesa (oculto en desktop) */
        .hamburger {
          display: none;
          flex-direction: column;
          justify-content: space-around;
          width: 24px;
          height: 24px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
        }
        .hamburger .bar {
          width: 100%;
          height: 3px;
          background-color: #000;
          border-radius: 2px;
        }
        /* Menú móvil (oculto por defecto) */
        .mobile-menu {
          display: none;
          flex-direction: column;
          gap: 0.5rem;
          padding: 0.5rem 2rem;
          background: #fff;
          border-top: 1px solid #ddd;
        }

        /* ---------- CONTENIDO PRINCIPAL ---------- */
        .content-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        .content {
          margin: 2rem auto;
          padding: 1rem;
          background: #f9f9f9;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          text-align: center;
        }
        h1 {
          margin-bottom: 1rem;
          color: #2c3e50;
        }
        p {
          margin-bottom: 1.5rem;
          color: #555;
        }
        .map-section {
          margin: 2rem 0;
        }
        .map-image {
          max-width: 100%;
          height: auto;
          border: 1px solid #ccc;
          border-radius: 8px;
        }
        .legend-section {
          margin: 2rem 0;
        }
        .legend-list {
          list-style: none;
          padding: 0;
          max-width: 400px;
          margin: 0 auto;
          text-align: left;
        }
        .legend-list li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin: 0.5rem 0;
          font-size: 1rem;
          color: #333;
        }
        .color-box {
          width: 20px;
          height: 20px;
          border: 1px solid #999;
          border-radius: 4px;
        }
        .stats-section {
          margin: 2rem 0;
        }
        .table-container {
          width: 100%;
          overflow-x: auto;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin: 0 auto;
          table-layout: fixed;
        }
        th,
        td {
          padding: 0.75rem;
          border: 1px solid #ddd;
          text-align: left;
          white-space: normal;
          word-wrap: break-word;
        }
        th {
          background-color: #efefef;
          color: #333;
        }

        /* ---------- FOOTER ---------- */
        .footer {
          text-align: center;
          padding: 1rem;
          background: #fff;
          border-top: 1px solid #ddd;
          margin-top: 2rem;
        }
        .footer p {
          color: #333;
        }

        /* ---------- RESPONSIVE (MÓVIL) ---------- */
        @media (max-width: 768px) {
          /* En móvil, ocultamos enlaces y mostramos hamburguesa */
          .nav-links {
            display: none;
          }
          .hamburger {
            display: flex;
          }
          .mobile-menu {
            display: flex;
          }
          .nav-container {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
          main {
            padding: 1rem;
          }
          .file-input {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
