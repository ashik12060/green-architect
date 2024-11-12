import { Box, Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import Dropzone from "react-dropzone";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { toast } from "react-toastify";
import axiosInstance from "../pages/axiosInstance";
import { useNavigate } from "react-router-dom";

// Validation schema for form fields
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
  designationEn: yup
    .string("Add text designation in English")
    .min(1, "Designation must have at least 1 character")
    .required("Text designation in English is required"),
  designationBn: yup
    .string("Add text designation in Bengali")
    .min(1, "Designation must have at least 1 character")
    .required("Text designation in bengali is required"),
  designationEs: yup
    .string("Add text designation in Danish")
    .min(1, "Designation must have at least 1 character")
    .required("Text designation in Danish is required"),
    articleEn: yup
    .string("Add text article in English")
    .min(1, "article must have at least 1 character")
    .required("Text article in English is required"),
    articleBn: yup
    .string("Add text article in Bengali")
    .min(1, "article must have at least 1 character")
    .required("Text article in bengali is required"),
    articleEs: yup
    .string("Add text article in Danish")
    .min(1, "article must have at least 1 character")
    .required("Text article in Danish is required"),
});

const CreateMembers = () => {
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
      designationEn: "",
      designationBn: "",
      designationEs: "",
      articleEn: "",
      articleBn: "",
      articleEs: "",
      image: null,
    },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      createNewMember(values);
      actions.resetForm();
    },
  });

  const createNewMember = async (values) => {
    try {
      const { titleEn,titleBn, titleEs, designationEn,designationBn, designationEs,articleEn,articleBn,articleEs, image } = values;

      // Structure the data for multilingual support
      const data = {
        title: { en: titleEn, bn: titleBn, es: titleEs },
        designation: { en: designationEn,bn: designationBn, es: designationEs },
        article: { en: articleEn,bn: articleBn, es: articleEs },
        image: image,
      };

      const result = await axiosInstance.post(`${process.env.REACT_APP_API_URL}/api/member/create`, data);
      if (result?.data?.success === true) {
        toast.success("Member added successfully.");
        navigate("/admin/dashboard");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error adding member. Please try again.");
    }
  };

  return (
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
        Add Member
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
        {/* Title in English */}
        <TextField
          sx={{ mb: 3 }}
          fullWidth
          id="titleEn"
          label="Member Title (English)"
          name="titleEn"
          InputLabelProps={{
            shrink: true,
          }}
          placeholder="Member title in English"
          value={values.titleEn}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.titleEn && Boolean(errors.titleEn)}
          helperText={touched.titleEn && errors.titleEn}
        />
        
        {/* Title in Bengali */}
        <TextField
          sx={{ mb: 3 }}
          fullWidth
          id="titleBn"
          label="Member Title (Bengali)"
          name="titleBn"
          InputLabelProps={{
            shrink: true,
          }}
          placeholder="Member title in Bengali"
          value={values.titleBn}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.titleBn && Boolean(errors.titleBn)}
          helperText={touched.titleBn && errors.titleBn}
        />

        {/* Title in Danish */}
        <TextField
          sx={{ mb: 3 }}
          fullWidth
          id="titleEs"
          label="Member Title (Danish)"
          name="titleEs"
          InputLabelProps={{
            shrink: true,
          }}
          placeholder="Member title in Danish"
          value={values.titleEs}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.titleEs && Boolean(errors.titleEs)}
          helperText={touched.titleEs && errors.titleEs}
        />

        {/* Designation in English */}
        <TextField
          sx={{ mb: 3 }}
          fullWidth
          id="designationEn"
          label="Designation (English)"
          name="designationEn"
          multiline
          rows={4}
          placeholder="Write the designation in English..."
          value={values.designationEn}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.designationEn && Boolean(errors.designationEn)}
          helperText={touched.designationEn && errors.designationEn}
        />
        {/* Designation in Bengali */}
        <TextField
          sx={{ mb: 3 }}
          fullWidth
          id="designationBn"
          label="Designation (Bengali)"
          name="designationBn"
          multiline
          rows={4}
          placeholder="Write the designation in Bengali..."
          value={values.designationBn}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.designationBn && Boolean(errors.designationBn)}
          helperText={touched.designationBn && errors.designationBn}
        />

        {/* Designation in Danish */}
        <TextField
          sx={{ mb: 3 }}
          fullWidth
          id="designationEs"
          label="Designation (Danish)"
          name="designationEs"
          multiline
          rows={4}
          placeholder="Write the designation in Danish..."
          value={values.designationEs}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.designationEs && Boolean(errors.designationEs)}
          helperText={touched.designationEs && errors.designationEs}
        />
        {/* article in English */}
        <TextField
          sx={{ mb: 3 }}
          fullWidth
          id="articleEn"
          label="article (English)"
          name="articleEn"
          multiline
          rows={4}
          placeholder="Write the article in English..."
          value={values.articleEn}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.articleEn && Boolean(errors.articleEn)}
          helperText={touched.articleEn && errors.articleEn}
        />
        {/* articleBn in Bengali */}
        <TextField
          sx={{ mb: 3 }}
          fullWidth
          id="articleBn"
          label="articleBn (Bengali)"
          name="articleBn"
          multiline
          rows={4}
          placeholder="Write the articleBn in Bengali..."
          value={values.articleBn}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.articleBn && Boolean(errors.articleBn)}
          helperText={touched.articleBn && errors.articleBn}
        />

        {/* article in Danish */}
        <TextField
          sx={{ mb: 3 }}
          fullWidth
          id="articleEs"
          label="articleEs (Danish)"
          name="articleEs"
          multiline
          rows={4}
          placeholder="Write the articleEs in Danish..."
          value={values.articleEs}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.articleEs && Boolean(errors.articleEs)}
          helperText={touched.articleEs && errors.articleEs}
        />

        {/* Image Upload */}
        <Box border="2px dashed blue" sx={{ p: 1 }}>
          <Dropzone
            acceptedFiles=".jpg,.jpeg,.png"
            multiple={false}
            onDrop={(acceptedFiles) =>
              acceptedFiles.map((file) => {
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
                      <CloudUploadIcon sx={{ color: "primary.main", mr: 2 }} />
                    </p>
                    <p style={{ textAlign: "center", fontSize: "12px" }}>
                      Drop here!
                    </p>
                  </>
                ) : values.image === null ? (
                  <>
                    <p style={{ textAlign: "center" }}>
                      <CloudUploadIcon sx={{ color: "primary.main", mr: 2 }} />
                    </p>
                    <p style={{ textAlign: "center", fontSize: "12px" }}>
                      Drag and Drop here or click to choose
                    </p>
                  </>
                ) : (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      <img style={{ maxWidth: "100px" }} src={values.image} alt="" />
                    </Box>
                  </Box>
                )}
              </Box>
            )}
          </Dropzone>
        </Box>

        {/* Submit Button */}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          elevation={0}
          sx={{ mt: 3, p: 1, mb: 2, borderRadius: "25px" }}
        >
          Add Member
        </Button>
      </Box>
    </Box>
  );
};

export default CreateMembers;
