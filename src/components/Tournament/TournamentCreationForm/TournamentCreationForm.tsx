import React, { useState } from 'react';
import './TournamentCreationForm.css'

const TournamentCreationForm: React.FC = () => {
    const defaultTopPlayersCount = 16;
    const [name, setName] = useState("")
    const [topPlayersCount, setTopPlayersCount] = useState(defaultTopPlayersCount)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
    }

    return (
        <div className="container">
            <div className="tournament-creation-container">
                <h2>Создать турнир</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <label>Название турнира</label>
                        <input
                            type="text"
                            value={name}
                            placeholder="Название турнира"
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-container">
                        <label>Дальше проходят</label>
                        <input
                            type="number"
                            value={topPlayersCount}
                            placeholder={defaultTopPlayersCount.toString()}
                            onChange={(e) => setTopPlayersCount(parseInt(e.target.value))}
                            required
                        />
                    </div>
                    <button type="submit">Создать</button>
                </form>
            </div>
        </div>
    )
}

export default TournamentCreationForm;