import { Navbar, Nav, Container, Button } from 'react-bootstrap'

import styles from '../styles/Header.module.css'

export default function Header(){
    return (
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand className={styles.logotipo} href="#hero">
                {/* <img
                    alt=""
                    src="/LogoMarca.svg"
                    width="50"
                    height="50"
                    className="align-center"
                />{' '} */}
                Homma
            </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav className="mr-auto">
                        <Nav.Link href="#feature">Features</Nav.Link>
                        <Nav.Link href="#hiw">HIW</Nav.Link>
                        <Button href="#signup" className={styles.cta}> Peça o Seu orçamento </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            
        </Navbar>
    )
}