import { Link, NavLink } from "react-router-dom"


export const Header = () => {
    return (
        <div class="hero_area">
            <header className="header_section">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg custom_nav-container pt-3">
                        <Link className="navbar-brand" to='/'>
                            <img src="images/logo.png" alt="logo" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                                <ul className="navbar-nav  ">
                                    <li className="nav-item">
                                        <Link className='nav-link' to='/'>Начало<span className="sr-only">(current)</span></Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link className="nav-link" to='/portfolio'>Портфолио</Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link className="nav-link" to='/services'>Услуги</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link" to="/about">За нас</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to='/contacts'>Контакти</Link>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    )
}