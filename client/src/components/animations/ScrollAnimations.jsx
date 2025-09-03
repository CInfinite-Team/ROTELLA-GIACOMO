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
      span.style.opacity = '0';
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