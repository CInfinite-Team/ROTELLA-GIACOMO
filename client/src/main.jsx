import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import { useEffect } from 'react'
// import { initParallaxFromDataAttr } from './components/animations/ScrollAnimations.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ParallaxInitializer /> */}
    <App />
  </StrictMode>,
)

// function ParallaxInitializer() {
//   useEffect(() => {
//     const cleanup = initParallaxFromDataAttr()
//     return cleanup
//   }, [])
//   return null
// }
