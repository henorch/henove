import './Home.css'


import Logo  from '../../nobg.png'
import CoreValue from '../../component/core/our_value';
import OurServices from '../../component/ourservice/ourservice';
import Customer from '../../component/customers/customers';
import Footer from '../../component/Footer/footer';
import imgbg from '../../graphic.png'
import Slide from '../../component/slide/slide';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../component/navbar/navbar';

const navbarItem = {
    Logo: Logo,
    menulist: [
        "Home",
        "about",
        "contact",
        "service"
    ]
}
 
 
 function Home(){
    const [ show, setShow] = useState<Boolean>(true)
    const [ display, setDisplay ] = useState<Boolean>(false)
    const [ Loading, setLoading ] = useState<Boolean>(true)

    const toogleMenu = () => {
        setDisplay(!display)
    }
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 5000)
    })

    useEffect(() => {
        setTimeout(() => {
            setShow(false)
        }, 10000)
    })
    if(Loading){
        return(
            <div style={{
                display:'flex',
                height:'100vh',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'yellow'
            }}>
                <img  src={Logo} alt='loading_logo'/>
                <p>Loading please wait...</p>


               </div>
        )
    }
    return(
       <div>
          {show &&   <div style={{
                flex:1,
                justifyContent:'center',
                alignItems:'center',
                marginTop:'120px',
                position:'fixed',
                top: 200,
                backgroundColor:'white',
                zIndex:1
            }}>
                
                <h3>NOTICE !!!</h3>
                if you experience any form of issue on this site kindly notify the admin on
                    <b>07033407608</b>
                    <p>however please note thatt <b>This site is still under construction</b></p></div> }
        <Slide/>
        <CoreValue/>
        <OurServices/>
        <Customer/>
        </div>
    )
}

export default Home