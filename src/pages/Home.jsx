import React from 'react'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
// import NewsletterBackup from '../components/NewsletterBackup'
import Slider from '../components/Slider'
import NewsletterCopy from '../components/NewsletterCopy'

const Home = () => {
    return (
        <div>
          <Announcement/>
          <Navbar/>  
          <Slider/>
          <Newsletter/>
          {/* <NewsletterBackup/> */}
          <NewsletterCopy/>
          <Footer/>
        </div>
    )
}

export default Home


