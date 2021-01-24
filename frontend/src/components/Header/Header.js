import React from 'react';
import { useHistory } from 'react-router-dom';
import HeaderLogo from '../../images/header-logo.png';
import './header-style.css';

export default function Header() {

  const history = useHistory();

  async function backToHome() {
    setTimeout(() =>{
      history.push('/')
    }, 300)
  }

  return (
    <>
      <header className="header-container">
        <nav className="nav-header">
          <a onClick={() => backToHome()}>
            <img src={HeaderLogo} alt="Dashfy Network Logo"/>
            <span>Dashfy Network</span>
          </a>
        </nav>
      </header>

      <div className="separator"></div>
    </>
  )
}