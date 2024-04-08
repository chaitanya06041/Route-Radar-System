import BusTab from './BusTab';
import Map from './Map'
import Navbar from './Navbar'
import BusAvailable from './BusAvailable';

export default function App(){
  return(

    <>
    <Navbar></Navbar>
    <Map></Map>
    {/* <BusTab></BusTab> */}
    <BusAvailable></BusAvailable>
  </>
  ) ;
}