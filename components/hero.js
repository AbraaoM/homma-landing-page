import { Container, Col, Row, Image, Button, Jumbotron } from "react-bootstrap"

import styles from '../styles/Hero.module.css'

export default function Hero(){
    return (
        <Container id = 'hero' 
                    className={styles.heroContainer}
                    fluid>
            <Row xs="1" lg="2" className="justify-content-md-center">
                <Col className={styles.heroText}>
                <Jumbotron>
                    <h1>Transforme sua idéia em código!</h1>
                    <p>
                        Te ajudamos a tirar sua ideia do papel, seja ela um indicador, robô, script, painel gráfico ou qualquer outra ferramenta útil para te auxiliar no dia a dia do mercado financeiro.
                    </p>
                    <p>
                        <Button href="#signup" className={styles.heroButton} size="lg"> Peça o Seu orçamento </Button>
                    </p>
                </Jumbotron>
                </Col>
                <Col className="justify-content-md-center ">
                    <Image 
                        className={styles.heroImage}
                        src="/hero-image.svg"
                    />
                </Col>
            </Row>
        </Container>
    )
}