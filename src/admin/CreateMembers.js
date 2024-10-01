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
  title: yup
    .string("Add a gallery title")
    .min(1, "text content should have a minimum of 1 characters ")
    .required("gallery title is required"),
    designation: yup
    .string("Add text designation")
    .min(1, "text designation should have a minimum of 1 characters ")
    .required("text designation is required"),
});

const CreateMembers = () => {
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
      title: "",
      designation: "",
      image: null,
    },

    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      createNewMember(values);
      //alert(JSON.stringify(values, null, 2));
      actions.resetForm();
    },
  });

  const createNewMember = async (values) => {
    try {

      const result = await axiosInstance.post(`${process.env.REACT_APP_API_URL}/api/member/create`, values);
      if (result?.data?.success === true) {
        toast.success("Member added successfully.");
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
        <Typography variant="h5" sx={{ pb: 4 }}>
          {" "}
          Add Member{" "}
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
              helperText={touched.designation && errors.designation}
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
            Add Member
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default CreateMembers;
