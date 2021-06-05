import React from 'react'
import Vector from '../img/sidebar/Vector.png';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function Sidebar (props){
    let data = [
        {   Image: props.img,
            Jumlah: props.jumlah,
            Total: props.total,
            Nama: props.nama,
        }
    ]
    return(
        <React.Fragment>
            <nav className="fixed w-1/5 h-full">
            <div>
                <h1 className="text-3xl font-black">Pesanan Saya</h1>
            </div>
            <div style={{background: '#6455C2'}} className="rounded-xl text-white mt-10">
            <p className="pt-4 text-xm pl-5">Muhammad Dimas</p>
            <p className="mt-8 pl-5 text-2xl font-black">Rp. 1.000.000,-</p>
            <p className="pl-5 mt-8 pb-2">72788******98829</p>
            </div>
            <div className="flex justify-between">
            {data.map((dt,i)=>(
                            dt.Jumlah*dt.Total === 0 ? "" :<li key={i} className="flex items-center justify-between w-full h-24 relative">  
                            <img className="rounded-xl w-2/12 h-8 " src={dt.Image} alt={dt.Image} />
                        <div className="flex">
                           {dt.Total}
                        </div>
                        <div>x</div>
                        <div className="font-bold">{props.nama}</div>
                        <div>
                            {dt.Jumlah * dt.Total}
                        </div>
                      </li>
                            
                        ))}
            </div>
            <div className="flex justify-between">
                <div style={{background: '#FFF7ED'}} className="flex rounded-xl pl-3 pt-2 pb-2 pr-2 mt-10 justify-between">
                    <img src={Vector} alt={Vector} />
                </div>
                <p className="mt-12 font-black ml-5">Jl.Bangke no 13</p>
                <p style={{color: '#B2B2B2'}} className="mt-12 ml-16 font-black text-grey">Gratis</p>
            </div>
            <div className="flex justify-between">
                <p className="mt-5 font-black">Total :</p>
                <p className="text-4xl mt-3 font-black">Rp</p>
                <p className="text-4xl mt-3 font-black">{props.jumlah * props.total}</p>
            </div>
            <div className="ml-4 mt-5">
            <button style={{ background: '#FCD561' }} className="text-xl text-white rounded-2xl font-bold px-28 py-3 mr-3">Pesan</button>
            </div>
            </nav>
        </React.Fragment>
    )
}

{/* <header className="h-2/10 w-full pr-5">
                <Pesanan />
            </header>
            <nav className="h-2/10 w-full">
                <List />
            </nav>
            <section className="h-6/10 w-full">
                <Total />
            </section> */}