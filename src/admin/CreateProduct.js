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
      createNewProduct(values);
      //alert(JSON.stringify(values, null, 2));
      actions.resetForm();
    },
  });

  const createNewProduct = async (values) => {
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


      const result = await axiosInstance.post(`${process.env.REACT_APP_API_URL}/api/product/create`, data);
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
            id="titleEn"
            name="titleEn"
            placeholder="Product title En"
            value={values.titleEn}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${touched.titleEn && errors.titleEn ? 'border-red-500' : ''}`}
          />
          {touched.titleEn && errors.titleEn && <p className="text-red-500 text-sm">{errors.titleEn}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="block mb-1 text-sm font-medium">Product title</label>
          <input
            id="titleBn"
            name="titleBn"
            placeholder="Product title Bn"
            value={values.titleBn}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${touched.titleBn && errors.titleEn ? 'border-red-500' : ''}`}
          />
          {touched.titleBn && errors.titleBn && <p className="text-red-500 text-sm">{errors.titleBn}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="block mb-1 text-sm font-medium">Product title</label>
          <input
            id="titleEs"
            name="titleEs"
            placeholder="Product title Dn"
            value={values.titleEs}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${touched.titleEs && errors.titleEs ? 'border-red-500' : ''}`}
          />
          {touched.titletitleEsEn && errors.titleEs && <p titleEs="text-red-500 text-sm">{errors.titleEs}</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="content" className="block mb-1 text-sm font-medium">Content</label>
          <textarea
            id="contentEn"
            name="contentEn"
            placeholder="Write the Product content Eb"
            rows={4}
            value={values.contentEn}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${touched.contentEn && errors.contentEn ? 'border-red-500' : ''}`}
          />
          {touched.contentEn && errors.contentEn && <p className="text-red-500 text-sm">{errors.contentEn}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="block mb-1 text-sm font-medium">Content</label>
          <textarea
            id="contentBn"
            name="contentBn"
            placeholder="Write the Product content Bn"
            rows={4}
            value={values.contentBn}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${touched.contentBn && errors.contentBn ? 'border-red-500' : ''}`}
          />
          {touched.contentBn && errors.contentBn && <p className="text-red-500 text-sm">{errors.contentBn}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="block mb-1 text-sm font-medium">Content</label>
          <textarea
            id="contentEs"
            name="contentEs"
            placeholder="Write the Product content Dn"
            rows={4}
            value={values.contentEs}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${touched.contentEs && errors.contentEs ? 'border-red-500' : ''}`}
          />
          {touched.contentEs && errors.contentEs && <p className="text-red-500 text-sm">{errors.contentEs}</p>}
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
