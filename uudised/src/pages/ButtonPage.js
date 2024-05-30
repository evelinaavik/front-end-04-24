import React from 'react';
import Button from 'react-bootstrap/Button';
import './App.css';
import { useTranslation } from 'react-i18next';
import { Link }  from 'react-router-dom'
// import Avaleht from './pages/Avaleht';
// import Kontakt from './pages/Kontakt';
// import Meist from './pages/Meist';
// import Uudised from './pages/Uudised';
import NavigationBar from './components/NavigationBar';

function ButtonPage() {
    const { t, i18n } = useTranslation();
  return (
    <div>
            <NavigationBar></NavigationBar>
        
          <Button as={Link} to="/pages/avaleht/"  variant="secondary">{t('avaleht')}</Button>{' '}
          <Button as={Link} to="/pages/uudised/" variant="secondary">{t('uudised')}</Button>{' '}
          <Button as={Link} to="/pages/kontakt/" variant="secondary">{t('kontakt')}</Button>{' '}
          <Button as={Link} to="/pages/info/" variant="secondary">{t('info')}</Button>{' '}

    </div>
  )
}

export default ButtonPage