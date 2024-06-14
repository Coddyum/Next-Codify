export const metadata = {
  title: 'Codify',
  description: 'Codify your learning like never <before></before>',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
