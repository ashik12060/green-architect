import React from 'react'

import ProjectCount from '../../components/ProjectCount'
import SmallHeader from '../../components/Shared/Headers/SmallHeader'
import MiddleHeader from '../../components/Shared/Headers/MiddleHeader'
import Footer from '../../components/Shared/Footer/Footer'
import Faq from '../../components/Faq/Faq'

const Home = () => {
  return (
    <>
    <SmallHeader />
    <MiddleHeader />
    <ProjectCount />
    <Faq />
    <Footer />
    </>
  )
}

export default Home