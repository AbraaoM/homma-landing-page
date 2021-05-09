import { Container, Col, Row, Image, Button, Jumbotron } from "react-bootstrap"

export default function Hero(){
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col className="justify-content-md-center">
                <Jumbotron>
                    <h1>Hello, world!</h1>
                    <p>
                        This is a simple hero unit, a simple jumbotron-style component for calling
                        extra attention to featured content or information.
                    </p>
                    <p>
                        <Button variant="primary">Learn more</Button>
                    </p>
                </Jumbotron>
                </Col>
                <Col className="justify-content-md-center ">
                    <Image src="/hero-image.svg" size="50"/>
                </Col>
            </Row>
        </Container>
    )
}