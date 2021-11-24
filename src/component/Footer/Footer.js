import React from 'react';
import { FaTrophy } from 'react-icons/fa';
import { RiHomeFill, RiAliensFill } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import './Footer.css';



export default function Footer() {
    return (
        <footer>
            <div className="footer">
                <NavLink to="/teams">
                    <RiHomeFill />
                </NavLink>
                <NavLink to="/leaderboard">
                    <FaTrophy />
                </NavLink>
                <NavLink to="/profile">
                    <RiAliensFill />
                </NavLink>
            </div>
        </footer>
    );
}
