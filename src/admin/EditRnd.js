import { Box, Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import Dropzone from "react-dropzone";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import axios from "axios";
import { toast } from "react-toastify";
import "react-quill/dist/quill.snow.css";
import { modules } from "../components/moduleToolbar";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../pages/axiosInstance";
// import axiosInstance from "../pages/axiosInstance";

const validationSchema = yup.object({
  title: yup
    .string("Add a rnd title")
    .min(4)
    .required("RND title is required"),
  content: yup
    .string("Add text content")
    .min(10)
    .required("Text content is required"),
  
});

const EditRnd = () => {
  const { id } = useParams();
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
      title: "",
      content: "",
      image: "",
    },
    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit: (values, actions) => {
      updateRnd(values);
      actions.resetForm();
    },
  });

  // Show rnd by Id
  const singleRndById = async () => {
    try {
      // 
      const { data } = await axiosInstance.get(`${process.env.REACT_APP_API_URL}/api/rnd/${id}`);
      const rnd = data.rnd;
      setFieldValue("title", rnd.title);
      setFieldValue("content", rnd.content);
     
      setImagePreview(rnd.image.url);
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  useEffect(() => {
    singleRndById();
  }, []);

  const updateRnd = async (values) => {
    try {
      const { data } = await axiosInstance.put(`${process.env.REACT_APP_API_URL}/api/update/rnd/${id}`, values);
      if (data.success === true) {
        toast.success("Rnd updated");
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
          Edit Rnd
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="title"
            label="RND title"
            name="title"
            InputLabelProps={{
              shrink: true,
            }}
            placeholder="RND title"
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.title && Boolean(errors.title)}
            helperText={touched.title && errors.title}
          />

          <Box sx={{ mb: 3 }}>
            <TextField
              sx={{ mb: 3 }}
              fullWidth
              id="content"
              label="Content"
              name="content"
              multiline
              rows={4}
              placeholder="Write the rnd content..."
              value={values.content}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.content && Boolean(errors.content)}
              helperText={touched.content && errors.content}
            />
          </Box>


          <Box border="2px dashed blue" sx={{ p: 1 }}>
            <Dropzone
              acceptedFiles=".jpg,.jpeg,.png"
              multiple={false}
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
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <p style={{ textAlign: "center" }}>
                    <CloudUploadIcon sx={{ color: "primary.main", mr: 2 }} />
                  </p>
                  <p style={{ textAlign: "center", fontSize: "12px" }}>
                    Drag and Drop image here or click to choose
                  </p>
                </div>
              )}
            </Dropzone>
          </Box>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            elevation={0}
            sx={{ mt: 3, p: 1, mb: 2, borderRadius: "25px" }}
          >
            Update RND
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default EditRnd;
