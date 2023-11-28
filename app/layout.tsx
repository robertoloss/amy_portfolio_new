import type { Metadata } from 'next'
import { 
	// Inter, 
	Open_Sans
} from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/Providers'
import HeaderBar from '@/components/HeaderBar'

// const inter = Inter({ subsets: ['latin'] })
const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Amy Jackson\'s Portfolio',
  description: 'UX/UI Designer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={openSans.className}>
				<ThemeProvider 
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<HeaderBar/>
						{children}
				</ThemeProvider>
			</body>
    </html>
  )
}
