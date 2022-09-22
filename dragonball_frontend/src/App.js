import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Add from './components/Add'

const App = () => {
const [character, setCharacter] = useState([])
const getCharacter = () => {
  axios
  .get('http://localhost:8000/api/characters')
  .then(
    (response) => setCharacter(response.data),
    (err) => console.error(err)
  )
  .catch((error) => console.error(error))
}

const handleCreate = (addCharacter) => {
  axios
  .post('http://localhost:8000/api/characters', addCharacter)
  .then((response) => {
    console.log(response)
    getCharacter()
  })
}

const handleDelete = (event) => {
  axios
  .delete('http://localhost:8000/api/characters/' + event.target.value)
  .then((response) => {
    getCharacter()
  })
}

useEffect(() => {
  getCharacter()
}, [])
  
  return (
    <>
    <Add handleCreate={handleCreate} />
    <div className='dragon'>
    <h1>DragonBall Characters</h1>
      {character.map((hero) => {
        return (
          <div className='character' key={character.id}>
            <h4>Name: {hero.name}</h4>
            <h5>Age: {hero.age}</h5>
            <h5>Power Level: {hero.power_level}</h5>
            <h5>Transformation: {hero.transformation}</h5>
            <button onClick={() => {handleDelete(hero)}} value={hero.id}>Delete</button>
            </div>
        )
      })}
   
    </div>
    </>
  )
}

export default App;
