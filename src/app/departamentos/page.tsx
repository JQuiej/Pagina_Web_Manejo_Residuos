/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */

"use client";
import { useState } from "react";

type DepartamentoInfo = {
  nombre: string;
  desechosTon: number;
  comentarios?: string;
};

export default function DepartamentosPage() {
  // Estado para el menú móvil
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Datos de ejemplo
  const departamentosData: DepartamentoInfo[] = [
    { nombre: "Guatemala",        desechosTon: 1200, comentarios: "Zona metropolitana con alta densidad poblacional" },
    { nombre: "El Progreso",      desechosTon: 80,   comentarios: "Generación menor por área semiárida" },
    { nombre: "Sacatepéquez",     desechosTon: 160,  comentarios: "Turismo y crecimiento urbano (Antigua)" },
    { nombre: "Chimaltenango",    desechosTon: 220,  comentarios: "Crecimiento comercial" },
    { nombre: "Escuintla",        desechosTon: 300,  comentarios: "Turismo costero y puertos" },
    { nombre: "Santa Rosa",       desechosTon: 150,  comentarios: "Áreas rurales con creciente población" },
    { nombre: "Sololá",           desechosTon: 130,  comentarios: "Zona turística (Lago de Atitlán)" },
    { nombre: "Totonicapán",      desechosTon: 100,  comentarios: "Fuerte actividad artesanal" },
    { nombre: "Quetzaltenango",   desechosTon: 350,  comentarios: "Segunda ciudad más importante" },
    { nombre: "Suchitepéquez",    desechosTon: 180,  comentarios: "Región costera con alta agricultura" },
    { nombre: "Retalhuleu",       desechosTon: 140,  comentarios: "Atracción turística (parques temáticos)" },
    { nombre: "San Marcos",       desechosTon: 210,  comentarios: "Extensa actividad agrícola" },
    { nombre: "Huehuetenango",    desechosTon: 180,  comentarios: "Comunidades rurales y comercio fronterizo" },
    { nombre: "Quiché",           desechosTon: 170,  comentarios: "Amplias áreas rurales e indígenas" },
    { nombre: "Baja Verapaz",     desechosTon: 100,  comentarios: "Menor densidad poblacional" },
    { nombre: "Alta Verapaz",     desechosTon: 150,  comentarios: "Región extensa, actividad agroforestal" },
    { nombre: "Petén",            desechosTon: 220,  comentarios: "Región selvática con población dispersa" },
    { nombre: "Izabal",           desechosTon: 200,  comentarios: "Turismo en el Caribe guatemalteco" },
    { nombre: "Zacapa",           desechosTon: 95,   comentarios: "Zona semiárida, menor densidad poblacional" },
    { nombre: "Chiquimula",       desechosTon: 110,  comentarios: "Comercio fronterizo y zonas rurales" },
    { nombre: "Jalapa",           desechosTon: 120,  comentarios: "Zona intermedia con agricultura" },
    { nombre: "Jutiapa",          desechosTon: 135,  comentarios: "Crecimiento poblacional moderado" },
  ];

  // Determinar color de fila según rango de toneladas
  const getRowColor = (ton: number) => {
    if (ton > 600) return "#f8d7da"; // Rango muy alto (rojizo claro)
    if (ton > 300) return "#fff3cd"; // Rango medio-alto (amarillo claro)
    if (ton > 150) return "#d1ecf1"; // Rango medio (celeste claro)
    return "#d4edda";                // Rango bajo (verde claro)
  };

  return (
    <>
      {/* Barra de navegación con mismo diseño que tu primer ejemplo */}
      <header className="top-nav">
        <div className="nav-container">
          <div className="nav-left">
            <img src="/images/logo.png" alt="Logo Recicla UMG" className="logo" />
            <span className="logo-text">Recicla UMG</span>
          </div>
          <div className="nav-right">
            {/* Enlaces visibles en escritorio */}
            <nav className="nav-links">
              <a href="/" className="nav-link">Inicio</a>
              <a href="/departamentos" className="nav-link">Estadísticas</a>
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
        {/* Menú desplegable en móvil */}
        {isMenuOpen && (
          <nav className="mobile-menu">
            <a href="/" className="nav-link" onClick={toggleMenu}>Inicio</a>
            <a href="/departamentos" className="nav-link" onClick={toggleMenu}>Estadísticas</a>
            <a href="/mapa" className="nav-link" onClick={toggleMenu}>Mapa de Residuos</a>
            <a href="/clasificador" className="nav-link" onClick={toggleMenu}>Clasificador</a>
          </nav>
        )}
      </header>

      {/* Contenido principal */}
      <main className="content">
        <h1>Departamentos con Mayor Generación de Desechos</h1>
        <p>
          A continuación, se muestra un estimado de los 22 departamentos de Guatemala con mayor producción de desechos.
          Estos datos tienen fines ilustrativos y pueden variar según estudios oficiales.
        </p>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Departamento</th>
                <th>Toneladas diarias (aprox.)</th>
                <th>Comentarios</th>
              </tr>
            </thead>
            <tbody>
              {departamentosData.map((dept, index) => (
                <tr key={index} style={{ backgroundColor: getRowColor(dept.desechosTon) }}>
                  <td>{dept.nombre}</td>
                  <td>{dept.desechosTon}</td>
                  <td>{dept.comentarios || "Sin información adicional"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Recicla UMG. Todos los derechos reservados.</p>
      </footer>

      <style jsx>{`
        /* ---------- NAV: Mismo estilo que en tu primer ejemplo ---------- */
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
        }
        .nav-left {
          display: flex;
          align-items: center;
          gap: 1rem;
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
          gap: 1rem;
          align-items: center;
        }
        /* Enlaces con outline negro */
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
        /* Botón hamburguesa (oculto en escritorio) */
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
        /* Menú móvil (inicialmente oculto) */
        .mobile-menu {
          display: none;
          flex-direction: column;
          gap: 0.5rem;
          padding: 0.5rem 2rem;
          background: #fff;
          border-top: 1px solid #ddd;
        }

        /* ---------- CONTENIDO PRINCIPAL ---------- */
        .content {
          max-width: 900px;
          margin: 2rem auto;
          padding: 1rem;
          background: #f9f9f9;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          text-align: center;
          font-family: Arial, sans-serif;
        }
        h1 {
          margin-bottom: 1rem;
          color: #2c3e50;
        }
        p {
          margin-bottom: 1.5rem;
          color: #555;
        }
        /* Tabla */
        .table-container {
          overflow-x: auto;
        }
        table {
          width: 100%;
          border-collapse: collapse;
        }
        th,
        td {
          padding: 0.75rem;
          border: 1px solid #ddd;
          text-align: left;
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

        /* ---------- RESPONSIVE ---------- */
        @media (max-width: 768px) {
          /* Ocultamos nav-links y mostramos hamburguesa */
          .nav-links {
            display: none;
          }
          .hamburger {
            display: flex;
          }
          /* Mostramos el menú móvil cuando isMenuOpen es true */
          .mobile-menu {
            display: flex;
          }
          /* Ajustes de layout si quieres mantener logo + hamburguesa en una sola fila */
          .nav-container {
            flex-direction: row;
            justify-content: space-between;
          }
          .content {
            margin: 1rem;
            padding: 1rem;
          }
          table {
            font-size: 14px;
          }
        }
      `}</style>
    </>
  );
}
