import { useState } from "react"
import { Link } from "react-router-dom"
import { allProjects } from "../../allProjects/allProjects"
import { PortfolioItem } from "./PortfolioItem/PortfolioItem"


export const Portfolio = () => {

    const [data, setData] = useState(allProjects)
    console.log(allProjects)

    return (
        <section className="portfolio_section layout_padding2-top">
            <div className="heading_container">
                <h2>
                    Пор<span>тф</span>олио
                </h2>
                <p style={{fontSize:'25px'}}>
                    Нашите завършени проекти
                </p>
            </div>
            <div className="portfolio_container layout_padding">
                <div className="box-1">
                    {data.length > 0
                        ? data.map(x => <PortfolioItem key={x._id} project={x} />)
                        : <div>There are no projects!</div>
                    }
                </div>
            </div>
        </section>
    )
}