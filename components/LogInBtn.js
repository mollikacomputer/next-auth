import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link"

export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <Link href="/api/auth/signout" onClick={() => signOut()}>Sign out</Link>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <Link href="/api/auth/signin" onClick={() => signIn()}>Sign in</Link>
    </>
  )
}