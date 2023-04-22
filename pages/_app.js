import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { SessionProvider } from "next-auth/react"

export default function App({ Component, pageProps }) {
  return (
  <>
  <SessionProvider>  
  <Navbar/>
  <Component {...pageProps} />
  </SessionProvider>
  </>
  
  )
}
