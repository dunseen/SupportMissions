import React from 'react';
import api from './services/api';

import './App.css';
import logo from './assets/distintivo.svg';

function App() {
  function handleSubmit(e) {
    e.preventDefault();

  }
  return (
    <div className="container">
      <img src={logo} alt="logo" />

      <div className="content">

        <form onSubmit={handleSubmit}>
          <label htmlFor="login">Login *</label>
          <input
            type="text"
            id="login"
            placeholder="Digite seu nome de usuário" />

          <label htmlFor="password">Senha *</label>
          <input
            type="password"
            id="password" />

          <button
            className="btn"
            type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
