import React from 'react'
import axios from "axios";
import start from '../img/navbar/start.png';
import {NavLink,} from 'react-router-dom'

export default function Populer (props) {
    const [populer, setPopuler] = React.useState([])
   
    const getPopuler = async() =>{
        try{
            const url = `https://belajar-react.smkmadinatulquran.sch.id/api/populer/100`
            const response = await axios.get(url)
            console.log(response.data.data);
            setPopuler(response.data.data)
        }
        catch (error){
            console.log(error)
        }
    };

    React.useEffect(() => {
        getPopuler();
    }, []);

    return(
        <React.Fragment>
    <           div className="mt-24 pr-5">
                <h1 className="font-bold text-2xl">Populer</h1>   
                </div>
                <div className="mt-3">
                    <ul className="flex justify-between flex-wrap w-full overflow-auto">
                        {populer.map((dt, index) => (
                            <li key={index} className={`flex-none ${populer.length === 3 ? 'w-1/4' : 'w-2/10'} h-32 relative m-10`}><img className="rounded-xl w-full h-32" src={dt.image} alt={dt.image} />
                            <NavLink to={`/category/${dt.id}`}>
                                <div  style={{ background: "white" }}
                                className="absolute z-10 items-center justify-start text-xs rounded-xl top-24 left-2 px-2 py-1 text-black font-black">{dt.waktu}
                                </div>
                                <p className="font-black py-1">{dt.name}</p>
                                <div className="flex items-center justify-start">
                                    <img className="px-2 w-10" src={start} alt={start} />
                                    <p className="font-black py-1">{dt.rating}</p>
                                    <p className="font-black py-2 px-5">Rp. {dt.harga}</p>
                                </div>
                            </NavLink></li>
                        ))}
                    </ul>
                </div>
        </React.Fragment>
    )
}