import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './styles.css';


export default function Dashboard() {
    const [spots, setSpots] = useState([])

    useEffect(() => {
        async function loadSpots() {
            const user = localStorage.getItem('user-id');
            const response = await api.get('/dashboard', {
                headers: { 'User-Id': user }
            });

            setSpots(response.data)
        }

        loadSpots()
    }, [])
    return (
        <>
            <ul className="spot-list">
                {spots.map(spot => (
                    <li key={spot._id}>
                        <header style={{ backgroundImage: `url(${spot.thumbnail_url})`}} >
                            {spot.thumbnail_url}
                        </header>
                        {/* <header style={{ backgroundImage: `url(http://localhost:3333/files/1573339837657_ampersand_coworking_chicago%20(1).jpg)` }} /> */}
                        <strong>{spot.company}</strong>
                        <span>{spot.price > 0 ? `R$ ${spot.price} / dia` : `Gratuito`}</span>
                    </li>
                ))}
            </ul>

            <Link to="/new">
                <button className="btn">Cadastrar novo Spot</button>
            </Link>
        </>
    )
}