import React, { useContext,useState } from 'react'
import { assets } from '../../assets/assets';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';


const Navbar = ({ setShowLogin }) => {
    const [menu, setmenu] = useState('home');

    const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

    const navigate = useNavigate();

    const logout = () => {
          localStorage.removeItem("token");
          setToken("");
          navigate("/")

    }


    return (
        <>
            <div className="navbar">
                <Link to='/'><img src={assets.logo} alt="" /></Link>
                <div className="navbar-menu">
                    <li onClick={() => setmenu('home')} className={menu === 'home' ? 'active' : ''}>Home</li>
                    <li onClick={() => setmenu('menu')} className={menu === 'menu' ? 'active' : ''} >menu</li>
                    <li onClick={() => setmenu('mobile-app')} className={menu === 'mobile-app' ? 'active' : ''}>mobile-app</li>
                    <li onClick={() => setmenu('contact-us')} className={menu === 'contact-us' ? 'active' : ''}>contact-us</li>
                </div>


                <div className="navbar-right">
                    <img src={assets.search_icon} alt="" />
                    <div className='navbar-search-icon'>
                        <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
                        <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
                    </div>
                    {!token ? <button onClick={() => setShowLogin(true)}>Sign in</button> :
                        <div className='navbar-profile'>
                            <img src={assets.profile_img} alt="" />
                            <ul className='nav-profile-dropdown'>
                                <li onClick={() => navigate('/myorders')} > <img src={assets.bag_icon} alt="" /><p>Orders</p></li>
                                <hr />
                                <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
                            </ul>
                        </div>
                    }

                </div>
            </div>
        </>
    )
}

export default Navbar
