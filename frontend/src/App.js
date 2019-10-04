import React, { useState } from 'react';
import api from './services/api';
import './App.css';

import logo from './assets/logo.svg';

function App() {
  // TODO remover valor padrão do email
  const [email, setEmail] = useState('test@email.com');

  async function handleSubmit(ev) {
    ev.preventDefault();
    const resp = await api.post('/sessions', { email });
    const { _id } = resp.data

    if(resp.status !== 200) {
      alert('Não foi possível efetuar login')
    } else {
      localStorage.setItem('user-id', _id)
    }
  }

  return (
    <div className="container">
      <img src={logo} alt="AirCnC" />
      <div className="content">
        <p>Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email (*)</label>
          <input
            id="email"
            type="email"
            value={email}
            placeholder="Seu melhor email"
            onChange={ev => setEmail(ev.target.value)} />
          <button className="btn" type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
