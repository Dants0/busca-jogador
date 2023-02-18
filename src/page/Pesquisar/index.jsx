import React from 'react'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/Navbar/NavBar'

import SearchPlayerByNameValue from '../../components/SearchPlayer/SearchPlayerByNameValue'

const Pesquisar = () => {
  return (
    <>
        <NavBar/>
        <SearchPlayerByNameValue/>
        <Footer/>
    </>
  )
}

export default Pesquisar