import React from 'react';
import logo from '../img/header/logo.png';
import box from '../img/header/box.png';
import love from '../img/header/love.png';
import circle from '../img/header/circle.png';
import profile from '../img/header/profile.png';

export default function Header() {
    return (
        <React.Fragment>
            <div className="fixed items-center h-1/10 w-full flex z-20 bg-white">
            <section className="w-4/5 flex">
                <div className="w-1/3">
                    <img src={logo} alt={logo} />
                </div>
                <div className="w-2/3 relative">
                    <svg className="w-6 h-6 absolute top-3 left-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    <input type="text" placeholder="Cari makan Bang" className="w-4/6 text-lg bg-gray-100 rounded-2xl pl-10 py-3" />
                </div>
            </section>
            <section style={{background: 'rgba(252, 252, 252, 0.9)'}} className="w-1/5 flex pr-16 mr-10 items-center justify-between">
                <div className="w-8"><img src={box} alt={box} /></div>
                <div className="w-8"><img src={love} alt={love} /></div>
                <div className="flex justify-center"><img src={circle} alt={circle}   /><p className="absolute top-6 text-xl font-black">3</p></div>
                <div className="w-8"><img src={profile} alt={profile} /></div>
            </section>
            </div>
        </React.Fragment>
    )
}