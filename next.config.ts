import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  //i18n (multi-language routing)
  i18n:{
    locales:['en','hi','fr'],
    defaultLocale:'en'
  }
};

export default nextConfig;


// app/
//  ├─ [locale]/
//  │   ├─ page.tsx
//  │   ├─ layout.tsx
//  │   ├─ about/
//  │   │   └─ page.tsx
//  └─ layout.tsx


