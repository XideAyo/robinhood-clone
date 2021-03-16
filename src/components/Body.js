import {Link} from 'react-router-dom'
import Carousel from '../components/Carousel'

const Body = () => {
    return (
        <>
            <section>
                <div className="container-sm bb">
                    <div className="row justify-content-center">
                        <div className="mid-text">
                            <h3>See our <Link to='/' className='link2'>fee schedule</Link> to learn more about course</h3>
                        </div>
                    </div>
                </div>
            </section>
            <section className="">
                <div className="row bb">
                    <div className='col-md-6'>
                        <video controls loop className='video'>
                            <source src='/superbowl.mp4' type="video/mp4"/>
                            <p>This broswer does not support the playing of video</p>
                        </video>
                    </div>
                    <div className='col-md-6'>
                        <div className="mid-2-text container-sm pt-4 pb-4">
                            <h1>
                                We are all investors
                            </h1>
                            <h3>See the campaign</h3>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-3 bb pb-5">
                <div className='container container-sm'>
                    <div className="shares">
                        <h3>Introducing Fractional Shares</h3>
                        <h5>Invest in thousands of stock for as little as $1.</h5>
                        <div className="row justify-content-center pt-5">
                            <div className="col-md-4">
                                <div>
                                    <h4>Invest Any Amount</h4>
                                    <p>Choose how much you want to invest, and we’ll convert from dollars to parts of a whole share</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div>
                                    <h4>Build a Balanced Portfolio</h4>
                                    <p>Customize your portfolio with pieces of different companies and funds to help reduce risk</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div>
                                    <h4>Trade in Real time</h4>
                                    <p>Trades placed during market hours are executed at that time, so you’ll always know the share price.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <Carousel />
            </section>
        </>
    )
}

export default Body