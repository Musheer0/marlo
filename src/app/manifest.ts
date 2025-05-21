// app/manifest.ts

import type { MetadataRoute } from 'next';

const manifest = (): MetadataRoute.Manifest => ({
  name: 'Marlo',
  short_name: 'Marlo',
  description:
    "Marlo's AI-powered marketing intelligence surfaces hidden revenue, automates deep reporting, and provides real-time insights.",
  start_url: '/',
  display: 'standalone',
  background_color: '#ffffff',
  theme_color: '#000000', // change to your brand color
  icons: [
    {
      src: '/favicons/android-chrome-192x192.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      src: '/favicons/android-chrome-512x512.png',
      sizes: '512x512',
      type: 'image/png',
    },
    {
      src: '/favicons/apple-touch-icon.png',
      sizes: '180x180',
      type: 'image/png',
      purpose: 'any',
    },
    {
      src: '/favicons/favicon-32x32.png',
      sizes: '32x32',
      type: 'image/png',
    },
    {
      src: '/favicons/favicon-16x16.png',
      sizes: '16x16',
      type: 'image/png',
    },
  ],
});

export default manifest;
