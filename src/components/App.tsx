import React, {useState} from 'react';
import '../App.css';
import SignUp from "./Auth/SignUp";
import SignIn from "./Auth/SignIn";

interface IUser {
    name: string;
    score: number;
}

function Input() {
    const topPlayers = 2
    const [users, setUsers] = useState<IUser[]>([]);
    const [name, setName] = useState("")
    const [score, setScore] = useState(0)
    const handleSubmit = (event: any) => {
        const nextUsers = [...users, { name, score }]
        nextUsers.sort((a, b) => b.score - a.score)
        setUsers(nextUsers)
    }

    const handleNameChange = (event: any) => {
        setName(event.target.value)
    }

    const handleScoreChange = (event: any) => {
        setScore(event.target.value)
    }

    const headers = [
        {
            name: '№',
            className: 'number'
        },
        {
            name: 'Name',
            className: 'name'
        },
        {
            name: 'Score',
            className: 'score'
        }
    ]

    return (
      <div>
          <input type="text" value={name} onChange={handleNameChange}/>
          <input type="number" value={score} onChange={handleScoreChange}/>
          <button onClick={handleSubmit}>Submit</button>
          <table className="table">
              <tr>
                  {headers.map(header => <th className={header.className}>{header.name}</th>)}
              </tr>
              {users.map((user, id) => (
                  <tr className={id < topPlayers ? 'top-row' : 'bottom-row'}>
                      <td>{id + 1}</td>
                      <td>{user.name}</td>
                      <td>{user.score}</td>
                  </tr>
              ))}
          </table>
      </div>
    )
}

function Tournament() {
    return (
        <>
            <button className='create-tournament'>Create</button>
        </>
    )
}

function App() {
  return (
      <>
        {/*<Input/>*/}
        {/*  <Tournament/>*/}
          <SignIn/>
      </>
  );
}

export default App;
