import { Box, Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import Dropzone from "react-dropzone";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../pages/axiosInstance";

// Define validation schema for both languages
const validationSchema = yup.object({
  title: yup.object({
    en: yup.string("Add a title in English").required("Title is required"),
    bn: yup.string("Add a title in bengali").required("Title is required"),
    es: yup.string("Add a title in Danish").required("Title is required"),
  }),
  designation: yup.object({
    en: yup.string("Add a designation in English").required("Designation is required"),
    bn: yup.string("Add a designation in Bengali").required("Designation is required"),
    es: yup.string("Add a designation in Danish").required("Designation is required"),
  }),
});

const EditMember = () => {
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
    resetForm,
  } = useFormik({
    initialValues: {
      title: { en: "",bn: "", es: "" }, // Initialize for multiple languages
      designation: { en: "",bn: "", es: "" }, // Initialize for multiple languages
      image: "",
    },
    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit: async (values, actions) => {
      await updateMember(values);
      actions.resetForm();
    },
  });

  // Fetch member details by ID
  const singleMemberById = async () => {
    try {
      const { data } = await axiosInstance.get(`${process.env.REACT_APP_API_URL}/api/member/${id}`);
      values.title.en = data.member.title.en; // Fetch English title
      values.title.bn = data.member.title.bn; // Fetch Bengali title
      values.title.es = data.member.title.es; // Fetch Danish title
      values.designation.en = data.member.designation.en; // Fetch English designation
      values.designation.bn = data.member.designation.bn; // Fetch Bengali designation
      values.designation.es = data.member.designation.es; // Fetch Danish designation
      setImagePreview(data.member.image.url);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch member data");
    }
  };

  useEffect(() => {
    singleMemberById();
  }, []);

  const updateMember = async (values) => {
    try {
      const result = await axiosInstance.put(`${process.env.REACT_APP_API_URL}/api/update/member/${id}`, values);
      if (result?.data?.success) {
        toast.success("Member updated successfully");
        resetForm();
        setImagePreview("");
        navigate("/admin/dashboard");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.error || "Failed to update member");
    }
  };

  return (
    <Box sx={{ bgcolor: "white", padding: "20px 200px" }}>
      <Typography variant="h5" sx={{ pb: 4 }}>
        Edit Member
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
          placeholder="Título en Danish"
          value={values.title.es}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.title?.es && Boolean(errors.title?.es)}
          helperText={touched.title?.es && errors.title?.es}
        />
        
        {/* Designation Inputs for Multiple Languages */}
        <Typography variant="subtitle1">Designation</Typography>
        <TextField
          sx={{ mb: 3 }}
          fullWidth
          id="designation-en"
          label="Designation (English)"
          name="designation.en"
          placeholder="Designation in English"
          value={values.designation.en}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.designation?.en && Boolean(errors.designation?.en)}
          helperText={touched.designation?.en && errors.designation?.en}
        />
        <TextField
          sx={{ mb: 3 }}
          fullWidth
          id="designation-bn"
          label="Designation (Bengali)"
          name="designation.bn"
          placeholder="Designation in Bengali"
          value={values.designation.bn}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.designation?.bn && Boolean(errors.designation?.bn)}
          helperText={touched.designation?.bn && errors.designation?.bn}
        />
        <TextField
          sx={{ mb: 3 }}
          fullWidth
          id="designation-es"
          label="Designation (Danish)"
          name="designation.es"
          placeholder="Designation in Danish"
          value={values.designation.es}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.designation?.es && Boolean(errors.designation?.es)}
          helperText={touched.designation?.es && errors.designation?.es}
        />

        {/* Dropzone for Image Upload */}
        <Box border="2px dashed blue" sx={{ p: 1, mb: 3 }}>
          <Dropzone
            acceptedFiles=".jpg,.jpeg,.png"
            multiple={false}
            onDrop={(acceptedFiles) => {
              acceptedFiles.map((file) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onloadend = () => {
                  setFieldValue("image", reader.result);
                  setImagePreview(reader.result);
                };
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
                      <img style={{ maxWidth: "100px" }} src={imagePreview} alt="Preview" />
                    ) : (
                      <p style={{ textAlign: "center" }}>
                        <CloudUploadIcon sx={{ color: "primary.main", mr: 2 }} />
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
          Update Member
        </Button>
      </Box>
    </Box>
  );
};

export default EditMember;
