import styled from "styled-components"

const ItemListaEstilizado = styled.li`   
  align-items: center; 
  color:${props => props.$ativo ? '#7b78E5' : '#D9D9D9' };
  font-family: ${props => props.$ativo ? 'GandhiSansRegular' : 'GandhiSansBold' };
  cursor: pointer;
  display: flex;
  font-size: 24px;
  gap: 22px;
  line-height: 29px;
  margin-bottom: 30px;
`

export default function ItemNavegacao({children,iconeAtivo, iconeInativo, ativo = false }) {
    return(        
        <ItemListaEstilizado $ativo={ativo}>
            <img src={ativo ? iconeAtivo : iconeInativo} alt="" />
            {children}
        </ItemListaEstilizado>
    )
}