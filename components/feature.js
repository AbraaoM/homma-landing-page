import {Container, Row, Col, Card} from 'react-bootstrap'
import {RiStockFill} from 'react-icons/ri'
import {GiMonoWheelRobot} from 'react-icons/gi'
import {FaTools, FaRobot, FaChartLine, FaEllipsisH} from 'react-icons/fa'

import styles from '../styles/Feature.module.css'

export default function Feature(){
    return (
        <Container id = 'feature'
            className={styles.featureContainer}>
            <Row xs="1" lg="2" className="justify-content-md-center">
                <Col className={styles.featureItem}>
                    <Card border="light" className={styles.featureCards}>
                        <Card.Body>
                            <Card.Title>
                                <FaChartLine size="60"/> {' '}  Indicadores
                            </Card.Title>
                            <Card.Text>
                                Desenvolvemos indicadores gráficos que te auxiliam na tomada de decisão.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className={styles.featureItem}>
                    <Card border="light" className={styles.featureCards}>
                        <Card.Body>
                            <Card.Title>
                                <FaRobot size="60"/> {' '}  Robôs
                            </Card.Title>
                            <Card.Text>
                                Implementamos robôs automatizados para sua estratégia.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className={styles.featureItem}>
                    <Card border="light" className={styles.featureCards}>
                        <Card.Body>
                            <Card.Title>
                                <FaTools size="60"/> {' '}  Manutenção
                            </Card.Title>
                            <Card.Text>
                                Atualizamos, consertamos e melhoramos seus códigos mql antigos.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className={styles.featureItem}>
                    <Card border="light" className={styles.featureCards}>
                        <Card.Body>
                            <Card.Title>
                                <FaEllipsisH size="60"/>{' '} O que você precisar
                            </Card.Title>
                            <Card.Text>
                                Desenvolvemos soluções para os mais diversos problemas envolvendo o mercado financeiro e o Metatrader, entre em contato nós podemos te ajudar.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}