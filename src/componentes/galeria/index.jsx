import styled from "styled-components";
import Titulo from "../titulo/titulo";
import Populares from "./populares";
import Tags from "./tags";
import Imagem from "./imagem";

const GaleriaContainer = styled.div`
   display: flex;

`
const SecaoFluida = styled.section`
   flex-grow: 1; 
`
const ImagensContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`


export default function Galeria({fotos = []}) {
    return(
        <>
            <Tags />
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo> Navegue por nossa galeria </Titulo>
                    <ImagensContainer>
                        {fotos.map(foto => <Imagem key={foto.id} foto={foto} />)}
                    </ImagensContainer>
                </SecaoFluida>
                <Populares />

            </GaleriaContainer>
        </>
    )
}