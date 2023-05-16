import { Link } from "react-router-dom"


export const Home = () => {
    return (

        <section className="slider_section">
            <div className="slider_container">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    {/* <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active">
                            01
                        </li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1">
                            02
                        </li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2">
                            03
                        </li>
                    </ol> */}
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-6 px-0">
                                        <div className="img-box">
                                            <img src="images/home-plan.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="detail-box">
                                            <h1>
                                                QPro
                                                <br/>
                                                Engineering
                                            </h1>
                                            <h2>
                                                -Проектиране на сгради и съоръжения <br />
                                                -Конструктивни становища <br />
                                                -Обследване на строителни конструкции <br />                                                                                              
                                            </h2>
                                            <Link to="/contacts">
                                                Свържете се с нас
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="carousel-item">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-6 px-0">
                                        <div className="img-box">
                                            <img src="images/slider-img.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="detail-box">
                                            <h1>
                                                QPro
                                                <br />
                                                Engineering
                                            </h1>
                                            <h2>
                                                Консултации
                                            </h2>
                                            <Link to="/contacts">
                                                Свържете се с нас
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {/* <div className="carousel-item">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-6 px-0">
                                        <div className="img-box">
                                            <img src="images/slider-img.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="detail-box">
                                            <h1>
                                            QPro
                                                <br />
                                                Engineering
                                            </h1>
                                            <h2>
                                                Заснемане на обекти
                                            </h2>
                                            <Link to="/contacts">
                                                Свържете се с нас
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    {/* <div className="carousel_btn-box">
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="sr-only">Previous</span>
                        </a>
                        <img src="images/line.png" alt="" />
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="sr-only">Next</span>
                        </a>
                    </div> */}
                </div>
            </div>
        </section>
    )
}
