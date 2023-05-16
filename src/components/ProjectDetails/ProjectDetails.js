// import './ProjectDetails.css'
import { allProjects } from '../../allProjects/allProjects'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

export const ProjectDetails = () => {
    const [data, setData] = useState(allProjects)
    console.log(data)
    const { projectId } = useParams()
    console.log(projectId)

    return (
        <section className="portfolio_section layout_padding2-top">
            <div className="heading_container">
                <h3>
                    Детайли за проект: <span style={{ fontStyle: 'italic' }}>{data[projectId].name}</span>
                </h3>

            </div>
            <div className="project-container">
                <div className="project-box">
                    <div className="project-img">
                        <img src={data[projectId].image} alt="image" />
                    </div>
                    <div className="project-details">
                        <p>име: <span> {data[projectId].name}</span></p>
                        <p>локация: <span> {data[projectId].location}</span></p>
                        <p>предназначение: <span> {data[projectId].purpose}</span></p>
                        <p>ет ажност: <span> {data[projectId].height}</span></p>
                        <p>площ РЗП: <span> {data[projectId].area}</span> </p>
                    </div>

                </div>
                <div className="project-description">
                    <p>описание: <span> {data[projectId].description}</span></p>
                </div>

            </div>

        </section>
    )
}