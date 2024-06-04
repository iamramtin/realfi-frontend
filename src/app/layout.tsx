import '../styles/globals.css'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>RealFi</title>
        <meta name="description" content="RealFi - Emerging market credit. Made credible." />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/fonts/BwGradual-Regular.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <Header/>
        <main className='mx-auto w-full max-w-screen-xl min-h-[400px]'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
