import styled from "styled-components"
import CampoTexto from "../campoTexto"

const HeaderEstilizado = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img {
        max-width: 212px;

    }
`

export default function Cabecalho() {
    return (
      <HeaderEstilizado>
        <img src="/imagens/logo.png" alt="" />
        <CampoTexto />
      </HeaderEstilizado>
    )
}