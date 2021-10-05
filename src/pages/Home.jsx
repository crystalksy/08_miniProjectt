import React from 'react'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Slider from '../components/Slider'
// import NewsletterBackup from '../components/NewsletterBackup'

const Home = () => {
    return (
        <div>
          <Announcement/>
          <Navbar/>  
          <Slider/>
          <Newsletter/>
          {/* <NewsletterBackup/> */}
          <Footer/>
        </div>
    )
}

export default Home


