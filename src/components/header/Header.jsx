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
            <Nav.Link className={styles.nav_item} href='#features'>
              ABOUT US
              <div></div>
            </Nav.Link>
            <Nav.Link className={styles.nav_item} href='#features'>
              PROJECTS
              <div></div>
            </Nav.Link>
            <Nav.Link className={styles.nav_item} href='#features'>
              DIVERSIFICATION
              <div></div>
            </Nav.Link>
            <Nav.Link className={styles.nav_item} href='#features'>
              OUR PROCESS
              <div></div>
            </Nav.Link>
            <Nav.Link className={styles.nav_item} href='#features'>
              TESTIMONIALS
              <div></div>
            </Nav.Link>
            <Nav.Link className={styles.nav_item} href='#features'>
              CAREERS
              <div></div>
            </Nav.Link>
            <Nav.Link className={styles.nav_item} href='#features'>
              CONTACT US
              <div></div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
