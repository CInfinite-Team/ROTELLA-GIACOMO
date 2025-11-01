import { useEffect, useRef, useState } from 'react'

function CustomCursor() {
  const cursorRef = useRef(null)
  const cursorDotRef = useRef(null)
  const cursorOutlineRef = useRef(null)
  const cursorTextRef = useRef(null)
  const cursorTrailRef = useRef(null)
  const posRef = useRef({ x: -100, y: -100 })
  const prevPosRef = useRef({ x: -100, y: -100 })
  const rafRef = useRef(0)
  const hoverRef = useRef(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [cursorText, setCursorText] = useState('Click')

  useEffect(() => {
    // Check if device supports hover (not touch)
    const isHoverSupported = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!isHoverSupported) return

    const isInteractive = (el) => !!el && (
      el.closest('a, button, [role="button"], [role="link"], input[type="submit"], input, textarea, select, .cursor-scale, [data-cursor-scale], .clickable')
    )

    const handleMouseMove = (e) => {
      prevPosRef.current.x = posRef.current.x
      prevPosRef.current.y = posRef.current.y
      posRef.current.x = e.clientX
      posRef.current.y = e.clientY
      const isHoveringElement = isInteractive(e.target)
      hoverRef.current = isHoveringElement
      setIsHovering(isHoveringElement)
      
      // Update cursor text based on element type
      if (isHoveringElement) {
        const element = e.target.closest('a, button, [role="button"], [role="link"], input[type="submit"], .clickable')
        if (element) {
          if (element.tagName === 'A') setCursorText('Visit')
          else if (element.tagName === 'BUTTON') setCursorText('Click')
          else if (element.type === 'submit') setCursorText('Submit')
          else setCursorText('Click')
        }
      }
      
      if (!isVisible) setIsVisible(true)
      
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(update)
      }
    }

    const handleMouseDown = () => {
      setIsClicking(true)
    }
    
    const handleMouseUp = () => {
      setIsClicking(false)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    const update = () => {
      if (cursorRef.current && cursorDotRef.current && cursorOutlineRef.current) {
        const { x, y } = posRef.current
        const { x: prevX, y: prevY } = prevPosRef.current
        
        // Calculate velocity for magnetic effect
        const velocity = Math.sqrt((x - prevX) ** 2 + (y - prevY) ** 2)
        const magneticStrength = Math.min(velocity * 0.1, 0.3)
        
        const scale = hoverRef.current ? 2.5 : 1
        const dotScale = hoverRef.current ? 0.3 : 1
        const outlineScale = hoverRef.current ? 1.8 : 1
        
        // Main cursor container with magnetic effect
        cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`
        
        // Dot cursor (inner) with magnetic lag
        const dotX = x + (prevX - x) * magneticStrength
        const dotY = y + (prevY - y) * magneticStrength
        cursorDotRef.current.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%, -50%) scale(${dotScale})`
        
        // Outline cursor (outer ring) with smooth follow
        const outlineX = x + (prevX - x) * (magneticStrength * 0.5)
        const outlineY = y + (prevY - y) * (magneticStrength * 0.5)
        cursorOutlineRef.current.style.transform = `translate3d(${outlineX}px, ${outlineY}px, 0) translate(-50%, -50%) scale(${outlineScale})`
        
        // Text cursor (appears on hover)
        if (cursorTextRef.current) {
          cursorTextRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${hoverRef.current ? 1 : 0})`
        }
        
        // Trail effect
        if (cursorTrailRef.current) {
          const trailX = x + (prevX - x) * 0.8
          const trailY = y + (prevY - y) * 0.8
          cursorTrailRef.current.style.transform = `translate3d(${trailX}px, ${trailY}px, 0) translate(-50%, -50%) scale(${velocity > 5 ? 1 : 0.5})`
          cursorTrailRef.current.style.opacity = Math.min(velocity * 0.05, 0.6)
        }
      }
      rafRef.current = 0
    }

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mousedown', handleMouseDown, { passive: true })
    window.addEventListener('mouseup', handleMouseUp, { passive: true })
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [isVisible])

  // Don't render on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
    return null
  }

  return (
    <>
      {/* Main cursor container */}
      <div
        ref={cursorRef}
        className="custom-cursor-container"
        aria-hidden
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          pointerEvents: 'none',
          zIndex: 2147483647,
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.3s ease'
        }}
      >
        {/* Inner dot cursor */}
        <div
          ref={cursorDotRef}
          className="custom-cursor-dot"
          style={{
            position: 'absolute',
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #000000, #333333)',
            boxShadow: '0 0 20px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            transition: 'all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        />
        
        {/* Outer ring cursor */}
        <div
          ref={cursorOutlineRef}
          className="custom-cursor-outline"
          style={{
            position: 'absolute',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            border: '2px solid rgba(0, 0, 0, 0.1)',
            background: 'radial-gradient(circle, rgba(0, 0, 0, 0.05) 0%, transparent 70%)',
            transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)',
            backdropFilter: 'blur(1px)',
            boxShadow: '0 0 30px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
          }}
        />
        
        {/* Hover text */}
        <div
          ref={cursorTextRef}
          className="custom-cursor-text"
          style={{
            position: 'absolute',
            fontSize: '12px',
            fontWeight: '600',
            color: '#000000',
            background: 'rgba(255, 255, 255, 0.95)',
            padding: '6px 12px',
            borderRadius: '16px',
            whiteSpace: 'nowrap',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%) scale(0)',
            transformOrigin: 'center',
            letterSpacing: '0.5px'
          }}
        >
          {cursorText}
        </div>
        
        {/* Trail effect */}
        <div
          ref={cursorTrailRef}
          className="custom-cursor-trail"
          style={{
            position: 'absolute',
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 0, 0, 0.1) 0%, transparent 70%)',
            transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)',
            transition: 'all 0.1s ease-out',
            opacity: 0,
            pointerEvents: 'none'
          }}
        />
        
        {/* Click animation ring */}
        {isClicking && (
          <div
            className="custom-cursor-click"
            style={{
              position: 'absolute',
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              border: '2px solid rgba(0, 0, 0, 0.3)',
              background: 'radial-gradient(circle, rgba(0, 0, 0, 0.1) 0%, transparent 70%)',
              transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%) scale(0)',
              animation: 'cursorClick 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
              boxShadow: '0 0 40px rgba(0, 0, 0, 0.2)'
            }}
          />
        )}
        
        {/* Luxury particles */}
        {isHovering && (
          <>
            <div
              className="custom-cursor-particle"
              style={{
                position: 'absolute',
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                background: 'rgba(0, 0, 0, 0.3)',
                transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%) translate(20px, -20px)',
                animation: 'particleFloat1 3s ease-in-out infinite'
              }}
            />
            <div
              className="custom-cursor-particle"
              style={{
                position: 'absolute',
                width: '3px',
                height: '3px',
                borderRadius: '50%',
                background: 'rgba(0, 0, 0, 0.2)',
                transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%) translate(-15px, 15px)',
                animation: 'particleFloat2 4s ease-in-out infinite'
              }}
            />
            <div
              className="custom-cursor-particle"
              style={{
                position: 'absolute',
                width: '2px',
                height: '2px',
                borderRadius: '50%',
                background: 'rgba(0, 0, 0, 0.1)',
                transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%) translate(25px, 10px)',
                animation: 'particleFloat3 5s ease-in-out infinite'
              }}
            />
          </>
        )}
      </div>
      
      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes cursorClick {
          0% {
            transform: translate3d(-100px, -100px, 0) translate(-50%, -50%) scale(0);
            opacity: 1;
          }
          50% {
            transform: translate3d(-100px, -100px, 0) translate(-50%, -50%) scale(1);
            opacity: 0.8;
          }
          100% {
            transform: translate3d(-100px, -100px, 0) translate(-50%, -50%) scale(1.5);
            opacity: 0;
          }
        }
        
        .custom-cursor-dot {
          filter: drop-shadow(0 0 8px rgba(0, 0, 0, 0.3));
        }
        
        .custom-cursor-outline {
          filter: drop-shadow(0 0 15px rgba(0, 0, 0, 0.1));
        }
        
        .custom-cursor-text {
          font-family: 'Montserrat', sans-serif;
          letter-spacing: 0.5px;
        }
      `}</style>
    </>
  )
}

export default CustomCursor






