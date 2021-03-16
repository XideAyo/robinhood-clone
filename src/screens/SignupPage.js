import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

const SignupPage = ({history}) => {


    return (
        <section className="">
            <div className="container container-sm">
                <div className="">
                    <div className="">
                        <div className="row justify-content-between">
                            <div className="col-lg-6 reg-area">
                                <div className="p-b-5">
                                    <Link to="/" className="brandlogo">
                                       RobinHood
                                    </Link>
                                </div>
                                <div className="text">
                                    <h4>Make your Money Move</h4>
                                    <h5>Robinhood lets you invest in companies you love, commission-free.</h5>
                                    <p>Please enter your full legal name. Your legal name should match any form of government ID</p>
                                </div>
                                <form method="POST">
                                    <div className="row"> 
                                        <div className="col-md-6 mb-3">
                                            <div className="form-r">
                                                <div className="form-holder">
                                                    <fieldset className="input">
                                                        <input 
                                                            type="text" placeholder="First Name" required  
                                                            className="input"
                                                        />
                                                    </fieldset>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <div className="form-r">
                                                <div className="form-holder">
                                                    <fieldset className="input">
                                                        <input 
                                                            type="text" placeholder="Last Name" required 
                                                            className="input"
                                                        />
                                                    </fieldset>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <div className="form-r">
                                                <div className="form-holder">
                                                    <fieldset className="input">
                                                        <input 
                                                            type="email" placeholder="Email Address" required
                                                            className="input" 
                                                        />
                                                    </fieldset>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <div className="form-r">
                                                <div className="form-holder">
                                                    <fieldset className="input">
                                                        <input 
                                                            className="input"
                                                            type="password" placeholder="Password(min. 10 charcters)" required 
                                                        />
                                                    </fieldset>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="p-b-5">
                                            <button type="submit" className="btn btn-login mb-3">Continue</button>
                                        </div>
                                    </div>
                                </form>
                                <div>
                                    <p>
                                        All investments involve risk, including the possible loss of principal. 
                                        Investors should consider their investment objectives and risks carefully before investing.
                                    </p>
                                    <p>
                                        Commission-free trading means $0 commission trading on self-directed 
                                        individual cash or margin brokerage accounts that trade U.S. 
                                        listed securities via mobile devices or web. Keep in mind, other fees such as trading 
                                        (non-commission) fees, Gold subscription fees, wire transfer fees, and paper statement
                                        fees may apply to your brokerage account. 
                                        Please see Robinhood Financial’s fee schedule to learn more.
                                    </p>
                                    <p>
                                        Securities trading offered through Robinhood Financial LLC. 
                                        Brokerage clearing services offered through Robinhood Securities, LLC. 
                                        Both are subsidiaries of Robinhood Markets, Inc.
                                    </p>
                                    <Link to='/' className="link">
                                        Check the background of Robinhood Financial LLC and Robinhood Securities, LLC on FINRA’s BrokerCheck.
                                    </Link>
                                    <div>
                                        <Link to='/' className="link">
                                            Robinhood Terms & Conditions  Disclosure Library  Contact Us  FAQ
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        
                            <div className="col-lg-5 boxt d-none d-lg-block bg-greyy reg-area">
                                <div className="row">
                                    <div className="col-md-8">
                                        <h5  className="reg-area">Commission-free trading</h5>
                                        <p>
                                            Break free from commission-fees and make unlimited commission-free trades in stocks, funds, and 
                                            options with Robinhood Financial. Other fees may apply. 
                                            View our fee schedule to learn more.
                                        </p>
                                        <h5  className="reg-area">Account Protection</h5>
                                        <p>
                                            Robinhood Financial is a member of SIPC. 
                                            Securities in your account protected up to $500,000. 
                                            For details, please see www.sipc.org.
                                        </p>
                                        <h5  className="reg-area">Stay on top of your portfolio</h5>
                                        <p>
                                            Set up customized news and notifications to stay on top of your 
                                            assets as casually or as relentlessly as you like. 
                                            Controlling the flow of info is up to you.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignupPage