import { useEffect, useRef } from 'react';

/* -------------------- Smooth Scroll -------------------- */
export function useSmoothScroll() {
  useEffect(() => {
    const html = document.documentElement;
    const original = html.style.scrollBehavior;
    html.style.scrollBehavior = 'smooth';
    return () => (html.style.scrollBehavior = original);
  }, []);
}

/* -------------------- Viewport Animation -------------------- */
export function useViewportAnimation(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const opts = {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px',
      animationClass: 'animate-in animate-in-slow',
      once: false,
      ...options
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const classes = String(opts.animationClass).split(/\s+/).filter(Boolean);
        if (entry.isIntersecting) {
          element.classList.add(...classes);
          if (opts.once) observer.unobserve(element);
        } else if (!opts.once) {
          element.classList.remove(...classes);
        }
      });
    }, opts);

    observer.observe(element);
    return () => observer.disconnect();
  }, [options]);

  return ref;
}

/* -------------------- Shared Parallax Manager -------------------- */
const parallaxElements = new Set();
let ticking = false;

function updateParallaxAll() {
  ticking = false;
  const viewportH = window.innerHeight || document.documentElement.clientHeight;

  parallaxElements.forEach(({ el, speed, axis, maxTranslate }) => {
    const rect = el.getBoundingClientRect();
    const progress = 1 - Math.min(Math.max((rect.top + rect.height) / (viewportH + rect.height), 0), 1);
    const translateAmount = Math.max(
      Math.min((progress - 0.5) * 2 * speed * maxTranslate, maxTranslate),
      -maxTranslate
    );
    const tx = axis === 'x' ? translateAmount : 0;
    const ty = axis === 'y' ? translateAmount : 0;
    el.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
    el.style.willChange = 'transform';
  });
}

function requestParallaxUpdate() {
  if (!ticking) {
    requestAnimationFrame(updateParallaxAll);
    ticking = true;
  }
}

if (typeof window !== 'undefined') {
  window.addEventListener('scroll', requestParallaxUpdate, { passive: true });
  window.addEventListener('resize', requestParallaxUpdate);
}

/* -------------------- useParallax Hook -------------------- */
export function useParallax({ speed = 0.2, axis = 'y', maxTranslate = 80 } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const data = { el, speed, axis, maxTranslate };
    parallaxElements.add(data);
    requestParallaxUpdate();

    return () => {
      parallaxElements.delete(data);
    };
  }, [speed, axis, maxTranslate]);

  return ref;
}

/* -------------------- Sticky Position Hook -------------------- */
export function useStickyPosition(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const opts = { topOffset: '0px', zIndex: 10, ...options };
    const original = {
      position: el.style.position,
      top: el.style.top,
      zIndex: el.style.zIndex
    };

    el.style.position = 'sticky';
    el.style.top = opts.topOffset;
    el.style.zIndex = opts.zIndex;

    return () => {
      el.style.position = original.position;
      el.style.top = original.top;
      el.style.zIndex = original.zIndex;
    };
  }, [options]);

  return ref;
}

/* -------------------- Text Splitting Animation -------------------- */
export function useTextSplitting() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const text = el.textContent;
    el.textContent = '';

    text.split('').forEach((char, i) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.display = 'inline-block';
      span.style.opacity = '0';
      span.style.transform = 'translateY(20px)';
      span.style.transition = `opacity 0.5s ease, transform 0.5s ease`;
      span.style.transitionDelay = `${i * 0.03}s`;
      el.appendChild(span);
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          Array.from(el.children).forEach((span) => {
            span.style.opacity = '1';
            span.style.transform = 'translateY(0)';
          });
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.1 });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

/* -------------------- Lazy Animations Observer -------------------- */
export function initLazyAnimationsObserver({
  threshold = 0.15,
  rootMargin = '0px 0px -10% 0px',
  once = true
} = {}) {
  const nodes = Array.from(document.querySelectorAll('[data-lazy-animation]'));
  if (!nodes.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const el = entry.target;
      if (entry.isIntersecting) {
        el.classList.add('on-screen');
        if (once) observer.unobserve(el);
      } else if (!once) {
        el.classList.remove('on-screen');
      }
    });
  }, { threshold, rootMargin });

  nodes.forEach((el) => observer.observe(el));
  return () => observer.disconnect();
}
