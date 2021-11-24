import React from 'react';
import DefaultImage from '../../assets/default.png';
import './Leaderboard.css';

export default function Leaderboard(props) {
    const addDefaultSrc = (e) => {
        e.target.src = DefaultImage;
    };

    return (
        <div className="container-lead">
            <div className="container-text">
                <p>{props.number}</p>
            </div>
            <div className="container-profile">
                <img id="logo-lead" src={props.logo} onError={addDefaultSrc} alt={props.name} />
                <p>{props.name}</p>
            </div>
            <div className="container-text">
                <p>{props.rate}</p>
            </div>
        </div>
    );
}
