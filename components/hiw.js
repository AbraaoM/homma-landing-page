import { Container, Row, Col, Card } from "react-bootstrap"

import styles from '../styles/HIW.module.css'

export default function HIW(){
    return (
        <Container fluid className={styles.hiw}>
            <Container id = 'hiw'>
                <Row xs="1" lg="2" className="justify-content-md-center">
                    <Col className={styles.hiwItem}>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className={styles.hiwItem}>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            
        </Container>
    )
}