import { Box, Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import Dropzone from "react-dropzone";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { toast } from "react-toastify";
import "react-quill/dist/quill.snow.css";
import axiosInstance from "../pages/axiosInstance";
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object({
  // title: yup
  //   .string("Add a video title")
  //   .min(1, "text content should have a minimum of 1 characters ")
  //   .required("video title is required"),

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

    thumbnail: yup
    .string("Add text thumbnail")
    .min(1, "text thumbnail should have a minimum of 1 characters ")
    .required("text thumbnail is required"),

    videoUrl: yup
    .string("Add text videoUrl")
    .min(1, "text videoUrl should have a minimum of 1 characters ")
    .required("text videoUrl is required"),
});

const CreateVideo = () => {
  const navigate=useNavigate()
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

      thumbnail: "",
      videoUrl: "",
      image: null,
    },

    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      createNewVideo(values);
      //alert(JSON.stringify(values, null, 2));
      actions.resetForm();
    },
  });



  const createNewVideo = async (values) => {
    try {
      const {
        titleEn,
        titleBn,
        titleEs,
        thumbnail,
        videoUrl,
        image,
      } = values;

       // Structure the data for multilingual support
       const data = {
        title: { en: titleEn, bn: titleBn, es: titleEs },
        thumbnail,
        videoUrl,
       image,
      };


      const result = await axiosInstance.post(`${process.env.REACT_APP_API_URL}/api/video/create`, data);
      if (result?.data?.success === true) {
        toast.success("Video created");
        navigate("/admin/dashboard");
      }
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };


  const modules = {
    // ...
    clipboard: {
      matchVisual: false,
    },
    // ...
  };

  return (
    <>
      <Box sx={{ bgColor: "white",
      padding: "20px",
      width: "100%",
      maxWidth: "1200px",
      margin: "0 auto",}}>
        <Typography className="text-black" variant="h5" sx={{ pb: 4 }}>
          {" "}
          Add Video{" "}
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          
          <TextField
            fullWidth
            sx={{ mb: 3 }}
            id="titleEn"
            label="Post Title (English)"
            name="titleEn"
            InputLabelProps={{ shrink: true }}
            placeholder="Post title in English"
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
            label="Post Title (Bengali)"
            name="titleBn"
            InputLabelProps={{ shrink: true }}
            placeholder="Post title in Bengali"
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
            label="Post Title (Danish)"
            name="titleEs"
            InputLabelProps={{ shrink: true }}
            placeholder="Post title in Danish"
            value={values.titleEs}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.titleEs && Boolean(errors.titleEs)}
            helperText={touched.titleEs && errors.titleEs}
          />
          

          <Box sx={{ mb: 3 }}>
            <TextField
              sx={{ mb: 3 }}
              fullWidth
              id="thumbnail"
              label="thumbnail"
              name="thumbnail"
              multiline
              rows={4}
              placeholder="Write the thumbnail..."
              value={values.thumbnail}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.thumbnail && Boolean(errors.thumbnail)}
              helperText={touched.thumbnail && errors.thumbnail}
            />
          </Box>
          <Box sx={{ mb: 3 }}>
            <TextField
              sx={{ mb: 3 }}
              fullWidth
              id="videoUrl"
              label="videoUrl"
              name="videoUrl"
              multiline
              rows={4}
              placeholder="Write the videoUrl..."
              value={values.videoUrl}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.videoUrl && Boolean(errors.videoUrl)}
              helperText={touched.videoUrl && errors.videoUrl}
            />
          </Box>

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
                  <input name="banner" {...getInputProps()} />
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
                        Drag and Drop here or click to choose
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
                            src={values.image}
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
            // onClick={handlePostContent}
            // disabled={loading}
          >
            Add Video
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default CreateVideo;
