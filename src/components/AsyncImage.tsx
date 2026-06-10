// AsyncImage.tsx
import React, { useEffect, useState } from 'react';

type AsyncImageProps = {
  /** Nome do arquivo local (ex.: "event1.jpg") ou URL completa */
  src: string;
  alt?: string;
  className?: string;
};

/**
 * AsyncImage – carrega imagens sob demanda.
 *
 * - URLs externas são usadas imediatamente (sem efeito colateral).
 * - Arquivos locais são importados dinamicamente (code‑splitting).
 */
export const AsyncImage: React.FC<AsyncImageProps> = ({
  src,
  alt = '',
  className,
}) => {
  // 1️⃣ Detecta se a src já é uma URL completa
  const isExternal = /^https?:\/\//i.test(src);

  // 2️⃣ Estado inicial: já tem a URL, ou ainda não tem (null)
  const [url, setUrl] = useState<string | null>(isExternal ? src : null);
  const [error, setError] = useState<boolean>(false);

  // 3️⃣ Só precisamos de um effect quando a imagem for local
  useEffect(() => {
    // Se já for externa, nada a fazer – o estado já está correto
    if (isExternal) return;

    // ------- IMPORT DINÂMICO -------
    // O bundler vai gerar um chunk separado para cada arquivo importado aqui
    import(
      /* webpackChunkName: "timeline-image-[request]" */ `../assets/${src}.png`
    )
      .then((mod) => setUrl(mod.default))
      .catch(() => {
        setError(true);
        console.error(`Falha ao carregar a imagem local: ${src}`);
      });
     
  }, [src, isExternal]); // src só muda quando o evento muda

  // ---- UI ----
  if (error) {
    return (
      <div className={className} role="alert" aria-live="polite">
        ⚠️ Imagem indisponível
      </div>
    );
  }

  if (!url) {
    // Estado de “carregando” – pode ser um spinner ou placeholder
    return (
      <div className={className} aria-busy="true">
        🔄 Carregando…
      </div>
    );
  }

  return <img src={url} alt={alt} className={className} />;
};