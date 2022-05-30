import React from 'react'

const Cards = ({userRandom, colorRandom, clickButton}) => {

    const styleButton = {
        backgroundColor: colorRandom
    }

  return (
      <article className='card' style={{color: colorRandom }}>
          <p className='card_paragraph'>{userRandom.quote}</p>
          <h2 className='card_title'>{userRandom.author}</h2>
          <button 
          style={styleButton} 
          className='button'
          onClick={clickButton}
          ></button>
      </article>
  )
}

export default Cards