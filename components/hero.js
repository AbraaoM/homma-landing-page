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
                    <h1>Turn your best ideia into code!</h1>
                    <p>
                        We help you get your idea out of the paper, be it an indicator, 
                        robot, script, graphic panel or any other useful tool to help you 
                        in the day-to-day of the financial market.
                    </p>
                    <p>
                        <Button 
                            href="#signup" 
                            className={styles.heroButton} 
                            size="lg"> 
                            Contact Us 
                        </Button>
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