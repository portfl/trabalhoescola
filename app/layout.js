import './globals.css'


export const metadata = {
  title: 'Quiz Maragogipe',
  description: "Quiz Maragogipe"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
