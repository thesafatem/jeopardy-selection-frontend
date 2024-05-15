import React from 'react';
import './TournamentList.css'
import {ITournament} from "../tournament.interface";

const TournamentList: React.FC = () => {
    const tournaments: ITournament[] = [
        {
            id: 1,
            name: 'Чемпионат Азии по Заковат'
        },
        {
            id: 2,
            name: 'XII Чемпионат Казахстана'
        }
    ];

    for (let i = 3; i <= 10; i++) {
        tournaments.push({
            id: i,
            name: `${i} кубок Караганды`
        })
    }

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