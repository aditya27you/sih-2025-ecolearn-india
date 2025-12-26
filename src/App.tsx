import { Outlet, Link } from 'react-router'
import { Button } from './components/atoms/Button'

function App() {
  return (
    <div className="min-h-screen bg-base-100 flex flex-col">
      <header className="navbar bg-base-200 px-4">
        <div className="flex-1">
          <Link to="/" className="text-xl font-heading font-bold text-primary">EcoLearn India</Link>
        </div>
        <nav className="flex-none">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/modules">Modules</Link></li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow container mx-auto">
        <Outlet />
      </main>

      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <aside>
          <p>© 2025 EcoLearn India - Smart India Hackathon</p>
        </aside>
      </footer>
    </div>
  )
}

export default App
