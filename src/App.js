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
import EditVideo from "./admin/EditVideo";
import Theader from "./components/Shared/Headers/Theader";
import FeasibilityStudy from "./components/OurServices/FeasibilityStudy";
import Feasibility from "./components/OurServices/ServicesCards/Feasibility";
import DigitalSurvey from "./components/OurServices/ServicesCards/DigitalSurvey";
import TrafficSurvey from "./components/OurServices/ServicesCards/TrafficSurvey";
import SiteVisit from "./components/OurServices/ServicesCards/SiteVisit";
import DroneSurvey from "./components/OurServices/ServicesCards/DroneSurvey";
import SoilTest from "./components/OurServices/ServicesCards/SoilTest";
import Integration from "./components/OurServices/ServicesCards/Integration";
import Design from "./components/OurServices/Design/Design";
import Architecture from "./components/OurServices/Design/Architecture";
import Electrical from "./components/OurServices/Design/Electrical";
import Infrastructure from "./components/OurServices/Design/Infrastructure";
import LeedConsultancy from "./components/OurServices/Design/LeedConsultancy";
import Lighting from "./components/OurServices/Design/Lighting";
import MasterPlaning from "./components/OurServices/Design/MasterPlaning";
import Mechanical from "./components/OurServices/Design/Mechanical";
import Plumbing from "./components/OurServices/Design/Plumbing";
import Structure from "./components/OurServices/Design/Structure";
import Build from "./components/OurServices/Build/Build";
import CivilConstruction from "./components/OurServices/Build/CivilConstruction";
import CostEstimate from "./components/OurServices/Build/CostEstimate";
import Facelifting from "./components/OurServices/Build/Facelifting";
import PMC from "./components/OurServices/Build/PMC";
import Retrofitting from "./components/OurServices/Build/Retrofitting";
import SiteSupervision from "./components/OurServices/Build/SiteSupervision";
import Interior from "./components/OurServices/Interior/Interior";
import Accessories from "./components/OurServices/Interior/Accessories";
import Furniture from "./components/OurServices/Interior/Furniture";
import Industrial from "./components/OurServices/Interior/Industrial";
import LightingInterior from "./components/OurServices/Interior/LightingInterior";
import Office from "./components/OurServices/Interior/Office";
import Residential from "./components/OurServices/Interior/Residential";
import Retail from "./components/OurServices/Interior/Retail";
import Sculpture from "./components/OurServices/Interior/Sculpture";
import TdWorks from "./components/OurServices/TdWorks/TdWorks";
import Furniture3d from "./components/OurServices/Interior/Furniture";
import ArchBd from "./components/OurServices/TdWorks/ArchBd";
import ArchGlobal from "./components/OurServices/TdWorks/ArchGlobal";
import Construction3d from "./components/OurServices/TdWorks/Construction3d";
import GameCinema from "./components/OurServices/TdWorks/GameCinema";
import OilGas from "./components/OurServices/TdWorks/OilGas";
import Products3d from "./components/OurServices/TdWorks/Products3d";
import Solar3d from "./components/OurServices/TdWorks/Solar3d";
import Technical from "./components/OurServices/TdWorks/Technical";
import VsWorks from "./components/OurServices/TdWorks/VsWorks";
import CustomCursor from "./CustomCursor/CustomCursor";
import TestCursor from "./CustomCursor/TestCursor";

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
      <ThemeProvider>
        {/* <TestCursor /> */}
      <CustomCursor />
        <ToastContainer />

        <Provider store={store}>
          <ProSidebarProvider>
            <BrowserRouter>
              {/* <Theader /> */}
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
                <Route path="/contact" element={<Contact />}></Route>

                {/* services */}
                <Route path="/pre-design" element={<Feasibility />}></Route>
                <Route path="/design" element={<Design />}></Route>
                <Route path="/build" element={<Build />}></Route>
                <Route path="/interior" element={<Interior />}></Route>
                <Route path="/3d-works" element={<TdWorks />}></Route>

                {/* pre design */}

                <Route
                  path="/pre-design/feasibility-study"
                  element={<FeasibilityStudy />}
                ></Route>

                <Route path="/pre-design/site-visit" element={<SiteVisit />} />
                <Route
                  path="/pre-design/digital-survey"
                  element={<DigitalSurvey />}
                />
                <Route
                  path="/pre-design/drone-survey"
                  element={<DroneSurvey />}
                />
                <Route path="/pre-design/soil-test" element={<SoilTest />} />
                <Route
                  path="/pre-design/integration"
                  element={<Integration />}
                />
                <Route
                  path="/pre-design/traffic-survey"
                  element={<TrafficSurvey />}
                />

                {/* design */}
                <Route path="/design/architecture" element={<Architecture />} />
                <Route path="/design/electrical" element={<Electrical />} />
                <Route
                  path="/design/infrastructure"
                  element={<Infrastructure />}
                />
                <Route
                  path="/design/leed-consultancy"
                  element={<LeedConsultancy />}
                />
                <Route path="/design/lighting" element={<Lighting />} />
                <Route
                  path="/design/master-planing"
                  element={<MasterPlaning />}
                />
                <Route path="/design/mechanical" element={<Mechanical />} />
                <Route path="/design/plumbing" element={<Plumbing />} />
                <Route path="/design/structure" element={<Structure />} />

                {/* build */}
                <Route path="/build/civilConstruction" element={<CivilConstruction />} />
                <Route path="/build/cost-estimate" element={<CostEstimate />} />
                <Route path="/build/face-lifting" element={<Facelifting />} />
                <Route path="/build/pmc" element={<PMC />} />
                <Route path="/build/retrofitting" element={<Retrofitting />} />
                <Route path="/build/site-supervision" element={<SiteSupervision />} />


                {/* Interior */}
                <Route path="/interior/accessories" element={<Accessories />} />
                <Route path="/interior/furniture" element={<Furniture />} />
                <Route path="/interior/industrial" element={<Industrial />} />
                <Route path="/interior/lighting-interior" element={<LightingInterior />} />
                <Route path="/interior/office" element={<Office />} />
                <Route path="/interior/residential" element={<Residential />} />
                <Route path="/interior/retail" element={<Retail />} />
                <Route path="/interior/sculpture" element={<Sculpture />} />


{/* 3d works */}
                <Route path="/3d-works/arch" element={<ArchBd />} />
                <Route path="/3d-works/arch-global" element={<ArchGlobal />} />
                <Route path="/3d-works/construction-3d" element={<Construction3d />} />
                <Route path="/3d-works/game-cinema" element={<GameCinema />} />
                <Route path="/3d-works/oil-gas" element={<OilGas />} />
                <Route path="/3d-works/products-3d" element={<Products3d />} />
                <Route path="/3d-works/solar-3d" element={<Solar3d />} />
                <Route path="/3d-works/technical" element={<Technical />} />
                <Route path="/3d-works/vs-works" element={<VsWorks />} />
                














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
                  path="/admin/carousel/edit/:id"
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
