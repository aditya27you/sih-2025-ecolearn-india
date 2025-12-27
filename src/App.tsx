import { Outlet } from 'react-router'
import { Navbar } from './components/organisms/Navbar'
import { Footer } from './components/organisms/Footer'

function App() {
  return (
    <div className="min-h-screen bg-base-100 flex flex-col">
      <Navbar />

      <main className="flex-grow container mx-auto">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default App