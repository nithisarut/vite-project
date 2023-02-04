import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../app/store/configureStore';
import { fetchTrip } from '../app/store/tripSlice';

function Trip() {
    const dispatch = useAppDispatch();
    const { tripsLoaded, trip } = useAppSelector((state) => state.trip);
    console.log(trip);
    useEffect(() => {
        if (!tripsLoaded) dispatch(fetchTrip());
    }, [tripsLoaded, dispatch]);
    return (
        <React.Fragment>
            <section className="section-tours" id="section-tours">
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                        ทัวร์ทั้งหมด
                    </h2>
                </div>
     <div className="row">
    {trip?.data.map((trip) => {
        return(
            
                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front">
                               <img src={trip.imageTrip}
                                style={{ height: "200px" }}
                                alt=""/>
                                <h4 className="card__heading">
                                    <span className="card__heading-span card__heading-span--1">{trip.tripName}</span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>3 day tours</li>
                                        <li>จำนวน {trip.amount} people</li>
                                        <li>2 tour guides</li>
                                        <li>Sleep in cozy hotels</li>
                                        <li>Difficulty: easy</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-1">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <p className="card__price-only">ราคา</p>
                                        <p className="card__price-value">{trip.price} THB</p>
                                    </div>
                                    <a href="#popup" className="btn btn--white">Book now!</a>
                                </div>
                            </div>
                        </div>
                        <div className="popup" id="popup">
                <div className="popup__content">
                    <div className="popup__left">
                        <img src="src/img/nat-8.jpg" alt="Tour photo" className="popup__img" />
                        <img src="src/img/nat-9.jpg" alt="Tour photo" className="popup__img" />
                    </div>
                    <div className="popup__right">
                        <a href="#section-tours" className="popup__close">&times;</a>
                        <h2 className="heading-secondary u-margin-bottom-small">Start booking now</h2>
                        <h3 className="heading-tertiary u-margin-bottom-small">Important &ndash; Please read these terms before booking</h3>
                        <p className="popup__text">
                            {trip.detail}
                        </p>
                        <a href="#" className="btn btn--green">Book now</a>
                    </div>
                </div>
            </div>
                    </div>
        )
    })

    }
     </div>
                <div className="row">
                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front">
                                <div className="card__picture card__picture--1">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">
                                    <span className="card__heading-span card__heading-span--1">The Sea Explorer</span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>3 day tours</li>
                                        <li>Up to 30 people</li>
                                        <li>2 tour guides</li>
                                        <li>Sleep in cozy hotels</li>
                                        <li>Difficulty: easy</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-1">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <p className="card__price-only">Only</p>
                                        <p className="card__price-value">$297</p>
                                    </div>
                                    <a href="#popup" className="btn btn--white">Book now!</a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front">
                                <div className="card__picture card__picture--2">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">
                                    <span className="card__heading-span card__heading-span--2">The Forest Hiker</span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>7 day tours</li>
                                        <li>Up to 40 people</li>
                                        <li>6 tour guides</li>
                                        <li>Sleep in provided tents</li>
                                        <li>Difficulty: medium</li>
                                    </ul>
                                </div>

                            </div>
                            <div className="card__side card__side--back card__side--back-2">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <p className="card__price-only">Only</p>
                                        <p className="card__price-value">$497</p>
                                    </div>
                                    <a href="#popup" className="btn btn--white">Book now!</a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front">
                                <div className="card__picture card__picture--3">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">
                                    <span className="card__heading-span card__heading-span--3">The Snow Adventurer</span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>5 day tours</li>
                                        <li>Up to 15 people</li>
                                        <li>3 tour guides</li>
                                        <li>Sleep in provided tents</li>
                                        <li>Difficulty: hard</li>
                                    </ul>
                                </div>




                            </div>
                            <div className="card__side card__side--back card__side--back-3">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <p className="card__price-only">Only</p>
                                        <p className="card__price-value">$897</p>
                                    </div>
                                    <a href="#popup" className="btn btn--white">Book now!</a>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>


    

                <div className="u-center-text u-margin-top-huge">
                    <a href="#" className="btn btn--green">Discover all tours</a>
                </div>
            </section>

        

            <footer className="footer">
                <div className="footer__logo-box" />

                <picture className="footer__logo">
                    <source srcSet="src/img/logo-green-small-1x.png 1x, img/logo-green-small-2x.png 2x"
                        media="(max-width: 37.5em)" />
                    {/* <img srcSet="src/img/logo-green-1x.png 1x, src/img/logo-green-2x.png 2x" alt="Full logo" src="src/img/logo-green-2x.png"/> */}
                </picture>

                <div className="row">
                    <div className="col-1-of-2">
                        <div className="footer__navigation">
                            <ul className="footer__list">
                                <li className="footer__item"><a href="#" className="footer__link">Company</a></li>
                                <li className="footer__item"><a href="#" className="footer__link">Contact us</a></li>
                                <li className="footer__item"><a href="#" className="footer__link">Carrers</a></li>
                                <li className="footer__item"><a href="#" className="footer__link">Privacy policy</a></li>
                                <li className="footer__item"><a href="#" className="footer__link">Terms</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-1-of-2">
                        <p className="footer__copyright">
                            Built by <a href="#" className="footer__link">Jonas Schmedtmann</a> for his online course <a href="#" className="footer__link">Advanced CSS and Sass</a>.
                            Copyright &copy; by Jonas Schmedtmann. You are 100% allowed to use this webpage for both personal
                            and commercial use, but NOT to claim it as your own design. A credit to the original author, Jonas
                            Schmedtmann, is of course highly appreciated!
                        </p>
                    </div>
                </div>
            </footer>
        </React.Fragment>




    )
}

export default Trip