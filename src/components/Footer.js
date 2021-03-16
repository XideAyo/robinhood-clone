import {Link} from 'react-router-dom'

const Footer = () => {
    return (
       <section className='footer-section'>
           <div className="container">
                <div className="">
                    <div className="brand-logo2 pb-5 pt-5">
                        <Link to="/">Robinhood</Link>
                    </div>
                </div> 
                <div className="row">
                    <div className="col-md-5 pt-5">
                        <div className='row j-s-b justify-content-center '>
                            <div className='white-link col-sm-12 pb-4'>
                                <div className=''>
                                    <Link to='/'>
                                        Stocks and Funds
                                    </Link>
                                </div>
                                <div>
                                    <Link to='/'>
                                        Option
                                    </Link>
                                </div>
                                <div>
                                    <Link to='/'>
                                        Gold
                                    </Link>
                                </div>
                                <div>
                                    <Link to='/'>
                                        Cash Management
                                    </Link>
                                </div>
                                <div>
                                    <Link to='/'>
                                        Crypto
                                    </Link>
                                </div>
                            </div>
                            <div className="white-link col-sm-12 pb-4">
                                <div>
                                    <Link to='/'>
                                        Learn
                                    </Link>
                                </div>
                                <div>
                                    <Link to='/'>
                                        Support
                                    </Link>
                                </div>
                                <div>
                                    <Link to='/'>
                                        Snacks
                                    </Link>
                                </div>
                            </div>
                            <div className='white-link col-sm-12 pb-4'>
                                <div>
                                    <Link to='/'>
                                        About us
                                    </Link>
                                </div>
                                <div>
                                    <Link to='/'>
                                        Career
                                    </Link>
                                </div>
                                <div>
                                    <Link to='/'>
                                        Blogs
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-1'></div>
                    <div className="col-md-6">
                        <div>
                            <p className='foot'>The 3-minute newsletter with fresh takes on the financial news you need to start your day.</p>
                            <div className='pb-4'>
                                <div className='row justify-content-center'>
                                    <span className='input1'>
                                        <input  type="email" placeholder="name@email.com" required />
                                    </span>
                                    <Link to='/' className='input2'>Subscribe</Link>
                                </div>
                            </div>
                            <div>
                                <div className="footer-text">
                                    <Link to='/' className='w-t'>
                                        Check the background of the firm on FINRA’s BrokerCheck
                                    </Link>
                                   <div>
                                        <Link to='/'  className='w-t'>
                                            Brokerage Customer Relationship Summary
                                        </Link>
                                   </div>
                                   <div>
                                        <Link to='/' className='w-t'>
                                            Robinhood Terms & Conditions
                                        </Link>
                                   </div>
                                    <div>
                                        <Link to='/' className='w-t'>
                                            Disclosure Library
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to='/' className='w-t'>
                                            Privacy
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='bottom-text'>
                        <p>
                            © 2021 Robinhood. All rights reserved.
                        </p>
                        <p>
                            Robinhood means Robinhood Markets and its in-application and web experiences with its family of wholly owned subsidiaries which includes Robinhood Financial, Robinhood Securities, and Robinhood Crypto.
                        </p>
                        <p>
                            All investments involve risks, including the possible loss of capital.
                        </p>
                        <p>
                            Securities trading is offered to self-directed customers by Robinhood Financial. Robinhood Financial is a member of the Financial Industry Regulatory Authority (FINRA).
                        </p>
                    </div>
                </div>
           </div>
       </section>
    )
}

export default Footer