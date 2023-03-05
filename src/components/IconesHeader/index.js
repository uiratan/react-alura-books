import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';
import styled from 'styled-components';

const ListaIcones = styled.ul`
  display: flex;
  align-items: center;
`
const Icone = styled.li`
  padding: 0 5px;
  margin-right: 40px;
  cursor: pointer;
`


const iconesListaOpcoesHeader = [perfil, sacola];

function IconesHeader() {
  return (
    <ListaIcones>
      {
        iconesListaOpcoesHeader.map((icone) => (
          <Icone><img src={icone}></img></Icone>
        ))
      }
    </ListaIcones>
  )
}

export default IconesHeader;