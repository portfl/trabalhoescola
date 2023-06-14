import './globals.css'


export const metadata = {
  title: 'Quiz Maragogipe',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
