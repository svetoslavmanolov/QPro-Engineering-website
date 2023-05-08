import { Link } from "react-router-dom"


export const Services = () => {
    return (
        <section className="service_section layout_padding-bottom layout_padding2-top">
            <div className="container">
                <div className="heading_container">
                    <h2>
                        Ус<span>лу</span>ги
                    </h2>
                    <p style={{ fontSize: '25px' }}>
                        Нашите услуги в сферата на проектирането
                    </p>
                </div>
                <div className="row">
                    <div className="col-lg-6 ">
                        <div className="img-container tab-content">
                            <div className="img-box tab-pane fade show active" id="img1" role="tabpanel">
                                <img src="images/house-rendering.jpg" alt="" />
                            </div>
                            <div className="img-box tab-pane fade  " id="img2" role="tabpanel">
                                <img src="images/service-img.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="detail-container nav nav-tabs" id="myTab" role="tablist">
                            <Link to='/services/details'>
                                <div className="detail-box" id="img1-tab" data-toggle="tab" href="#img1" role="tab" aria-selected="true">
                                    <h4>
                                        Проектиране <br />
                                    </h4>
                                </div>
                            </Link>
                            <Link to='/services/details'>
                                <div className="detail-box" id="img2-tab" data-toggle="tab" href="#img2" role="tab" aria-selected="false">
                                    <h4>
                                        Консултации<br />
                                    </h4>
                                </div>
                            </Link>
                            <Link to='/services/details'>
                                <div className="detail-box" id="img2-tab" data-toggle="tab" href="#img3" role="tab" aria-selected="false">
                                    <h4>
                                        Авторски надзор <br />
                                    </h4>
                                </div>
                            </Link>
                            <Link to='/services/details'>
                                <div className="detail-box" id="img2-tab" data-toggle="tab" href="#img3" role="tab" aria-selected="false">
                                    <h4>
                                        Заснемане на <br />
                                        обекти
                                    </h4>
                                </div>
                            </Link>
                            <Link to='/services/details'>
                                <div className="detail-box" id="img2-tab" data-toggle="tab" href="#img4" role="tab" aria-selected="false">
                                    <h4>
                                        Изготвяне на <br />
                                        ПБЗ
                                    </h4>
                                </div>
                            </Link>
                            <Link to='/services/details'>
                                <div className="detail-box" id="img2-tab" data-toggle="tab" href="#img4" role="tab" aria-selected="false">
                                    <h4>
                                        Изготвяне на  <br />
                                        ПУСО
                                    </h4>
                                </div>
                            </Link>                          
                        </div>
                    </div>
                </div>
                <Link to='/services/details'>
                    <div className="btn-box">
                        <a href="">
                            Прочете още
                        </a>
                    </div>
                </Link>

            </div>
        </section >
    )
}