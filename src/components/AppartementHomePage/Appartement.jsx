import React, { useState, useEffect } from 'react';
import "./Appartement.css";
import { Link } from 'react-router-dom';

function Appartement() {

    const [appartements, setAppartements] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch("/data.json");
                const data = await response.json();
                setAppartements(data);
            } catch (error) { console.error(error) }
        };

        fetchData();
    }, []);

    return (
        <div className='container_appartement'>
            {appartements.map((appartement) => (
                <Link key={appartement.id} to={`/AppartementDescription/${appartement.id}`}>
                    <div className='carte_image'>
                        <div className="gradient-overlay"></div>
                        <img src={appartement.cover} alt={appartement.description} />
                        <div className='carte_texte'>{appartement.title}</div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Appartement;