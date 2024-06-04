import { Link } from "react-router-dom";

const Header = ()=>{
    return(
        <nav className="navbar navbar-expand-sm navbar-secondary bg-warning">
        <div className="container-fluid justify-content-between">
        <ul className="navbar-nav">
            <li className="nav-item">
                    <a className="nav-link" href="https://www.swiggy.com/" rel="noreferrer" target="_blank"><img src="https://logos-world.net/wp-content/uploads/2020/11/Swiggy-Emblem.png" className="rounded-circle" alt="Swiggy Logo" style={{height:"50px"}} /></a>
                </li>
                <li className="nav-item dropdown pt-2 px-2">
                    <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown"><u>Other</u></Link>
                    <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="#">Link</Link></li>
                        <li><Link className="dropdown-item" to="#">Another link</Link></li>
                        <li><Link className="dropdown-item" to="#">A third link</Link></li>
                    </ul>
                </li>
            </ul>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span className="navbar-toggler-icon"></span>
            </button>
          <div className="container collapse navbar-collapse justify-content-end" id="mynavbar">
            <ul className="navbar-nav">
            <li className="nav-item pt-1">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item pt-1">
                    <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item pt-1">
                    <Link className="nav-link" to="#">Help</Link>
                </li>
                <li className="nav-item pt-1">
                    <Link className="nav-link" to="#">Sign-In</Link>
                </li>
                <li className="nav-item pt-1">
                    <Link className="nav-link" to="/contact">Contact</Link>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    )
            
    
}

export default Header;