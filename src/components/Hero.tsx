import React from 'react'

const Hero: React.FC = () => {
  const hearts = [
    { left: '8%', bottom: '10%', delay: '0s', size: 18 },
    { left: '18%', bottom: '20%', delay: '1s', size: 14 },
    { left: '30%', bottom: '5%', delay: '2s', size: 16 },
    { left: '52%', bottom: '12%', delay: '0.5s', size: 20 },
    { left: '68%', bottom: '8%', delay: '1.2s', size: 16 },
    { left: '82%', bottom: '18%', delay: '0.8s', size: 18 },
  ]

  return (
    <section id="hero" aria-label="Hero">
      <div className="hero-bg" />
      <div className="hero-content">
        <h1>Eu & Vose {"<3"}</h1>
        <p>Um pequeno museu dos nossos dias</p>
      </div>
      <div className="hearts" aria-hidden="true">
        {hearts.map((h, i) => (
          <span
            key={i}
            className="heart"
            style={{
              left: h.left,
              bottom: h.bottom,
              animationDelay: h.delay,
              fontSize: h.size,
            }}
          >
            ♥
          </span>
        ))}
      </div>
    </section>
  )
}

export default Hero
