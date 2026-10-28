'use client';

import { ManagePasskeys, RedirectToSignIn, SignedIn, SignedOut } from '@atlasauth/react';
import Link from 'next/link';

/**
 * Protected account page. `<ManagePasskeys>` lists the user's enrolled passkeys
 * and drives enrollment of a new one (the WebAuthn create ceremony + FAPI
 * begin/finish). The route is also gated by the proxy; `<SignedOut>`
 * is a client-side backstop.
 */
export default function AccountPage() {
  return (
    <main style={{ maxWidth: 560, margin: '4rem auto', padding: '0 1rem' }}>
      <h1>Your passkeys</h1>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>

      <SignedIn>
        <ManagePasskeys />
        <p style={{ marginTop: '2rem' }}>
          <Link href="/">← Back</Link>
        </p>
      </SignedIn>
    </main>
  );
}
