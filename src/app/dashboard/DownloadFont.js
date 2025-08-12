'use client'
// components/DynamicFontLoader.js
import { useEffect } from 'react';
import LiveUrl from '../comonents/Url';
const DynamicFontLoader = ({ fontId }) => {
  useEffect(() => {
    if (!fontId) return; // Don't load if no ID

    const fontFaceCSS = `
      @font-face {
        font-family: 'userFont';
        src: url('${LiveUrl}${fontId}') format('opentype');
        font-display: swap;
      }
    `;

    // Inject the font into the <head>
    const styleElement = document.createElement('style');
    styleElement.innerHTML = fontFaceCSS;
    document.head.appendChild(styleElement);

    // Cleanup on unmount
    return () => {
      document.head.removeChild(styleElement);
    };
  }, [fontId]);

  return null; // This component doesn't render anything
};

export default DynamicFontLoader;