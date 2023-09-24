import { Source_Code_Pro } from 'next/font/google'
import DomiChart from './domi-chart'

const font = Source_Code_Pro({ subsets: ['latin'] })

async function getData() {
  const res = await fetch('http://localhost:8082/dominances')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Home() {
  const data = await getData()
  
  return (
    <main className={font.className}>
      <div className="container max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold underline text-center">Hello, I am Cinance App!</h1>
        <DomiChart data={data}/>
      </div>
    </main>
  )
}
