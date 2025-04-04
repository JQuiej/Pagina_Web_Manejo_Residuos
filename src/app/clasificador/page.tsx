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
  const imageRef = useRef<HTMLImageElement | null>(null);

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
   * Diccionario de traducciones al español para artículos cotidianos.
   * Ajusta o expande según necesites.
   */
  const translations: { [key: string]: string } = {
    banana: "Banana",
    "banana peel": "Cáscara de banana",
    apple: "Manzana",
    orange: "Naranja",
    egg: "Huevo",
    "egg shell": "Cáscara de huevo",
    "coffee grounds": "Residuos de café",
    "chicken bones": "Huesos de pollo",
    tomato: "Tomate",
    leaf: "Hoja",
    plant: "Planta",
    "plant leaf": "Hoja de planta",
    fruit: "Fruta",
    vegetable: "Vegetal",
    food: "Comida",

    "water bottle": "Botella de agua",
    "milk bottle": "Botella de leche",
    "milk carton": "Cartón de leche",
    "milk jug": "Jarra de leche (plástico)",
    "juice box": "Caja de jugo",
    "juice bottle": "Botella de jugo",

    "plastic bag": "Bolsa de plástico",
    "plastic container": "Contenedor de plástico",
    "plastic cup": "Vaso de plástico",
    "plastic plate": "Plato de plástico",
    "plastic fork": "Tenedor de plástico",
    "plastic spoon": "Cuchara de plástico",
    "plastic knife": "Cuchillo de plástico",
    "plastic straw": "Popote de plástico",
    "plastic wrap": "Envoltura de plástico",
    "plastic lid": "Tapa de plástico",
    "plastic food container": "Contenedor de comida de plástico",
    "plastic food bag": "Bolsa de comida de plástico",
    "plastic food wrapper": "Envoltura de comida de plástico",
    "plastic food tray": "Bandeja de comida de plástico",
    "plastic food box": "Caja de comida de plástico",
    bottle: "Botella",
    "plastic bottle": "Botella de plástico",
    "food container": "Contenedor de comida",
    "food packaging": "Empaque de comida",
    carton: "Cartón",
    cardboard: "Cartón",
    paper: "Papel",

    "cardboard box": "Caja de cartón",
    "cardboard container": "Contenedor de cartón",
    "cardboard tube": "Tubo de cartón",
    "cardboard box with lid": "Caja de cartón con tapa",
    "cardboard box with handle": "Caja de cartón con asa",
    "cardboard box with window": "Caja de cartón con ventana",
    "pizza box": "Caja de pizza",

    "paper bag": "Bolsa de papel",
    "paper container": "Contenedor de papel",
    "paper cup": "Vaso de papel",
    "paper plate": "Plato de papel",
    "paper towel": "Toalla de papel",
    "paper napkin": "Servilleta de papel",

    can: "Lata",
    "tin can": "Lata de metal",
    "metal can": "Lata de metal",
    "aluminum can": "Lata de aluminio",
    metal: "Metal",
    glass: "Vidrio",
    packaging: "Empaque",
    // Si la etiqueta no se encuentra aquí, se usará la original del modelo
  };

  const translateLabelToSpanish = (label: string): string => {
    const lowerLabel = label.toLowerCase();
    return translations[lowerLabel] || label;
  };

  const getWasteCategory = (label: string): string => {
    const lowerLabel = label.toLowerCase();
    const organicKeywords = [
      "fruta",
      "vegetal",
      "manzana",
      "banana",
      "naranja",
      "planta",
      "hoja",
      "comida",
      "tomate",
      "egg",
      "egg shell",
      "coffee grounds",
      "chicken bones",
    ];
    const recyclableKeywords = [
      "plástico",
      "botella",
      "papel",
      "lata",
      "metal",
      "cartón",
      "vidrio",
      "empaque",
      "milk bottle",
      "milk carton",
      "milk jug",
      "juice box",
      "juice bottle",
    ];

    if (organicKeywords.some((keyword) => lowerLabel.includes(keyword))) {
      return "Residuos Orgánicos";
    }
    if (recyclableKeywords.some((keyword) => lowerLabel.includes(keyword))) {
      return "Residuos Reciclables";
    }
    return "Residuos No Reciclables";
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      setImageSrc(event.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleClassify = async () => {
    if (model && imageRef.current) {
      const predictions = await model.classify(imageRef.current);
      if (predictions && predictions.length > 0) {
        const englishLabel = predictions[0].className;
        const spanishLabel = translateLabelToSpanish(englishLabel);
        const category = getWasteCategory(spanishLabel);
        setResult(`Se detectó: ${spanishLabel}.\nCategoría: ${category}`);
      } else {
        setResult("No se encontró una clasificación.");
      }
    }
  };

  return (
    <>
      {/* Barra de navegación minimalista con logo a la izquierda */}
      <header className="top-nav">
        <div className="nav-container">
          <div className="nav-left">
            <img
              src="/images/logo.png"
              alt="Logo Recicla UMG"
              className="logo"
            />
            <span className="logo-text">Recicla UMG</span>
          </div>
          <nav className="nav-right">
            {/* Enlaces con <a> en lugar de Link */}
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
        </div>
      </header>

      <main>
        <h1>Clasificador de Residuos</h1>
        <h2>
          Sube una imagen del residuo que quieras clasificar y te ayudaremos con el
          proceso
        </h2>
        <div className="upload-container">
          {/* Permite subir una imagen tanto desde la cámara como desde archivos (sin capture) */}
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
        /* Reset básico */
        * {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
        }

        /* Barra de Navegación Minimalista */
        .top-nav {
          background: rgba(255, 255, 255, 0.95);
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
        /* Logo y texto a la izquierda */
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
        /* Enlaces a la derecha */
        .nav-right {
          display: flex;
          gap: 2rem;
        }
        /* .nav-link similar a un botón outline, si lo deseas: */
        .nav-link {
          display: inline-block;
          padding: 0.5rem 1.2rem;
          color: #333;
          text-decoration: none;
          border: 1px solid #333;
          border-radius: 4px;
          transition: background-color 0.2s ease, color 0.2s ease;
        }
        .nav-link:hover,
        .nav-link:focus {
          background-color: #333;
          color: #fff;
        }

        /* Main Content del Clasificador */
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

        /* Responsividad */
        @media (max-width: 768px) {
          .nav-container {
            flex-direction: column;
            gap: 1rem;
            padding: 1rem;
          }
          .nav-left {
            gap: 1rem;
            justify-content: center;
          }
          .nav-right {
            justify-content: center;
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
