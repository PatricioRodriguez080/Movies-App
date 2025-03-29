import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Movies App",
  description: "Search for movies using the OMDb API and save them to your favorites list",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-cremeCustom">
        {children}
      </body>
    </html>
  )
}
