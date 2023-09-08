import styled from "styled-components"
import ItemNavegacao from "./itemNavegacao"

const ListaEstilizada = styled.ul`
   list-style: none;
   padding: 0;
   margin: 0; 
   width: 212px;
`

export default function BarraLateral() {
    return (
        <aside>
            <nav>
                <ListaEstilizada>
                   <ItemNavegacao
                        iconeAtivo= "/icones/home-ativo.png"
                        iconeInativo = "/icone/home-inativo.png"
                       ativo={true}                   
                   >
                        Início
                   </ItemNavegacao>
                   <ItemNavegacao
                        iconeAtivo= "/icones/mais-vistas-ativo.png"
                        iconeInativo = "/icone/mais-vistas-inativo.png"
                        ativo= {true}                  
                   >
                        Mais vistas
                   </ItemNavegacao>
                </ListaEstilizada>
            </nav>
        </aside>
    )
}