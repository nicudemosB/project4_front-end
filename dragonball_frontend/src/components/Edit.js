import { useState } from 'react'

const Edit = (props) => {
//   let emptyHero = {name: '', age: '', power_level: '', transformation: ''}
  const [hero, setHero] = useState({...props.hero})

  const handleChange = (event) => {
    setHero({...hero, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleUpdate(hero)
  }

  return (
    <>
    <details>
        <summary>Edit Hero</summary>
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Name: </label>
            <input type='text' name='name' value={hero.name} onChange={handleChange}/>
            <br/>
            <br/>
            <label htmlFor='age'>Age: </label>
            <input type='number' name='age' value={hero.age} onChange={handleChange}/>
            <br/>
            <br/>
            <label htmlFor='power_level'>Power Level: </label>
            <input type='number' name='power_level' value={hero.power_level} onChange={handleChange}/>
            <br/>
            <br/>
            <label htmlFor='transformation'>Transformation: </label>
            <input type='text' name='transformation' value={hero.transformation} onChange={handleChange}/>
            <input type='submit'/>
        </form>
    </details>
    </>
  )
}

export default Edit