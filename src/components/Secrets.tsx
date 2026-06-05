import React, { useState } from 'react'

const Secrets: React.FC = () => {
  const [value, setValue] = useState('')

  return (
    <section id="secrets" aria-label="Segredos">
      <div className="secret-box">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Digite um segredo..."
        />
        <button onClick={() => console.log('Descubra:', value)}>Descubra</button>
      </div>
    </section>
  )
}

export default Secrets
