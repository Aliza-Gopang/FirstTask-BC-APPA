'use client';

import { useEffect } from 'react';

export default function BootstrapClient() {
  useEffect(() => {
    import('bootstrap').then((bootstrap) => {
      (window as any).bootstrap = bootstrap;
    });
  }, []);

  return null;
}
