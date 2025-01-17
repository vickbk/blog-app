// Navbar.js

import Head from 'next/head';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import {options} from '../objects/navbar.json'

const Navbar = ({pagetitle="Next Apps"}: {pagetitle?: string}) => {
    const location = usePathname();
    const links = options;
    return (
        <>
        <Head>
            <title>{pagetitle}</title>
        </Head>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark bg-opacity-75 fixed-top text-light active-text-bold">
                <div className="container">
                    <Link className="navbar-brand 
                        text-light font-bold" href="/">
                        Vick Blogs
                    </Link>
                    <button className="navbar-toggler"
                        type="button" 
                        data-toggle="collapse"
                        data-target="#navbarNav" 
                        aria-controls="navbarNav"
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collaps navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mr-auto justify-content-end nav nav-active-bold nav-fill">
                            
                            {
                                links.map((lnk, key) =>
                                    <li className="nav-item active" key={key}>
                                        <Link href={lnk.path} className="nav-item nav-link text-light">
                                            {lnk.title}
                                        </Link>
                                    </li>
                                )
                            }
                            
                           
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;