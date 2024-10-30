// import { Box, Button, TextField, Typography } from "@mui/material";
// import { useFormik } from "formik";
// import * as yup from "yup";
// import Dropzone from "react-dropzone";
// import CloudUploadIcon from "@mui/icons-material/CloudUpload";
// import axios from "axios";
// import { toast } from "react-toastify";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import { modules } from "../components/moduleToolbar";
// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import axiosInstance from "../pages/axiosInstance";
// // import axiosInstance from "../pages/axiosInstance";

// const validationSchema = yup.object({
//   title: yup
//     .string("Add a post title")
//     .min(4, "text content should havea minimum of 4 characters ")
//     .required("Post title is required"),
//   content: yup
//     .string("Add text content")
//     .min(10, "text content should havea minimum of 10 characters ")
//     .required("text content is required"),
// });

// const EditPost = () => {
//   const { id } = useParams();
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [image, setImage] = useState("");
//   const [imagePreview, setImagePreview] = useState("");

//   const navigate = useNavigate();

//   const {
//     values,
//     errors,
//     touched,
//     handleBlur,
//     handleChange,
//     handleSubmit,
//     setFieldValue,
//   } = useFormik({
//     initialValues: {
//       title,
//       content,
//       image: "",
//     },

//     validationSchema: validationSchema,
//     enableReinitialize: true,
//     onSubmit: (values, actions) => {
//       updatePost(values);
//       //alert(JSON.stringify(values, null, 2));
//       actions.resetForm();
//     },
//   });

//   //show post by Id
//   const singlePostById = async () => {
//     // console.log(id)
//     try {
//       //
//       const { data } = await axiosInstance.get(`${process.env.REACT_APP_API_URL}/api/post/${id}`
//       );
//       setTitle(data.post.title);
//       setContent(data.post.content);
//       setImagePreview(data.post.image.url);
//       console.log("single post admin", data.post);
//     } catch (error) {
//       console.log(error);
//       toast.error(error);
//     }
//   };

//   useEffect(() => {
//     singlePostById();
//   }, []);

//   const updatePost = async (values) => {
//     try {
//       const result = await axiosInstance.put(`${process.env.REACT_APP_API_URL}/api/update/post/${id}`, values);

//       console.log(result)
//       if (result?.data?.success === true) {
//         toast.success("post updated");
//         navigate("/admin/dashboard");
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(error.response.data.error);
//     }
//   };

//   return (
//     <>
//       <Box sx={{ bgcolor: "white", padding: "20px 200px" }}>
//         <Typography variant="h5" sx={{ pb: 4 }}>
//           {" "}
//           Edit post{" "}
//         </Typography>
//         <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
//           <TextField
//             sx={{ mb: 3 }}
//             fullWidth
//             id="title"
//             label="Post title"
//             name="title"
//             InputLabelProps={{
//               shrink: true,
//             }}
//             placeholder="Post title"
//             value={values.title}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             error={touched.title && Boolean(errors.title)}
//             helperText={touched.title && errors.title}
//           />

//           {/* <Box sx={{ mb: 3 }}>
//             <ReactQuill
//               theme="snow"
//               placeholder={"Write the post content..."}
//               modules={modules}
//               value={values.content}
//               onChange={(e) => setFieldValue("content", e)}
//             />
//             <Box
//               component="span"
//               sx={{ color: "#d32f2f", fontSize: "12px", pl: 2 }}
//             >
//               {touched.content && errors.content}
//             </Box>
//           </Box> */}
//           <Box sx={{ mb: 3 }}>
//             <TextField
//               sx={{ mb: 3 }}
//               fullWidth
//               id="content"
//               label="Content"
//               name="content"
//               multiline
//               rows={4}
//               placeholder="Write the post content..."
//               value={values.content}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               error={touched.content && Boolean(errors.content)}
//               helperText={touched.content && errors.content}
//             />
//           </Box>

//           <Box border="2px dashed blue" sx={{ p: 1 }}>
//             <Dropzone
//               acceptedFiles=".jpg,.jpeg,.png"
//               multiple={false}
//               //maxFiles={3}
//               onDrop={(acceptedFiles) =>
//                 acceptedFiles.map((file, index) => {
//                   const reader = new FileReader();
//                   reader.readAsDataURL(file);
//                   reader.onloadend = () => {
//                     setFieldValue("image", reader.result);
//                   };
//                 })
//               }
//             >
//               {({ getRootProps, getInputProps, isDragActive }) => (
//                 <Box
//                   {...getRootProps()}
//                   p="1rem"
//                   sx={{
//                     "&:hover": { cursor: "pointer" },
//                     bgColor: isDragActive ? "#cceffc" : "#fafafa",
//                   }}
//                 >
//                   <input name="image" {...getInputProps()} />
//                   {isDragActive ? (
//                     <>
//                       <p style={{ textAlign: "center" }}>
//                         <CloudUploadIcon
//                           sx={{ color: "primary.main", mr: 2 }}
//                         />
//                       </p>
//                       <p style={{ textAlign: "center", fontSize: "12px" }}>
//                         {" "}
//                         Drop here!
//                       </p>
//                     </>
//                   ) : values.image === null ? (
//                     <>
//                       <p style={{ textAlign: "center" }}>
//                         <CloudUploadIcon
//                           sx={{ color: "primary.main", mr: 2 }}
//                         />
//                       </p>
//                       <p style={{ textAlign: "center", fontSize: "12px" }}>
//                         Drag and Drop image here or click to choose
//                       </p>
//                     </>
//                   ) : (
//                     <>
//                       <Box
//                         sx={{
//                           display: "flex",
//                           justifyContent: "space-around",
//                           alignItems: "center",
//                         }}
//                       >
//                         <Box>
//                           <img
//                             style={{ maxWidth: "100px" }}
//                             src={
//                               values.image === "" ? imagePreview : values.image
//                             }
//                             alt=""
//                           />
//                         </Box>
//                       </Box>
//                     </>
//                   )}
//                 </Box>
//               )}
//             </Dropzone>
//           </Box>
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             elevation={0}
//             sx={{ mt: 3, p: 1, mb: 2, borderRadius: "25px" }}
//             // disabled={loading}
//           >
//             Update Post
//           </Button>
//         </Box>
//       </Box>
//     </>
//   );
// };

// export default EditPost;

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
      values.title.en = data.post.title.en; // Fetch English title
      values.title.bn = data.post.title.bn; // Fetch Bengali title
      values.title.es = data.post.title.es; // Fetch Danish title
      values.content.en = data.post.designation.en; // Fetch English designation
      values.content.bn = data.post.designation.bn; // Fetch Bengali designation
      values.content.es = data.post.designation.es; // Fetch Danish designation
      setImagePreview(data.post.image.url);
      // setTitle(data.post.title);
      // setContent(data.post.content);
      // setImagePreview(data.post.image.url);
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
