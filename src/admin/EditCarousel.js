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
     en: yup.string().required("Title in English is required"),
     bn: yup.string().required("Title in Bengali is required"),
     es: yup.string().required("Title in Danish is required"),
   }),
});

const EditCarousel = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
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
    resetForm,
    setFieldValue,
  } = useFormik({
    initialValues: {
      title: { en: "",bn: "", es: "" }, // Initialize for multiple languages
      image: "",
    },

    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit: (values, actions) => {
      updateCarousel(values);
      //alert(JSON.stringify(values, null, 2));
      actions.resetForm();
    },
  });

  //show carousel by Id
  const singleCarouselById = async () => {
    try {
      // 
      const { data } = await axiosInstance.get(`${process.env.REACT_APP_API_URL}/api/carousel/${id}`
      );
      setFieldValue("title.en", data.carousel.title.en);
      setFieldValue("title.bn", data.carousel.title.bn);
      setFieldValue("title.es", data.carousel.title.es);
      setImagePreview(data.carousel.image.url);
      console.log("single carousel admin", data.carousel);
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  useEffect(() => {
    singleCarouselById();
  }, []);

  const updateCarousel = async (values) => {
    try {
      const result = await axiosInstance.put(`${process.env.REACT_APP_API_URL}/api/update/carousel/${id}`, values);

      console.log(result)
      if (result?.data?.success) {
        toast.success("Carousel updated successfully");
        resetForm();
        setImagePreview("");
        navigate("/admin/dashboard");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.error);
    }
  };

  return (
    <>
      <Box sx={{ bgColor: "white", padding: "20px 200px" }}>
        <Typography variant="h5" sx={{ pb: 4 }}>
          {" "}
          Edit Carousel{" "}
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="title-en"
            label="Title (English)"
            name="title.en"
            InputLabelProps={{
              shrink: true,
            }}
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
            InputLabelProps={{
              shrink: true,
            }}
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
            InputLabelProps={{
              shrink: true,
            }}
            placeholder="Title in Danish"
            value={values.title.es}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.title?.es && Boolean(errors.title?.es)}
          helperText={touched.title?.es && errors.title?.es}
          />

             
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
            Update Carousel
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default EditCarousel;
