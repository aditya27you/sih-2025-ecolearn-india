import StyleTest from './components/StyleTest'
import { Button } from './components/atoms/Button'
import { Card } from './components/molecules/Card'

function App() {
  return (
    <div className="container mx-auto p-4 min-h-screen">
      <StyleTest />
      
      <div className="divider">Component Verification</div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="space-y-4">
          <h2 className="text-2xl font-heading">Atoms: Button</h2>
          <div className="flex gap-2 flex-wrap">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="accent">Accent</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
          <div className="flex gap-2 items-center">
             <Button size="sm">Small</Button>
             <Button size="md">Medium</Button>
             <Button size="lg">Large</Button>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-heading">Molecules: Card</h2>
          <Card 
            title="Module Preview" 
            actions={<Button size="sm" variant="primary">Start Learning</Button>}
          >
            <p>This is a reusable card component built with DaisyUI.</p>
          </Card>
        </section>
      </div>
    </div>
  )
}

export default App