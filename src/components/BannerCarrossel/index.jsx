import { useState, useEffect } from "react";

import banners from "../../mocks/carrossel.json";
import {
  BotaoSeta,
  CarrosselConteiner,
  ConteudoTexto,
  ImagemBanner,
  Indicador,
  Indicadores,
  Setas,
  Slide,
  Subtitulo,
  Titulo,
} from "./styles";

const BannerCarrossel = () => {
  const [indexAtual, setIndexAtual] = useState(0);

  const total = banners.length;
  const avancar = () => {
    setIndexAtual((prevIndex) => (prevIndex + 1) % total);
  };

  const voltar = () => {
    setIndexAtual((prevIndex) => (prevIndex - 1 + total) % total);
  };
  // Troca automática a cada 5s
  useEffect(() => {
    const interval = setInterval(avancar, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <CarrosselConteiner>
      {banners.map((banner, index) => (
        <Slide key={banner.id} $ativo={index === indexAtual}>
          <ImagemBanner src={banner.src} alt={banner.alt} />
          {banner.itemCarrossel && (
            <ConteudoTexto>
              <Titulo>{banner.itemCarrossel.titulo}</Titulo>
              <Subtitulo>{banner.itemCarrossel.subtitulo}</Subtitulo>
            </ConteudoTexto>
          )}
        </Slide>
      ))}
      <Setas>
        <BotaoSeta onClick={voltar}>❮</BotaoSeta>
        <BotaoSeta onClick={avancar}>❯</BotaoSeta>
      </Setas>

      <Indicadores>
        {banners.map((_, i) => (
          <Indicador
            key={i}
            $ativo={i === indexAtual}
            onClick={() => setIndexAtual(i)}
          />
        ))}
      </Indicadores>
    </CarrosselConteiner>
  );
};

export default BannerCarrossel;
