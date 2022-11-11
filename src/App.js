
import './App.css';
import { useState } from 'react';

function App() {
  const [isLight,setLight] = useState(true);
   const changeBackground = _ => {
       if(isLight == true){
        setLight(false);
       }
       else{
        setLight(true);
       }
   }
  return (
    <div className="App">
       <div className={isLight === true ? "white-container": "black-container"}>
        <div className="header">
        <h2>Overeacted</h2>
        <button onClick={changeBackground}>Toggle</button>
        </div>
        <div>
            <h3>The Wet codbase</h3>
            <p>Sunday, 4th 2020 11 min eeal</p>
            <p>Come Waste Your Time with me</p>
        </div>
       <div>
            <h3>Goodby,Clean Code</h3>
            <p>Finally 22nd 2019 5 min read</p>
            <p>lets clean code guide you.then let it go</p>
       </div>
        <div>
            <h3>My Decade in review</h3>
            <p>Saturday 11th 2018 5min read</p>
            <p>personal reflector</p>
        </div>
        <div>
            <h3>What Are The React Team Principles</h3>
            <p>thursday 4th 2015 5min read</p>
        </div>
        
    </div>
    </div>
  );
}

export default App;
