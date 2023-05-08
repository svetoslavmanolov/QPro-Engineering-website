import { Link } from "react-router-dom"


export const PortfolioItem = ({ project }) => {
    return (
        <div className="img-box b-1">
            <img src={project.image} alt="" />
            <div className="btn-box">
                <Link to={`/portfolio/${project._id}`} className="btn-2">
                </Link>
            </div>        
        </div>
    )
}
 
  