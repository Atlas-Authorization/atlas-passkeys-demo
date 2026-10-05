'use client';

import { SignedIn, SignedOut, UserButton, useUser } from '@atlasauth/react';
import Link from 'next/link';

export default function Home() {
  const { user } = useUser();

  return (
    <main style={{ maxWidth: 560, margin: '4rem auto', padding: '0 1rem' }}>
      <h1>Atlas passkeys demo</h1>
      <p>Enroll a passkey, then sign in with it — no password.</p>

      <SignedOut>
        <p>
          <Link href="/sign-in">Sign in</Link> (try the “passkey” option), then enroll a passkey
          from your account.
        </p>
      </SignedOut>

      <SignedIn>
        <p>Signed in as {user?.first_name ?? user?.id}.</p>
        <p>
          <Link href="/account">Manage your passkeys →</Link>
        </p>
        <UserButton />
      </SignedIn>
    </main>
  );
}
