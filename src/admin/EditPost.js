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
  content: yup.object().shape({
    en: yup.string().required("Content in English is required"),
    bn: yup.string().required("Content in Bengali is required"),
    es: yup.string().required("Content in Danish is required"),
  }),
  image: yup.string().required("Image is required"),
});

const EditPost = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
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
      image: "",
    },

    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit: (values, actions) => {
      updatePost(values);
      //alert(JSON.stringify(values, null, 2));
      actions.resetForm();
    },
  });

  //show post by Id
  const singlePostById = async () => {
    // console.log(id)
    try {
      //
      const { data } = await axiosInstance.get(
        `${process.env.REACT_APP_API_URL}/api/post/${id}`
      );
      setFieldValue("title.en", data.post.title.en);
      setFieldValue("title.bn", data.post.title.bn);
      setFieldValue("title.es", data.post.title.es);
      setFieldValue("content.en", data.post.content.en);
      setFieldValue("content.bn", data.post.content.bn);
      setFieldValue("content.es", data.post.content.es);
      setImagePreview(data.post.image.url);

      console.log("single post admin", data.post);
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  useEffect(() => {
    singlePostById();
  }, []);

  const updatePost = async (values) => {
    try {
      const result = await axiosInstance.put(
        `${process.env.REACT_APP_API_URL}/api/update/post/${id}`,
        values
      );

      console.log(result);
      if (result?.data?.success === true) {
        toast.success("post updated");
        navigate("/admin/dashboard");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.error);
    }
  };

  const validateFile = (file) => {
    const validTypes = ["image/jpeg", "image/png"];
    if (!validTypes.includes(file.type)) {
      toast.error("Only JPEG and PNG are allowed.");
      return false;
    }
    if (file.size > 5 * 1024 * 1024) {
      toast.error("File size must be less than 5MB.");
      return false;
    }
    return true;
  };
  

  return (
    <>
      <Box sx={{ bgColor: "white", padding: "20px 200px" }}>
        <Typography variant="h5" sx={{ pb: 4 }}>
          Edit Post
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          {/* Title Inputs for Multiple Languages */}
          <Typography variant="subtitle1">Title</Typography>
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

          {/* Dropzone for Image Upload */}
          <Box border="2px dashed blue" sx={{ p: 1, mb: 3 }}>
            <Dropzone
              acceptedFiles=".jpg,.jpeg,.png"
              multiple={false}
            
              onDrop={(acceptedFiles) => {
                acceptedFiles.forEach((file) => {
                  if (validateFile(file)) {
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onloadend = () => {
                      setFieldValue("image", reader.result);
                      setImagePreview(reader.result);
                    };
                  }
                });
              }}
              
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
                    <p style={{ textAlign: "center" }}>
                      <CloudUploadIcon sx={{ color: "primary.main", mr: 2 }} />
                      Drop here!
                    </p>
                  ) : (
                    <>
                      {imagePreview ? (
                        <img
                          style={{ maxWidth: "100px" }}
                          src={imagePreview}
                          alt="Preview"
                        />
                      ) : (
                        <p style={{ textAlign: "center" }}>
                          <CloudUploadIcon
                            sx={{ color: "primary.main", mr: 2 }}
                          />
                          Drag and Drop image here or click to choose
                        </p>
                      )}
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
            sx={{ mt: 3, p: 1, mb: 2, borderRadius: "25px" }}
          >
            Update Post
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default EditPost;
