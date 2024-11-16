import React, { useState } from 'react'
import Background from './Components/Background/Background';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';

const App = () => {
  let heroData = [
    {text1:"Experimente",text2:" O Futuro"},
    {text1:"Sinta o futuro",text2:"em suas mãos"},
    {text1:"Desperte sua paixão",text2:"por dirigir"},
  ]
  const [heroCount,setHeroCount] = useState(0);
  const [playStatus,setPlayStatus] = useState(false);
  return (
    <div>
      <Background playStatus={playStatus} heroCount = {heroCount}/>
      <Navbar/>
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </div>
  )
}

export default App
