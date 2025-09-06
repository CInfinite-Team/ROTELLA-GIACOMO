import { useEffect, useRef } from 'react';

// Custom hook for smooth scrolling
export function useSmoothScroll() {
  useEffect(() => {
    // Save the original scroll behavior
    const html = document.documentElement;
    const originalScrollBehavior = html.style.scrollBehavior;
    
    // Apply smooth scrolling
    html.style.scrollBehavior = 'smooth';
    
    // Restore original scroll behavior on cleanup
    return () => {
      html.style.scrollBehavior = originalScrollBehavior;
    };
  }, []);
}

// Custom hook for viewport detection and animations
export function useViewportAnimation(options = {}) {
  const ref = useRef(null);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    const defaultOptions = {
      threshold: 0.1,
      rootMargin: '0px',
      animationClass: 'animate-in',
      once: true,
      ...options
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          element.classList.add(defaultOptions.animationClass);
          if (defaultOptions.once) {
            observer.unobserve(element);
          }
        } else if (!defaultOptions.once) {
          element.classList.remove(defaultOptions.animationClass);
        }
      });
    }, {
      threshold: defaultOptions.threshold,
      rootMargin: defaultOptions.rootMargin
    });
    
    observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, [options]);
  
  return ref;
}

// Parallax hook: apply to any element, preserving layout via transform only
export function useParallax({ speed = 0.2, axis = 'y', maxTranslate = 80 } = {}) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight || document.documentElement.clientHeight;
      // progress: 0 at bottom entering, 1 at top leaving
      const progress = 1 - Math.min(Math.max((rect.top + rect.height) / (viewportH + rect.height), 0), 1);
      const translateAmount = Math.max(Math.min((progress - 0.5) * 2 * speed * maxTranslate, maxTranslate), -maxTranslate);
      const tx = axis === 'x' ? translateAmount : 0;
      const ty = axis === 'y' ? translateAmount : 0;
      el.style.willChange = 'transform';
      el.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [speed, axis, maxTranslate]);

  return ref;
}

// Zero-config initializer: binds parallax to any element with data-parallax
export function initParallaxFromDataAttr() {
  const elements = Array.from(document.querySelectorAll('[data-parallax]'));
  if (elements.length === 0) return;

  const computeAndApply = (el) => {
    const axis = el.getAttribute('data-axis') || 'y';
    const speedAttr = parseFloat(el.getAttribute('data-speed'));
    const maxAttr = parseFloat(el.getAttribute('data-max'));
    const speed = Number.isFinite(speedAttr) ? speedAttr : 0.2;
    const maxTranslate = Number.isFinite(maxAttr) ? maxAttr : 80;

    const rect = el.getBoundingClientRect();
    const viewportH = window.innerHeight || document.documentElement.clientHeight;
    const progress = 1 - Math.min(Math.max((rect.top + rect.height) / (viewportH + rect.height), 0), 1);
    const translateAmount = Math.max(Math.min((progress - 0.5) * 2 * speed * maxTranslate, maxTranslate), -maxTranslate);
    const tx = axis === 'x' ? translateAmount : 0;
    const ty = axis === 'y' ? translateAmount : 0;
    el.style.willChange = 'transform';
    el.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
  };

  const onScroll = () => {
    elements.forEach(computeAndApply);
  };

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);

  // Return cleanup to caller so they can unbind if needed
  return () => {
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onScroll);
  };
}

// Custom hook for sticky positioning
export function useStickyPosition(options = {}) {
  const ref = useRef(null);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    const defaultOptions = {
      topOffset: '0px',
      zIndex: 10,
      ...options
    };
    
    const originalPosition = element.style.position;
    const originalTop = element.style.top;
    const originalZIndex = element.style.zIndex;
    
    element.style.position = 'sticky';
    element.style.top = defaultOptions.topOffset;
    element.style.zIndex = defaultOptions.zIndex;
    
    return () => {
      element.style.position = originalPosition;
      element.style.top = originalTop;
      element.style.zIndex = originalZIndex;
    };
  }, [options]);
  
  return ref;
}

// Custom hook for text splitting animation
export function useTextSplitting() {
  const ref = useRef(null);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    // Get the text content
    const text = element.textContent;
    
    // Clear the element
    element.textContent = '';
    
    // Split the text into individual characters and wrap each in a span
    const characters = text.split('');
    characters.forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.display = 'inline-block';
      span.style.opacity = '100';
      span.style.transform = 'translateY(20px)';
      span.style.transition = `opacity 0.5s ease, transform 0.5s ease`;
      span.style.transitionDelay = `${index * 0.03}s`;
      
      element.appendChild(span);
    });
    
    // Create an observer to animate when in viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          Array.from(element.children).forEach(span => {
            span.style.opacity = '1';
            span.style.transform = 'translateY(0)';
          });
          observer.unobserve(element);
        }
      });
    }, { threshold: 0.1 });
    
    observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);
  
  return ref;
}