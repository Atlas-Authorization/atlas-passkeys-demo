# atlas-passkeys-demo

A Next.js (App Router) demo of **passkey enrollment** and **passkey sign-in**
with Atlas.

## What's wired

- **`app/sign-in/page.tsx`** — `<SignIn>` from `@atlasauth/react`. When the
  instance has passkeys enabled and the user has one enrolled, it offers passkey
  sign-in (a WebAuthn assertion via the FAPI passkey begin/finish endpoints).
- **`app/account/page.tsx`** — `<ManagePasskeys>` lists enrolled passkeys and
  drives enrollment of a new one (the WebAuthn create ceremony). Gated by the
  edge middleware + a `<SignedOut><RedirectToSignIn/></SignedOut>` backstop.
- **`middleware.ts`** — protects `/account`.

Under the hood these components use the low-level passkey helpers from
`@atlasauth/js` (`passkeysSupported`, `createPasskey`, `getPasskeyAssertion`) —
reach for those directly only if you build a fully custom passkey UI.

> Passkeys/WebAuthn require a secure context. `localhost` counts; otherwise serve
> over HTTPS on the registered RP origin.

## Run

```sh
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000, sign in, open `/account`, and click to enroll a
passkey. Sign out and sign back in with the passkey.

## Packages

- `@atlasauth/react` — `SignIn`, `ManagePasskeys`, `SignedIn`/`SignedOut`,
  `RedirectToSignIn`, `UserButton`, `useUser`
- `@atlasauth/nextjs` — `atlasMiddleware`
