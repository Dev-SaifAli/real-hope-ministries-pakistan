'use client';

import NextTopLoader from 'nextjs-toploader';

export default function ProgressBarProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NextTopLoader
        color="linear-gradient(to right, #0b2545, #2e9e6f)"
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl={true}
        showSpinner={false}
        easing="ease"
        speed={200}
        shadow="0 0 10px #2e9e6f,0 0 5px #2e9e6f"
      />
      {children}
    </>
  );
}
