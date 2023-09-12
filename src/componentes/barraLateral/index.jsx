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
                   <ItemNavegacao
                        iconeAtivo= "/icones/mais-curtidas-ativo.png"
                        iconeInativo = "/icone/mais-curtidas-inativo.png"
                        ativo= {true}                  
                   >
                        Mais curtidas
                   </ItemNavegacao>
                   <ItemNavegacao
                        iconeAtivo= "/icones/novas-ativo.png"
                        iconeInativo = "/icone/novas-inativo.png"
                        ativo= {true}                  
                   >
                        Novas
                   </ItemNavegacao>
                   <ItemNavegacao
                        iconeAtivo= "/icones/surpreenda-me-ativo.png"
                        iconeInativo = "/icone/surpreenda-me-inativo.png"
                        ativo= {true}                  
                   >
                        Supreenda-me
                   </ItemNavegacao>
                </ListaEstilizada>
            </nav>
        </aside>
    )
}