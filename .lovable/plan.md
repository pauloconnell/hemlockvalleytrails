## Fix hero parallax by separating transform from layout classes

The `animate-reveal` class on the same element as the inline `transform` style is overriding/conflicting with the parallax translate. Split into two divs.

### Change in `src/routes/index.tsx` (hero content block, ~lines 128-160)

Replace:

```tsx
<div
  className="px-6 md:px-16 pb-16 md:pb-24 max-w-5xl animate-reveal will-change-transform"
  style={{
    transform: `translate3d(0, ${contentOffset}px, 0)`,
    opacity: contentOpacity,
  }}
>
  {/* h1, p, buttons, logo */}
</div>
```

With:

```tsx
<div
  style={{
    transform: `translate3d(0, ${contentOffset}px, 0)`,
    opacity: contentOpacity,
    willChange: "transform, opacity",
  }}
>
  <div className="px-6 md:px-16 pb-16 md:pb-24 max-w-5xl animate-reveal">
    {/* h1, p, buttons, logo unchanged */}
  </div>
</div>
```

The outer div owns the parallax transform/opacity; the inner div keeps the layout classes and entrance animation. No other logic changes.
