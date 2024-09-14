import React from 'react'
import ManagementTeam from '../../components/ManagementTeam/ManagementTeam'
import Footer from '../../components/Shared/Footer/Footer'
import Header from '../../components/Shared/Headers/Header'
import CoverPhoto from '../../components/Shared/CoverPhoto/CoverPhoto'
import ProjectCount from '../../components/ProjectCount'

const Team = () => {
  return (
    <>
    <Header />
    <CoverPhoto />
    <ManagementTeam />
    <div>
      <h3 className='text-center text-3xl font-bold py-4'>A Numerical Snapshot of Our Story</h3>
      <ProjectCount />
    </div>
    
    <Footer />
    </>
  )
}

export default Team