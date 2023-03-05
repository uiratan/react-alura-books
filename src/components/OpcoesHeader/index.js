import styled from 'styled-components';

const ListaOpcoes = styled.ul`
  display: flex;
`
const Opcao = styled.li`
  height: 100%;
  padding: 0 5px;

  font-size: 16px;
  min-width: 120px;
  margin-right: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  cursor: pointer;
`

const itensListaOpcoesHeader = [
  'CATEGORIAS',
  'FAVORITOS',
  'ESTANTE'
];

function OpcoesHeader() {
  return (
    <ListaOpcoes>
      {
        itensListaOpcoesHeader.map((texto) => (
          <Opcao><p>{texto}</p></Opcao>
        ))
      }
    </ListaOpcoes>
  )
}

export default OpcoesHeader;