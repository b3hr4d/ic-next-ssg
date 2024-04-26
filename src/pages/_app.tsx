import { Inter } from "next/font/google"
import { AgentProvider, CandidAdapterProvider } from "@ic-reactor/react"
import { AppProps } from "next/app"

import "@src/styles/globals.css"
import { ThemeProvider } from "@src/styles/theme"
import Link from "next/link"

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
        <div className="flex items-center justify-between p-4 max-w-2xl mx-auto">
          <Link href="/" shallow className="text-blue-500 p-2">
            Home
          </Link>
          <Link href="/canisters" shallow className="text-blue-500 p-2">
            Canisters
          </Link>
          <Link href="/apps" shallow className="text-blue-500 p-2">
            Apps
          </Link>
        </div>
        <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-green-500" />
        <AgentProvider withProcessEnv withDevtools>
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
