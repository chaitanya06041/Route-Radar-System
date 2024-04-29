import './BusFounded.css';

export default function BusFounded({busNo, busName, source, destination, sourceTime,estTime, destTime, fare}){
    let style = {fontWeight : 700};
    let style2 = {fontWeight : 600};
    return(
        <div className='bus-founded'>
            <div className="busInfo">
                <label style={style}>Bus Number: {busNo}</label>
                <label style={style2}>{busName}</label>
            </div>
            <div className="busTimes">
                <div className="srcInfo">
                    <label style={style}>{source}</label>
                    <label>{sourceTime}</label>
                </div>
                <div className="wline"></div>
                <div className="estTime">
                    <label style={style}>{estTime}</label>
                </div>
                <div className="wline"></div>
                <div className="dstInfo">
                    <label style={style}>{destination}</label>
                    <label>{destTime}</label>
                </div>
            </div>
            <label style={style}>{fare}</label>
        </div>
    );
}