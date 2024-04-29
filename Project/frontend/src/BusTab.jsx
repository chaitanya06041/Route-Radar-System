import BusFounded from "./BusFounded";
import './BusTab.css'

import React, { useState } from 'react';
import axios from 'axios';


export default function BusTab(){
    const [source, setSource] = useState('');
    const [destination, setDestination] = useState('');
    const [buses, setBuses] = useState([]);

    return(
        <div className="answers">
            <BusFounded busNo="10" busName="Katraj to Swargate" source="Swargate" destination="Katraj" sourceTime="10" destTime="12" fare="10"></BusFounded>
            <BusFounded busNo="10" busName="Katraj to Swargate" source="Swargate" destination="Katraj" sourceTime="10" destTime="12" fare="10"></BusFounded>
        </div>
    );
}