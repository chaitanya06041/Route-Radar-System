import { useEffect, useState } from 'react';
import BusFounded from './BusFounded';
import './Map.css';
import axios from 'axios';
import * as React from 'react';

export default function Map() {
    
    const [mapUrl, setMapUrl] = useState('');
    const [source, setSource] = useState('');
    const [destination, setDestination] = useState('');
    const [buses, setBuses] = useState([]);
    const [clicked,  setClicked] = useState(false);
    const [pmps, setPmps] = useState([]);
    const [bus2, setBus2] = useState([]);
    const handleSearch = (e) => {
        e.preventDefault();
        setClicked(true);
        setBuses([]);
        
        axios.post('http://localhost:8081/buses', { source, destination })
            .then(response => {
                setBuses(response.data);
            })
            .catch(error => {
                console.error('Error fetching buses:', error);
        });

        axios.post('http://localhost:8081/stops', { source, destination })
            .then(response => {
                setPmps(response.data);
                console.log("Buses: ");
                console.log(pmps);
            })
            .catch(error => {
                console.error('Error fetching buses:', error);
        });

    };

    useEffect(() => {
    const randomNumber = Math.random();
    setMapUrl(`https://www.openstreetmap.org/export/embed.html?bbox=73.7175%2C18.4719%2C73.9342%2C18.6039&random=${randomNumber}`);
    }, []);

    return (
        <div className='mapall'>
            <div className='searching'>
                {mapUrl && (
                    <iframe
                        title="map"
                        width="100%"
                        height="100%"
                        frameBorder={0}
                        scrolling="no"
                        marginHeight={0}
                        marginWidth={0}
                        src={mapUrl}
                    ></iframe>
                  )}

              <form onSubmit={handleSearch}>
                  <div className="inputs">
                      <input id="source" type="text" required placeholder="Enter Source" value={source} onChange={e => setSource(e.target.value)}/>
                      <input id="destination" type="text" required placeholder="Enter Destination" value={destination} onChange={e => setDestination(e.target.value)}/>

                      <input id="time" type="time" placeholder="Time" />
                  </div>

                  <div className="btn">
                      <button type="submit" className='submitBtn'>Search</button>
                  </div>
              </form>
            </div>

            <ul className='answers'>
                {(buses.length === 0 && clicked)? (
                    <li style={{color:'red', fontSize:'28px', fontFamily:'Poppins', fontWeight:'500' }}>No Buses Found!</li>
                ) : (
                    buses.map((bus) => { 
                        const srcTime = new Date(`1970-01-01T${bus.SrcTime}`);
                        const destTime = new Date(`1970-01-01T${bus.dstTime}`);
                        const timeDifferenceMillis = destTime - srcTime;
                        const estTimeMinutes = timeDifferenceMillis / (1000 * 60);
                        return (
                            <li key={bus.BusNo}>
                                <BusFounded 
                                    busNo={bus.BusNo} 
                                    busName={`${bus.Source} to ${bus.Destination}`}  
                                    source={bus.Source} 
                                    destination={bus.Destination} 
                                    sourceTime={bus.SrcTime} 
                                    estTime={`${estTimeMinutes} minutes`} 
                                    destTime={bus.dstTime} 
                                    fare={`${bus.Fare} Rs`} 
                                />
                            </li>
                        );
                    })
                )}
            </ul>


        </div>
  );
}
