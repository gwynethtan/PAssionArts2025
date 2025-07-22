import React from "react";
import { NavLink } from "react-router-dom"; // You need to import NavLink
import { motion } from "framer-motion"; // (Optional, if you're using animations)

const NavLinkButton = ({ link, text }) => {
    const isExternal = link.startsWith("http://") || link.startsWith("https://");

    return isExternal ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <button className="rounded-xl bg-mainButton text-white font-semibold text-xl px-8 py-3">
                {text}
            </button>
        </a>
    ) : (
        <NavLink to={`/${link}`}>
            <button className="rounded-xl bg-mainButton text-white font-semibold text-xl px-8 py-3">
                {text}
            </button>
        </NavLink>
    );
};

export default NavLinkButton;