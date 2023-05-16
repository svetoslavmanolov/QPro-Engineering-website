import { Link } from "react-router-dom"


export const Contacts = () => {
    return (

        <section className="contact_section layout_padding-bottom layout_padding2-top">
            <div className="container px-0">
                <div className="heading_container">
                    <h2>
                        Кон<span style={{color: '#FF0000'}}>та</span>кти
                    </h2>
                </div>

            </div>
            <div className="container container-bg">
                <div className="row">
                    <div className="col-lg-8 col-md-7 px-0">
                        <div className="map_container">
                            <div className="map-responsive">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d733.3782029018209!2d23.387045469588713!3d42.67167848424493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa867199879905%3A0x2282d5d76a74d0b!2z0YPQuy4g0JrQsNC_LiDQlC4g0KHQv9C40YHQsNGA0LXQstGB0LrQuCAzLCAxNTkyINC2LtC6LiDQlNGA0YPQttCx0LAgMSwg0KHQvtGE0LjRjw!5e0!3m2!1sbg!2sbg!4v1683227676635!5m2!1sbg!2sbg" style={{ border: "0", width: "100%", height: "100%" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>



                    <div className="col-lg-4">
                        {/* <div className=""> */}
                            
                            <div className="contact_link-box">
                                <a href="">
                                    <img src="images/location.png" alt="" />
                                    <span >Адрес: ул. капитан Димитър Списаревски №3, гр.София </span>
                                </a>
                                <a href="">
                                    <img src="images/call.png" alt="" />
                                    <span>Тел: +359 883 38 14 38</span>
                                </a>
                                <a href="">
                                    <img src="images/mail.png" alt="" />
                                    <span>Email: qpro@abv.bg</span>
                                </a>
                            </div>
                        {/* </div> */}
                    </div>

                </div>
            </div>

        </section >
    )
}