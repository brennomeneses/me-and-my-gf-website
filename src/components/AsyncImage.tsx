// AsyncImage.tsx
import React, { useEffect, useState } from "react";

type AsyncImageProps = {
  /** Nome do arquivo local (ex.: "event1") – **sem** extensão. */
  src: string;
  alt?: string;
  className?: string;
};

/**
 * AsyncImage – carrega imagens sob demanda.
 *
 * - URLs externas são usadas imediatamente (sem efeito colateral).
 * - Arquivos locais são importados dinamicamente (code‑splitting) e fazem fallback
 *   de PNG → JPG.
 */
export const AsyncImage: React.FC<AsyncImageProps> = ({
  src,
  alt = "",
  className,
}) => {
  // 1️⃣ Detecta se a src já é uma URL completa
  const isExternal = /^https?:\/\//i.test(src);

  // 2️⃣ Estado inicial: já tem a URL (externa) ou ainda não tem (null)
  const [url, setUrl] = useState<string | null>(isExternal ? src : null);
  const [error, setError] = useState<boolean>(false);

  // 3️⃣ Só precisamos de um effect quando a imagem for local
  useEffect(() => {
    // URLs externas não precisam de import dinâmico
    if (isExternal) return;

    /**
     * Tenta carregar a imagem como PNG; se falhar tenta JPG.
     */
    const loadImage = async () => {
      try {
        // ---------- PNG ----------
        const pngMod = await import(
          /* webpackChunkName: "timeline-image-[request]" */ `../assets/${src}.png`
        );
        setUrl(pngMod.default);
        return;
      } catch {
        // ---------- JPG ----------
        try {
          const jpgMod = await import(
            /* webpackChunkName: "timeline-image-[request]" */ `../assets/${src}.jpg`
          );
          setUrl(jpgMod.default);
          return;
        } catch {
          // ---------- NENHUMA ----------
          setError(true);
          console.error(`Falha ao carregar a imagem local: ${src}.png ou ${src}.jpg`);
        }
      }
    };

    loadImage();
  }, [src, isExternal]); // re‑run only when a different local file is requested

  /* ---------- UI ---------- */
  if (error) {
    return (
      <div className={className} role="alert" aria-live="polite">
        ⚠️ Imagem indisponível
      </div>
    );
  }

  if (!url) {
    // Estado de “carregando”
    return (
      <div className={className} aria-busy="true">
        🔄 Carregando…
      </div>
    );
  }

  return <img src={url} alt={alt} className={className} />;
};