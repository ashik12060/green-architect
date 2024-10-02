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
// import axiosInstance from "../pages/axiosInstance";

const validationSchema = yup.object({
  title: yup
    .string("Add a post title")
    .min(4, "text content should have a minimum of 4 characters ")
    .required("Post title is required"),
  content: yup
    .string("Add text content")
    .min(10, "text content should have a minimum of 10 characters ")
    .required("text content is required"),
});

const CreatePost = () => {
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
      content: "",
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

      const result = await axiosInstance.post(`${process.env.REACT_APP_API_URL}/api/post/create`, values);
      if (result?.data?.success === true) {
        toast.success("post created");
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

  // const handlePostContent = () => {
  //   const rawContent = values.content; // Get the content from ReactQuill

  //   // Remove <p> tags from the raw content
  //   const sanitizedContent = rawContent.replace(/<\/?p>/g, "");
  //   createNewPost({ ...values, content: sanitizedContent });
  // };

  return (
    <>
      {/* <Box sx={{ bgColor: "white",
      padding: "20px",
      width: "100%",
      maxWidth: "1200px",
      margin: "0 auto",}}>
        <Typography variant="h5" sx={{ pb: 4 }}>
          {" "}
          Create post{" "}
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="title"
            label="Post title"
            name="title"
            InputLabelProps={{
              shrink: true,
            }}
            placeholder="Post title"
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
              placeholder="Write the post content..."
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
            Create Post
          </Button>
        </Box>
      </Box> */}


<div className="bg-white p-5 w-full max-w-3xl mx-auto">
      <h5 className="pb-4 text-lg font-semibold">Create post</h5>
      <form noValidate onSubmit={handleSubmit} className="mt-1">
        <div className="mb-3">
          <label htmlFor="title" className="block mb-1 text-sm font-medium">Post title</label>
          <input
            id="title"
            name="title"
            placeholder="Post title"
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${touched.title && errors.title ? 'border-red-500' : ''}`}
          />
          {touched.title && errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="content" className="block mb-1 text-sm font-medium">Content</label>
          <textarea
            id="content"
            name="content"
            placeholder="Write the post content..."
            rows={4}
            value={values.content}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${touched.content && errors.content ? 'border-red-500' : ''}`}
          />
          {touched.content && errors.content && <p className="text-red-500 text-sm">{errors.content}</p>}
        </div>

        <div className="border-2 border-dashed border-blue-500 p-2">
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
              <div
                {...getRootProps()}
                className={`p-4 ${isDragActive ? "bg-blue-100" : "bg-gray-100"} hover:cursor-pointer`}
              >
                <input name="banner" {...getInputProps()} />
                {isDragActive ? (
                  <>
                    <p className="text-center">
                      <CloudUploadIcon className="text-blue-500 w-6 h-6 mx-auto" />
                    </p>
                    <p className="text-center text-sm">Drop here!</p>
                  </>
                ) : values.image === null ? (
                  <>
                    <p className="text-center">
                      <CloudUploadIcon className="text-blue-500 w-6 h-6 mx-auto" />
                    </p>
                    <p className="text-center text-sm">Drag and Drop here or click to choose</p>
                  </>
                ) : (
                  <div className="flex justify-around items-center">
                    <img className="max-w-[100px]" src={values.image} alt="Preview" />
                  </div>
                )}
              </div>
            )}
          </Dropzone>
        </div>

        <button
          type="submit"
          className="w-full bg-green-700 text-white py-2 mt-3 mb-2 rounded-full  transition duration-200"
        >
          Create Post
        </button>
      </form>
    </div>
    </>
  );
};

export default CreatePost;
