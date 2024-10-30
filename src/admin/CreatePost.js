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
// import axiosInstance from "../pages/axiosInstance";
// import { useNavigate } from "react-router-dom";
// // import axiosInstance from "../pages/axiosInstance";

// const validationSchema = yup.object({
//   title: yup
//     .string("Add a post title")
//     .min(4, "text content should have a minimum of 4 characters ")
//     .required("Post title is required"),
//   content: yup
//     .string("Add text content")
//     .min(10, "text content should have a minimum of 10 characters ")
//     .required("text content is required"),
// });

// const CreatePost = () => {
//   const navigate=useNavigate()
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
//       title: "",
//       content: "",
//       image: null,
//     },

//     validationSchema: validationSchema,
//     onSubmit: (values, actions) => {
//       createNewPost(values);
//       //alert(JSON.stringify(values, null, 2));
//       actions.resetForm();
//     },
//   });

//   const createNewPost = async (values) => {
//     try {

//       const result = await axiosInstance.post(`${process.env.REACT_APP_API_URL}/api/post/create`, values);
//       if (result?.data?.success === true) {
//         toast.success("post created");
//         navigate("/admin/dashboard");
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(error);
//     }
//   };
//   const modules = {
//     // ...
//     clipboard: {
//       matchVisual: false,
//     },
//     // ...
//   };

//   return (
//     <>
//       {/* <Box sx={{ bgColor: "white",
//       padding: "20px",
//       width: "100%",
//       maxWidth: "1200px",
//       margin: "0 auto",}}>
//         <Typography variant="h5" sx={{ pb: 4 }}>
//           {" "}
//           Create post{" "}
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
//                   <input name="banner" {...getInputProps()} />
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
//                         Drag and Drop here or click to choose
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
//                             src={values.image}
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
//             // onClick={handlePostContent}
//             // disabled={loading}
//           >
//             Create Post
//           </Button>
//         </Box>
//       </Box> */}

// <div className="bg-white p-5 w-full max-w-3xl mx-auto">
//       <h5 className="pb-4 text-lg font-semibold">Create post</h5>
//       <form noValidate onSubmit={handleSubmit} className="mt-1">
//         <div className="mb-3">
//           <label htmlFor="title" className="block mb-1 text-sm font-medium">Post title</label>
//           <input
//             id="title"
//             name="title"
//             placeholder="Post title"
//             value={values.title}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             className={`block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${touched.title && errors.title ? 'border-red-500' : ''}`}
//           />
//           {touched.title && errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
//         </div>

//         <div className="mb-3">
//           <label htmlFor="content" className="block mb-1 text-sm font-medium">Content</label>
//           <textarea
//             id="content"
//             name="content"
//             placeholder="Write the post content..."
//             rows={4}
//             value={values.content}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             className={`block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${touched.content && errors.content ? 'border-red-500' : ''}`}
//           />
//           {touched.content && errors.content && <p className="text-red-500 text-sm">{errors.content}</p>}
//         </div>

//         <div className="border-2 border-dashed border-blue-500 p-2">
//           <Dropzone
//             acceptedFiles=".jpg,.jpeg,.png"
//             multiple={false}
//             onDrop={(acceptedFiles) =>
//               acceptedFiles.map((file) => {
//                 const reader = new FileReader();
//                 reader.readAsDataURL(file);
//                 reader.onloadend = () => {
//                   setFieldValue("image", reader.result);
//                 };
//               })
//             }
//           >
//             {({ getRootProps, getInputProps, isDragActive }) => (
//               <div
//                 {...getRootProps()}
//                 className={`p-4 ${isDragActive ? "bg-blue-100" : "bg-gray-100"} hover:cursor-pointer`}
//               >
//                 <input name="banner" {...getInputProps()} />
//                 {isDragActive ? (
//                   <>
//                     <p className="text-center">
//                       <CloudUploadIcon className="text-blue-500 w-6 h-6 mx-auto" />
//                     </p>
//                     <p className="text-center text-sm">Drop here!</p>
//                   </>
//                 ) : values.image === null ? (
//                   <>
//                     <p className="text-center">
//                       <CloudUploadIcon className="text-blue-500 w-6 h-6 mx-auto" />
//                     </p>
//                     <p className="text-center text-sm">Drag and Drop here or click to choose</p>
//                   </>
//                 ) : (
//                   <div className="flex justify-around items-center">
//                     <img className="max-w-[100px]" src={values.image} alt="Preview" />
//                   </div>
//                 )}
//               </div>
//             )}
//           </Dropzone>
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-green-700 text-white py-2 mt-3 mb-2 rounded-full  transition duration-200"
//         >
//           Create Post
//         </button>
//       </form>
//     </div>
//     </>
//   );
// };

