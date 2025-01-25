

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
import { useNavigate } from "react-router-dom";
import axiosInstance from "../pages/axiosInstance";

const validationSchema = yup.object({
  titleEn: yup
    .string("Add a  title in English")
    .min(1, "Title must have at least 1 character")
    .required(" title in English is required"),
  titleBn: yup
    .string("Add a  title in Bengali")
    .min(1, "Title must have at least 1 character")
    .required(" title in Bengali is required"),
  titleEs: yup
    .string("Add a  title in Danish")
    .min(1, "Title must have at least 1 character")
    .required(" title in Danish is required"),

    videoUrl: yup
    .string("Add text designation in English")
    .min(1, "Designation must have at least 1 character")
    .required("Text designation in English is required"),
 
});

const AddVideo = () => {
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
      titleEn: "",
      titleBn: "",
      titleEs: "",

      videoUrl:"",
    },

    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      createNewPost(values);
      //alert(JSON.stringify(values, null, 2));
      actions.resetForm();
    },
  });

  const createNewPost = async (values) => {
    try {
      const {
        titleEn,
        titleBn,
        titleEs,
        videoUrl,
       
      } = values;

      // Structure the data for multilingual support
      const data = {
        title: { en: titleEn, bn: titleBn, es: titleEs },
        videoUrl:videoUrl 
      };

      const result = await axiosInstance.post(
        `${process.env.REACT_APP_API_URL}/api/video/create`,
        data
      );
      if (result?.data?.success === true) {
        toast.success("video created successfully.");
        // navigate("/admin/dashboard");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error adding member. Please try again.");
    }
  };

  return (
    <>
      <Box
        sx={{
          bgColor: "white",
          padding: "20px",
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <Typography variant="h5" sx={{ pb: 4 }}>
          Create Video
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          {/* Title in English */}
          <TextField
            fullWidth
            sx={{ mb: 3 }}
            id="titleEn"
            label=" Title (English)"
            name="titleEn"
            InputLabelProps={{ shrink: true }}
            placeholder="Video title in English"
            value={values.titleEn}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.titleEn && Boolean(errors.titleEn)}
            helperText={touched.titleEn && errors.titleEn}
          />

          {/* Title in Bengali */}
          <TextField
            fullWidth
            sx={{ mb: 3 }}
            id="titleBn"
            label=" Title (Bengali)"
            name="titleBn"
            InputLabelProps={{ shrink: true }}
            placeholder=" title in Bengali"
            value={values.titleBn}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.titleBn && Boolean(errors.titleBn)}
            helperText={touched.titleBn && errors.titleBn}
          />

          {/* Title in Danish */}
          <TextField
            fullWidth
            sx={{ mb: 3 }}
            id="titleEs"
            label=" Title (Danish)"
            name="titleEs"
            InputLabelProps={{ shrink: true }}
            placeholder=" title in Danish"
            value={values.titleEs}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.titleEs && Boolean(errors.titleEs)}
            helperText={touched.titleEs && errors.titleEs}
          />

          {/* Content in English */}
          <TextField
            fullWidth
            sx={{ mb: 3 }}
            id="videoUrl"
            label="Enter Video URL"
            name="videoUrl"
            multiline
            rows={4}
            placeholder="Write the content in English..."
            value={values.videoUrl}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.videoUrl && Boolean(errors.videoUrl)}
            helperText={touched.videoUrl && errors.videoUrl}
          />

          
        

          {/* Submit Button */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            elevation={0}
            sx={{ mt: 3, p: 1, mb: 2, borderRadius: "25px" }}
          >
            Create Post
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default AddVideo;
