import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/layout'
import Pages from './app/pages'

function App() {

  return (
    <>
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Pages />} />
      </Route>
    </Routes>
    </>
  )
}

export default App

// Negro suave: #0F0F0F

// Gris carbón: #1A1A1A

// Gris grafito: #2A2A2A

// Blanco puro: #FFFFFF

// Gris plateado: #CFCFCF

// Acentos (botones, íconos)

// Amarillo más suave: #F4C542

// Amarillo fuerte para CTA: #FFCC33

// 📌 Dónde utilizar cada color (Explicación exacta)
// 🎯 1. Fondo general

// Modo claro: blanco #FFFFFF

// Modo oscuro (altamente recomendado en servicios automotrices):

// Fondo principal: #1A1A1A

// Secciones alternas: #2B2B2B

// 🎯 2. Tipografía

// Texto principal: blanco #FFFFFF (modo oscuro) o negro #1A1A1A (modo claro)

// Texto secundario: gris grafito #4D4D4D

// Encabezados: blanco o amarillo #FFCC33 para destacar

// 🎯 3. Botones

// Botón principal (CTA):

// Fondo: amarillo #FFCC33

// Texto: #1A1A1A

// Hover: amarillo profundo #E6B800

// Borde: gris metal #C0C0C0 (opcional)

// Botón secundario:

// Fondo: transparente

// Borde: #FFCC33

// Texto: #FFCC33

// 🎯 4. Iconos / ilustraciones

// Amarillo #FFCC33 para elementos clave

// Gris metal #C0C0C0 para partes mecánicas

// Blanco o negro dependiendo del fondo

// 🎯 5. Tarjetas de servicios

// Fondo: #2B2B2B

// Icono: #FFCC33

// Títulos: blanco

// Sombra ligera: #000000 con 20% opacidad

// 🎯 6. Logo (súper importante)

// Fondo del engranaje o llanta: #1A1A1A

// Letra “M” y acentos: #FFCC33

// Detalles metálicos: #C0C0C0

// 🎯 7. Formularios

// Input background: #2B2B2B

// Borde: #C0C0C0

// Hover borde: #FFCC33

// Placeholder: #757575

// 🎯 8. Navbar

// Fondo: #1A1A1A

// Links: blanco

// Link activo: #FFCC33

// Hover: #E6B800