// Navbar.js

import Head from 'next/head';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { title } from 'process';
import React from 'react';


const Navbar = ({pagetitle="Next Apps"}: {pagetitle?: string}) => {
    const location = usePathname();
    const links = [
        {path: "/", title: "Home"},
        {path: "/Createblog", title: "Create Blog"},
        {path: "/todo", title: "To do App"},
        { path: "/docsmanager", title: "Document management" }
    ];
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
                            
                            {/* <li className="nav-item">
                                <Link href="/" className="nav-item nav-link text-light">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/Createblog" className="nav-item nav-link text-light">
                                    Create new Blog
                                </Link>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;