import React from 'react'

import ProjectCount from '../../components/ProjectCount'
import SmallHeader from '../../components/Shared/Headers/SmallHeader'
import MiddleHeader from '../../components/Shared/Headers/MiddleHeader'
import Footer from '../../components/Shared/Footer/Footer'
import Faq from '../../components/Faq/Faq'
import Carousel from '../../components/Carousel/Carousel'

const Home = () => {
  return (
    <>
    <SmallHeader />
    <MiddleHeader />
    <Carousel />
    <ProjectCount />
    <Faq />
    <Footer />
    </>
  )
}

export default Home