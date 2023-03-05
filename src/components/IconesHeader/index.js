import './estilo.css';
import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';

const iconesListaOpcoesHeader = [perfil, sacola];

function IconesHeader() {
  return (
    <ul className='lista-icones'>
      {
        iconesListaOpcoesHeader.map((icone) => (
          <li className='item-lista-icones'><img src={icone}></img></li>
        ))
      }
    </ul>
  )
}

export default IconesHeader;