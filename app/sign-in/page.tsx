'use client';

import { SignIn } from '@atlasauth/react';

/**
 * The hosted sign-in flow. `<SignIn>` offers passkey sign-in when the instance
 * has passkeys enabled and the user has enrolled one — it calls the FAPI passkey
 * begin/finish endpoints for a WebAuthn assertion under the hood.
 */
export default function SignInPage() {
  return (
    <main style={{ maxWidth: 420, margin: '4rem auto', padding: '0 1rem' }}>
      <SignIn />
    </main>
  );
}
