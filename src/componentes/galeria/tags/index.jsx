import tags from "./tags.json"
import styled from "styled-components"

const TagTitulo = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    margin: 0;
`

const TagEstilizada = styled.button`
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    border: 2px solid transparent;
    box-sizing: border-box;
    color: #FFFFFF;
    cursor: pointer;
    font-size: 24px;
    padding: 12px;
    transition: background-color 0.3s ease;
    &:hover{
        border-color: #C98CF1;
    }
`

const Div = styled.div`
    display: flex;
    gap: 24px;
    justify-content: end;
`

export default function Tags() {
    return(
        <>
            <TagTitulo>Busque por tags:</TagTitulo>
            <Div>
                {tags.map(tag => <TagEstilizada key={tag.id}>{tag.titulo}</TagEstilizada>)}
            </Div>
        </>
    )
}