export function initParallax() {
  const elements = Array.from(document.querySelectorAll('[data-parallax]'))
  if (!elements.length) return

  const state = {
    width: window.innerWidth,
    height: window.innerHeight
  }

  const lerp = (a, b, n) => a + (b - a) * n
  const targets = new Map()

  const getDocScrollY = () => window.pageYOffset || document.documentElement.scrollTop

  const computeBaseTop = (el) => {
    const rect = el.getBoundingClientRect()
    return rect.top + getDocScrollY()
  }

  elements.forEach((el) => {
    const speedAttr = parseFloat(el.getAttribute('data-parallax'))
    const speed = isNaN(speedAttr) ? 0.08 : speedAttr
    const baseTop = computeBaseTop(el)
    targets.set(el, { speed, y: 0, currentY: 0, baseTop })
  })

  let ticking = false

  const onScroll = () => {
    if (!ticking) {
      requestAnimationFrame(update)
      ticking = true
    }
  }

  const update = () => {
    const scrollY = getDocScrollY()
    targets.forEach((t, el) => {
      // Move relative to the element's own position to minimize overlaps
      t.y = (scrollY - t.baseTop) * t.speed
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
    // Recompute baseTop for each element after layout changes
    targets.forEach((t, el) => { t.baseTop = computeBaseTop(el) })
    update()
  }
  window.addEventListener('resize', onResize)

  return () => {
    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('resize', onResize)
  }
}


