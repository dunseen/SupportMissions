import React, { useState } from 'react';
import api from '../../services/api';
import { toast } from 'react-toastify';
import './style.css';

export default function Register({ history }) {
  const [session, setSession] = useState('');
  const [requester, setRequester] = useState('');
  const [reason, setReason] = useState('');
  const [date, setDate] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    const user_id = localStorage.getItem('user_id');

    if (
      session !== '' ||
      requester !== '' ||
      reason !== '' ||
      date !== ''
    ) {
      await api.post('/missions', {
        session,
        requester,
        reason,
        date
      }, {
        headers: { user_id }
      })

      history.push('/home')
    } else {
      alert('Falha ao registrar, preencha todos os campos !');
      toast.error('Falha ao registrar, preencha todos os campos!');

    }

  }
  return (
    <div className="container-register">
      <div className="content-register">
        <section>
          <h1>Cadastro</h1>
        </section>
        <form onSubmit={handleSubmit}>
          <label htmlFor="session">SEÇÃO *</label>
          <input
            id="session_id"
            placeholder="Local de Atendimento"
            value={session}
            onChange={e => setSession(e.target.value)}
          />
          <label htmlFor="requester">SOLICITANTE *</label>
          <input
            id="requester_id"
            placeholder="Nome do solicitante"
            value={requester}
            onChange={e => setRequester(e.target.value)}
          />
          <label htmlFor="reason">MOTIVO *</label>
          <input
            id="reason_id"
            placeholder="Motivo da solicitação"
            value={reason}
            onChange={e => setReason(e.target.value)}
          />
          <label htmlFor="date">DATA *</label>
          <input
            id="date_id"
            placeholder="Data do Atendimento"
            value={date}
            onChange={e => setDate(e.target.value)}
          />

          <button type="submit" className="btn">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}