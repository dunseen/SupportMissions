import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import logo from '../../assets/pmpa.png';

import api from '../../services/api';
import './styles.css';


export default function Home({ history }) {
  const [missions, setMissions] = useState([]);
  const user_name = localStorage.getItem('user_name');

  const user_id = localStorage.getItem('user_id');


  useEffect(() => {
    async function loadMissions() {
      const response = await api.get('/missions', {
        headers: { user_id }
      });



      setMissions(response.data);
    }
    loadMissions();
  }, [missions, user_id])


  async function handleDeleteMission(id) {

    try {
      await localStorage.setItem('missions_id', JSON.stringify(missions.map(mission => (mission._id))));
      await api.delete(`missions/${id}`)
      setMissions(missions.filter(missions => missions._id !== id));
    } catch (err) {
      alert('Erro ao deletar')


    }
  }
  function handlePosition() {

    alert("Passou")
  }

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
      <ul className="missions-list" id="missions-open">
        {missions.map(mission => (
          <li key={mission._id}>
            <strong>Seção: {mission.session}</strong><br />
            <p>Solicitante: {mission.requester}</p><br />
            <p>Problema: {mission.reason}</p><br />
            <p>Data: {mission.date}</p><br />
            <button
              type="button"
              className="btn"
              onClick={() => handlePosition()}>Selecionar</button>
            <button
              onClick={() => handleDeleteMission(mission._id)}
              type="button">
              <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>
            </button>
          </li>

        ))}
      </ul>
      <h1 id="mission-title">Missões em Andamento</h1>
      <ul className="missions-list" id="missions-incourse">
        <li>
          <strong>Seção: Estático</strong><br />
          <p>Solicitante: Estático</p><br />
          <p>Problema: Estático</p><br />
          <p>Data: Estático</p><br />
          <button
            onClick={() => handleDeleteMission()}
            type="button">
            <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>
          </button>
        </li>
      </ul>
    </div>

  )
}