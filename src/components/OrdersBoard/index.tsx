import {  Container, Board, OrdersContainer} from "./styles";

export function OrdersBoard() {
    return (
        <Container>
            <Board>
                <header>
                    <span>🚨</span>
                    <strong>Noticias</strong>
                    
                </header>

                <OrdersContainer>
                    <button type="button">
                        <strong>Noticias del campus Cascavel</strong>
                        <span>Novo Predio de Edificacoes</span>
                        <span>Bolsas de</span>
                    </button>
                    
                </OrdersContainer>
            </Board>
            
        </Container>
    )
}