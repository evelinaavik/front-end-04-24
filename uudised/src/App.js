
import './App.css';
import { Link, Route, Routes } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';
import Avaleht from './pages/Avaleht';
import Kontakt from './pages/Kontakt';
import Meist from './pages/Meist';
import Uudised from './pages/Uudised';
import NavigationBar from './components/NavigationBar';


function App() {
  // const { t, i18n } = useTranslation();

  return (
    <div>
      {/* <NavigationBar></NavigationBar>
        <div>
          <Button as={Link} to="/avaleht/"  variant="secondary">{t('avaleht')}</Button>{' '}
          <Button as={Link} to="/uudised/" variant="secondary">{t('uudised')}</Button>{' '}
          <Button as={Link} to="/kontakt/" variant="secondary">{t('kontakt')}</Button>{' '}
          <Button as={Link} to="/info/" variant="secondary">{t('info')}</Button>{' '}
        </div> */}
     <Routes>
      <Route path='' element={ <Avaleht/>}/>
      <Route path='uudised' element={ <Uudised/>}/>
      <Route path='kontakt' element={ <Kontakt/>}/>
      <Route path='meist' element={ <Meist/>}/>
     </Routes>
    </div>
  );
}

export default App;

  // uudised projektile Bootstrap ja tõlge