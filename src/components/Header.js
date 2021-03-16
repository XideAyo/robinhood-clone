import React, { useState } from 'react'
import {
    Collapse,
    Navbar
} from 'reactstrap'
import {Link} from 'react-router-dom'


const Header = () => {


    const [isOpen, setIsOpen] = useState(false)
    const [courseCollapse, setCourseCollapse] = useState(true)

    const toggle = () => setIsOpen(!isOpen)
    const openDropdown = (e) => {
        e.preventDefault()
        setCourseCollapse(!courseCollapse)
    }

    return (
        <header className="site-header">
            <Navbar expand="lg">
                <div className="container-fluid pl-lg--35 pr-lg--35">
                    <div className="">
                        <div className="brand-logo">
                            <Link to="/">Robinhood</Link>
                        </div>
                    </div>
                    <button
                        className="navbar-toggler"
                        onClick={toggle}
                        aria-expanded={isOpen}
                        type="button"
                    >
                        <i className="fa fa-bars"></i>
                    </button>
                    
                    <Collapse isOpen={isOpen} navbar>
                        <div className="btn-close-off-canvas d-lg-none" onClick={toggle}>
                            <i className="fa fa-times"></i>
                        </div>
                        <div className="">
                            <div className="main-navigation ">
                                <ul className="main-menu">
                                    <li className="menu-item"><Link to="/">Products</Link></li>
                                    <li className="menu-item"><Link to="/">Learn</Link></li>
                                    <li className="menu-item"><Link to="/">Support</Link></li>
                                    <li className="menu-item"><Link to="/">Who we are</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col">
                            <div className="header-btns">
                                <>
                                    <Link to="/login" className="btn btn--transparent">Log in</Link>
                                    <Link to="/signup" className="btn btn--primary">Sign In</Link>
                                </>
                            </div>
                        </div> 
                    </Collapse>
                </div>
            </Navbar>
        </header>
    )
}

export default Header