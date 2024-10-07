// import { Box, Button, TextField, Typography } from "@mui/material";
// import { useFormik } from "formik";
// import * as yup from "yup";
// import Dropzone from "react-dropzone";
// import CloudUploadIcon from "@mui/icons-material/CloudUpload";
// import { toast } from "react-toastify";
// import "react-quill/dist/quill.snow.css";
// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import axiosInstance from "../pages/axiosInstance";

// const validationSchema = yup.object({
//   title: yup
//     .string("Add a title")
//     .min(1, "text content should have a minimum of 1 characters ")
//     .required("Title is required"),
//     thumbnail: yup
//     .string("Add text designation")
//     .min(1, "text thumbnail should have a minimum of 1 characters ")
//     .required("text thumbnail is required"),
//     videoUrl: yup
//     .string("Add text videoUrl")
//     .min(1, "text videoUrl should have a minimum of 1 characters ")
//     .required("text videoUrl is required"),
// });

// const EditVideo = () => {
//   const { id } = useParams();
//   const [title, setTitle] = useState("");
//   const [thumbnail, setThumbnail] = useState("");
//   const [videoUrl, setVideoUrl] = useState("");
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
//       title:"",
//       thumbnail:"",
//       videoUrl:"",
//       image: "",
//     },

//     validationSchema: validationSchema,
//     enableReinitialize: true,
//     onSubmit: (values, actions) => {
//       updateVideo(values);
//       //alert(JSON.stringify(values, null, 2));
//       actions.resetForm();
//     },
//   });

//   //show post by Id
//   const singleVideoById = async () => {
//     // console.log(id)
//     try {
//       // 
//       const { data } = await axiosInstance.get(`${process.env.REACT_APP_API_URL}/api/video/${id}`
//       );
//       setTitle(data.video.title);
//       setThumbnail(data.video.thumbnail);
//       setVideoUrl(data.video.videoUrl);
//       setImagePreview(data.video.image.url);
//       console.log("single video admin", data.video);
//     } catch (error) {
//       console.log(error);
//       toast.error(error);
//     }
//   };

//   useEffect(() => {
//     singleVideoById();
//   }, []);

//   const updateVideo = async (values) => {
//     try {
//       const result = await axiosInstance.put(`${process.env.REACT_APP_API_URL}/api/update/video/${id}`, values);

//       console.log(result)
//       if (result?.data?.success === true) {
//         toast.success("video updated");
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
//           Edit video{" "}
//         </Typography>
//         <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
//           <TextField
//             sx={{ mb: 3 }}
//             fullWidth
//             id="title"
//             label="video title"
//             name="title"
//             InputLabelProps={{
//               shrink: true,
//             }}
//             placeholder="video title"
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
//               id="thumbnail"
//               label="thumbnail"
//               name="thumbnail"
//               multiline
//               rows={4}
//               placeholder="Write the thumbnail..."
//               value={values.thumbnail}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               error={touched.thumbnail && Boolean(errors.thumbnail)}
//               helperText={touched.thumbnail && errors.thumbnail}
//             />
//           </Box>
        

//           <Box sx={{ mb: 3 }}>
//             <TextField
//               sx={{ mb: 3 }}
//               fullWidth
//               id="videoUrl"
//               label="videoUrl"
//               name="videoUrl"
//               multiline
//               rows={4}
//               placeholder="Write the videoUrl..."
//               value={values.videoUrl}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               error={touched.videoUrl && Boolean(errors.videoUrl)}
//               helperText={touched.videoUrl && errors.videoUrl}
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
//             Update video
//           </Button>
//         </Box>
//       </Box>
//     </>
//   );
// };

// export default EditVideo;


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

const validationSchema = yup.object({
  title: yup
    .string("Add a rnd title")
    .min(4)
    .required("RND title is required"),
  thumbnail: yup
    .string("Add text content")
    .min(10)
    .required("Text content is required"),
  videoUrl: yup
    .string("Add text content")
    .min(10)
    .required("Text content is required"),
  
});

const EditVideo = () => {
  const { id } = useParams();
  // const [imagePreview, setImagePreview] = useState("");
  const navigate = useNavigate();
  // const { id } = useParams();
    const [title, setTitle] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [videoUrl, setVideoUrl] = useState("");
    const [image, setImage] = useState("");
    const [imagePreview, setImagePreview] = useState("");

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
      thumbnail: "",
      videoUrl: "",
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
  // const singleRndById = async () => {
  //   try {
  //     // 
  //     const { data } = await axiosInstance.get(`${process.env.REACT_APP_API_URL}/api/rnd/${id}`);
  //     const rnd = data.rnd;
  //     setFieldValue("title", rnd.title);
  //     setFieldValue("content", rnd.content);
     
  //     setImagePreview(rnd.image.url);
  //   } catch (error) {
  //     console.log(error);
  //     toast.error(error);
  //   }
  // };

  // useEffect(() => {
  //   singleRndById();
  // }, []);

  const updateRnd = async (values) => {
    try {
      const { data } = await axiosInstance.put(`${process.env.REACT_APP_API_URL}/api/update/video/${id}`, values);
      if (data.success === true) {
        toast.success("Video updated");
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
              id="thumbnail"
              label="thumbnail"
              name="thumbnail"
              multiline
              rows={4}
              placeholder="Write the  thumbnail..."
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
              placeholder="Write the  videoUrl..."
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
            Update video
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default EditVideo;
