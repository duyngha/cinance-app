import Image from 'next/image'
import { Source_Code_Pro } from 'next/font/google'
import styles from './page.module.css'

const scp = Source_Code_Pro({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={scp.className}>
      <h1 className="text-3xl font-bold underline">Hello, I am Cinance App!</h1>
    </main>
  )
}
