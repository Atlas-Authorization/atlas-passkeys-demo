import type { ReactNode } from 'react';
import { Providers } from './providers';

export const metadata = {
  title: 'Atlas passkeys demo',
  description: 'Passkey enrollment and passkey sign-in with Atlas.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'system-ui, sans-serif', margin: 0 }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
