import React, { useEffect, useRef, useState } from 'react'

function CustomCursor() {
  const cursorRef = useRef(null)
  const [isHoveringClickable, setIsHoveringClickable] = useState(false)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    const move = (e) => {
      // position the cursor center at pointer
      const x = e.clientX
      const y = e.clientY
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`
    }

    const onMouseDown = () => {
      cursor.style.transition = 'transform 0.08s ease-out, width 0.2s ease, height 0.2s ease'
      cursor.classList.add('cursor--down')
    }

    const onMouseUp = () => {
      cursor.classList.remove('cursor--down')
    }

    const clickableSelectors = 'a, button, [role="button"], input, textarea, select, label, .clickable'
    const onPointerOver = (e) => {
      if (e.target.closest(clickableSelectors)) {
        setIsHoveringClickable(true)
      }
    }
    const onPointerOut = (e) => {
      if (e.target.closest(clickableSelectors)) {
        setIsHoveringClickable(false)
      }
    }

    window.addEventListener('mousemove', move, { passive: true })
    window.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mouseup', onMouseUp)
    window.addEventListener('mouseover', onPointerOver)
    window.addEventListener('mouseout', onPointerOut)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mouseup', onMouseUp)
      window.removeEventListener('mouseover', onPointerOver)
      window.removeEventListener('mouseout', onPointerOut)
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className={`custom-cursor ${isHoveringClickable ? 'custom-cursor--hover' : ''}`}
        aria-hidden
      />
    </>
  )
}

export default CustomCursor


