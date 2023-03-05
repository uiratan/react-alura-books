import styled from 'styled-components';
import Input from '../Input';
import { useState } from 'react';
import { livros } from './dadosPesquisa';
import { Titulo } from "../Titulo";

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    width: 100%;
`
// const Titulo = styled.h2`
//     color: #FFF;
//     font-size: 36px;
//     text-align: center;
//     width: 100%;
// `
const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`
const ResultadoContainer = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

const ResultadoItem = styled.div`
    cursor: pointer;
    margin-bottom: 20px;        
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`
function Pesquisa() {
  const [livrosPesquisados, setLivrosPesquisados] = useState([]);

  function fazPesquisa(evento) {
    const textoDigitado = evento.target.value
    if (textoDigitado) {
      const resultadoPesquisa = livros.filter(livro => livro.nome.toUpperCase().includes(textoDigitado.toUpperCase()));
      setLivrosPesquisados(resultadoPesquisa);
    } else {
      setLivrosPesquisados([]);
    }
  }

  return (
    <PesquisaContainer>
      <Titulo
        cor="white"
        tamanhoFonte="36px"
      >Já sabe por onde começar?</Titulo>
      <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
      <Input
        placeholder="Escreva sua próxima leitura"
        onChange={evento => fazPesquisa(evento)}
      />
      <ResultadoContainer>
        {livrosPesquisados.map(livro => (
          <ResultadoItem>
            <img src={livro.src} alt={livro.nome} />
            <p>{livro.nome}</p>
          </ResultadoItem>
        ))}
      </ResultadoContainer>
    </PesquisaContainer>
  )
}

export default Pesquisa;