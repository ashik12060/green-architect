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
  title: yup
    .string("Add a title")
    .min(1, "text content should have a minimum of 1 characters ")
    .required("Title is required"),
    designation: yup
    .string("Add text designation")
    .min(1, "text designation should have a minimum of 1 characters ")
    .required("text designation is required"),
});

const EditMember = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [designation, setDesignation] = useState("");
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
      title,
      designation,
      image: "",
    },

    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit: (values, actions) => {
      updateMember(values);
      //alert(JSON.stringify(values, null, 2));
      actions.resetForm();
    },
  });

  //show post by Id
  const singleMemberById = async () => {
    // console.log(id)
    try {
      // 
      const { data } = await axiosInstance.get(`${process.env.REACT_APP_API_URL}/api/member/${id}`
      );
      setTitle(data.member.title);
      setDesignation(data.member.designation);
      setImagePreview(data.member.image.url);
      console.log("single member admin", data.member);
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  useEffect(() => {
    singleMemberById();
  }, []);

  const updateMember = async (values) => {
    try {
      const result = await axiosInstance.put(`${process.env.REACT_APP_API_URL}/api/update/member/${id}`, values);

      console.log(result)
      if (result?.data?.success === true) {
        toast.success("member updated");
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
          Edit member{" "}
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="title"
            label="member title"
            name="title"
            InputLabelProps={{
              shrink: true,
            }}
            placeholder="member title"
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.title && Boolean(errors.title)}
            helperText={touched.title && errors.title}
          />

          {/* <Box sx={{ mb: 3 }}>
            <ReactQuill
              theme="snow"
              placeholder={"Write the post content..."}
              modules={modules}
              value={values.content}
              onChange={(e) => setFieldValue("content", e)}
            />
            <Box
              component="span"
              sx={{ color: "#d32f2f", fontSize: "12px", pl: 2 }}
            >
              {touched.content && errors.content}
            </Box>
          </Box> */}
          <Box sx={{ mb: 3 }}>
            <TextField
              sx={{ mb: 3 }}
              fullWidth
              id="designation"
              label="Designation"
              name="designation"
              multiline
              rows={4}
              placeholder="Write the designation..."
              value={values.designation}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.designation && Boolean(errors.designation)}
              helperText={touched.designation && errors.contdesignationent}
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
            Update Post
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default EditMember;
