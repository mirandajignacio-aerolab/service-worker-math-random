import {useEffect, useState} from 'react'

const Home = () => {
  const [client, setClient] = useState(false)

  useEffect(() => {
setClient(true)
  },[])
  console.log('Home')
  return <div>

    {client && <><img
  alt="kadabra"
  src="https://img.pokemondb.net/sprites/black-white/normal/kadabra.png"
/>
<img
  alt="pikachu"
  src="https://img.pokemondb.net/sprites/black-white/normal/pikachu.png"
/>
<img
  alt="squirtle"
  src="https://img.pokemondb.net/sprites/black-white/normal/squirtle.png"
/>
<img
  alt="jigglypuff"
  src="https://img.pokemondb.net/sprites/black-white/normal/jigglypuff.png"
/>
<img
  alt="charmander"
  src="https://img.pokemondb.net/sprites/black-white/normal/charmander.png"
/>
<img
  alt="chikorita"
  src="https://img.pokemondb.net/sprites/black-white/normal/chikorita.png"
/>
<img
  alt="machamp"
  src="https://img.pokemondb.net/sprites/black-white/normal/machamp.png"
/></>}
  </div>
}

export default Home