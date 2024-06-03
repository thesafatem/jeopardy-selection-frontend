import React, {useEffect, useState} from 'react';
import './TournamentList.css'
import {ITournament} from "../tournament.interface";

const TournamentList: React.FC = () => {
    const [tournaments, setTournaments] = useState<ITournament[]>([]);

    useEffect(() => {
        async function fetchTournaments() {
            try {
                const token = localStorage.getItem('authToken')
                if (!token) {
                    throw new Error('No auth token')
                }
                const response = await fetch('http://127.0.0.1:5000/tournaments', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': token
                    }
                });
                const data = await response.json();
                setTournaments(data?.tournaments || []);
            } catch (error) {
                throw error
            }
        }

        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQ3NGI2ZTc3YzMyNzc2N2RjZTUzMTkiLCJlbWFpbCI6ImRpbmEyQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJDBVNml5S1g1Uk01Qnk0V3RGWjlNR2VwQjFUaXAwVmlEM1RHQ3lIcXlWc0lBeW10MzJTOGlpIiwiY3JlYXRlZEF0IjoiMjAyNC0wNS0xN1QxMjoxOTo1OC42MDdaIiwidXBkYXRlZEF0IjoiMjAyNC0wNS0xN1QxMjoxOTo1OC42MDdaIiwiX192IjowLCJpYXQiOjE3MTc0MTQzNDcsImV4cCI6MTcxNzQ1NzU0N30.EGsjtitjvr0iWZjNWnGJZZ63uxJLXN0JMvmrmI6U4c0';
        localStorage.setItem('authToken', token)
        fetchTournaments();
    }, [])

    const handleTournamentClick = (tournamentId: number) => {
        // TODO switch to tournament detail
    }

    return (
        <div className="container">
            <div className="tournament-list">
                <h2>Мои турниры</h2>
                <ul className="tournament-names">
                    {tournaments.map(tournament => (
                        <li
                            key={tournament.id}
                            onClick={() => handleTournamentClick(tournament.id)}
                        >
                            {tournament.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default TournamentList;