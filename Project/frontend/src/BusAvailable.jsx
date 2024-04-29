import React, { useState } from 'react';
import axios from 'axios';

const BusAvailable = () => {
    const [source, setSource] = useState('');
    const [destination, setDestination] = useState('');
    const [buses, setBuses] = useState([]);

    const handleSearch = () => {
        axios.post('http://localhost:8081/buses', { source, destination })
            .then(response => {
                setBuses(response.data);
            })
            .catch(error => {
                console.error('Error fetching buses:', error);
            });
    };

    return (
        <div>
            <input type="text" placeholder="Source" value={source} onChange={e => setSource(e.target.value)} />
            <input type="text" placeholder="Destination" value={destination} onChange={e => setDestination(e.target.value)} />
            <button onClick={handleSearch}>Search Buses</button>

            <h2>Buses running between {source} and {destination}:</h2>
            <ul>
                {buses.map((bus, index) => (
                    <li key={index}>{bus.BusNo}</li>
                ))}
            </ul>
        </div>
    );
};

export default BusAvailable;
