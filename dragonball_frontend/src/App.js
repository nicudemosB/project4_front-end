import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Add from './components/Add'
import Edit from './components/Edit'

const App = () => {
const [character, setCharacter] = useState([])
const getCharacter = () => {
  axios
  .get('http://localhost:8000/api/characters')
  .then(
    (response) => setCharacter(response.data),
    (err) => console.error(err)
  ).catch((error) => console.error(error))
}

const handleCreate = (addCharacter) => {
  axios
  .post('http://localhost:8000/api/characters', addCharacter)
  .then((response) => {
    // console.log(response)
    setCharacter([...character, response.data])
  })
}

const handleDelete = (deletedCharacter) => {
  axios
  .delete('http://localhost:8000/api/characters/' + deletedCharacter.id)
  .then((response) => {
    setCharacter(character.filter(character => character.id !== deletedCharacter.id))
  })
}

const handleUpdate = (editCharacter) => {
  axios.put('http://localhost:8000/api/characters/' + editCharacter.id, editCharacter)
  .then((response) => {
    setCharacter(character.map((character) => {
      return character.id !== editCharacter.id ? character : editCharacter
    }))
  })
}

useEffect(() => {
  getCharacter()
}, [])
  
  return (
    <>
    <div>
    <div className='dragon'>
    <h1>DragonBall Characters</h1>
    <Add handleCreate={handleCreate} />
      {character.map((hero) => {
        return (
          <div className='character' key={character.id}>
            <h4>Name: {hero.name}</h4>
            <h5>Age: {hero.age}</h5>
            <h5>Power Level: {hero.power_level}</h5>
            <h5>Transformation: {hero.transformation}</h5>
            <Edit handleUpdate={handleUpdate} hero={hero} />
            <button onClick={() => {handleDelete(hero)}} value={hero.id}>Delete</button>
            </div>
        )
      })}
    </div>
    </div>
    </>
  )
}

export default App;
