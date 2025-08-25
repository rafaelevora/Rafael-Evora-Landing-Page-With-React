const Navbar = () => {

    return (

        <>
            <div className="row bg-dark">
                <div className="col-2"></div>
                <div className="col-8">
                   <nav className="navbar navbar-expand-lg bg-body-dark">
                    <div className="container-fluid d-flex justify-content-between">
                        <a className="navbar-brand text-white " href="#">Start Bootstrap</a>
                        <div className>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                    <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link text-white" href="#">About</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Services
                                    </a>
                                    <ul className="dropdown-menu text-white">
                                        <li><a className="dropdown-item" href="#">Service 1</a></li>
                                        <li><a className="dropdown-item" href="#">Service 2</a></li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li><a className="dropdown-item" href="#">Service 3</a></li>
                                    </ul>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link disabled text-white" aria-disabled="true">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    </nav>
                </div>
                <div className="col-2"></div>

            </div>
        
        </>


    );
}

export default Navbar;


