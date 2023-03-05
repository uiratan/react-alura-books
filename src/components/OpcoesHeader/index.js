import './estilo.css';

const itensListaOpcoesHeader = [
  'CATEGORIAS',
  'FAVORITOS',
  'ESTANTE'
];

function OpcoesHeader() {
  return (
    <ul className='lista-opcoes'>
      {
        itensListaOpcoesHeader.map((texto) => (
          <li className='item-lista-opcoes'><p>{texto}</p></li>
        ))
      }
    </ul>
  )
}

export default OpcoesHeader;