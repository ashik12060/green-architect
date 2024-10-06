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
    .string("Add a product title")
    .min(1, "text content should have a minimum of 1 characters ")
    .required("product title is required"),
  content: yup
    .string("Add text content")
    .min(1, "text content should have a minimum of 1 characters ")
    .required("text content is required"),
});

const CreateProduct = () => {
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
      createNewProduct(values);
      //alert(JSON.stringify(values, null, 2));
      actions.resetForm();
    },
  });

  const createNewProduct = async (values) => {
    try {

      const result = await axiosInstance.post(`${process.env.REACT_APP_API_URL}/api/product/create`, values);
      if (result?.data?.success === true) {
        toast.success("product created");
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
      


<div className="bg-white p-5 w-full max-w-3xl mx-auto">
      <h5 className="pb-4 text-lg font-semibold">Add Product</h5>
      <form noValidate onSubmit={handleSubmit} className="mt-1">
        <div className="mb-3">
          <label htmlFor="title" className="block mb-1 text-sm font-medium">Product title</label>
          <input
            id="title"
            name="title"
            placeholder="Product title"
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
            placeholder="Write the Product content..."
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
          Create Product
        </button>
      </form>
    </div>
    </>
  );
};

export default CreateProduct;
