import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";
import { useTranslation } from 'react-i18next';


function NavigationBar() {
  const { t, i18n } = useTranslation();

  const changeLangEE = () => {
    i18n.changeLanguage("ee");
    localStorage.setItem("language", "ee");
  }

  const changeLangEN = () => {
    i18n.changeLanguage("en");
    localStorage.setItem("language", "en");
  }

  const changeLangFI = () => {
    i18n.changeLanguage("fi");
    localStorage.setItem("language", "fi");
  }

  const changeLangLV = () => {
    i18n.changeLanguage("lv");
    localStorage.setItem("language", "lv");
  }

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">Uudised avaleht</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to=''>{t('avaleht')}</Nav.Link>
            <Nav.Link as={Link} to="/uudised/">{t('uudised')}</Nav.Link>
            <Nav.Link as={Link} to="/kontakt/">{t('kontakt')}</Nav.Link>
            <Nav.Link as={Link} to="/info/">{t('info')}</Nav.Link>
            <Nav.Link as={Link} to="/lisa-uudis/">{t('Lisa uudis')}</Nav.Link>
            <Nav.Link as={Link} to="/halda-uudised/">{t('Halda uudised')}</Nav.Link>
           
          </Nav>
          <Nav>
            <Nav.Link onClick={changeLangEE}>Eesti</Nav.Link>
            <Nav.Link onClick={changeLangEN}>English</Nav.Link>
            <Nav.Link onClick={changeLangFI}>Suomen</Nav.Link>
            <Nav.Link onClick={changeLangLV}>Latviešu</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;