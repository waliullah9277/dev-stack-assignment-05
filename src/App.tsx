import { Suspense, useState } from "react"
import Banner from "./Components/Banner"
import Nav from "./Components/Nav"
import Technologies from "./Components/Technologies/Technologies"
import type { ITechnologies } from "./types/Technologies"

const TechnologiesPromise = async(): Promise<ITechnologies[]> =>{
  const res = await fetch('/technologies.json')
  const data = await res.json();
  return data;
}


function App() {

  const [technologiesPromise] = useState(() => TechnologiesPromise())

  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <Suspense fallback={<p>Technologies Loading......</p>}>
        <Technologies technologiesPromise={technologiesPromise} ></Technologies>
    </Suspense>
    </>
  )
}

export default App
