import "./Heading.css"
import {Link} from "react-router-dom"

const Heading = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/about">About Us</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <Link className="nav-link" aria-current="page" to="/login">
                        <button type="button" class="btn btn-outline-primary">Login</button>
                    </Link>
                    
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Heading;