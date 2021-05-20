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
                                <FaChartLine size="60"/> {' '}  Indicators
                            </Card.Title>
                            <Card.Text>
                                We develop chart indicators to help you in your decision-making.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className={styles.featureItem}>
                    <Card border="light" className={styles.featureCards}>
                        <Card.Body>
                            <Card.Title>
                                <FaRobot size="60"/> {' '}  Robots
                            </Card.Title>
                            <Card.Text>
                                We automate your strategy in a robot.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className={styles.featureItem}>
                    <Card border="light" className={styles.featureCards}>
                        <Card.Body>
                            <Card.Title>
                                <FaTools size="60"/> {' '}  Maintenance
                            </Card.Title>
                            <Card.Text>                  
                                We update, repair and improve your old mql codes.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className={styles.featureItem}>
                    <Card border="light" className={styles.featureCards}>
                        <Card.Body>
                            <Card.Title>
                                <FaEllipsisH size="60"/>{' '} What else you need
                            </Card.Title>
                            <Card.Text>
                                We develop solutions for the most diverse problems involving the 
                                financial market and Metatrader, contact us we can help you.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}