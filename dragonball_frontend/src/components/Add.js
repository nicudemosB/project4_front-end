import React, {useState, useEffect} from 'react'

const Add = (props) => {
  let emptyHero = {name: '', age: '', power_level:'', transformation: ''}
  const [hero, setHero] = useState(emptyHero)

  const handleChange = (event) => {
    setHero({...hero, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleCreate(hero)
  }
  
  return (
    <>
    <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name: </label>
        <input type='text' name='name' onChange={handleChange} />
        <br/>
        <br/>
        <label htmlFor='age'>Age: </label>
        <input type='number' name='age' onChange={handleChange} />
        <br/>
        <br/>
        <label htmlFor='power_level'>Power Level: </label>
        <input type='number' name='power_level' onChange={handleChange} />
        <br/>
        <br/>
        <label htmlFor='transformation'> Transformation: </label>
        <input type='text' name='transformation' onChange={handleChange} />
        <input type='submit' />
    </form>
    </>
  )
}

export default Add