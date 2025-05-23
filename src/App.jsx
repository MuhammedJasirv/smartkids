import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Route'
import { Toaster } from 'react-hot-toast'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RouterProvider router={router}/>
    <Toaster position='top-right'/>
    </>
  )
}

export default App
