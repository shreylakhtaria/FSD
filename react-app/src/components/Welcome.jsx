import { useState, useEffect } from 'react'

const Welcome = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date())

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
    <div className="welcome-container">
      <div className="welcome-content">
        <div className="welcome-title">
          <h1 className="title-text">Welcome!</h1>
        </div>
        
        <div className="datetime-container">
          <p className="datetime-text">{formatDateTime(currentDateTime)}</p>
        </div>
        
        <div className="welcome-message">
          <p className="message-text">This is Pratical-3 made by Shrey-Lakhataria</p>
        </div>
      </div>
    </div>
  )
}

export default Welcome
