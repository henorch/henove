import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Logo  from '../../nobg.png'
import './navbar.css'



function Navbar(){

    const [ show, setShow] = useState<Boolean>(true)
    const [ display, setDisplay ] = useState<Boolean>(false)

    const toogleMenu = () => {
        setDisplay(!display)
    }
   

    useEffect(() => {
        setTimeout(() => {
            setShow(false)
        }, 10000)
    })
    
    return(
       
        <div className="navcontainer">
       {display &&  <div className="mobileMenu">
                <Link to='/'>Home</Link>
                 <Link to='/about'>Our Service</Link>
                <a href='home'>About us</a>
                <a href='home'>Mission</a>
               
        </div>}
            <div className='navbar'>             
            <img className='logostyle' src={Logo} alt='loading_logo'/>
            <div className='menu-item'>
                <Link to='/'>Home</Link>
                <Link to='/about'>Our Service</Link>
                <a href='home'>About us</a>
                <a href='home'>Mission</a>
            </div>
            <h4  style={{
                width:'60px',
                height:'60px',
                borderRadius: '50%',
                backgroundColor:'blue'
            }} onClick={toogleMenu}>MENU</h4>
            </div>
        </div>
        )
}

export default Navbar