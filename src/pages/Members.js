import React, { useEffect, useState } from 'react'
import MembersCard from '../components/MembersCard';
import { Box, Container, Grid } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import axiosInstance from './axiosInstance';
import Loader from '../components/Loader';

const Members = () => {
    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [visibleMembers, setVisibleMembers] = useState(4); 

    const showMembers = async () => {
        setLoading(true);
        try {
          const { data } = await axiosInstance.get(`${process.env.REACT_APP_API_URL}/api/members/show`);
          setMembers(data.members);
          setLoading(false);
        } catch (error) {
        }
      };
    
      useEffect(() => {
        showMembers();
      }, []);



      let uiMembers =
      
         members;

  return (
//     <div>Members

// <Box sx={{ bgColor: "#fafafa", minHeight: "100vh" }}>
       

//        <div className='text-center mt-3  '>
    
//    </div>
//        <Container  sx={{ pt: 3, pb: 5, minHeight: "83vh" }}>
//          <Box sx={{ flexGrow: 1 }}>
//            <Grid container spacing={{ xs: 2, md: 2, lg:1 }}>
//              {loading ? (
//                <Loader />
//              ) : (
//                // uiPosts.map((product, index) => (
//                 uiMembers.slice(0, visibleMembers).map((member, index) => (

//                  <Grid item xs={12} sm={4} md={4} lg={3} key={index}>
//                    <MembersCard
//                      image={member.image ? member.image.url : ""}
//                      id={member._id}
//                      title={member.title}
//                      content={member.designation}
                    

                     
//                     //  subheader={moment(member.createdAt).format("MMMM DD, YYYY")}
//                     //  comments={product.comments.length}
//                     //  likes={product.likes.length}
//                     //  likesId={product.likes}
//                     showMembers={showMembers}
//                    />
//                  </Grid>
//                ))
//              )}
//            </Grid>
           
//        {/* <div cla                */}
    
//          </Box>
         
//        </Container>
//      </Box>
//     </div>

<div className="bg-black min-h-34">
    <h3 className='text-white text-center text-4xl font-bold pb-6 pt-10'><span className="border-b-4 ">Our Team</span></h3>
      <div className="text-center"></div>
      <div className="container mx-auto py-12 min-h-24">
        <div className="flex flex-wrap mx-10  gap-y-16">
          {loading ? (
            <Loader />
          ) : (
            uiMembers.map((member, index) => (
              <div className="px-2 my-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4" key={index}>
                <MembersCard
                  image={member.image ? member.image.url : ""}
                  id={member._id}
                  title={member.title}
                  designation={member.designation}
                  showMembers={showMembers}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default Members