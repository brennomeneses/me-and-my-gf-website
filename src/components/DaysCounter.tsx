import React, { useEffect, useState } from 'react'

const DaysCounter: React.FC = () => {
  const start = new Date('2022-06-14T00:00:00')
  const [now, setNow] = useState<Date>(new Date())

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(t)
  }, [])

  const diff = Math.max(0, now.getTime() - start.getTime())
  const seconds = Math.floor(diff / 1000)
  const days = Math.floor(seconds / 86400)
  const hours = Math.floor((seconds % 86400) / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const secs = seconds % 60

  return (
    <section id="days" aria-label="Dias juntos">
      <div className="days-card">
        <div className="days-item">
          <div className="num">{days}</div>
          <div className="label">Dias</div>
        </div>
        <div className="days-item">
          <div className="num">{String(hours).padStart(2, '0')}</div>
          <div className="label">Horas</div>
        </div>
        <div className="days-item">
          <div className="num">{String(minutes).padStart(2, '0')}</div>
          <div className="label">Minutos</div>
        </div>
        <div className="days-item">
          <div className="num">{String(secs).padStart(2, '0')}</div>
          <div className="label">Segundos</div>
        </div>
      </div>
    </section>
  )
}

export default DaysCounter
