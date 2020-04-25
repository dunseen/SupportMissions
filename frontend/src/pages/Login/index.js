import React, { useState } from 'react';
import api from '../../services/api';
import { toast } from 'react-toastify';
import logo from '../../assets/distintivo.svg';

import './styles.css';


export default function Login({ history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post('/auth', { email, password })
      .catch(() => {
        toast.error('Falha na autenticação, verifique seus dados!');

      });
    if (response === undefined) {
      alert('Falha no login, verifique seus dados.')
    } else if (await (response.data.token !== '')) {
      const { _id } = response.data.user;
      await localStorage.setItem('user_id', _id);
      await localStorage.setItem('userToken', response.data.token);
      api.defaults.headers.common.Authorization = await response.data.token;
      history.push('/home');

    }


  }

  return (
    <div className="container">
      <img src={logo} alt="logo" />

      <div className="content">


        <form onSubmit={handleSubmit}>
          <label htmlFor="login">Login *</label>
          <input
            type="email"
            id="login"
            placeholder="Digite seu nome de usuário"
            value={email}
            onChange={e => setEmail(e.target.value)} />

          <label htmlFor="password">Senha *</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)} />

          <button
            className="btn"
            type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}