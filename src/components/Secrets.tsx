// src/components/Secrets.tsx
import React from 'react';
import { useSecretInput } from '../hooks/useSecret';
import { handle } from '../services/secrets';

const Secrets: React.FC = () => {
  // Caso você queira um comportamento diferente de log, basta substituir o callback aqui.
  const { bind, handleSubmit } = useSecretInput('', (value) => {
    // Exemplo de ação personalizada (pode ser uma chamada a API, abertura de modal, etc.)
    console.log('🕵️‍♂️  Descubra:', value);
    handle(value);
  });

  return (
    <section id="secrets" aria-label="Segredos">
      {/* O <form> permite submeter tanto com click quanto com a tecla Enter */}
      <form className="secret-box" onSubmit={handleSubmit}>
        <input
          {...bind}
          placeholder="Digite um segredo..."
          aria-label="Segredo"
        />
        <button type="submit">Descubra</button>
      </form>
    </section>
  );
};

export default Secrets;