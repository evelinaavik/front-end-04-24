
import './App.css';
import { Link, Route, Routes } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';
import Avaleht from './pages/Avaleht';
import Kontakt from './pages/Kontakt';
import Meist from './pages/Meist';
import Uudised from './pages/Uudised';
import NavigationBar from './components/NavigationBar';
import LisaUudis from './pages/LisaUudis';
import HaldaUudised from './pages/HaldaUudised';
import YksUudis from './pages/YksUudis';
import MuudaUudis from './pages/MuudaUudis';


function App() {
    const { t } = useTranslation();

  return (
    <div>
      <NavigationBar></NavigationBar>
        <div>
          <Button as={Link} to="/avaleht/"  variant="secondary">{t('avaleht')}</Button>{' '}
          <Button as={Link} to="/uudised/" variant="secondary">{t('uudised')}</Button>{' '}
          <Button as={Link} to="/kontakt/" variant="secondary">{t('kontakt')}</Button>{' '}
          <Button as={Link} to="/info/" variant="secondary">{t('info')}</Button>{' '}
          <Button as={Link} to="/lisa-uudis/" variant="secondary">{t('Lisa uudis')}</Button>{' '}
          <Button as={Link} to="/halda-uudised/" variant="secondary">{t('Halda uudised')}</Button>{' '}
        </div>
      <Routes>
        <Route path='' element={ <Avaleht/>}/>
        <Route path='uudised' element={ <Uudised/>}/>
        <Route path='kontakt' element={ <Kontakt/>}/>
        <Route path='meist' element={ <Meist/>}/>
        <Route path='lisa-uudis' element={ <LisaUudis/>}/>
        <Route path='halda-uudised' element={ <HaldaUudised/>}/>
        <Route path='yks-uudis/:index' element={ <YksUudis/>}/>
        <Route path='muuda/:index' element={ <MuudaUudis/>}/>
      </Routes>
    </div>
  );
}

export default App;

  // uudised projektile Bootstrap ja tõlge