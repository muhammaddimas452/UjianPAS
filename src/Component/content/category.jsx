import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import axios from "axios";
import start from '../img/navbar/start.png';
import Popup from 'reactjs-popup';


export default function Category(props) {
    const [populer, setPopuler] = React.useState([])
    const [img,setImg] = React.useState([])
    const [jumlah,setJumlah] = React.useState([])
    const [total,setTotal] = React.useState([])
    const [nama,setNama] = React.useState([])
    const [angka, setAngka] = React.useState(0)
    props.getSemua(img,jumlah,total,nama)
    let {id} = useParams()

    const getPopuler = async (id) => {
        try {
            const url = `https://belajar-react.smkmadinatulquran.sch.id/api/populer/8?page=${id}`
            const response = await axios.get(url)
            console.log(response.data.data);
            setPopuler(response.data.data)
        }
        catch (error) {
            console.log(error)
        }
    };

    React.useEffect(()=>{
        getPopuler(id)
    },[id])
        return (
            <React.Fragment>
                <div className="mt-24 pr-5">
                    <h1 className="font-bold text-2xl">Populer</h1>
                </div>
                <div className="mt-3">
                    <ul className="flex justify-between flex-wrap w-full overflow-auto">
                        {populer.map((dt, index) => (
                            <li key={index} className={`flex-none ${populer.length === 3 ? 'w-1/4' : 'w-2/10'} h-32 relative m-10`}>
                                <Popup trigger={
                                    <img className={"rounded-xl w-full h-32"} src={dt.image} alt={dt.name} />
                                } modal>
                                    {close => (
                                        <div className="modal rounded-xl bg-white shadow-lg p-5 w-full font-poppins">
                                            <img className='w-full h-64 rounded-xl' src={dt.image} alt={dt.name} />
                                            <div className="flex justify-between font-bold mt-5">
                                                <h1 className="text-xl font-black">{dt.name}</h1>
                                                <h1 className="text-xl font-black">Rp. {dt.harga}</h1>
                                            </div>
                                            <div className="flex mt-2">
                                                <p className="font-black mt-2">{dt.waktu}</p>
                                                <img className="py-2 w-5 ml-5" src={start} alt={start} />
                                                <p className="font-black py-1 ml-5 mt-1">{dt.rating}</p>
                                            </div>
                                            <div className="mt-5 text-sm font-black">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere sollicitudin ullamcorper vestibulum sollicitudin ultricies sed odio. Dictum habitasse ornare posuere nulla dignissim. Dictum at vivamus pellentesque velit tortor. Eu nibh eros adipiscing.
                                            </div>
                                            <div className="flex font-bold mt-10">
                                                	<p className="text-xl ml-5 mt-2">Stok</p>
                                                    <p className="text-xl ml-5 mt-2">:</p>
                                                    <p className="text-xl ml-5 mt-2">{dt.jumlah}</p>
                                                <div className="flex bg-white rounded-lg pl-72">
                                                    <button disabled={dt.pesan == 0} onClick={() => {setAngka (dt.pesan--)
                                                        dt.jumlah++}} style={{ background: "orange" }} className='text-xl w-9 h-10 rounded-lg font-black'>-</button>
                                                    <p className="mt-2 m-3">{dt.pesan}</p>
                                                    <button disabled={dt.jumlah == 0} onClick={() => {setAngka (dt.pesan++)
                                                        dt.jumlah--}} style={{ background: "orange" }} className='text-xl w-9 h-10 rounded-lg font-black'>+</button>
                                                    <button onClick={()=>{
                                                       setImg(dt.image)
                                                       setJumlah(dt.harga)
                                                       setTotal(dt.pesan)
                                                       setNama(dt.name)
                                                   }} className="flex bg-yellow-300 font-bold p-2 rounded-xl w-50 h-10 ml-2">Tambah Pesanan</button>
                                                </div>
                                            </div>
                                            </div>
                                    )}
                                </Popup>
                                <div style={{ background: "white" }}
                                    className="absolute z-10 items-center justify-start text-xs rounded-xl top-24 left-2 px-2 py-1 text-black font-black">{dt.waktu}
                                </div>
                                <p className="font-black py-1">{dt.name}</p>
                                <div className="flex items-center justify-start">
                                    <img className="px-2 w-10" src={start} alt={start} />
                                    <p className="font-black py-1">{dt.rating}</p>
                                    <p className="font-black py-2 px-5">Rp. {dt.harga}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </React.Fragment>
        )
    }
      
    
    

