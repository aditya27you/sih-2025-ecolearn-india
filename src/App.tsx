import { Outlet } from 'react-router'
import { ToastContainer } from '@/components/organisms/ToastContainer'

function App() {
  return (
    <>
      <ToastContainer />
      <Outlet />
    </>
  )
}

export default App
