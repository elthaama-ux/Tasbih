import { useState } from 'react'
import Sebhaty from './Sebhaty'
import { Analytics } from '@vercel/analytics/react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Sebhaty />
      <Analytics />
    </>
  )
}

export default App