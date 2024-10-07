import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
import SocialMediaButton from "./components/SocialMediaButton/SocialMediaButton";
import AboutUs from "./pages/AboutUs/AboutUs";
import Team from "./pages/Team/Team";
import Services from "./pages/Services/Services";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProSidebarProvider } from "react-pro-sidebar";
import { Provider } from "react-redux";
import store from "./redux/store";
import AdminDashboard from "./admin/AdminDashboard";
import AdminRoute from "./components/AdminRoute";
import UserRoute from "./components/UserRoute";
import CreatePost from "./admin/CreatePost";

import LogIn from "./pages/LogIn";

import Layout from "./admin/global/Layout";
import EditPost from "./admin/EditPost";
import UserDashboard from "./user/UserDashboard";
//main
import BlogHome from "./pages/BlogHome";
import SinglePro from "./pages/SingleRnd";
import EditProduct from "./admin/EditProduct";
import { useEffect, useState } from "react";
import CreateItem from "./admin/CreateCarousel";
import EditCarousel from "./admin/EditCarousel";

// new imports
import Home from "./pages/Home/Home";
import Register from "./pages/Register";
import SinglePost from "./pages/SinglePost";
import SampleLogin from "./components/SampleLoginPage.js/SampleLogin";
import RnD from "./pages/RnD";
import SingleRnd from "./pages/SingleRnd";
import Members from "./pages/Members";
import CreateMembers from "./admin/CreateMembers";
import EditMember from "./admin/EditMember";
import CreateCarousel from "./admin/CreateCarousel";
import Products from "./pages/Products/Products";
import BuyForm from "./components/ProductsInfo/BuyForm";
import { ThemeProvider } from "./context/ThemeContext";
import CreateProduct from "./admin/CreateProduct";
import CreateRnd from "./admin/CreateRnd";
import EditRnd from "./admin/EditRnd";
import CreateProject from "./admin/CreateProject";
import EditProject from "./admin/EditProject";
import SmallHeader from "./components/Shared/Headers/SmallHeader";
import CreateVideo from "./admin/CreateVideo";
import EditVideo from './admin/EditVideo'

//HOC
const AdminDashboardHOC = Layout(AdminDashboard);

const CreatePostHOC = Layout(CreatePost);
const CreateProductHOC = Layout(CreateProduct);
const CreateProjectHOC = Layout(CreateProject);
const CreateCarouselHOC = Layout(CreateCarousel);
const CreateRndHOC = Layout(CreateRnd);
const CreateMemberHOC = Layout(CreateMembers);
const CreateVideoHOC = Layout(CreateVideo);

const EditPostHOC = Layout(EditPost);
const EditProjectHOC = Layout(EditProject);
const EditCarouselHOC = Layout(EditCarousel);
const EditMemberHOC = Layout(EditMember);
const EditRndHOC = Layout(EditRnd);
const EditVideoHOC = Layout(EditVideo);

const EditProductHOC = Layout(EditProduct);
const UserDashboardHOC = Layout(UserDashboard);

function App() {
  return (
    <>
    <ThemeProvider >
      <ToastContainer />
      
      <Provider store={store}>
      
        <ProSidebarProvider>
          <BrowserRouter>
          <SmallHeader />
          <SocialMediaButton />
      <ScrollToTopButton />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/home" element={<Home />}></Route>

              <Route path="/" element={<Home />}></Route>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/about-us" element={<AboutUs />}></Route>
              <Route path="/team" element={<Team />}></Route>
              <Route path="/services" element={<Services />}></Route>
              <Route path="/projects" element={<Projects />}></Route>
              <Route path="/products" element={<Products />}></Route>
              <Route path='/contact' element={<Contact />}></Route>

              <Route path="/buy" element={<BuyForm />} />
              
              {/* blog */}
              <Route path="/" element={<BlogHome />} />
              <Route path="/blog" element={<BlogHome />} />

              {/* research and analysis */}
              <Route path="/research-development" element={<RnD />} />
              <Route path="/team-members" element={<Members />} />

              

              <Route path="/login" element={<LogIn />} />
              <Route path="/register" element={<Register />} />

{/* show single */}
              <Route path="/post/:id" element={<SinglePost />} />
              <Route path="/rnd/:id" element={<SingleRnd />} />

              
              <Route path="/log" element={<SampleLogin />} />

              

              <Route
                path="/admin/dashboard"
                element={
                  <AdminRoute>
                    <AdminDashboardHOC />
                  </AdminRoute>
                }
              />
  {/* create */}
              <Route
                path="/admin/post/create"
                element={
                  <AdminRoute>
                    <CreatePostHOC />
                  </AdminRoute>
                }
              />
              <Route
                path="/admin/video/create"
                element={
                  <AdminRoute>
                    <CreateVideoHOC />
                  </AdminRoute>
                }
              />
              <Route
                path="/admin/product/create"
                element={
                  <AdminRoute>
                    <CreateProductHOC />
                  </AdminRoute>
                }
              />
              <Route
                path="/admin/project/create"
                element={
                  <AdminRoute>
                    <CreateProjectHOC />
                  </AdminRoute>
                }
              />



              <Route
                path="/admin/carousel/create"
                element={
                  <AdminRoute>
                    <CreateCarouselHOC />
                  </AdminRoute>
                }
              />

              <Route
                path="/admin/rnd/create"
                element={
                  <AdminRoute>
                    <CreateRndHOC />
                  </AdminRoute>
                }
              />
              <Route
                path="/admin/member/create"
                element={
                  <AdminRoute>
                    <CreateMemberHOC />
                  </AdminRoute>
                }
              />


{/* update */}
              <Route
                path="/admin/post/edit/:id"
                element={
                  <AdminRoute>
                    <EditPostHOC />
                  </AdminRoute>
                }
              />
              <Route
                path="/admin/post/edit/:id"
                element={
                  <AdminRoute>
                    <EditVideoHOC />
                  </AdminRoute>
                }
              />
              <Route
                path="/admin/video/edit/:id"
                element={
                  <AdminRoute>
                    <EditVideoHOC />
                  </AdminRoute>
                }
              />
              <Route
                path="/admin/product/edit/:id"
                element={
                  <AdminRoute>
                    <EditProductHOC />
                  </AdminRoute>
                }
              />
              <Route
                path="/admin/project/edit/:id"
                element={
                  <AdminRoute>
                    <EditProjectHOC />
                  </AdminRoute>
                }
              />
              <Route
                path="/admin/item/edit/:id"
                element={
                  <AdminRoute>
                    <EditCarouselHOC />
                  </AdminRoute>
                }
              />
              <Route
                path="/admin/rnd/edit/:id"
                element={
                  <AdminRoute>
                    <EditRndHOC />
                  </AdminRoute>
                }
              />
              <Route
                path="/admin/member/edit/:id"
                element={
                  <AdminRoute>
                    <EditMemberHOC />
                  </AdminRoute>
                }
              />

              <Route
                path="/user/dashboard"
                element={
                  <UserRoute>
                    <UserDashboardHOC />
                  </UserRoute>
                }
              />
              {/* <Route path='*' element={<NotFound />}></Route> */}
            </Routes>
          </BrowserRouter>
        </ProSidebarProvider>
      </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
