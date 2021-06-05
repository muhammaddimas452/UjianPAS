import React from 'react'
import Banner from './banner'
import Nav from './nav'
import Category from './category'
import Populer from './populer'
import {Switch, Route} from 'react-router-dom'

export default function Content (props){
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
     props.getSemua(img,jumlah,total,nama)
    return(
        <React.Fragment>
            <header className="h-2/10 w-full pr-5">
                <Banner />
            </header>
            <nav className="h-2/10 w-full">
                <Nav />
            </nav>
            <section className="h-6/10 w-full">
                <Switch>
                    <Route path={`/category/:id`}>
                        <Category getSemua={getSemua}/>
                    </Route>
                    <Route path="/">
                        <Populer getSemua={getSemua} />
                    </Route>
                </Switch>
            </section>
        </React.Fragment>
    )
}