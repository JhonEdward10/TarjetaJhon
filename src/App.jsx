import { useState } from 'react';
import './App.css'
import Cards from './components/Cards';
import users from './json/users.json'

const arrayColors = [ '#BBC8C0', '#7CDC33', '#C09D26', '#074DDA', '#22A9B6', '#ACFA24', '#A6002E'];

function App() {

  // console.log(users.length);
  const createNumberRandom = array => {
    return Math.floor(Math.random() * array.length)
  } 

const getElementRandom = array => {
  const i = createNumberRandom(array);
  return array[i]
}

let indexUserRandom = createNumberRandom(users);
let indexColorRandom = createNumberRandom(arrayColors);
  

  const [userRandom, setUserRandom] = useState(getElementRandom(users)); 
  const [colorRandom, setColorRandom] = useState(getElementRandom(arrayColors));

  const clickButton = () => {
    setUserRandom(getElementRandom(users))
    setColorRandom(getElementRandom(arrayColors))
  }
  
  
  const appStyle = { 
    backgroundColor: colorRandom
  }


  return (
    <div style={appStyle} className="App">
      <Cards 
      userRandom={userRandom} 
      colorRandom={colorRandom}
      clickButton={clickButton}
      />
    </div>
  )
}

export default App
