import React from 'react'
import MiddleHeader from '../../components/Shared/Headers/MiddleHeader'
import Header from '../../components/Shared/Headers/Header'
import CoverPhoto from '../../components/AboutUsPage/CoverPhoto'
import AboutUsComp from '../../components/AboutUsPage/AboutUsComp'
import WhyChoose from '../../components/AboutUsPage/WhyChoose'
import Footer from '../../components/Shared/Footer/Footer'
import WhatDiff from '../../components/AboutUsPage/WhatDiff'

const AboutUs = () => {
  return (
    <>
    <MiddleHeader />
    <Header />
    <CoverPhoto />
    <AboutUsComp />
    <WhyChoose />
    <WhatDiff />
    <Footer />


    </>
  )
}

export default AboutUs