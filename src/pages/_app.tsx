import { Inter } from "next/font/google"
import { AgentProvider, CandidAdapterProvider } from "@ic-reactor/react"
import { AppProps } from "next/app"

import "@src/styles/globals.css"
import { ThemeProvider } from "@src/styles/theme"
import Link from "next/link"
import Login from "@src/components/login"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

const RootLayout: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <main className={inter.className}>
        <AgentProvider withProcessEnv withDevtools>
          <div className="container flex items-center justify-between p-4 mx-auto">
            <Link href="/" shallow className="text-blue-500 p-2">
              Home
            </Link>
            <Link href="/canisters" shallow className="text-blue-500 p-2">
              Canisters
            </Link>
            <Login />
          </div>
          <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-green-500" />
          <CandidAdapterProvider
            withParser
            loadingComponent={
              <div className="absolute inset-0 flex items-center justify-center">
                Loading Parser...
              </div>
            }
          >
            <div className="container mx-auto">
              <Component {...pageProps} />
            </div>
          </CandidAdapterProvider>
        </AgentProvider>
      </main>
    </ThemeProvider>
  )
}

export default RootLayout
