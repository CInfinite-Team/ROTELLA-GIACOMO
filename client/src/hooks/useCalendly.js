import { useCallback, useRef } from 'react'

const CALENDLY_SCRIPT_SRC = 'https://assets.calendly.com/assets/external/widget.js'

const loadCalendlyScript = () => {
  if (typeof window === 'undefined') return Promise.resolve(null)
  if (window.Calendly) return Promise.resolve(window.Calendly)

  const existingScript = document.querySelector(`script[src="${CALENDLY_SCRIPT_SRC}"]`)
  if (existingScript) {
    return new Promise((resolve, reject) => {
      existingScript.addEventListener('load', () => resolve(window.Calendly || null), { once: true })
      existingScript.addEventListener('error', () => reject(new Error('Failed to load Calendly')), { once: true })
    })
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = CALENDLY_SCRIPT_SRC
    script.async = true
    script.onload = () => resolve(window.Calendly || null)
    script.onerror = () => reject(new Error('Failed to load Calendly'))
    document.body.appendChild(script)
  })
}

export function useCalendly() {
  const loaderPromiseRef = useRef(null)

  const loadCalendly = useCallback(() => {
    if (!loaderPromiseRef.current) {
      loaderPromiseRef.current = loadCalendlyScript().catch((error) => {
        loaderPromiseRef.current = null
        throw error
      })
    }
    return loaderPromiseRef.current
  }, [])

  const openCalendlyPopup = useCallback((url) => {
    if (!url) return
    loadCalendly()
      .then((calendly) => {
        calendly?.initPopupWidget({ url })
      })
      .catch(() => {})
  }, [loadCalendly])

  const initCalendlyInlineWidgets = useCallback(() => {
    loadCalendly()
      .then((calendly) => {
        if (typeof calendly?.initInlineWidgets === 'function') {
          calendly.initInlineWidgets()
        }
      })
      .catch(() => {})
  }, [loadCalendly])

  return {
    loadCalendly,
    openCalendlyPopup,
    initCalendlyInlineWidgets,
  }
}

