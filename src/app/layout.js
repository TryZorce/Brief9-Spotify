import './globals.scss'
import style from "./components/list.module.scss";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Yfitops',
  description: 'Brief react spotify',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={style.body_bg}>{children}</body>
    </html>
  )
}
