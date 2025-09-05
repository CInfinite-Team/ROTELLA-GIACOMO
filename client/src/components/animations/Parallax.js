export function initParallax() {
  const elements = Array.from(document.querySelectorAll('[data-parallax]'))
  if (!elements.length) return

  const state = {
    width: window.innerWidth,
    height: window.innerHeight
  }

  const lerp = (a, b, n) => a + (b - a) * n
  const targets = new Map()

  elements.forEach((el) => {
    const speedAttr = parseFloat(el.getAttribute('data-parallax'))
    const speed = isNaN(speedAttr) ? 0.2 : speedAttr
    targets.set(el, { speed, y: 0, currentY: 0 })
  })

  let ticking = false

  const onScroll = () => {
    if (!ticking) {
      requestAnimationFrame(update)
      ticking = true
    }
  }

  const update = () => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop
    targets.forEach((t, el) => {
      t.y = scrollY * t.speed
      t.currentY = lerp(t.currentY, t.y, 0.08)
      el.style.transform = `translate3d(0, ${Math.round(t.currentY)}px, 0)`
    })
    ticking = false
  }

  update()
  window.addEventListener('scroll', onScroll, { passive: true })

  const onResize = () => {
    state.width = window.innerWidth
    state.height = window.innerHeight
    update()
  }
  window.addEventListener('resize', onResize)

  return () => {
    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('resize', onResize)
  }
}


