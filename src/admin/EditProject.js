import { Box, Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import Dropzone from "react-dropzone";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import axios from "axios";
import { toast } from "react-toastify";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { modules } from "../components/moduleToolbar";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../pages/axiosInstance";
// import axiosInstance from "../pages/axiosInstance";

const validationSchema = yup.object({
  title: yup.object().shape({
    en: yup.string("Add a title in English").required("Title is required"),
    bn: yup.string("Add a title in bengali").required("Title is required"),
    es: yup.string("Add a title in Danish").required("Title is required"),
  }),
  content: yup.object().shape({
    en: yup.string("Add a title in English").required("Title is required"),
    bn: yup.string("Add a title in bengali").required("Title is required"),
    es: yup.string("Add a title in Danish").required("Title is required"),
  }),
  address: yup.object().shape({
    en: yup.string("Add a title in English").required("Title is required"),
    bn: yup.string("Add a title in bengali").required("Title is required"),
    es: yup.string("Add a title in Danish").required("Title is required"),
  }),
  landArea: yup.object().shape({
    en: yup.string("Add a title in English").required("Title is required"),
    bn: yup.string("Add a title in bengali").required("Title is required"),
    es: yup.string("Add a title in Danish").required("Title is required"),
  }),
  floors: yup.object().shape({
    en: yup.string("Add a title in English").required("Title is required"),
    bn: yup.string("Add a title in bengali").required("Title is required"),
    es: yup.string("Add a title in Danish").required("Title is required"),
  }),
  frontRoad: yup.object().shape({
    en: yup.string("Add a title in English").required("Title is required"),
    bn: yup.string("Add a title in bengali").required("Title is required"),
    es: yup.string("Add a title in Danish").required("Title is required"),
  }),
  units: yup.object().shape({
    en: yup.string("Add a title in English").required("Title is required"),
    bn: yup.string("Add a title in bengali").required("Title is required"),
    es: yup.string("Add a title in Danish").required("Title is required"),
  }),
  parking: yup.object().shape({
    en: yup.string("Add a title in English").required("Title is required"),
    bn: yup.string("Add a title in bengali").required("Title is required"),
    es: yup.string("Add a title in Danish").required("Title is required"),
  }),
  apartmentFloor: yup.object().shape({
    en: yup.string("Add a title in English").required("Title is required"),
    bn: yup.string("Add a title in bengali").required("Title is required"),
    es: yup.string("Add a title in Danish").required("Title is required"),
  }),
  size: yup.object().shape({
    en: yup.string("Add a title in English").required("Title is required"),
    bn: yup.string("Add a title in bengali").required("Title is required"),
    es: yup.string("Add a title in Danish").required("Title is required"),
  }),
  bedroom: yup.object().shape({
    en: yup.string("Add a title in English").required("Title is required"),
    bn: yup.string("Add a title in bengali").required("Title is required"),
    es: yup.string("Add a title in Danish").required("Title is required"),
  }),
  bathroom: yup.object().shape({
    en: yup.string("Add a title in English").required("Title is required"),
    bn: yup.string("Add a title in bengali").required("Title is required"),
    es: yup.string("Add a title in Danish").required("Title is required"),
  }),
  launchDate: yup.object().shape({
    en: yup.string("Add a title in English").required("Title is required"),
    bn: yup.string("Add a title in bengali").required("Title is required"),
    es: yup.string("Add a title in Danish").required("Title is required"),
  }),
  collectionName: yup.object().shape({
    en: yup.string("Add a title in English").required("Title is required"),
    bn: yup.string("Add a title in bengali").required("Title is required"),
    es: yup.string("Add a title in Danish").required("Title is required"),
  }),
  buildingType: yup.object().shape({
    en: yup.string("Add a title in English").required("Title is required"),
    bn: yup.string("Add a title in bengali").required("Title is required"),
    es: yup.string("Add a title in Danish").required("Title is required"),
  }),
  mosque: yup.object().shape({
    en: yup.string("Add a title in English").required("Title is required"),
    bn: yup.string("Add a title in bengali").required("Title is required"),
    es: yup.string("Add a title in Danish").required("Title is required"),
  }),

  college: yup.object().shape({
    en: yup.string("Add a title in English").required("Title is required"),
    bn: yup.string("Add a title in bengali").required("Title is required"),
    es: yup.string("Add a title in Danish").required("Title is required"),
  }),
  school: yup.object().shape({
    en: yup.string("Add a title in English").required("Title is required"),
    bn: yup.string("Add a title in bengali").required("Title is required"),
    es: yup.string("Add a title in Danish").required("Title is required"),
  }),
  market: yup.object().shape({
    en: yup.string("Add a title in English").required("Title is required"),
    bn: yup.string("Add a title in bengali").required("Title is required"),
    es: yup.string("Add a title in Danish").required("Title is required"),
  }),
  bank1: yup.object().shape({
    en: yup.string("Add a title in English").required("Title is required"),
    bn: yup.string("Add a title in bengali").required("Title is required"),
    es: yup.string("Add a title in Danish").required("Title is required"),
  }),

  bank2: yup.object().shape({
    en: yup.string("Add a title in English").required("Title is required"),
    bn: yup.string("Add a title in bengali").required("Title is required"),
    es: yup.string("Add a title in Danish").required("Title is required"),
  }),

  atm: yup.object().shape({
    en: yup.string("Add a title in English").required("Title is required"),
    bn: yup.string("Add a title in bengali").required("Title is required"),
    es: yup.string("Add a title in Danish").required("Title is required"),
  }),
  busStop: yup.object().shape({
    en: yup.string("Add a title in English").required("Title is required"),
    bn: yup.string("Add a title in bengali").required("Title is required"),
    es: yup.string("Add a title in Danish").required("Title is required"),
  }),
  mosqueName: yup.object().shape({
    en: yup.string("Add a title in English").required("Title is required"),
    bn: yup.string("Add a title in bengali").required("Title is required"),
    es: yup.string("Add a title in Danish").required("Title is required"),
  }),

  collegeName: yup.object().shape({
    en: yup.string("Add a title in English").required("Title is required"),
    bn: yup.string("Add a title in bengali").required("Title is required"),
    es: yup.string("Add a title in Danish").required("Title is required"),
  }),

  schoolName: yup.object().shape({
    en: yup.string("Add a title in English").required("Title is required"),
    bn: yup.string("Add a title in bengali").required("Title is required"),
    es: yup.string("Add a title in Danish").required("Title is required"),
  }),

  marketName: yup.object().shape({
    en: yup.string("Add a title in English").required("Title is required"),
    bn: yup.string("Add a title in bengali").required("Title is required"),
    es: yup.string("Add a title in Danish").required("Title is required"),
  }),

  bank1Name: yup.object().shape({
    en: yup.string("Add a title in English").required("Title is required"),
    bn: yup.string("Add a title in bengali").required("Title is required"),
    es: yup.string("Add a title in Danish").required("Title is required"),
  }),
  bank2Name: yup.object().shape({
    en: yup.string("Add a title in English").required("Title is required"),
    bn: yup.string("Add a title in bengali").required("Title is required"),
    es: yup.string("Add a title in Danish").required("Title is required"),
  }),
  atmName: yup.object().shape({
    en: yup.string("Add a title in English").required("Title is required"),
    bn: yup.string("Add a title in bengali").required("Title is required"),
    es: yup.string("Add a title in Danish").required("Title is required"),
  }),

  busStopName: yup.object().shape({
    en: yup.string("Add a title in English").required("Title is required"),
    bn: yup.string("Add a title in bengali").required("Title is required"),
    es: yup.string("Add a title in Danish").required("Title is required"),
  }),


  category: yup.string("Select a category").required("Category is required"),

});

const EditProject = () => {
  const { id } = useParams();
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [landArea, setLandArea] = useState("");
  const [floors, setFloors] = useState("");
  const [frontRoad, setFrontRoad] = useState("");
  const [units, setUnits] = useState("");
  const [parking, setParking] = useState("");
  const [apartmentFloor, setApartmentFloor] = useState("");
  const [size, setSize] = useState("");
  const [bedroom, setBedroom] = useState("");
  const [bathroom, setBathroom] = useState("");
  const [launchDate, setLaunchDate] = useState("");
  const [collectionName, setCollectionName] = useState("");
  const [buildingType, setBuildingType] = useState("");
  
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");

  const navigate = useNavigate();

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      title: { en: "", bn: "", es: "" },
      content: { en: "", bn: "", es: "" },
      address: { en: "", bn: "", es: "" },
      landArea: { en: "", bn: "", es: "" },
      floors: { en: "", bn: "", es: "" },
      frontRoad: { en: "", bn: "", es: "" },
      units: { en: "", bn: "", es: "" },
      parking: { en: "", bn: "", es: "" },
      apartmentFloor: { en: "", bn: "", es: "" },
      size: { en: "", bn: "", es: "" },
      bedroom: { en: "", bn: "", es: "" },
      bathroom: { en: "", bn: "", es: "" },
      launchDate: { en: "", bn: "", es: "" },
      collectionName: { en: "", bn: "", es: "" },
      buildingType: { en: "", bn: "", es: "" },

      mosque: { en: "", bn: "", es: "" },
      college: { en: "", bn: "", es: "" },
      school: { en: "", bn: "", es: "" },
      market: { en: "", bn: "", es: "" },
      bank1: { en: "", bn: "", es: "" },
      bank2: { en: "", bn: "", es: "" },

      atm: { en: "", bn: "", es: "" },
      busStop: { en: "", bn: "", es: "" },
      mosqueName: { en: "", bn: "", es: "" },
      collegeName: { en: "", bn: "", es: "" },
      schoolName: { en: "", bn: "", es: "" },
      marketName: { en: "", bn: "", es: "" },
      bank1Name: { en: "", bn: "", es: "" },
      bank2Name: { en: "", bn: "", es: "" },
      atmName: { en: "", bn: "", es: "" },
      busStopName: { en: "", bn: "", es: "" },

      image: "",
    },

    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit: (values, actions) => {
      updateProject(values);
      //alert(JSON.stringify(values, null, 2));
      actions.resetForm();
    },
  });

  //show post by Id
  const singleProjectById = async () => {
    // console.log(id)
    try {
      //
      const { data } = await axiosInstance.get(
        `${process.env.REACT_APP_API_URL}/api/project/${id}`
      );
      console.log(data)
      setFieldValue("title.en", data.project.title.en);
      setFieldValue("title.bn", data.project.title.bn);
      setFieldValue("title.es", data.project.title.es);

      setFieldValue("content.en", data.project.content.en);
      setFieldValue("content.bn", data.project.content.bn);
      setFieldValue("content.es", data.project.content.es);

      setFieldValue("address.en", data.project.address.en);
      setFieldValue("address.bn", data.project.address.bn);
      setFieldValue("address.es", data.project.address.es);


      setFieldValue("landArea.en", data.project.landArea.en);
      setFieldValue("landArea.bn", data.project.landArea.bn);
      setFieldValue("landArea.es", data.project.landArea.es);

      setFieldValue("floors.en", data.project.floors.en);
      setFieldValue("floors.bn", data.project.floors.bn);
      setFieldValue("floors.es", data.project.floors.es);

      setFieldValue("apartmentFloor.en", data.project.apartmentFloor.en);
      setFieldValue("apartmentFloor.bn", data.project.apartmentFloor.bn);
      setFieldValue("apartmentFloor.es", data.project.apartmentFloor.es);

      
      setFieldValue("size.en", data.project.size.en);
      setFieldValue("size.bn", data.project.size.bn);
      setFieldValue("size.es", data.project.size.es);

      
      setFieldValue("bedroom.en", data.project.bedroom.en);
      setFieldValue("bedroom.bn", data.project.bedroom.bn);
      setFieldValue("bedroom.es", data.project.bedroom.es);

      setFieldValue("bathroom.en", data.project.bathroom.en);
      setFieldValue("bathroom.bn", data.project.bathroom.bn);
      setFieldValue("bathroom.es", data.project.bathroom.es);

      
      setFieldValue("launchDate.en", data.project.launchDate.en);
      setFieldValue("launchDate.bn", data.project.launchDate.bn);
      setFieldValue("launchDate.es", data.project.launchDate.es);

     

      setFieldValue("collectionName.en", data.project.collectionName.en);
      setFieldValue("collectionName.bn", data.project.collectionName.bn);
      setFieldValue("collectionName.es", data.project.collectionName.es);


      setFieldValue("buildingType.en", data.project.buildingType.en);
      setFieldValue("buildingType.bn", data.project.buildingType.bn);
      setFieldValue("buildingType.es", data.project.buildingType.es);



      setFieldValue("frontRoad.en", data.project.frontRoad.en);
      setFieldValue("frontRoad.bn", data.project.frontRoad.bn);
      setFieldValue("frontRoad.es", data.project.frontRoad.es);

      setFieldValue("units.en", data.project.units.en);
      setFieldValue("units.bn", data.project.units.bn);
      setFieldValue("units.es", data.project.units.es);

      setFieldValue("parking.en", data.project.parking.en);
      setFieldValue("parking.bn", data.project.parking.bn);
      setFieldValue("parking.es", data.project.parking.es);

     
      setFieldValue("parking.en", data.project.parking.en);
      setFieldValue("parking.bn", data.project.parking.bn);
      setFieldValue("parking.es", data.project.parking.es);

     
      setFieldValue("apartmentFloor.en", data.project.apartmentFloor.en);
      setFieldValue("apartmentFloor.bn", data.project.apartmentFloor.bn);
      setFieldValue("apartmentFloor.es", data.project.apartmentFloor.es);

     
      setFieldValue("size.en", data.project.size.en);
      setFieldValue("size.bn", data.project.size.bn);
      setFieldValue("size.es", data.project.size.es);

     
      setFieldValue("bedroom.en", data.project.bedroom.en);
      setFieldValue("bedroom.bn", data.project.bedroom.bn);
      setFieldValue("bedroom.es", data.project.bedroom.es);

     
      setFieldValue("bathroom.en", data.project.bathroom.en);
      setFieldValue("bathroom.bn", data.project.bathroom.bn);
      setFieldValue("bathroom.es", data.project.bathroom.es);

     
      setFieldValue("launchDate.en", data.project.launchDate.en);
      setFieldValue("launchDate.bn", data.project.launchDate.bn);
      setFieldValue("launchDate.es", data.project.launchDate.es);

     
      setFieldValue("collectionName.en", data.project.collectionName.en);
      setFieldValue("collectionName.bn", data.project.collectionName.bn);
      setFieldValue("collectionName.es", data.project.collectionName.es);

     
      setFieldValue("buildingType.en", data.project.buildingType.en);
      setFieldValue("buildingType.bn", data.project.buildingType.bn);
      setFieldValue("buildingType.es", data.project.buildingType.es);

     
      setFieldValue("mosque.en", data.project.mosque.en);
      setFieldValue("mosque.bn", data.project.mosque.bn);
      setFieldValue("mosque.es", data.project.mosque.es);

     
      setFieldValue("college.en", data.project.college.en);
      setFieldValue("college.bn", data.project.college.bn);
      setFieldValue("college.es", data.project.college.es);

     
      setFieldValue("school.en", data.project.school.en);
      setFieldValue("school.bn", data.project.school.bn);
      setFieldValue("school.es", data.project.school.es);

     
      setFieldValue("market.en", data.project.market.en);
      setFieldValue("market.bn", data.project.market.bn);
      setFieldValue("market.es", data.project.market.es);

     
      setFieldValue("bank1.en", data.project.bank1.en);
      setFieldValue("bank1.bn", data.project.bank1.bn);
      setFieldValue("bank1.es", data.project.bank1.es);

     
      setFieldValue("bank2.en", data.project.bank2.en);
      setFieldValue("bank2.bn", data.project.bank2.bn);
      setFieldValue("bank2.es", data.project.bank2.es);

     
      setFieldValue("atm.en", data.project.atm.en);
      setFieldValue("atm.bn", data.project.atm.bn);
      setFieldValue("atm.es", data.project.atm.es);

     
      setFieldValue("busStop.en", data.project.busStop.en);
      setFieldValue("busStop.bn", data.project.busStop.bn);
      setFieldValue("busStop.es", data.project.busStop.es);

     
      setFieldValue("mosqueName.en", data.project.mosqueName.en);
      setFieldValue("mosqueName.bn", data.project.mosqueName.bn);
      setFieldValue("mosqueName.es", data.project.mosqueName.es);

     
      setFieldValue("collegeName.en", data.project.collegeName.en);
      setFieldValue("collegeName.bn", data.project.collegeName.bn);
      setFieldValue("collegeName.es", data.project.collegeName.es);

     
      setFieldValue("schoolName.en", data.project.schoolName.en);
      setFieldValue("schoolName.bn", data.project.schoolName.bn);
      setFieldValue("schoolName.es", data.project.schoolName.es);

     
      setFieldValue("marketName.en", data.project.marketName.en);
      setFieldValue("marketName.bn", data.project.marketName.bn);
      setFieldValue("marketName.es", data.project.marketName.es);

     
      setFieldValue("bank1Name.en", data.project.bank1Name.en);
      setFieldValue("bank1Name.bn", data.project.bank1Name.bn);
      setFieldValue("bank1Name.es", data.project.bank1Name.es);

     
     
      setFieldValue("bank2Name.en", data.project.bank2Name.en);
      setFieldValue("bank2Name.bn", data.project.bank2Name.bn);
      setFieldValue("bank2Name.es", data.project.bank2Name.es);

     
     
      setFieldValue("atmName.en", data.project.atmName.en);
      setFieldValue("atmName.bn", data.project.atmName.bn);
      setFieldValue("atmName.es", data.project.atmName.es);

     
     
      setFieldValue("busStopName.en", data.project.busStopName.en);
      setFieldValue("busStopName.bn", data.project.busStopName.bn);
      setFieldValue("busStopName.es", data.project.busStopName.es);

      setImagePreview(data.project.image.url);
    
      console.log("single project admin", data.project);
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  useEffect(() => {
    singleProjectById();
  }, []);

  const updateProject = async (values) => {
    try {
      const result = await axiosInstance.put(
        `${process.env.REACT_APP_API_URL}/api/update/project/${id}`,
        values
      );

      console.log(result);
      if (result?.data?.success === true) {
        toast.success("project updated");
        navigate("/admin/dashboard");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.error);
    }
  };

  return (
    <>
      <Box sx={{ bgcolor: "white", padding: "20px 200px" }}>
        <Typography variant="h5" sx={{ pb: 4 }}>
          {" "}
          Edit project{" "}
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="title-en"
            label="Title (English)"
            name="title.en"
            placeholder="Title in English"
            value={values.title.en}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.title?.en && Boolean(errors.title?.en)}
            helperText={touched.title?.en && errors.title?.en}
          />

          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="title-bn"
            label="Title (Bengali)"
            name="title.bn"
            placeholder="Title in Bengali"
            value={values.title.bn}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.title?.bn && Boolean(errors.title?.bn)}
            helperText={touched.title?.bn && errors.title?.bn}
          />

          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="title-es"
            label="Title (Danish)"
            name="title.es"
            placeholder="Title in Danish"
            value={values.title.es}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.title?.es && Boolean(errors.title?.es)}
            helperText={touched.title?.es && errors.title?.es}
          />

          {/* Content Inputs for Multiple Languages */}
          <Typography variant="subtitle1">Content</Typography>
          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="content-en"
            label="Content (English)"
            name="content.en"
            multiline
            rows={4}
            placeholder="Content in English"
            value={values.content.en}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.content?.en && Boolean(errors.content?.en)}
            helperText={touched.content?.en && errors.content?.en}
          />

          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="content-bn"
            label="Content (Bengali)"
            name="content.bn"
            multiline
            rows={4}
            placeholder="Content in Bengali"
            value={values.content.bn}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.content?.bn && Boolean(errors.content?.bn)}
            helperText={touched.content?.bn && errors.content?.bn}
          />

          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="content-es"
            label="Content (Danish)"
            name="content.es"
            multiline
            rows={4}
            placeholder="Content in Danish"
            value={values.content.es}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.content?.es && Boolean(errors.content?.es)}
            helperText={touched.content?.es && errors.content?.es}
          />

          {/* start */}

          
          {/* address Inputs for Multiple Languages */}
          <Typography variant="subtitle1">Address</Typography>
          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="address-en"
            label="address (English)"
            name="address.en"
            multiline
            rows={4}
            placeholder="address in English"
            value={values.address.en}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.address?.en && Boolean(errors.address?.en)}
            helperText={touched.address?.en && errors.address?.en}
          />

          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="address-bn"
            label="address (Bengali)"
            name="address.bn"
            multiline
            rows={4}
            placeholder="address in Bengali"
            value={values.address.bn}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.address?.bn && Boolean(errors.address?.bn)}
            helperText={touched.address?.bn && errors.address?.bn}
          />

          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="address-es"
            label="address (Danish)"
            name="address.es"
            multiline
            rows={4}
            placeholder="address in Danish"
            value={values.address.es}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.address?.es && Boolean(errors.address?.es)}
            helperText={touched.address?.es && errors.address?.es}
          />


          
          {/* landArea Inputs for Multiple Languages */}
          <Typography variant="subtitle1">landArea</Typography>
          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="landArea-en"
            label="landArea (English)"
            name="landArea.en"
            multiline
            rows={4}
            placeholder="landArea in English"
            value={values.landArea.en}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.landArea?.en && Boolean(errors.landArea?.en)}
            helperText={touched.landArea?.en && errors.landArea?.en}
          />

          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="landArea-bn"
            label="landArea (Bengali)"
            name="landArea.bn"
            multiline
            rows={4}
            placeholder="landArea in Bengali"
            value={values.landArea.bn}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.landArea?.bn && Boolean(errors.landArea?.bn)}
            helperText={touched.landArea?.bn && errors.landArea?.bn}
          />

          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="landArea-es"
            label="landArea (Danish)"
            name="landArea.es"
            multiline
            rows={4}
            placeholder="landArea in Danish"
            value={values.landArea.es}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.landArea?.es && Boolean(errors.landArea?.es)}
            helperText={touched.landArea?.es && errors.landArea?.es}
          />


          
          {/* floors Inputs for Multiple Languages */}
          <Typography variant="subtitle1">floors</Typography>
          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="floors-en"
            label="floors (English)"
            name="floors.en"
            multiline
            rows={4}
            placeholder="floors in English"
            value={values.floors.en}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.floors?.en && Boolean(errors.floors?.en)}
            helperText={touched.floors?.en && errors.floors?.en}
          />

          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="floors-bn"
            label="floors (Bengali)"
            name="floors.bn"
            multiline
            rows={4}
            placeholder="floors in Bengali"
            value={values.floors.bn}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.floors?.bn && Boolean(errors.floors?.bn)}
            helperText={touched.floors?.bn && errors.floors?.bn}
          />

          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="floors-es"
            label="floors (Danish)"
            name="floors.es"
            multiline
            rows={4}
            placeholder="floors in Danish"
            value={values.floors.es}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.floors?.es && Boolean(errors.floors?.es)}
            helperText={touched.floors?.es && errors.floors?.es}
          />


          
          {/* frontRoad Inputs for Multiple Languages */}
          <Typography variant="subtitle1">Front Road</Typography>
          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="frontRoad-en"
            label="frontRoad (English)"
            name="frontRoad.en"
            multiline
            rows={4}
            placeholder="frontRoad in English"
            value={values.frontRoad.en}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.frontRoad?.en && Boolean(errors.frontRoad?.en)}
            helperText={touched.frontRoad?.en && errors.frontRoad?.en}
          />

          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="frontRoad-bn"
            label="frontRoad (Bengali)"
            name="frontRoad.bn"
            multiline
            rows={4}
            placeholder="frontRoad in Bengali"
            value={values.frontRoad.bn}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.frontRoad?.bn && Boolean(errors.frontRoad?.bn)}
            helperText={touched.frontRoad?.bn && errors.frontRoad?.bn}
          />

          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="frontRoad-es"
            label="frontRoad (Danish)"
            name="frontRoad.es"
            multiline
            rows={4}
            placeholder="frontRoad in Danish"
            value={values.frontRoad.es}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.frontRoad?.es && Boolean(errors.frontRoad?.es)}
            helperText={touched.frontRoad?.es && errors.frontRoad?.es}
          />


          
          {/* units Inputs for Multiple Languages */}
          <Typography variant="subtitle1">Units</Typography>
          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="units-en"
            label="units (English)"
            name="units.en"
            multiline
            rows={4}
            placeholder="units in English"
            value={values.units.en}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.units?.en && Boolean(errors.units?.en)}
            helperText={touched.units?.en && errors.units?.en}
          />

          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="units-bn"
            label="units (Bengali)"
            name="units.bn"
            multiline
            rows={4}
            placeholder="units in Bengali"
            value={values.units.bn}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.units?.bn && Boolean(errors.units?.bn)}
            helperText={touched.units?.bn && errors.units?.bn}
          />

          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="units-es"
            label="units (Danish)"
            name="units.es"
            multiline
            rows={4}
            placeholder="units in Danish"
            value={values.units.es}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.units?.es && Boolean(errors.units?.es)}
            helperText={touched.units?.es && errors.units?.es}
          />


          
          {/* parking Inputs for Multiple Languages */}
          <Typography variant="subtitle1">parking</Typography>
          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="parking-en"
            label="parking (English)"
            name="parking.en"
            multiline
            rows={4}
            placeholder="parking in English"
            value={values.parking.en}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.parking?.en && Boolean(errors.parking?.en)}
            helperText={touched.parking?.en && errors.parking?.en}
          />

          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="parking-bn"
            label="parking (Bengali)"
            name="parking.bn"
            multiline
            rows={4}
            placeholder="parking in Bengali"
            value={values.parking.bn}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.parking?.bn && Boolean(errors.parking?.bn)}
            helperText={touched.parking?.bn && errors.parking?.bn}
          />

          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="parking-es"
            label="parking (Danish)"
            name="parking.es"
            multiline
            rows={4}
            placeholder="parking in Danish"
            value={values.parking.es}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.parking?.es && Boolean(errors.parking?.es)}
            helperText={touched.parking?.es && errors.parking?.es}
          />


          
          {/* apartmentFloor Inputs for Multiple Languages */}
          <Typography variant="subtitle1">apartmentFloor</Typography>
          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="apartmentFloor-en"
            label="apartmentFloor (English)"
            name="apartmentFloor.en"
            multiline
            rows={4}
            placeholder="apartmentFloor in English"
            value={values.apartmentFloor.en}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.apartmentFloor?.en && Boolean(errors.apartmentFloor?.en)}
            helperText={touched.apartmentFloor?.en && errors.apartmentFloor?.en}
          />

          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="apartmentFloor-bn"
            label="apartmentFloor (Bengali)"
            name="apartmentFloor.bn"
            multiline
            rows={4}
            placeholder="apartmentFloor in Bengali"
            value={values.apartmentFloor.bn}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.apartmentFloor?.bn && Boolean(errors.apartmentFloor?.bn)}
            helperText={touched.apartmentFloor?.bn && errors.apartmentFloor?.bn}
          />

          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="apartmentFloor-es"
            label="apartmentFloor (Danish)"
            name="apartmentFloor.es"
            multiline
            rows={4}
            placeholder="apartmentFloor in Danish"
            value={values.apartmentFloor.es}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.apartmentFloor?.es && Boolean(errors.apartmentFloor?.es)}
            helperText={touched.apartmentFloor?.es && errors.apartmentFloor?.es}
          />


          
          {/* size Inputs for Multiple Languages */}
          <Typography variant="subtitle1">size</Typography>
          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="size-en"
            label="size (English)"
            name="size.en"
            multiline
            rows={4}
            placeholder="size in English"
            value={values.size.en}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.size?.en && Boolean(errors.size?.en)}
            helperText={touched.size?.en && errors.size?.en}
          />

          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="size-bn"
            label="size (Bengali)"
            name="size.bn"
            multiline
            rows={4}
            placeholder="size in Bengali"
            value={values.size.bn}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.size?.bn && Boolean(errors.size?.bn)}
            helperText={touched.size?.bn && errors.size?.bn}
          />

          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="size-es"
            label="size (Danish)"
            name="size.es"
            multiline
            rows={4}
            placeholder="size in Danish"
            value={values.size.es}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.size?.es && Boolean(errors.size?.es)}
            helperText={touched.size?.es && errors.size?.es}
          />


          
          {/* bedroom Inputs for Multiple Languages */}
          <Typography variant="subtitle1">bedroom</Typography>
          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="bedroom-en"
            label="bedroom (English)"
            name="bedroom.en"
            multiline
            rows={4}
            placeholder="bedroom in English"
            value={values.bedroom.en}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.bedroom?.en && Boolean(errors.bedroom?.en)}
            helperText={touched.bedroom?.en && errors.bedroom?.en}
          />

          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="bedroom-bn"
            label="bedroom (Bengali)"
            name="bedroom.bn"
            multiline
            rows={4}
            placeholder="bedroom in Bengali"
            value={values.bedroom.bn}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.bedroom?.bn && Boolean(errors.bedroom?.bn)}
            helperText={touched.bedroom?.bn && errors.bedroom?.bn}
          />

          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="bedroom-es"
            label="bedroom (Danish)"
            name="bedroom.es"
            multiline
            rows={4}
            placeholder="bedroom in Danish"
            value={values.bedroom.es}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.bedroom?.es && Boolean(errors.bedroom?.es)}
            helperText={touched.bedroom?.es && errors.bedroom?.es}
          />


          
          {/* launchDate Inputs for Multiple Languages */}
          <Typography variant="subtitle1">launchDate</Typography>
          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="launchDate-en"
            label="launchDate (English)"
            name="launchDate.en"
            multiline
            rows={4}
            placeholder="launchDate in English"
            value={values.launchDate.en}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.contlaunchDateent?.en && Boolean(errors.launchDate?.en)}
            helperText={touched.launchDate?.en && errors.launchDate?.en}
          />

          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="launchDate-bn"
            label="Content (Bengali)"
            name="launchDate.bn"
            multiline
            rows={4}
            placeholder="Content in Bengali"
            value={values.launchDate.bn}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.launchDate?.bn && Boolean(errors.launchDate?.bn)}
            helperText={touched.launchDate?.bn && errors.launchDate?.bn}
          />

          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="launchDate-es"
            label="launchDate (Danish)"
            name="launchDate.es"
            multiline
            rows={4}
            placeholder="launchDate in Danish"
            value={values.launchDate.es}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.launchDate?.es && Boolean(errors.launchDate?.es)}
            helperText={touched.launchDate?.es && errors.launchDate?.es}
          />


          
          {/* bathroom Inputs for Multiple Languages */}
          <Typography variant="subtitle1">bathroom</Typography>
          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="bathroom-en"
            label="bathroom (English)"
            name="bathroom.en"
            multiline
            rows={4}
            placeholder="bathroom in English"
            value={values.bathroom.en}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.bathroom?.en && Boolean(errors.bathroom?.en)}
            helperText={touched.bathroom?.en && errors.bathroom?.en}
          />

          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="bathroom-bn"
            label="bathroom (Bengali)"
            name="bathroom.bn"
            multiline
            rows={4}
            placeholder="bathroom in Bengali"
            value={values.bathroom.bn}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.bathroom?.bn && Boolean(errors.bathroom?.bn)}
            helperText={touched.bathroom?.bn && errors.bathroom?.bn}
          />

          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="bathroom-es"
            label="bathroom (Danish)"
            name="bathroom.es"
            multiline
            rows={4}
            placeholder="bathroom in Danish"
            value={values.bathroom.es}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.bathroom?.es && Boolean(errors.bathroom?.es)}
            helperText={touched.bathroom?.es && errors.bathroom?.es}
          />


          
          {/* collectionName Inputs for Multiple Languages */}
          <Typography variant="subtitle1">collectionName</Typography>
          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="collectionName-en"
            label="collectionName (English)"
            name="collectionName.en"
            multiline
            rows={4}
            placeholder="collectionName in English"
            value={values.collectionName.en}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.collectionName?.en && Boolean(errors.collectionName?.en)}
            helperText={touched.collectionName?.en && errors.collectionName?.en}
          />

          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="collectionName-bn"
            label="collectionName (Bengali)"
            name="collectionName.bn"
            multiline
            rows={4}
            placeholder="collectionName in Bengali"
            value={values.collectionName.bn}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.collectionName?.bn && Boolean(errors.collectionName?.bn)}
            helperText={touched.collectionName?.bn && errors.collectionName?.bn}
          />

          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="collectionName-es"
            label="collectionName (Danish)"
            name="collectionName.es"
            multiline
            rows={4}
            placeholder="collectionName in Danish"
            value={values.content.es}
            onChange={collectionName}
            onBlur={handleBlur}
            error={touched.collectionName?.es && Boolean(errors.collectionName?.es)}
            helperText={touched.collectionName?.es && errors.collectionName?.es}
          />


          
          {/* buildingType Inputs for Multiple Languages */}
          <Typography variant="subtitle1">buildingType</Typography>
          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="buildingType-en"
            label="buildingType (English)"
            name="buildingType.en"
            multiline
            rows={4}
            placeholder="buildingType in English"
            value={values.buildingType.en}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.buildingType?.en && Boolean(errors.buildingType?.en)}
            helperText={touched.buildingType?.en && errors.buildingType?.en}
          />

          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="buildingType-bn"
            label="buildingType (Bengali)"
            name="buildingType.bn"
            multiline
            rows={4}
            placeholder="buildingType in Bengali"
            value={values.buildingType.bn}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.buildingType?.bn && Boolean(errors.buildingType?.bn)}
            helperText={touched.buildingType?.bn && errors.buildingType?.bn}
          />

          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="buildingType-es"
            label="buildingType (Danish)"
            name="buildingType.es"
            multiline
            rows={4}
            placeholder="buildingType in Danish"
            value={values.buildingType.es}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.buildingType?.es && Boolean(errors.buildingType?.es)}
            helperText={touched.buildingType?.es && errors.buildingType?.es}
          />



          {/* new start */}

          
          
          {/* mosque Inputs for Multiple Languages */}
          <Typography variant="subtitle1">mosque</Typography>
          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="mosque-en"
            label="mosque (English)"
            name="mosque.en"
            multiline
            rows={4}
            placeholder="mosque in English"
            value={values.mosque.en}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.mosque?.en && Boolean(errors.mosque?.en)}
            helperText={touched.mosque?.en && errors.mosque?.en}
          />

          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="mosque-bn"
            label="mosque (Bengali)"
            name="mosque.bn"
            multiline
            rows={4}
            placeholder="mosque in Bengali"
            value={values.mosque.bn}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.mosque?.bn && Boolean(errors.mosque?.bn)}
            helperText={touched.mosque?.bn && errors.mosque?.bn}
          />

          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="mosque-es"
            label="mosque (Danish)"
            name="mosque.es"
            multiline
            rows={4}
            placeholder="mosque in Danish"
            value={values.mosque.es}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.mosque?.es && Boolean(errors.mosque?.es)}
            helperText={touched.mosque?.es && errors.mosque?.es}
          />

          {/* college Inputs for Multiple Languages */}
          <Typography variant="subtitle1">college</Typography>
          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="college-en"
            label="college (English)"
            name="college.en"
            multiline
            rows={4}
            placeholder="college in English"
            value={values.college.en}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.college?.en && Boolean(errors.college?.en)}
            helperText={touched.college?.en && errors.college?.en}
          />

          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="college-bn"
            label="college (Bengali)"
            name="college.bn"
            multiline
            rows={4}
            placeholder="college in Bengali"
            value={values.college.bn}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.college?.bn && Boolean(errors.college?.bn)}
            helperText={touched.college?.bn && errors.college?.bn}
          />

          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="college-es"
            label="college (Danish)"
            name="college.es"
            multiline
            rows={4}
            placeholder="college in Danish"
            value={values.college.es}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.college?.es && Boolean(errors.college?.es)}
            helperText={touched.college?.es && errors.college?.es}
          />



          {/* school Inputs for Multiple Languages */}
          <Typography variant="subtitle1">school</Typography>
          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="school-en"
            label="school (English)"
            name="school.en"
            multiline
            rows={4}
            placeholder="school in English"
            value={values.school.en}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.school?.en && Boolean(errors.school?.en)}
            helperText={touched.school?.en && errors.school?.en}
          />

          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="school-bn"
            label="school (Bengali)"
            name="school.bn"
            multiline
            rows={4}
            placeholder="school in Bengali"
            value={values.school.bn}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.school?.bn && Boolean(errors.school?.bn)}
            helperText={touched.school?.bn && errors.school?.bn}
          />

          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="school-es"
            label="school (Danish)"
            name="school.es"
            multiline
            rows={4}
            placeholder="school in Danish"
            value={values.school.es}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.school?.es && Boolean(errors.school?.es)}
            helperText={touched.school?.es && errors.school?.es}
          />


          {/* market Inputs for Multiple Languages */}
          <Typography variant="subtitle1">market</Typography>
          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="market-en"
            label="market (English)"
            name="market.en"
            multiline
            rows={4}
            placeholder="market in English"
            value={values.market.en}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.market?.en && Boolean(errors.market?.en)}
            helperText={touched.market?.en && errors.market?.en}
          />

          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="market-bn"
            label="market (Bengali)"
            name="market.bn"
            multiline
            rows={4}
            placeholder="market in Bengali"
            value={values.market.bn}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.market?.bn && Boolean(errors.market?.bn)}
            helperText={touched.market?.bn && errors.market?.bn}
          />

          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="market-es"
            label="market (Danish)"
            name="market.es"
            multiline
            rows={4}
            placeholder="market in Danish"
            value={values.market.es}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.market?.es && Boolean(errors.market?.es)}
            helperText={touched.market?.es && errors.market?.es}
          />

          {/* bank1 Inputs for Multiple Languages */}
          <Typography variant="subtitle1">bank1</Typography>
          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="bank1-en"
            label="bank1 (English)"
            name="bank1.en"
            multiline
            rows={4}
            placeholder="bank1 in English"
            value={values.bank1.en}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.bank1?.en && Boolean(errors.bank1?.en)}
            helperText={touched.bank1?.en && errors.bank1?.en}
          />

          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="bank1-bn"
            label="bank1 (Bengali)"
            name="bank1.bn"
            multiline
            rows={4}
            placeholder="bank1 in Bengali"
            value={values.bank1.bn}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.bank1?.bn && Boolean(errors.bank1?.bn)}
            helperText={touched.bank1?.bn && errors.bank1?.bn}
          />

          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="bank1-es"
            label="bank1 (Danish)"
            name="bank1.es"
            multiline
            rows={4}
            placeholder="bank1 in Danish"
            value={values.bank1.es}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.bank1?.es && Boolean(errors.bank1?.es)}
            helperText={touched.bank1?.es && errors.bank1?.es}
          />


          {/* bank2 Inputs for Multiple Languages */}
          <Typography variant="subtitle1">bank2</Typography>
          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="bank2-en"
            label="bank2 (English)"
            name="bank2.en"
            multiline
            rows={4}
            placeholder="bank2 in English"
            value={values.bank2.en}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.bank2?.en && Boolean(errors.bank2?.en)}
            helperText={touched.bank2?.en && errors.bank2?.en}
          />

          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="bank2-bn"
            label="bank2 (Bengali)"
            name="bank2.bn"
            multiline
            rows={4}
            placeholder="bank2 in Bengali"
            value={values.bank2.bn}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.bank2?.bn && Boolean(errors.bank2?.bn)}
            helperText={touched.bank2?.bn && errors.bank2?.bn}
          />

          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="bank2-es"
            label="bank2 (Danish)"
            name="bank2.es"
            multiline
            rows={4}
            placeholder="bank2 in Danish"
            value={values.bank2.es}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.bank2?.es && Boolean(errors.bank2?.es)}
            helperText={touched.bank2?.es && errors.bank2?.es}
          />


          {/* atm Inputs for Multiple Languages */}
          <Typography variant="subtitle1">atm</Typography>
          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="atm-en"
            label="atm (English)"
            name="atm.en"
            multiline
            rows={4}
            placeholder="atm in English"
            value={values.atm.en}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.atm?.en && Boolean(errors.atm?.en)}
            helperText={touched.atm?.en && errors.atm?.en}
          />

          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="atm-bn"
            label="atm (Bengali)"
            name="atm.bn"
            multiline
            rows={4}
            placeholder="atm in Bengali"
            value={values.atm.bn}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.atm?.bn && Boolean(errors.atm?.bn)}
            helperText={touched.atm?.bn && errors.atm?.bn}
          />

          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="atm-es"
            label="atm (Danish)"
            name="atm.es"
            multiline
            rows={4}
            placeholder="atm in Danish"
            value={values.atm.es}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.atm?.es && Boolean(errors.atm?.es)}
            helperText={touched.atm?.es && errors.atm?.es}
          />


          {/* busStop Inputs for Multiple Languages */}
          <Typography variant="subtitle1">busStop</Typography>
          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="busStop-en"
            label="busStop (English)"
            name="busStop.en"
            multiline
            rows={4}
            placeholder="busStop in English"
            value={values.busStop.en}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.busStop?.en && Boolean(errors.busStop?.en)}
            helperText={touched.busStop?.en && errors.busStop?.en}
          />

          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="busStop-bn"
            label="busStop (Bengali)"
            name="busStop.bn"
            multiline
            rows={4}
            placeholder="busStop in Bengali"
            value={values.busStop.bn}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.busStop?.bn && Boolean(errors.busStop?.bn)}
            helperText={touched.busStop?.bn && errors.busStop?.bn}
          />

          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="busStop-es"
            label="busStop (Danish)"
            name="busStop.es"
            multiline
            rows={4}
            placeholder="busStop in Danish"
            value={values.busStop.es}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.busStop?.es && Boolean(errors.busStop?.es)}
            helperText={touched.busStop?.es && errors.busStop?.es}
          />



          {/* mosqueName Inputs for Multiple Languages */}
          <Typography variant="subtitle1">mosqueName</Typography>
          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="mosqueName-en"
            label="mosqueName (English)"
            name="mosqueName.en"
            multiline
            rows={4}
            placeholder="mosqueName in English"
            value={values.mosqueName.en}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.mosqueName?.en && Boolean(errors.mosqueName?.en)}
            helperText={touched.mosqueName?.en && errors.mosqueName?.en}
          />

          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="mosqueName-bn"
            label="mosqueName (Bengali)"
            name="mosqueName.bn"
            multiline
            rows={4}
            placeholder="mosqueName in Bengali"
            value={values.mosqueName.bn}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.mosqueName?.bn && Boolean(errors.mosqueName?.bn)}
            helperText={touched.mosqueName?.bn && errors.mosqueName?.bn}
          />

          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="mosqueName-es"
            label="mosqueName (Danish)"
            name="mosqueName.es"
            multiline
            rows={4}
            placeholder="mosqueName in Danish"
            value={values.mosqueName.es}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.mosqueName?.es && Boolean(errors.mosqueName?.es)}
            helperText={touched.mosqueName?.es && errors.mosqueName?.es}
          />

          {/* collegeName Inputs for Multiple Languages */}
          <Typography variant="subtitle1">collegeName</Typography>
          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="collegeName-en"
            label="collegeName (English)"
            name="collegeName.en"
            multiline
            rows={4}
            placeholder="collegeName in English"
            value={values.collegeName.en}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.collegeName?.en && Boolean(errors.collegeName?.en)}
            helperText={touched.collegeName?.en && errors.collegeName?.en}
          />

          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="collegeName-bn"
            label="collegeName (Bengali)"
            name="collegeName.bn"
            multiline
            rows={4}
            placeholder="collegeName in Bengali"
            value={values.collegeName.bn}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.collegeName?.bn && Boolean(errors.collegeName?.bn)}
            helperText={touched.collegeName?.bn && errors.collegeName?.bn}
          />

          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="collegeName-es"
            label="collegeName (Danish)"
            name="collegeName.es"
            multiline
            rows={4}
            placeholder="collegeName in Danish"
            value={values.collegeName.es}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.collegeName?.es && Boolean(errors.collegeName?.es)}
            helperText={touched.collegeName?.es && errors.collegeName?.es}
          />


          {/* schoolName Inputs for Multiple Languages */}
          <Typography variant="subtitle1">schoolNameEn</Typography>
          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="schoolName-en"
            label="schoolName (English)"
            name="schoolName.en"
            multiline
            rows={4}
            placeholder="schoolName in English"
            value={values.schoolName.en}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.schoolName?.en && Boolean(errors.schoolName?.en)}
            helperText={touched.schoolName?.en && errors.schoolName?.en}
          />

          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="schoolName-bn"
            label="schoolName (Bengali)"
            name="schoolName.bn"
            multiline
            rows={4}
            placeholder="schoolName in Bengali"
            value={values.schoolName.bn}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.schoolName?.bn && Boolean(errors.schoolName?.bn)}
            helperText={touched.schoolName?.bn && errors.schoolName?.bn}
          />

          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="schoolName-es"
            label="schoolName (Danish)"
            name="schoolName.es"
            multiline
            rows={4}
            placeholder="schoolName in Danish"
            value={values.schoolName.es}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.schoolName?.es && Boolean(errors.schoolName?.es)}
            helperText={touched.schoolName?.es && errors.schoolName?.es}
          />



          {/* marketName Inputs for Multiple Languages */}
          <Typography variant="subtitle1">marketName</Typography>
          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="marketName-en"
            label="marketName (English)"
            name="marketName.en"
            multiline
            rows={4}
            placeholder="marketName in English"
            value={values.marketName.en}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.marketName?.en && Boolean(errors.marketName?.en)}
            helperText={touched.marketName?.en && errors.marketName?.en}
          />

          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="marketName-bn"
            label="marketName (Bengali)"
            name="marketName.bn"
            multiline
            rows={4}
            placeholder="marketName in Bengali"
            value={values.marketName.bn}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.marketName?.bn && Boolean(errors.marketName?.bn)}
            helperText={touched.marketName?.bn && errors.marketName?.bn}
          />

          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="marketName-es"
            label="marketName (Danish)"
            name="marketName.es"
            multiline
            rows={4}
            placeholder="marketName in Danish"
            value={values.marketName.es}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.marketName?.es && Boolean(errors.marketName?.es)}
            helperText={touched.marketName?.es && errors.marketName?.es}
          />



          {/* bank1Name Inputs for Multiple Languages */}
          <Typography variant="subtitle1">bank1Name</Typography>
          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="bank1Name-en"
            label="bank1Name (English)"
            name="bank1Name.en"
            multiline
            rows={4}
            placeholder="bank1Name in English"
            value={values.bank1Name.en}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.bank1Name?.en && Boolean(errors.bank1Name?.en)}
            helperText={touched.bank1Name?.en && errors.bank1Name?.en}
          />

          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="bank1Name-bn"
            label="bank1Name (Bengali)"
            name="bank1Name.bn"
            multiline
            rows={4}
            placeholder="bank1Name in Bengali"
            value={values.bank1Name.bn}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.bank1Name?.bn && Boolean(errors.bank1Name?.bn)}
            helperText={touched.bank1Name?.bn && errors.bank1Name?.bn}
          />

          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="bank1Name-es"
            label="bank1Name (Danish)"
            name="bank1Name.es"
            multiline
            rows={4}
            placeholder="bank1Name in Danish"
            value={values.bank1Name.es}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.bank1Name?.es && Boolean(errors.bank1Name?.es)}
            helperText={touched.bank1Name?.es && errors.bank1Name?.es}
          />



          {/* bank1Name Inputs for Multiple Languages */}
          <Typography variant="subtitle1">bank2Name</Typography>
          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="bank2Name-en"
            label="bank2Name (English)"
            name="bank2Name.en"
            multiline
            rows={4}
            placeholder="bank2Name in English"
            value={values.bank2Name.en}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.bank2Name?.en && Boolean(errors.bank2Name?.en)}
            helperText={touched.bank2Name?.en && errors.bank2Name?.en}
          />

          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="bank2Name-bn"
            label="bank2Name (Bengali)"
            name="bank2Name.bn"
            multiline
            rows={4}
            placeholder="bank2Name in Bengali"
            value={values.bank2Name.bn}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.bank2Name?.bn && Boolean(errors.bank2Name?.bn)}
            helperText={touched.bank2Name?.bn && errors.bank2Name?.bn}
          />

          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="bank2Name-es"
            label="bank2Name (Danish)"
            name="bank2Name.es"
            multiline
            rows={4}
            placeholder="bank2Name in Danish"
            value={values.bank2Name.es}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.bank2Name?.es && Boolean(errors.bank2Name?.es)}
            helperText={touched.bank2Name?.es && errors.bank2Name?.es}
          />


          {/* atmName Inputs for Multiple Languages */}
          <Typography variant="subtitle1">bank2Name</Typography>
          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="atmName-en"
            label="atmName (English)"
            name="atmName.en"
            multiline
            rows={4}
            placeholder="atmName in English"
            value={values.atmName.en}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.atmName?.en && Boolean(errors.atmName?.en)}
            helperText={touched.atmName?.en && errors.atmName?.en}
          />

          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="atmName-bn"
            label="atmName (Bengali)"
            name="atmName.bn"
            multiline
            rows={4}
            placeholder="atmName in Bengali"
            value={values.atmName.bn}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.atmName?.bn && Boolean(errors.atmName?.bn)}
            helperText={touched.atmName?.bn && errors.atmName?.bn}
          />

          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="atmName-es"
            label="atmName (Danish)"
            name="atmName.es"
            multiline
            rows={4}
            placeholder="atmName in Danish"
            value={values.atmName.es}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.atmName?.es && Boolean(errors.atmName?.es)}
            helperText={touched.atmName?.es && errors.atmName?.es}
          />

          {/* busStopName Inputs for Multiple Languages */}
          <Typography variant="subtitle1">busStopName</Typography>
          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="busStopName-en"
            label="busStopName (English)"
            name="busStopName.en"
            multiline
            rows={4}
            placeholder="busStopName in English"
            value={values.busStopName.en}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.busStopName?.en && Boolean(errors.busStopName?.en)}
            helperText={touched.busStopName?.en && errors.busStopName?.en}
          />

          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="busStopName-bn"
            label="busStopName (Bengali)"
            name="busStopName.bn"
            multiline
            rows={4}
            placeholder="busStopName in Bengali"
            value={values.busStopName.bn}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.busStopName?.bn && Boolean(errors.busStopName?.bn)}
            helperText={touched.busStopName?.bn && errors.busStopName?.bn}
          />

          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="busStopName-es"
            label="busStopName (Danish)"
            name="busStopName.es"
            multiline
            rows={4}
            placeholder="busStopName in Danish"
            value={values.busStopName.es}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.busStopName?.es && Boolean(errors.busStopName?.es)}
            helperText={touched.busStopName?.es && errors.busStopName?.es}
          />




          {/* new end */}

          <Box border="2px dashed blue" sx={{ p: 1 }}>
            <Dropzone
              acceptedFiles=".jpg,.jpeg,.png"
              multiple={false}
              //maxFiles={3}
              onDrop={(acceptedFiles) =>
                acceptedFiles.map((file, index) => {
                  const reader = new FileReader();
                  reader.readAsDataURL(file);
                  reader.onloadend = () => {
                    setFieldValue("image", reader.result);
                  };
                })
              }
            >
              {({ getRootProps, getInputProps, isDragActive }) => (
                <Box
                  {...getRootProps()}
                  p="1rem"
                  sx={{
                    "&:hover": { cursor: "pointer" },
                    bgColor: isDragActive ? "#cceffc" : "#fafafa",
                  }}
                >
                  <input name="image" {...getInputProps()} />
                  {isDragActive ? (
                    <>
                      <p style={{ textAlign: "center" }}>
                        <CloudUploadIcon
                          sx={{ color: "primary.main", mr: 2 }}
                        />
                      </p>
                      <p style={{ textAlign: "center", fontSize: "12px" }}>
                        {" "}
                        Drop here!
                      </p>
                    </>
                  ) : values.image === null ? (
                    <>
                      <p style={{ textAlign: "center" }}>
                        <CloudUploadIcon
                          sx={{ color: "primary.main", mr: 2 }}
                        />
                      </p>
                      <p style={{ textAlign: "center", fontSize: "12px" }}>
                        Drag and Drop image here or click to choose
                      </p>
                    </>
                  ) : (
                    <>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-around",
                          alignItems: "center",
                        }}
                      >
                        <Box>
                          <img
                            style={{ maxWidth: "100px" }}
                            src={
                              values.image === "" ? imagePreview : values.image
                            }
                            alt=""
                          />
                        </Box>
                      </Box>
                    </>
                  )}
                </Box>
              )}
            </Dropzone>
          </Box>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            elevation={0}
            sx={{ mt: 3, p: 1, mb: 2, borderRadius: "25px" }}
            // disabled={loading}
          >
            Update project
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default EditProject;
