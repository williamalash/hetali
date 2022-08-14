import { Container, Nav, Navbar } from 'react-bootstrap';
import Logo from '../../assets/logos/blue_logo.svg';
import styles from '../../styles/header.module.css';

function Header() {
  return (
    <Navbar
      className={styles.nav_container}
      collapseOnSelect
      expand='lg'
      bg='light'
      variant='light'>
      <Container>
        <Navbar.Brand className={styles.nav_brand} href='#home'>
          <img className={styles.logo} src={Logo} alt='Blue Logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto' />
          <Nav>
            <Nav.Link href='#features'>ABOUT US</Nav.Link>
            <Nav.Link href='#features'>PROJECTS</Nav.Link>
            <Nav.Link href='#features'>DIVERSIFICATION</Nav.Link>
            <Nav.Link href='#features'>OUR PROCESS</Nav.Link>
            <Nav.Link href='#features'>TESTIMONIALS</Nav.Link>
            <Nav.Link href='#features'>CAREERS</Nav.Link>
            <Nav.Link href='#features'>CONTACT US</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
