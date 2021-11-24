import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, NavLink } from "react-router-dom";
import CardPlayers from '../component/Card/CardPlayers';
import './Activity.css';
import Loader from "react-loader-spinner";

export default function PlayersActivity() {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [currentPlayers, setCurrentPlayers] = useState([]);
    const [formerPlayers, setFormerPlayers] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [palyersDesc, setPalyersDesc] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const request = await axios.get(`https://api.opendota.com/api/teams/${id}/players`);
                if (request.status === 200) {
                    setCurrentPlayers(request.data.filter(data => data.is_current_team_member === true));
                    setFormerPlayers(request.data.filter(data => data.is_current_team_member !== true).slice(0, 5));
                    if (currentPlayers.length !== 0) {
                        setPalyersDesc("Current Players");
                        setData(currentPlayers);
                    }
                    else {
                        setPalyersDesc("Former Players");
                        setData(formerPlayers);
                    }
                    const timer = setTimeout(() => {
                        setIsLoaded(true);
                        setIsLoading(false);
                    }, 2000);
                    return () => clearTimeout(timer);
                }
            } catch (error) {
                console.log(error);
                setIsLoading(true);
            }
        };
        if (!isLoaded) {
            fetchData();
        }
    }, [isLoaded, id, currentPlayers.length, data, currentPlayers, formerPlayers]);

    return (
        <main>
            {isLoading ? (
                <div className="loading">
                    <Loader type="Rings" color="#00BFFF" height={200} width={200} />
                </div>
            ) : (
                <div className="container-players">
                    <div className="header-detail">
                        <div className="header-desc">
                            <NavLink
                                to={`/teams/players/${id}`}
                                className="header-link"
                            >
                                <h2>Players</h2>
                            </NavLink>
                        </div>
                        <div className="header-desc">
                            <NavLink
                                to={`/teams/matches/${id}`}
                                className="header-link"
                            >
                                <h2>Recent Matches</h2>
                            </NavLink>
                        </div>
                    </div>
                    <div className="player-desc">
                        <h1>{palyersDesc}</h1>
                    </div>
                    {
                        data.map((item, index) => {
                            return (
                                <div className="card-player" key={index}>
                                    <CardPlayers
                                        name={item.name !== null ? item.name : "Unknown"}
                                        games={item.games_played}
                                        winrate={item.wins / item.games_played * 100}
                                        playerId={item.account_id}
                                    />
                                </div>
                            );
                        })
                    }
                </div>
            )}
        </main >
    );
}
