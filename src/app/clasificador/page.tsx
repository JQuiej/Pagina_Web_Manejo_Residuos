/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */

"use client";
import React, { useState, useRef, useEffect } from "react";
import * as mobilenet from "@tensorflow-models/mobilenet";
import "@tensorflow/tfjs";

export default function ClassifierPage() {
  const [model, setModel] = useState<mobilenet.MobileNet | null>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [result, setResult] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const imageRef = useRef<HTMLImageElement | null>(null);

  // Carga del modelo MobileNet al montar el componente
  useEffect(() => {
    async function loadModel() {
      try {
        const loadedModel = await mobilenet.load();
        setModel(loadedModel);
      } catch (error) {
        console.error("Error al cargar el modelo:", error);
      }
    }
    loadModel();
  }, []);

  /**
   * Función para normalizar la etiqueta.
   * Se transforma una etiqueta específica (ej. "granny smith") a una versión genérica ("apple")
   */
  const normalizeLabel = (label: string): string => {
    const lowerLabel = label.toLowerCase();

    // Normalización para manzana
    if (
      lowerLabel.includes("apple") ||
      lowerLabel.includes("granny smith") ||
      lowerLabel.includes("red delicious") ||
      lowerLabel.includes("gala")
    ) {
      return "apple";
    }

    // Normalización para banana
    if (lowerLabel.includes("banana")) {
      return "banana";
    }

    // Normalización para botella (cubre water bottle, plastic bottle, milk bottle, etc.)
    if (lowerLabel.includes("bottle")) {
      return "bottle";
    }

    // Otras reglas se pueden agregar aquí

    return label;
  };

  /**
   * Función que traduce automáticamente una etiqueta completa del inglés al español
   * utilizando la API de MyMemory.
   */
  const translateLabel = async (label: string): Promise<string> => {
    try {
      const response = await fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
          label
        )}&langpair=en|es`
      );
      const data = await response.json();
      if (data && data.responseData && data.responseData.translatedText) {
        return data.responseData.translatedText;
      }
    } catch (error) {
      console.error("Error al traducir la etiqueta:", error);
    }
    // Si falla la traducción, se retorna la etiqueta original
    return label;
  };

  /**
   * Función que determina la categoría del residuo a partir de la etiqueta normalizada.
   * Se basa en palabras clave.
   */
  const getWasteCategory = (label: string): string => {
    const lowerLabel = label.toLowerCase();
    const organicKeywords = ["apple", "banana", "orange", "egg", "tomato", "leaf", "fruit", "vegetable"];
    const recyclableKeywords = ["plastic", "bottle", "paper", "can", "carton", "metal", "glass"];

    if (organicKeywords.some((keyword) => lowerLabel.includes(keyword))) {
      return "Residuos Orgánicos";
    }
    if (recyclableKeywords.some((keyword) => lowerLabel.includes(keyword))) {
      return "Residuos Reciclables";
    }
    return "Residuos No Reciclables";
  };

  // Maneja la selección de imagen
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      setImageSrc(event.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  // Clasifica la imagen cargada, normaliza la etiqueta y la traduce automáticamente
  const handleClassify = async () => {
    if (model && imageRef.current) {
      const predictions = await model.classify(imageRef.current);
      if (predictions && predictions.length > 0) {
        // Ordena las predicciones por probabilidad descendente
        predictions.sort((a, b) => b.probability - a.probability);
        let selectedPrediction = predictions[0];

        // Recorre las predicciones para buscar una etiqueta que, al normalizarla, sea más genérica
        for (const pred of predictions) {
          const normalized = normalizeLabel(pred.className);
          if (
            normalized === "apple" ||
            normalized === "banana" ||
            normalized === "bottle"
          ) {
            selectedPrediction = pred;
            break;
          }
        }
        // Normaliza la etiqueta final
        const normalizedLabel = normalizeLabel(selectedPrediction.className);
        // Traduce automáticamente la etiqueta completa a español
        const spanishLabel = await translateLabel(normalizedLabel);
        const category = getWasteCategory(normalizedLabel);
        setResult(`Se detectó: ${spanishLabel}.\nCategoría: ${category}`);
      } else {
        setResult("No se encontró una clasificación.");
      }
    }
  };

  // Muestra/oculta el menú en móvil
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* ---------- BARRA DE NAVEGACIÓN (sin cambios en el diseño) ---------- */}
      <header className="top-nav">
        <div className="nav-container">
          <div className="nav-left">
            <img src="/images/logo.png" alt="Logo Recicla UMG" className="logo" />
            <span className="logo-text">Recicla UMG</span>
          </div>
          <div className="nav-right">
            {/* Enlaces de escritorio */}
            <nav className="nav-links">
              <a href="/" className="nav-link">
                Inicio
              </a>
              <a href="/departamentos" className="nav-link">
                Estadisticas
              </a>
              <a href="/mapa" className="nav-link">
                Mapa de Residuos
              </a>
              <a href="/clasificador" className="nav-link">
                Clasificador
              </a>
            </nav>
            {/* Botón hamburguesa para móvil */}
            <button className="hamburger" onClick={toggleMenu}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          </div>
        </div>
        {/* Menú móvil */}
        {isMenuOpen && (
          <nav className="mobile-menu">
            <a href="/" className="nav-link" onClick={toggleMenu}>
              Inicio
            </a>
            <a href="/departamentos" className="nav-link" onClick={toggleMenu}>
              Estadisticas
            </a>
            <a href="/mapa" className="nav-link" onClick={toggleMenu}>
              Mapa de Residuos
            </a>
            <a href="/clasificador" className="nav-link" onClick={toggleMenu}>
              Clasificador
            </a>
          </nav>
        )}
      </header>

      {/* ---------- CONTENIDO PRINCIPAL ---------- */}
      <main>
        <h1>Clasificador de Residuos</h1>
        <h2>
          Sube una imagen del residuo que quieras clasificar y te ayudaremos con el proceso
        </h2>

        <div className="upload-container">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="file-input"
          />
        </div>

        {imageSrc && (
          <div className="image-container">
            <img
              src={imageSrc}
              alt="Imagen para clasificar"
              ref={imageRef}
              className="preview-image"
            />
            <button onClick={handleClassify} className="classify-button">
              Clasificar Imagen
            </button>
          </div>
        )}

        {result && (
          <div className="result-container">
            <h2>Resultado:</h2>
            <p style={{ whiteSpace: "pre-line" }}>{result}</p>
          </div>
        )}
      </main>

      <style jsx>{`
        /* ---------- RESETEO BÁSICO ---------- */
        * {
          box-sizing: border-box;
        }
        body,
        html {
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
        }

        /* ---------- NAV: MISMO DISEÑO ---------- */
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
          flex-wrap: nowrap;
        }
        .nav-left {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-shrink: 0;
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
          flex-shrink: 0;
        }
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
        .mobile-menu {
          display: none;
          flex-direction: column;
          gap: 0.5rem;
          padding: 0.5rem 2rem;
          background: #fff;
          border-top: 1px solid #ddd;
        }

        /* ---------- MAIN ---------- */
        main {
          max-width: 800px;
          margin: 2rem auto;
          padding: 2rem;
          background: #f9f9f9;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          text-align: center;
        }
        h1 {
          color: #2c3e50;
          margin-bottom: 1.5rem;
        }
        h2 {
          color: #2c3e50;
          margin-bottom: 1rem;
        }
        .upload-container {
          margin-bottom: 2rem;
        }
        .file-input {
          padding: 0.5rem;
          border: 2px solid #ddd;
          border-radius: 4px;
          width: 80%;
          max-width: 400px;
          background-color: #fff;
          font-size: 16px;
        }
        .image-container {
          margin-top: 2rem;
        }
        .preview-image {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          margin-bottom: 1rem;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .classify-button {
          padding: 0.75rem 1.5rem;
          font-size: 16px;
          border: none;
          border-radius: 4px;
          background-color: #0070f3;
          color: #fff;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .classify-button:hover {
          background-color: #005bb5;
        }
        .result-container {
          margin-top: 2rem;
          padding: 1rem;
          background-color: #eaeaea;
          border-radius: 4px;
        }
        .result-container h2 {
          margin-bottom: 0.5rem;
          color: #333;
        }
        .result-container p {
          font-size: 18px;
          font-weight: bold;
          color: #0070f3;
        }

        /* ---------- RESPONSIVE (MÓVIL) ---------- */
        @media (max-width: 768px) {
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
