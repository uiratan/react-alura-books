import styled from "styled-components";
import { Titulo } from "../Titulo";
import { livros } from "./dadosUltimosLancamentos";
import CardRecomendacao from "../CardRecomendacao";

import imagemLivro from '../../imagens/livro2.png'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`
const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`
function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo
                cor="#EB9B00"
                tamanhoFonte="36px"
            >
                Ultimos Lançamentos</Titulo>
            <NovosLivrosContainer>
                {livros.map(livro => (
                    <CardRecomendacao
                        titulo={livro.nome}
                        subtitulo={livro.id}
                        descricao={livro.desc}
                        img={livro.src}
                    >
                    </CardRecomendacao>
                ))}
            </NovosLivrosContainer>
        </UltimosLancamentosContainer>

    )
}

export default UltimosLancamentos;