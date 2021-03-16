import React, {useEffect} from 'react'
import Header from '../components/Header'
import Jumbotron from '../components/Jumbotron'
import Body from '../components/Body'
import Footer from '../components/Footer'


const LandingPage = () => {

    useEffect(() => {
        document.body.classList.remove("signup-page")
    })
    
    return (
        <>
            <div className="main">
                <Header />
                <Jumbotron />
                <Body />
                <Footer />
            </div>
            
        </>
    )
}

export default LandingPage