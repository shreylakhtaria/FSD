import { useState, useEffect, useRef } from 'react'
import VariableProximity from './VariableProximity'

const Welcome = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date())
  const containerRef = useRef(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatDateTime = (date) => {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    }
    return date.toLocaleDateString('en-US', options)
  }

  return (
    <div className="welcome-container" ref={containerRef}>
      <div className="welcome-content">
        <div className="welcome-title">
          <VariableProximity
            label="Welcome!"
            containerRef={containerRef}
            radius={150}
            falloff="exponential"
            intensity={1.5}
            className="title-text"
          />
        </div>
        
        <div className="datetime-container">
          <VariableProximity
            label={formatDateTime(currentDateTime)}
            containerRef={containerRef}
            radius={120}
            falloff="gaussian"
            intensity={1.2}
            className="datetime-text"
          />
        </div>
        
        <div className="welcome-message">
          <VariableProximity
            label="This is Pratical-3 made by Shrey-Lakhataria"
            containerRef={containerRef}
            radius={100}
            falloff="linear"
            intensity={1}
            className="message-text"
          />
        </div>
      </div>
    </div>
  )
}

export default Welcome
