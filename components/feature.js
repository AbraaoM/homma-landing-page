import {Container, Row, Col, Card} from 'react-bootstrap'

import styles from '../styles/Feature.module.css'

export default function Feature(){
    return (
        <Container className={styles.teste}>
            <Row>
                <Col>
                    Banana
                </Col>
                <Col>
                    Maça
                </Col>
                <Col>
                    Limão
                </Col>
                <Col>
                    Morango
                </Col>
            </Row>
        </Container>
    )
}