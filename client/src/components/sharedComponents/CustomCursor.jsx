import { useEffect, useRef } from 'react'

function CustomCursor() {
  const cursorRef = useRef(null)
  const posRef = useRef({ x: -100, y: -100 })
  const rafRef = useRef(0)
  const hoverRef = useRef(false)

  useEffect(() => {
    const isInteractive = (el) => !!el && (
      el.closest('a, button, [role="button"], [role="link"], input[type="submit"], input, textarea, select, .cursor-scale, [data-cursor-scale]')
    )

    const handleMouseMove = (e) => {
      posRef.current.x = e.clientX
      posRef.current.y = e.clientY
      hoverRef.current = isInteractive(e.target)
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(update)
      }
    }

    const handleMouseDown = () => {
      if (cursorRef.current) cursorRef.current.style.transform += ' scale(0.9)'
    }
    const handleMouseUp = () => {
      if (cursorRef.current) cursorRef.current.style.transform = cursorRef.current.style.transform.replace(' scale(0.9)', '')
    }

    const update = () => {
      if (cursorRef.current) {
        const { x, y } = posRef.current
        const scale = hoverRef.current ? 1.6 : 1
        cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${scale})`
      }
      rafRef.current = 0
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mousedown', handleMouseDown, { passive: true })
    window.addEventListener('mouseup', handleMouseUp, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div
      className="custom-cursor"
      ref={cursorRef}
      aria-hidden
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        background: '#ffffff',
        mixBlendMode: 'difference',
        pointerEvents: 'none',
        transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)',
        transition: 'transform 160ms ease',
        zIndex: 2147483647
      }}
    />
  )
}

export default CustomCursor


