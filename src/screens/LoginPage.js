import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

const LoginPage = ({history}) => {


    return (
        <section className="reg-section">
            <div className="container-sm">
                <div className="">
                    <div className="">
                        <div className="row">
                            <div className="col-md-6 d-none d-md-block">
                                <div className="middle">
                                    <img src="/login-image.jpg" alt="Reg" className="img-fluid login-img" />
                                </div>
                            </div>
                            <div className="col-md-5 reg-area">
                                <div className="">
                                    <Link to="/" className="brandlogo">
                                        Welcome to RobinHood
                                    </Link>
                                </div>
                                <form method="POST">
                                    <div className="form-r mb-3">
                                        <div className="form-holder">
                                            <label>Email or username</label>
                                            <fieldset  className="border">
                                                <input 
                                                    type="email" placeholder="" required 
                                                />
                                            </fieldset>
                                        </div>
                                    </div>
                                    <div className="form-r mb-3">
                                        <div className="form-holder">
                                            <label>Password</label>
                                            <fieldset>
                                                <input 
                                                    type="password" placeholder="" required 
                                                />
                                            </fieldset>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="mt-3 p-b-5">
                                            <Link to="/sign-up" className="link">Forgot your username or password?</Link>
                                        </p>
                                        <button type="submit" className="btn btn-login mb-3">Sign In</button>
                                        
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginPage