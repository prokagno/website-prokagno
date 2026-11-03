'use client';

import React, { useState } from 'react';
import Image from 'next/image';

// Optimized image component with lazy loading and blur placeholder
export default function OptimizedImage({ 
  src, 
  alt, 
  width, 
  height, 
  priority = false,
  className = '',
  sizes = '100vw',
  quality = 75,
  style
}) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative overflow-hidden ${className}`} style={style}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        quality={quality}
        priority={priority}
        sizes={sizes}
        loading={priority ? 'eager' : 'lazy'}
        className={`
          duration-700 ease-in-out
          ${isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'}
        `}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  );
}
