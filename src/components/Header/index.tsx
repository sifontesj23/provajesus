
import logo from "../../assets/images/logo.jpg"

import { Container, Content } from "./styles";

export function Header() {
    return (
        <Container>
            <Content>
                <img src= {logo} alt="AppFood" />
                <div className="page-details">
                    
                    <h1>Campus Cascavel</h1>
                </div>

                
            </Content>
        </Container>
    );
}