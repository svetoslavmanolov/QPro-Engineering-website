import './ServiceDetails.css'

export const ServiceDetails = () => {
    return (
        <section class="service_section layout_padding-bottom layout_padding2-top">
            <div class="container">

                <div class="row">
                    {/* <div class="col-lg-6 "> */}
                    <div class="img-container tab-content">
                        <div class="img-box tab-pane fade show active" id="img1" role="tabpanel">
                            <img src="images/service-img.jpg" alt="" />
                            <div className="services-description">
                                <p>ПРОЕКТИРАНЕ: <span>Проектирането на всяка сграда започва с определяне нейната функционалност. Проектирането на всяка сграда започва с определяне нейната функционалност.</span>
                                </p>
                                <p>КОНСУЛТАЦИИ: <span>При нужда от консултации ние може да го направим по всеки въпрос касаещ Вашия бъдещ дом.</span></p>
                                <p>АВТОРСКИ НАДЗОР: <span>Ние следим за стриктното изпълнение на изготвените прокети, което гарантира техния експлоатационен живот.</span></p>
                                <p>ЗАСНЕМАНЕ НА ОБЕКТИ: <span>Заснемането на една сграда се извършва с цел проучвания за бъдещи усилвания, надстрояване или смяна на предназначението. </span></p>
                                <p>ИЗГОТВЯНЕ НА ПБЗ: <span>Изготвяне на проект по част ПБЗ се извършва когато ... Изготвяне на проект по част ПБЗ се извършва когато ...</span></p>
                                <p>ИЗГОТВЯНЕ НА ПУСО: <span>Изготвяне на проект по част ПУСО се извършва когато ... Изготвяне на проект по част ПУСО се извършва когато ...</span></p>
                            </div>
                        </div>
                    </div>
                    {/* </div>                */}
                </div>

            </div>
        </section>
    )
}