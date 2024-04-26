import { Inter } from "next/font/google"
import { AgentProvider } from "@ic-reactor/react"
import { AppProps } from "next/app"

import "@src/styles/globals.css"
import { ThemeProvider } from "@src/styles/theme"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

const RootLayout: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <main className={inter.variable}>
        <div className="flex justify-center flex-col space-y-2">
          <AgentProvider withProcessEnv withDevtools>
            <div className="w-full">
              <Component {...pageProps} />
            </div>
          </AgentProvider>
        </div>
      </main>
    </ThemeProvider>
  )
}

export default RootLayout
