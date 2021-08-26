import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <div className="navbar-fixed">
                <div className="container">
                    <div className="row py-2 align-items-center">
                        <div className="col-md-4 logo-style">
                            <h2 className="my-0 logo">aromia</h2>
                            <p className="" style={{ fontSize: "10px" }}>COFFEE & MORE</p>
                        </div>
                        <div className="col-md-8">
                            <ul className="nav justify-content-end">
                                <li className="nav-item px-3">
                                    <Link style={{ textDecoration: 'none', color: 'black', fontSize: '14px' }}>Why Aromia</Link>
                                </li>
                                <li className="nav-item px-3">
                                    <Link style={{ textDecoration: 'none', color: 'black', fontSize: '14px' }}>Our Store</Link>
                                </li>
                                <li className="nav-item px-3">
                                    <Link style={{ textDecoration: 'none', color: 'black', fontSize: '14px' }}>Step to Franchise</Link>
                                </li>
                                <li className="nav-item px-3">
                                    <Link style={{ textDecoration: 'none', color: 'black', fontSize: '14px' }}>Join The Family</Link>
                                </li>
                                <li className="nav-item px-3">
                                    <Link style={{ textDecoration: 'none', color: 'black', fontSize: '14px' }}>Our Brands</Link>
                                </li>
                                <li className="nav-item px-3">
                                    <Link style={{ textDecoration: 'none', color: 'black', fontSize: '14px' }}>Contact Us</Link>
                                </li>
                            </ul>



                        </div>
                    </div>



                </div>
            </div>
        );
    }
}

export default Nav;