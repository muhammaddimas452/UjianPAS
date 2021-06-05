import React from 'react';
import Header from '../header/header';
import Content from '../content';
import Sidebar from '../sidebar';
import {Switch, Route} from 'react-router-dom'

function Layout() {
    const [img,setImg] = React.useState([])
    const [jumlah,setJumlah] = React.useState([])
    const [total,setTotal] = React.useState([])
    const [nama,setNama] = React.useState([])
    const getSemua = (image,jumlahh,totall,namaa)=>{
        setImg(image)
        setJumlah(jumlahh)
        setTotal(totall)
        setNama(namaa)
    }
    return (
        <React.Fragment>
            <div className="h-screen w-screen px-10 font-poppins">
                {/* ini bagian header */}
                <header className="items-center h-1/10 w-full flex">
                    <Header />
                </header>
                <main className="h-9/10 w-full flex pt-10">
                    {/* ini bagian utama */}
                    <section className="w-4/5 h-full">
                        <Content getSemua={getSemua} />
                    </section>
                    {/* ini bagian pesan */}
                    <section className="w-1/5 h-full"><Sidebar img={img} jumlah={jumlah} total={total} nama={nama} /></section>
                </main>
            </div>
        </React.Fragment>
    )
}
export default Layout;