import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import logo from '../../assets/pmpa.png';

import api from '../../services/api';
import './styles.css';


export default function Home({ history }) {
  const [missions, setMissions] = useState([]);
  const user_name = localStorage.getItem('user_name');

  useEffect(() => {
    async function loadMissions() {
      const user_id = localStorage.getItem('user_id');
      const response = await api.get('/missions', {
        headers: { user_id }
      });
      console.log(response.data)

      setMissions(response.data);
    }
    loadMissions();

  }, [])
  function handleLogout() {
    localStorage.clear()
    history.push('/');
  }

  return (
    <div className="missions-container">
      <header>
        <img src={logo} alt="Be The Hero" />
        <span>Usuário: {user_name}</span>

        <Link className="btn" to="/register">Cadastrar Missão</Link>
        <Link className="btn" to="/register">Cadastrar Usuário</Link>

        <button
          onClick={handleLogout}
          type="button">
          <FiPower size={18}
            color="#E02041"></FiPower>
        </button>
      </header>
      <h1>Missões em Aberto</h1>
      <ul className="missions-list">
        {missions.map(mission => (
          <li key={mission._id}>
            <strong>Seção: {mission.session}</strong><br />
            <p>Solicitante: {mission.requester}</p><br />
            <p>Problema: {mission.reason}</p><br />
            <p>Data: {mission.date}</p><br />

          </li>

        ))}
      </ul>
    </div>

  )
}