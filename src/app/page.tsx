/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */

"use client";
import { useState } from "react";

export default function WelcomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Barra de navegación con menú responsivo */}
      <header className="top-nav">
        <div className="nav-container">
          <div className="nav-left">
            <img src="/images/logo.png" alt="Logo Recicla UMG" className="logo" />
            <span className="logo-text">Recicla UMG</span>
          </div>
          <div className="nav-right">
            {/* Enlaces de navegación para pantallas grandes */}
            <nav className="nav-links">
              <a href="/" className="nav-link">Inicio</a>
              <a href="/departamentos" className="nav-link">Estadisticas</a>
              <a href="/mapa" className="nav-link">Mapa de Residuos</a>
              <a href="/clasificador" className="nav-link">Clasificador</a>
            </nav>
            {/* Botón de menú hamburguesa para pantallas pequeñas */}
            <button className="hamburger" onClick={toggleMenu}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          </div>
        </div>
        {/* Menú desplegable móvil */}
        {isMenuOpen && (
          <nav className="mobile-menu">
            <a href="/" className="nav-link" onClick={toggleMenu}>Inicio</a>
            <a href="/departamentos" className="nav-link" onClick={toggleMenu}>Estadisticas</a>
            <a href="/mapa" className="nav-link" onClick={toggleMenu}>Mapa de Residuos</a>
            <a href="/clasificador" className="nav-link" onClick={toggleMenu}>Clasificador</a>
          </nav>
        )}
      </header>

      {/* Sección Hero */}
      <section className="hero">
        <img src="/images/hero.png" alt="Imagen Hero" className="hero-img" />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h2>Concientización sobre Residuos Sólidos</h2>
          <p>
            La correcta separación y clasificación de residuos es fundamental para cuidar nuestro entorno en Guatemala.
          </p>
          <h1>¡Actúa Hoy!</h1>
          <p>
            Conoce las normativas y procesos que te ayudarán a gestionar de manera responsable tus residuos.
          </p>
          <a href="/clasificador" className="hero-button">
            Ir al Clasificador
          </a>
        </div>
      </section>

      {/* Contenido Principal */}
      <main className="main-content">
        <section className="info-section">
          <h2>¿Por qué separar los residuos?</h2>
          <p>
            Separar los residuos protege la salud, reduce la contaminación y fomenta el reciclaje, ayudando a preservar nuestro medio ambiente para las futuras generaciones.
          </p>
        </section>

        {/* Instrucciones para el Procesamiento de Desechos Orgánicos */}
        <section className="info-section">
          <h2>Tratamiento de Desechos Orgánicos</h2>
          <div className="section-content">
            <div className="section-text">
              <p>
                Los desechos orgánicos, como restos de alimentos y material vegetal, pueden convertirse en abono a través del compostaje. Sigue estos pasos:
              </p>
              <ul>
                <li><strong>Recolección separada:</strong> Utiliza contenedores exclusivos para desechos orgánicos.</li>
                <li><strong>Compostaje:</strong> Mezcla los residuos con materiales ricos en carbono (hojas secas, ramas pequeñas) para generar compost.</li>
                <li><strong>Mantenimiento:</strong> Remueve y controla la humedad del compost para acelerar la descomposición.</li>
                <li><strong>Aplicación:</strong> Utiliza el compost como fertilizante natural en jardines y cultivos.</li>
              </ul>
            </div>
            <div className="section-image">
              <div className="image-wrapper">
                <img src="/images/desechos-organicos.png" alt="Tratamiento de Desechos Orgánicos" />
              </div>
            </div>
          </div>
        </section>

        {/* Proceso de Tratamiento de Residuos */}
        <section className="info-section">
          <h2>Proceso de Tratamiento Integral</h2>
          <div className="section-content reverse">
            <div className="section-image">
              <div className="image-wrapper">
                <img src="/images/proceso-tratamiento.png" alt="Proceso de Tratamiento de Residuos" />
              </div>
            </div>
            <div className="section-text">
              <p>
                Después de recolectar, los residuos se llevan a plantas donde se realizan:
              </p>
              <ul>
                <li><strong>Clasificación y separación:</strong> Organizan los residuos en orgánicos, reciclables y no reciclables.</li>
                <li><strong>Reciclaje:</strong> Los materiales aptos se procesan para generar nuevas materias primas.</li>
                <li><strong>Compostaje:</strong> Los desechos orgánicos se transforman en compost.</li>
                <li><strong>Disposición final:</strong> Los residuos no procesables se colocan en rellenos sanitarios, bajo estrictas normativas ambientales.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Beneficios del Reciclaje */}
        <section className="info-section">
          <h2>Beneficios del Reciclaje</h2>
          <div className="section-content">
            <div className="section-text">
              <p>
                Reciclar no solo reduce la cantidad de basura, sino que también:
              </p>
              <ul>
                <li>Ahorra energía y recursos naturales.</li>
                <li>Reduce las emisiones de CO₂.</li>
                <li>Genera empleo en la industria del reciclaje.</li>
                <li>Promueve una economía circular.</li>
              </ul>
            </div>
            <div className="section-image">
              <div className="image-wrapper">
                <img src="/images/beneficios-reciclaje.png" alt="Beneficios del Reciclaje" />
              </div>
            </div>
          </div>
        </section>

        {/* Iniciativas Locales */}
        <section className="info-section">
          <h2>Iniciativas Locales y Casos de Éxito</h2>
          <div className="section-content reverse">
            <div className="section-image">
              <div className="image-wrapper">
                <img src="/images/iniciativas-locales.png" alt="Iniciativas Locales" />
              </div>
            </div>
            <div className="section-text">
              <p>
                Diversas comunidades y gobiernos locales han implementado programas innovadores para la separación y reciclaje de residuos. Estos proyectos demuestran cómo la acción conjunta puede transformar ciudades y proteger el medio ambiente.
              </p>
              <p>
                ¡Conoce estos casos de éxito y únete al cambio!
              </p>
            </div>
          </div>
        </section>

        {/* Sección de Galería */}
        <section className="gallery-section">
          <div className="gallery-item">
            <div className="image-wrapper">
              <img src="/images/organicos.jpg" alt="Residuos Orgánicos" />
            </div>
            <h3>Residuos Orgánicos</h3>
            <p>
              Provenientes de alimentos y restos vegetales, son biodegradables y se pueden compostar.
            </p>
          </div>
          <div className="gallery-item">
            <div className="image-wrapper">
              <img src="/images/reciclables.jpg" alt="Residuos Reciclables" />
            </div>
            <h3>Residuos Reciclables</h3>
            <p>
              Incluyen papel, plástico, vidrio y metal, materiales aptos para su reciclaje.
            </p>
          </div>
          <div className="gallery-item">
            <div className="image-wrapper">
              <img src="/images/noreciclables.jpg" alt="Residuos No Reciclables" />
            </div>
            <h3>Residuos No Reciclables</h3>
            <p>
              Aquellos que por su composición no pueden reciclarse y requieren una disposición especial.
            </p>
          </div>
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
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          background-color: #fff;
          color: #000;
        }
        /* Barra de Navegación */
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
          align-items: center;
          gap: 1rem;
        }
        /* Enlaces de navegación */
        .nav-links {
          display: flex;
          gap: 1rem;
        }
        .nav-link {
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
        /* Menú hamburguesa */
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
        /* Menú móvil */
        .mobile-menu {
          display: none;
          flex-direction: column;
          gap: 0.5rem;
          padding: 0.5rem 2rem;
          background: #fff;
          border-top: 1px solid #ddd;
        }
        /* Sección Hero */
        .hero {
          position: relative;
          height: 70vh;
          overflow: hidden;
          text-align: center;
        }
        .hero-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: -2;
        }
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.4);
          z-index: -1;
        }
        .hero-content {
          position: relative;
          z-index: 1;
          max-width: 700px;
          padding: 2rem;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .hero-content h1,
        .hero-content h2,
        .hero-content h3 {
          margin: 0.5rem 0;
          color: #fff;
        }
        .hero-content p {
          font-size: 1.2rem;
          margin-bottom: 1rem;
          line-height: 1.5;
          color: #fff;
        }
        .hero-button {
          padding: 1rem 2rem;
          border: 1px solid #000;
          background-color: #fff;
          color: #000;
          border-radius: 6px;
          text-decoration: none;
          font-size: 1.2rem;
          transition: background-color 0.3s ease, color 0.3s ease;
          cursor: pointer;
        }
        .hero-button:hover {
          background-color: #000;
          color: #fff;
        }
        /* Contenido Principal */
        .main-content {
          padding: 2rem;
          background: #fff;
        }
        .info-section {
          text-align: center;
          margin-bottom: 2rem;
          padding: 0 1rem;
        }
        .info-section h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: limegreen;
        }
        .info-section p {
          font-size: 1.1rem;
          color: #555;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
        }
        .info-section ul {
          list-style: disc;
          margin: 1rem auto;
          max-width: 800px;
          text-align: left;
          padding-left: 1.5rem;
          color: #333;
        }
        .info-section li {
          margin-bottom: 0.5rem;
          font-size: 1.1rem;
        }
        .section-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          margin-top: 1rem;
          flex-wrap: wrap;
        }
        .section-text {
          flex: 1;
          min-width: 250px;
          color: #333;
        }
        .section-image {
          flex: 1;
          min-width: 250px;
          text-align: center;
        }
        .image-wrapper {
          width: 100%;
          height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          overflow: hidden;
          background: transparent;
        }
        .image-wrapper img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }
        .reverse {
          flex-direction: row-reverse;
        }
        /* Galería */
        .gallery-section {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.5rem;
          margin-top: 2rem;
        }
        .gallery-item {
          background: #f5f5f5;
          border-radius: 8px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          flex: 1 1 300px;
          max-width: 300px;
          text-align: center;
          padding: 1rem;
        }
        .gallery-item .image-wrapper {
          height: 200px;
          margin-bottom: 1rem;
          background: transparent;
        }
        .gallery-item h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          color: limegreen;
        }
        .gallery-item p {
          font-size: 1rem;
          color: #666;
          line-height: 1.4;
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
          font-size: 1rem;
          color: #333;
        }
        /* Responsividad */
        @media (max-width: 768px) {
          .nav-container {
            flex-direction: row;
            justify-content: space-between;
          }
          .nav-links {
            display: none;
          }
          .hamburger {
            display: flex;
          }
          .mobile-menu {
            display: flex;
            flex-direction: column;
          }
          .hero {
            height: 50vh;
          }
          .hero-content {
            padding: 1rem;
          }
          .hero-content h1 {
            font-size: 2rem;
          }
          .hero-content h2,
          .hero-content h3 {
            font-size: 1.2rem;
          }
          .hero-content p {
            font-size: 1rem;
          }
          .section-content {
            flex-direction: column;
          }
          .reverse {
            flex-direction: column-reverse;
          }
          .section-text {
            text-align: center;
          }
          .gallery-section {
            flex-direction: column;
            align-items: center;
          }
          .gallery-item {
            max-width: 90%;
          }
          .image-wrapper {
            height: auto;
          }
        }
      `}</style>
    </>
  );
}
