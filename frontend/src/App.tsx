import { useState } from 'react'
import { Button } from './components/ui/button';


function App() {
  const [count, setCount] = useState(0)

  const handleCount = () => {
    setCount(count + 1);
  }

  return (
    <div className='dark mx-12  bg-background h-screen text-primary'>
        <div className='py-4 px-2'>{count}</div>
        <div>
          <Button onClick={handleCount}>Click me</Button>
        </div>
    </div>
  )
}

export default App
