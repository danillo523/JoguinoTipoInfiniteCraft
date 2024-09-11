import { IElemento } from '@/types/IElemento';
import Elemento from './../components/Elemento';

export default function Home() {
  const listaDeElementos: IElemento[] = [
    { name: 'Ar', emoji: '🍃' },
    { name: 'Fogo', emoji: '🔥' },
    { name: 'Terra', emoji: '🌍' },
    { name: 'Água', emoji: '💧' }
  ]

  // Botão: adicionar um novo elemento à lista (Café)
  // a lista de elementos tem que usar a função useState do React
  // https://react.dev/reference/react/useState
  return (
    <div id="elementos">
      {listaDeElementos.map((elemento, index) =>
        <Elemento key={index}
          name={elemento.name}
          emoji={elemento.emoji} />
      )}
    </div>
  );
}