// export default CreatePost;

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
import axiosInstance from "../pages/axiosInstance";
import { useNavigate } from "react-router-dom";

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

  contentEn: yup
    .string("Add text designation in English")
    .min(1, "Designation must have at least 1 character")
    .required("Text designation in English is required"),
  contentBn: yup
    .string("Add text designation in Bengali")
    .min(1, "Designation must have at least 1 character")
    .required("Text designation in bengali is required"),
  contentEs: yup
    .string("Add text designation in Danish")
    .min(1, "Designation must have at least 1 character")
    .required("Text designation in Danish is required"),
});

const CreatePost = () => {
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

      contentEn: "",
      contentBn: "",
      contentEs: "",
      image: null,
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
        contentEn,
        contentBn,
        contentEs,
        image,
      } = values;

      // Structure the data for multilingual support
      const data = {
        title: { en: titleEn, bn: titleBn, es: titleEs },
        content: { en: contentEn, bn: contentBn, es: contentEs },
        image: image,
      };

      const result = await axiosInstance.post(
        `${process.env.REACT_APP_API_URL}/api/post/create`,
        data
      );
      if (result?.data?.success === true) {
        toast.success("post created successfully.");
        navigate("/admin/dashboard");
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
          Create Post
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          {/* Title in English */}
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

          {/* Content in English */}
          <TextField
            fullWidth
            sx={{ mb: 3 }}
            id="contentEn"
            label="Content (English)"
            name="contentEn"
            multiline
            rows={4}
            placeholder="Write the content in English..."
            value={values.contentEn}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.contentEn && Boolean(errors.contentEn)}
            helperText={touched.contentEn && errors.contentEn}
          />

          {/* Content in Bengali */}
          <TextField
            fullWidth
            sx={{ mb: 3 }}
            id="contentBn"
            label="Content (Bengali)"
            name="contentBn"
            multiline
            rows={4}
            placeholder="Write the content in Bengali..."
            value={values.contentBn}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.contentBn && Boolean(errors.contentBn)}
            helperText={touched.contentBn && errors.contentBn}
          />

          {/* Content in Danish */}
          <TextField
            fullWidth
            sx={{ mb: 3 }}
            id="contentEs"
            label="Content (Danish)"
            name="contentEs"
            multiline
            rows={4}
            placeholder="Write the content in Danish..."
            value={values.contentEs}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.contentEs && Boolean(errors.contentEs)}
            helperText={touched.contentEs && errors.contentEs}
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
                  reader.onloadend = () =>
                    setFieldValue("image", reader.result);
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
                    <p style={{ textAlign: "center" }}>
                      <CloudUploadIcon sx={{ color: "primary.main", mr: 2 }} />
                      Drop here!
                    </p>
                  ) : values.image === null ? (
                    <p style={{ textAlign: "center" }}>
                      <CloudUploadIcon sx={{ color: "primary.main", mr: 2 }} />
                      Drag and Drop here or click to choose
                    </p>
                  ) : (
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                      }}
                    >
                      <img
                        style={{ maxWidth: "100px" }}
                        src={values.image}
                        alt="Preview"
                      />
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
            Create Post
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default CreatePost;
