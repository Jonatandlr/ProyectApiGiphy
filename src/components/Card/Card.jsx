import React, { useEffect, useState } from 'react'
import './Card.css'
import Gift from '../Gift/Gift'


function Card() {
  const apiKey = 'BW8niDKKfCVVkHEEVpBj2uqcCjURuj3t'

  const [text, setText] = useState('')
  const [search, setSearch] = useState('')
  const [gifts, setGifts] = useState()
  const [loading, setLoading] = useState(false)

  const handleSubmit = (ev) => {
    ev.preventDefault()
    setLoading(true)
    setSearch(text)
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${text}`)
      .then((res) => res.json())
      .then((data) => {
        setGifts(data.data)
        // console.log(data.data)
      })
      .finally(() => {
        setLoading(false)
        setSearch(text)
      })
    // console.log('estoy en la llamada a la api')
  }


  return (
    <div className='container_card'>
      <div className='container_search'>
        <h1 className='container__h1'>Encuentra el
          <span className='container__h1--rojo'> gift perfecto</span><br />
          para ti</h1>

        <form className='form' onSubmit={handleSubmit}>
          <input type="text"
            placeholder='"Perro feliz", "Pollo Frito"'
            value={text}
            onChange={(ev) => setText(ev.target.value)} />
          <button className='form__button' type='submit'>Submit</button>
        </form>
      </div>
      <div className='gift'>
        {
          loading ?
            <h3>loading...</h3> : <Gift search={search} data={gifts} />
        }
      </div>
    </div>
  )
}

export default Card