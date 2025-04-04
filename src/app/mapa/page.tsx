"use client";

export default function DepartamentosMapaPage() {
  // Datos de los 22 departamentos
  const dataDepartamentos = [
    { nombre: "Alta Verapaz",    puntaje: 55, comentarios: "Genera residuos por actividad agrícola" },
    { nombre: "Baja Verapaz",    puntaje: 35, comentarios: "Infraestructura limitada" },
    { nombre: "Chimaltenango",   puntaje: 55, comentarios: "Crecimiento poblacional y urbano" },
    { nombre: "Chiquimula",      puntaje: 35, comentarios: "Necesita mayor inversión en reciclaje" },
    { nombre: "El Progreso",     puntaje: 50, comentarios: "Zona en desarrollo" },
    { nombre: "Escuintla",       puntaje: 60, comentarios: "Alta actividad industrial y portuaria" },
    { nombre: "Guatemala",       puntaje: 80, comentarios: "Zona urbana con programas de reciclaje" },
    { nombre: "Huehuetenango",   puntaje: 50, comentarios: "Amplias zonas rurales" },
    { nombre: "Izabal",          puntaje: 70, comentarios: "Mejor manejo en zonas turísticas" },
    { nombre: "Jalapa",          puntaje: 45, comentarios: "Retos por crecimiento poblacional" },
    { nombre: "Jutiapa",         puntaje: 60, comentarios: "Iniciativas de reciclaje en crecimiento" },
    { nombre: "Petén",           puntaje: 40, comentarios: "Amplia extensión territorial" },
    { nombre: "Quetzaltenango",  puntaje: 65, comentarios: "Buen sistema de separación y reciclaje" },
    { nombre: "Quiché",          puntaje: 55, comentarios: "Programas en desarrollo" },
    { nombre: "Retalhuleu",      puntaje: 55, comentarios: "Necesita mejoras en infraestructura" },
    { nombre: "Sacatepéquez",    puntaje: 65, comentarios: "Destaca por sus iniciativas locales" },
    { nombre: "San Marcos",      puntaje: 40, comentarios: "Retos en gestión de residuos" },
    { nombre: "Santa Rosa",      puntaje: 45, comentarios: "Zona en transición hacia mejores prácticas" },
    { nombre: "Sololá",          puntaje: 70, comentarios: "Buen manejo en áreas urbanas" },
    { nombre: "Suchitepéquez",   puntaje: 45, comentarios: "Necesita reforzar su sistema de reciclaje" },
    { nombre: "Totonicapán",     puntaje: 50, comentarios: "Zona rural con desafíos de gestión" },
    { nombre: "Zacapa",          puntaje: 30, comentarios: "Bajo manejo de residuos" },
  ];

  // Función para asignar un color según el puntaje
  function getColor(score: number): string {
    if (score <= 40) return "#f8d7da";  // rojo claro
    if (score <= 60) return "#fff3cd";  // amarillo claro
    if (score <= 80) return "#d1ecf1";  // celeste claro
    return "#d4edda";                  // verde claro
  }

  return (
    <div className="container">
      {/* Barra de navegación */}
      <header className="top-nav">
        <div className="nav-container">
          <div className="nav-left">
            <a href="/">
              <img src="/images/logo.png" alt="Logo Recicla UMG" className="logo" />
            </a>
            <span className="logo-text">Recicla UMG</span>
          </div>
          <nav className="nav-right">
            <a href="/" className="nav-link">Inicio</a>
            <a href="/departamentos" className="nav-link">Estadísticas</a>
            <a href="/mapa" className="nav-link">Mapa de Residuos</a>
            <a href="/clasificador" className="nav-link">Clasificador</a>
            
          </nav>
        </div>
      </header>

      {/* Contenido Principal */}
      <main className="content">
        <h1>Mapa de Guatemala y Estadísticas de Manejo de Residuos</h1>
        <section className="map-section">
          <img src="/images/guatemala.png" alt="Mapa de Guatemala" className="map-image" />
        </section>

        {/* Leyenda de colores */}
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

        {/* Tabla de Estadísticas */}
        <section className="stats-section">
          <h2>Estadísticas por Departamento</h2>
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
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Recicla UMG. Todos los derechos reservados.</p>
      </footer>

      <style jsx>{`
        /* Reset básico */
        * {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem;
        }
        /* Barra de navegación */
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
          color: #333;
        }
        .nav-right {
          display: flex;
          gap: 1rem;
        }
        .nav-link {
          padding: 0.5rem 1.2rem;
          color: #333;
          border: 1px solid #333;
          border-radius: 4px;
          text-decoration: none;
          transition: background-color 0.2s ease, color 0.2s ease;
        }
        .nav-link:hover {
          background-color: #333;
          color: #fff;
        }
        /* Contenido Principal */
        .content {
          max-width: 900px;
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
        /* Mapa */
        .map-section {
          text-align: center;
          margin: 2rem 0;
        }
        .map-image {
          max-width: 100%;
          height: auto;
          border: 1px solid #ccc;
          border-radius: 8px;
        }
        /* Leyenda */
        .legend-section {
          text-align: center;
          margin: 2rem 0;
        }
        .legend-list {
          list-style: none;
          padding: 0;
          max-width: 400px;
          margin: 0 auto;
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
        /* Estadísticas */
        .stats-section {
          text-align: center;
          margin: 2rem 0;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin: 0 auto;
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
        tbody tr:nth-child(even) {
          background-color: #fafafa;
        }
        /* Footer */
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
        @media (max-width: 768px) {
          .nav-container {
            flex-direction: column;
            gap: 1rem;
            padding: 1rem;
          }
          table {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
}
