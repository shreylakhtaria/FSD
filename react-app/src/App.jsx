import './App.css'
import Silk from './components/Silk'
import Welcome from './components/Welcome'

function App() {
  return (
    <div className="app">
      <div className="silk-background">
        <Silk 
          speed={10}
          scale={2}
          color="#2a1a3d"
          noiseIntensity={1.2}
          rotation={0.1}
        />
      </div>
      <Welcome />
    </div>
  )
}

export default App
