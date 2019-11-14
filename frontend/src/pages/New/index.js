import React, { useState, useMemo } from 'react';
import camera from '../../assets/camera.svg';
import api from '../../services/api';
import './styles.css';

export default function New() {
    const [company, setCompany] = useState('')
    const [techs, setTechs] = useState('')
    const [price, setPrice] = useState('')
    const [thumb, setThumb] = useState(null)

    const preview = useMemo(() => {
        return thumb ? URL.createObjectURL(thumb) : null;
    }, [thumb])

    async function handleSubmit(ev) {
        ev.preventDefault();

        const user = localStorage.getItem('user-id');
        
        const data = new FormData();
        data.append('thumbnail', thumb);
        data.append('company', company);
        data.append('price', price);
        data.append('techs', techs);

        const resp = await api.post('/spots', data, {
            headers: { 'User-Id': user }
        });

        if (resp.status !== 200) {
            alert('Não foi possível cadastrar spot')
        } else {
            // TODO descobrir porq isso nao funciona
            window.location.href = '/dashboard';
            // this.props.history.push('/dashboard');

            // eslint-disable-next-line no-restricted-globals
            // history.push('/dashboard');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label id="thumbnail" 
            style={{ backgroundImage: `url(${preview})`}}
            className={thumb ? 'has-thumbnail' : ''}
            >
                <input type="file" onChange={ev => setThumb(ev.target.files[0])} />
                <img src={camera} alt="Upload de imagem" />
            </label>

            <label htmlFor="company">Empresa *</label>
            <input
                id="company"
                type="text"
                placeholder="Sua empresa"
                value={company}
                onChange={ev => setCompany(ev.target.value)}
            />

            <label htmlFor="techs">
                Tecnologias *
                <br /><small>(separadas por vírgula)</small>
            </label>
            <input
                id="techs"
                type="text"
                placeholder="Quais tecnologias usam?"
                value={techs}
                onChange={ev => setTechs(ev.target.value)}
            />

            <label htmlFor="price">
                Valor da diária
                <br /><small>(em branco para GRATUITO)</small>
            </label>
            <input
                id="price"
                type="text"
                placeholder="Valor cobrado por dia"
                value={price}
                onChange={ev => setPrice(ev.target.value)}
            />
            <button type="submit" className="btn">Cadastrar</button>

        </form>
    )
}