import { Container, Row, Col } from "react-bootstrap"
import MadeWithLove from 'react-made-with-love'
import {FaGithub} from 'react-icons/fa'
import {DiGithubFull} from 'react-icons/di'

import styles from '../styles/Footer.module.css'

export default function Footer(){
    return (
        <Container fluid className={styles.footerContainer}>
            <Container>
                <Row>
                    <Col className={styles.footerText}>
                        <ul>
                            <li> 
                                <a href="https://github.com/HommaTech"> 
                                    <DiGithubFull style={{color:"white"}} size="60"/>
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col className={styles.footerText}>
                        {/* <ul>
                            <li> <a href="https://www.mql5.com/en/users/abraao.moreira">Página pessoal</a></li>
                            <li> REDES SOCIAIS</li>
                        </ul> */}
                    </Col>
                </Row>
            </Container>

            <MadeWithLove
                className={styles.madeWithLove}
                by="Homma.tech"
                emoji
            />
        </Container>
    )
}