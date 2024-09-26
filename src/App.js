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
import BlogPro from "./pages/BlogPro";
import SinglePro from "./pages/SinglePro";
import CreateProduct from "./admin/CreateProduct";
import EditProduct from "./admin/EditProduct";
import { useEffect, useState } from "react";
import CreateItem from "./admin/CreateItem";
import EditItem from "./admin/EditItem";

// new imports
import Home from "./pages/Home/Home";
import Register from "./pages/Register";
import SinglePost from "./pages/SinglePost";
import SampleLogin from "./components/SampleLoginPage.js/SampleLogin";

//HOC
const AdminDashboardHOC = Layout(AdminDashboard);

const CreatePostHOC = Layout(CreatePost);
const CreateItemHOC = Layout(CreateItem);
const CreateProductHOC = Layout(CreateProduct);
const EditPostHOC = Layout(EditPost);
const EditItemHOC = Layout(EditItem);
const EditProductHOC = Layout(EditProduct);
const UserDashboardHOC = Layout(UserDashboard);

function App() {
  return (
    <>
      <ToastContainer />
      <Provider store={store}>
        <ProSidebarProvider>
          <BrowserRouter>
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
              <Route path='/contact' element={<Contact />}></Route>
              

              <Route path="/" element={<BlogHome />} />
              <Route path="/blog" element={<BlogHome />} />

              <Route path="/login" element={<LogIn />} />
              <Route path="/register" element={<Register />} />

              <Route path="/post/:id" element={<SinglePost />} />

              
              <Route path="/log" element={<SampleLogin />} />

              

              <Route
                path="/admin/dashboard"
                element={
                  <AdminRoute>
                    <AdminDashboardHOC />
                  </AdminRoute>
                }
              />

              <Route
                path="/admin/post/create"
                element={
                  <AdminRoute>
                    <CreatePostHOC />
                  </AdminRoute>
                }
              />
              <Route
                path="/admin/item/create"
                element={
                  <AdminRoute>
                    <CreateItemHOC />
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
              {/* <Route
                path="/admin/gallery/create"
                element={
                  <AdminRoute>
                    <CreateGalleryHOC />
                  </AdminRoute>
                }
              /> */}

              <Route
                path="/admin/post/edit/:id"
                element={
                  <AdminRoute>
                    <EditPostHOC />
                  </AdminRoute>
                }
              />
              <Route
                path="/admin/item/edit/:id"
                element={
                  <AdminRoute>
                    <EditItemHOC />
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
              {/* <Route
                path="/admin/gallery/edit/:id"
                element={
                  <AdminRoute>
                    <EditGalleryHOC />
                  </AdminRoute>
                }
              /> */}

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
    </>
  );
}

export default App;
