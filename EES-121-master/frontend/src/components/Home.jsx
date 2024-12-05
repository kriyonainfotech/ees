import React from 'react'
import Navebar from './Navebar'
import Header from './Header'
import EditProfile from './EditProfile'
import UserSideBar from './UserSideBar'
import Card from '../Pages/Card'
import ServieceCategories from './ServieceCategories'
import CardSlider from './CardSlider'

const Home = () => {
  return (
    <>

      <Navebar />
      <UserSideBar />
      <Card />
      <CardSlider/>
      <ServieceCategories/>
      

    </>


  )
}

export default Home