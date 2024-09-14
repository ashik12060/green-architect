import React from 'react'

import ProjectCount from '../../components/ProjectCount'
import SmallHeader from '../../components/Shared/Headers/SmallHeader'
import MiddleHeader from '../../components/Shared/Headers/MiddleHeader'
import Footer from '../../components/Shared/Footer/Footer'
import Faq from '../../components/Faq/Faq'
import Carousel from '../../components/Carousel/Carousel'
import Header from '../../components/Shared/Headers/Header'

const Home = () => {
  return (
    <>
    <SmallHeader />
    <MiddleHeader />
    <Header />
    <Carousel />
    <ProjectCount />
    <Faq />
    <Footer />
    </>
  )
}

export default Home