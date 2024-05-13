import React, {useState} from 'react';
import './App.css';

interface IUser {
    name: string;
    score: number;
}

function Input() {
    const [users, setUsers] = useState<IUser[]>([]);
    const [name, setName] = useState("")
    const [score, setScore] = useState(0)
    const handleSubmit = (event: any) => {
        setUsers([...users, { name, score }])
    }

    const handleNameChange = (event: any) => {
        setName(event.target.value)
    }

    const handleScoreChange = (event: any) => {
        setScore(event.target.value)
    }

    return (
      <div>
          <input type="text" value={name} onChange={handleNameChange}/>
          <input type="number" value={score} onChange={handleScoreChange}/>
          <button onClick={handleSubmit}>Submit</button>
          <ul>
              {users.map(user => <li>{user.name}: {user.score}</li>)}
          </ul>
      </div>
    )
}

function App() {
  return (
      <div>
        <Input/>
      </div>
  );
}

export default App;
