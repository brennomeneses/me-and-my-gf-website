import React, { useState } from 'react'

const photos = Array.from({ length: 8 }).map((_, i) => `https://via.placeholder.com/640x480?text=Photo+${i + 1}`)

const Gallery: React.FC = () => {
  const [open, setOpen] = useState(false)

  return (
    <section id="gallery" aria-label="Galeria">
      <button className="book" onClick={() => setOpen(true)} aria-haspopup="dialog">
        <span className="icon" aria-hidden>📖</span>
        <span className="label">Abrir galeria</span>
      </button>

      {open && (
        <div className="modal" role="dialog" aria-modal="true">
          <div className="modal-content">
            <h2>Fotos</h2>
            <div className="grid">
              {photos.map((p) => (
                <img key={p} src={"https://media.tenor.com/6oVpxIFwAAoAAAAM/cat-kiss.gif"} alt="Foto da galeria" />
              ))}
            </div>
            <div className="close">
              <button onClick={() => setOpen(false)}>Fechar</button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
