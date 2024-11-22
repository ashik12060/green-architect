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
  title: yup.object({
    en: yup.string("Add a title in English").required("Title is required"),
    bn: yup.string("Add a title in bengali").required("Title is required"),
    es: yup.string("Add a title in Danish").required("Title is required"),
  }),
  content: yup.object({
    en: yup.string("Add a title in English").required("Title is required"),
    bn: yup.string("Add a title in bengali").required("Title is required"),
    es: yup.string("Add a title in Danish").required("Title is required"),
  }),
  address: yup.object({
    en: yup.string("Add a title in English").required("Title is required"),
    bn: yup.string("Add a title in bengali").required("Title is required"),
    es: yup.string("Add a title in Danish").required("Title is required"),
  }),
  landArea: yup.object({
    en: yup.string("Add a title in English").required("Title is required"),
    bn: yup.string("Add a title in bengali").required("Title is required"),
    es: yup.string("Add a title in Danish").required("Title is required"),
  }),
  floors: yup.object({
    en: yup.string("Add a title in English").required("Title is required"),
    bn: yup.string("Add a title in bengali").required("Title is required"),
    es: yup.string("Add a title in Danish").required("Title is required"),
  }),
  apartmentFloor: yup.object({
    en: yup.string("Add a title in English").required("Title is required"),
    bn: yup.string("Add a title in bengali").required("Title is required"),
    es: yup.string("Add a title in Danish").required("Title is required"),
  }),
  size: yup.object({
    en: yup.string("Add a title in English").required("Title is required"),
    bn: yup.string("Add a title in bengali").required("Title is required"),
    es: yup.string("Add a title in Danish").required("Title is required"),
  }),
  bedroom: yup.object({
    en: yup.string("Add a title in English").required("Title is required"),
    bn: yup.string("Add a title in bengali").required("Title is required"),
    es: yup.string("Add a title in Danish").required("Title is required"),
  }),
  bathroom: yup.object({
    en: yup.string("Add a title in English").required("Title is required"),
    bn: yup.string("Add a title in bengali").required("Title is required"),
    es: yup.string("Add a title in Danish").required("Title is required"),
  }),
  launchDate: yup.object({
    en: yup.string("Add a title in English").required("Title is required"),
    bn: yup.string("Add a title in bengali").required("Title is required"),
    es: yup.string("Add a title in Danish").required("Title is required"),
  }),
  collectionName: yup.object({
    en: yup.string("Add a title in English").required("Title is required"),
    bn: yup.string("Add a title in bengali").required("Title is required"),
    es: yup.string("Add a title in Danish").required("Title is required"),
  }),
  buildingType: yup.object({
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
      apartmentFloor: { en: "", bn: "", es: "" },
      size: { en: "", bn: "", es: "" },
      bedroom: { en: "", bn: "", es: "" },
      launchDate: { en: "", bn: "", es: "" },
      bathroom: { en: "", bn: "", es: "" },
      collectionName: { en: "", bn: "", es: "" },
      buildingType: { en: "", bn: "", es: "" },
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
      values.title.en = data.post.title.en; 
      values.title.bn = data.post.title.bn; 
      values.title.es = data.post.title.es; 

      values.content.en = data.post.designation.en; 
      values.content.bn = data.post.designation.bn; 
      values.content.es = data.post.designation.es; 
      
      values.address.en = data.post.address.en; 
      values.address.bn = data.post.address.bn; 
      values.address.es = data.post.address.es; 

      values.landArea.en = data.post.landArea.en; 
      values.landArea.bn = data.post.landArea.bn; 
      values.landArea.es = data.post.landArea.es; 

      values.floors.en = data.post.floors.en; 
      values.floors.bn = data.post.floors.bn; 
      values.floors.es = data.post.floors.es; 

      values.apartmentFloor.en = data.post.apartmentFloor.en; 
      values.apartmentFloor.bn = data.post.apartmentFloor.bn; 
      values.apartmentFloor.es = data.post.apartmentFloor.es; 

      values.size.en = data.post.size.en; 
      values.size.bn = data.post.size.bn; 
      values.size.es = data.post.size.es; 

      values.bedroom.en = data.post.bedroom.en; 
      values.bedroom.bn = data.post.bedroom.bn; 
      values.bedroom.es = data.post.bedroom.es;  

      values.launchDate.en = data.post.launchDate.en; 
      values.launchDate.bn = data.post.launchDate.bn; 
      values.launchDate.es = data.post.launchDate.es;  

      values.bathroom.en = data.post.bathroom.en; 
      values.bathroom.bn = data.post.bathroom.bn; 
      values.bathroom.es = data.post.bathroom.es; 

      values.collectionName.en = data.post.collectionName.en; 
      values.collectionName.bn = data.post.collectionName.bn; 
      values.collectionName.es = data.post.collectionName.es; 

      values.buildingType.en = data.post.buildingType.en; 
      values.buildingType.bn = data.post.buildingType.bn; 
      values.buildingType.es = data.post.buildingType.es; 

      setImagePreview(data.post.image.url);
      // setTitle(data.project.title);
      // setContent(data.project.content);
      // setImagePreview(data.project.image.url);
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



          {/* end */}

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
