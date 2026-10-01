import { Suspense, useState } from "react"
import Banner from "./Components/Banner"
import Nav from "./Components/Nav"
import Technologies from "./Components/Technologies/Technologies"
import type { ITechnologies } from "./types/Technologies"
import Footer from "./Components/Footer"

const TechnologiesPromise = async (): Promise<ITechnologies[]> => {
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
      <Suspense fallback={<div className="flex justify-center items-center">
        <span className="loading loading-spinner loading-lg text-info"></span>
      </div>}>
        <Technologies technologiesPromise={technologiesPromise} ></Technologies>
      </Suspense>
      <Footer></Footer>
    </>
  )
}

export default App
