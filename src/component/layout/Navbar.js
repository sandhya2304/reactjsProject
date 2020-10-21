import React from 'react';
import { Link , NavLink} from 'react-router-dom';


const Navbar = () => {

    return (

        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
           <div className="container" >
              
           <a class="navbar-brand" href="/">React</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" 
                     data-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                           aria-expanded="false" aria-label="Toggle navigation">

                <span class="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" >
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item ">
                        <NavLink className="nav-link" exact to="/">Home </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                   
                </ul>

            </div>

            <Link className="btn btn-outline-light" to="/users/addUser">Add User </Link>

           </div>
        </nav>

    )

}

export default Navbar;