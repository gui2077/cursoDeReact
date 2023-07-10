import { useState } from 'react'
import './App.css'
import praia from '/src/assets/paisagem-01.jpg'
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import CondicionalRender from './components/CondicionalRender'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Avançando no React</h1>
      {/*

      Neste primeiro exemplo de imagem, estamos usando o próprio endereço da imagem para chamá-la. 
      <div>
        <img src="paisagem-02.jpg" alt="Paisagem"/>
      </div>

      Já neste segundo exemplo, estamos chamando a imagem por meio da variável que foi criada no começo do código.
      <div>
        <img src={praia} alt="Praia" />
      </div>
      */}
      <ManageData/>
      <ListRender/>
      <CondicionalRender/>
    </>
  )
}

export default App
