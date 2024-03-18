import React from 'react'
import { Link } from 'react-router-dom';
import List from '../../components/list/List';
import { useState} from 'react';

const MobileMenu = ({ refer, opacrefer }) => {

    const [activeAccordion, setActiveAccordion] = useState(null);

    const handleAccordionClick = (index) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    return (
        <>
            <div className="commonopac" ref={opacrefer}></div>
            <div className="mobile-menu-wrap position-fixed" ref={refer}>
                <div className="mobile-menu-inner">
                    <div className="mob-menu-search">
                        <input type="text" placeholder="Search" />
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <ul className="mob-menu-pages">
                        {menuItems.map((menuItem, index) => (
                            <li key={index}>
                                <Link
                                    className={`d-flex align-items-center justify-content-between ${menuItem.subMenuItems.length != 0 ? 'accardion-open' : ''} ${activeAccordion === index ? 'active' : ''}`}
                                    onClick={() => handleAccordionClick(index)}
                                >
                                    <span>{menuItem.label}</span>
                                    {menuItem.subMenuItems.length != 0 ? <i className={`fa-solid fa-chevron-down ${activeAccordion === index ? 'turn' : ''}`}></i> : null}
                                </Link>
                                {activeAccordion === index ? (
                                    <List classname={"sub-menu active"} items={menuItem.subMenuItems}/>
                                ) : (<List classname={"sub-menu"} items={menuItem.subMenuItems}/>)}
                            </li>
                        ))}
                    </ul>
                    <ul className="mob-menu-pages">
                        <li>
                            <Link
                                to={'/'}
                                className="d-flex align-items-center justify-content-between"
                            >
                                <span>Cart</span>
                                <i className="fa-solid fa-shopping-cart"></i>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={'/'}
                                className="d-flex align-items-center justify-content-between"
                            >
                                <span>Wishlist</span>
                                <i className="fa-solid fa-clipboard-list"></i>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/'}>
                                <span>Login / Sign Up</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

const menuItems = [
    { label: 'Home', subMenuItems: [] },
    {
        label: 'Shop', subMenuItems: [
            { label: "Shop All Products", link: "/shop" },
            { label: "Shop with Sidebar", link: "/" },
            { label: "Shop: 2 Columns", link: "/" },
            { label: "Shop: 4 Columns", link: "/" },
            { label: "Shop: Multi-Masonry", link: "/" },
            { label: "Shop: Category Page", link: "/" },
            { label: "Standard Product Page", link: "/" },
            { label: "Extended Product Page", link: "/" },
        ]
    },
    { label: 'Features', subMenuItems: [] },
    { label: 'Portfolio', subMenuItems: [] },
    {
        label: 'Blog', subMenuItems: [
            { label: 'Standard Alt', link: '/' },
            { label: 'Masonry Style', link: '/' },
            { label: 'Mini + sidebar', link: '/' },
            { label: 'Text Only Style', link: '/' },
        ]
    },
    {
        label: 'Pages', subMenuItems: [
            { label: 'About Us', link: '/' },
            { label: 'Contact', link: '/' },
            { label: 'F.A.Q.’s', link: '/' },
            { label: 'Meet the Team', link: '/' },
            { label: 'Size and Fit', link: '/' },
        ]
    },
    {
        label: 'Demos', subMenuItems: [
            { label: 'Form: Coffee', link: '/' },
            { label: 'Union: Cosmetics', link: '/' },
            { label: 'Convoy: Accessories', link: '/' },
            { label: 'Lab: Wine Shop', link: '/' },
            { label: 'Tilt: Art Prints', link: '/' },
        ]
    },
];

export default MobileMenu