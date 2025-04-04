/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */

"use client";

type DepartamentoInfo = {
  nombre: string;
  desechosTon: number;
  comentarios?: string;
};

export default function DepartamentosPage() {
  // Listado completo de los 22 departamentos con datos estimados (ejemplo).
  // Ajusta los valores y comentarios según tus fuentes.
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

  // Función para determinar el color de fondo por rangos de toneladas
  // (ejemplo de mapeo de color basado en la cantidad de desechos).
  const getRowColor = (ton: number) => {
    if (ton > 600)  return "#f8d7da"; // Rango muy alto -> rojizo claro
    if (ton > 300)  return "#fff3cd"; // Rango medio-alto -> amarillo claro
    if (ton > 150)  return "#d1ecf1"; // Rango medio -> celeste claro
    return "#d4edda";                // Rango bajo -> verde claro
  };

  return (
    <>
      <header className="top-nav">
        <div className="nav-container">
          <div className="nav-left">
            <img src="/images/logo.png" alt="Logo Recicla UMG" className="logo" />
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
        /* Encabezado / Barra de navegación */
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

        /* Contenido principal */
        .content {
          max-width: 900px; /* un poquito más ancho para la tabla */
          margin: 2rem auto;
          padding: 1rem;
          background: #f9f9f9;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          font-family: Arial, sans-serif;
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

        /* Tabla */
        .table-container {
          overflow-x: auto; /* Para scroll horizontal en pantallas pequeñas */
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
        tbody tr:nth-child(even) {
          /* quitamos color alterno para no chocar con el mapeo de color
             pero si gustas mantenerlo, cambia la lógica */
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
