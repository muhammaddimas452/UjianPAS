import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom"
import semua from "../img/navbar/semua.jpg"

export default function Nav() {
    const [category, setCategory] = React.useState([])
    const [populer, setPopuler] = React.useState([])

    const getCategory = async() =>{
        try{
            const url = `https://belajar-react.smkmadinatulquran.sch.id/api/category/all`
            const response = await axios.get(url)
            console.log(response.data.data);
            setCategory(response.data.data)
        }
        catch (error){
            console.log(error)
        }
    };
    const getPopuler = async() =>{
        try{
            const url = `https://belajar-react.smkmadinatulquran.sch.id/api/populer/all`
            const response = await axios.get(url)
            console.log(response.data.data);
            setPopuler(response.data.data)
        }
        catch (error){
            console.log(error)
        }
    };

    React.useEffect(() => {
        getCategory();
    }, []);

    React.useEffect(() => {
        getPopuler();
    }, []);

    return (
        <React.Fragment>
            <div className="mt-10 pr-5">
                <div className="flex items-center justify-between">
                    <h1 className="font-bold text-2xl">Kategori</h1>
                    <button style={{ background: '#FB6D3A' }} className="text-xs text-white rounded-2xl font-bold px-4 py-2">Lebih lengkap</button>
                </div>
                <div className="mt-3">
                    <ul className="flex justify-between w-full flex-nowrap overflow-auto">
                    <li  className="h-32 relative w-1/4 mt-3 flex-none m-3"><img className="rounded-xl mt-2 w-full h-32" src={semua} alt={semua}/>
                        <NavLink to=''>
                            <p style={{background:'rgba(1,1,1,0.5)'}} className="absolute mt-2 z-10 rounded-xl h-full flex items-center justify-center top-0 bottom-0 left-0 right-0  text-white font-black">
                                semua
                            </p>
                        </NavLink>
                            </li>
                        {category.map((dt, index) => (
                            <li key={index} className={`flex-none ${category.length === 3 ? 'w-1/4' : 'w-2/10'} h-32 relative m-5`}><img className="rounded-xl w-full h-32" src={dt.img} alt={dt.img} />
                            <NavLink to={`/category/${dt.id}`}>
                                <p style={{ background: "rgba(1,1,1,0.5)" }} 
                                className="absolute z-10 rounded-xl h-full flex items-center justify-center top-0 bottom-0 left-0 right-0 text-white font-black">{dt.name}
                                </p>
                            </NavLink></li>
                        ))}
                    </ul>
                </div>
                
            </div>
        </React.Fragment>
    )
}

{/* <li className="w-64 h-28 relative">
                            <NavLink to="/Semua">
                                <img className="rounded-xl w-64 h-28" src={Semua} alt={Semua} />
                                <p style={{background:'rgba(1,1,1,0.5)'}} className="absolute rounded-xl h-full flex items-center justify-center top-0 bottom-0 left-0 right-0 text-white font-bold">Semua</p>
                            </NavLink>
                        </li>
                        <li className="w-64 h-28 relative">
                            <NavLink to="/Semua">
                                <img className="rounded-xl w-64 h-28" src={Pizza} alt={Pizza} />
                                <p style={{background:'rgba(1,1,1,0.5)'}} className="absolute rounded-xl h-full flex items-center justify-center top-0 bottom-0 left-0 right-0 text-white font-bold">Pizza</p>
                            </NavLink>
                        </li>
                        <li className="w-64 h-28 relative">
                            <NavLink to="/Semua">
                                <img className="rounded-xl w-64 h-28" src={Burger} alt={Burger} />
                                <p style={{background:'rgba(1,1,1,0.5)'}} className="absolute rounded-xl h-full flex items-center justify-center top-0 bottom-0 left-0 right-0 text-white font-bold">Burger</p>
                            </NavLink>
                        </li>
                        <li className="w-64 h-28 relative">
                            <NavLink to="/Semua">
                                <img className="rounded-xl w-64 h-28" src={Juz} alt={Juz} />
                                <p style={{background:'rgba(1,1,1,0.5)'}} className="absolute rounded-xl h-full flex items-center justify-center top-0 bottom-0 left-0 right-0 text-white font-bold">Juz</p>
                            </NavLink>
                        </li> */}

                //         <div className="mt-10 pr-5">
                // <h1 className="font-bold text-2xl">Populer</h1>   
                // </div>
                // <div className="mt-3">
                //     <ul className="flex justify-between flex-wrap w-full overflow-auto">
                //         {populer.map((dt, index) => (
                //             <li key={index} className={`flex-none ${category.length === 3 ? 'w-1/4' : 'w-2/10'} h-32 relative m-10`}><img className="rounded-xl w-full h-32" src={dt.image} alt={dt.image} />
                //             <NavLink to={`/category/${dt.id}`}>
                //                 <div  style={{ background: "white" }}
                //                 className="absolute z-10 items-center justify-start text-xs rounded-xl top-24 left-2 px-2 py-1 text-black font-black">{dt.waktu}
                //                 </div>
                //                 <p className="font-black py-1">{dt.name}</p>
                //                 <div className="flex items-center justify-start">
                //                     <img className="px-2 w-10" src={start} alt={start} />
                //                     <p className="font-black py-1">{dt.rating}</p>
                //                     <p className="font-black py-2 px-5">Rp. {dt.harga}</p>
                //                 </div>
                //             </NavLink></li>
                //         ))}
                //     </ul>
                // </div>