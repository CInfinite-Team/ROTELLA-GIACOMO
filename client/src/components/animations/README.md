# Scroll Animations

This directory contains custom hooks and CSS for implementing various scroll animations in the WriteBook website.

## Features Implemented

1. **Smooth Scrolling** - Provides a smooth scrolling experience when navigating through the page
2. **Viewport Detection** - Elements animate when they enter the viewport
3. **Sticky Positioning** - Elements can be fixed in place while scrolling
4. **Easing Functions** - Various easing functions for more natural animations
5. **Text Splitting** - Characters animate individually for an engaging text reveal effect

## Components

### ScrollAnimations.jsx

Contains custom React hooks for implementing animations:

- `useSmoothScroll()` - Enables smooth scrolling for the entire page
- `useViewportAnimation(options)` - Animates elements when they enter the viewport
- `useStickyPosition(options)` - Makes elements stick to a position while scrolling
- `useTextSplitting()` - Splits text into characters for individual animation

### animations.css

Contains CSS classes for various animation effects:

- Fade-in animations
- Slide-up, slide-left, and slide-right animations
- Scale animations
- Staggered animation delays
- Different easing functions

## Usage

```jsx
// Import the hooks and CSS
import { useSmoothScroll, useViewportAnimation, useStickyPosition, useTextSplitting } from './components/animations/ScrollAnimations';
import './components/animations/animations.css';

function MyComponent() {
  // Apply smooth scrolling to the entire page
  useSmoothScroll();
  
  return (
    <div>
      {/* Element that animates when it enters the viewport */}
      <h1 className="slide-up" ref={useViewportAnimation()}>
        This will slide up when visible
      </h1>
      
      {/* Element that sticks to the top while scrolling */}
      <div ref={useStickyPosition({ topOffset: '20px' })}>
        This will stick to the top
      </div>
      
      {/* Text that animates character by character */}
      <h2 ref={useTextSplitting()}>
        This text will animate character by character
      </h2>
    </div>
  );
}
```

## Animation Classes

- `fade-in` - Simple fade-in animation
- `slide-up` - Slides up from below
- `slide-left` - Slides in from the left
- `slide-right` - Slides in from the right
- `scale-in` - Scales up from slightly smaller

## Stagger Classes

Add staggered delays to animations:

- `stagger-1` - 0.1s delay
- `stagger-2` - 0.2s delay
- `stagger-3` - 0.3s delay
- `stagger-4` - 0.4s delay
- `stagger-5` - 0.5s delay

## Easing Classes

Modify the animation timing function:

- `ease-out-back` - Slightly overshoots and comes back
- `ease-out-circ` - Circular easing
- `ease-in-out` - Accelerates and decelerates

## Preview

A preview of these animations can be seen in the `animation-preview.html` file in the project root.