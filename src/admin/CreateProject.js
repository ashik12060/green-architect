
// new code
import { useFormik } from "formik";
import * as yup from "yup";
import Dropzone from "react-dropzone";
import { toast } from "react-toastify";
import axiosInstance from "../pages/axiosInstance";
import { useNavigate } from "react-router-dom";
import React from "react";

const validationSchema = yup.object({
  titleEn: yup
    .string("Add a title in English")
    .min(1, "Title must have at least 1 character")
    .required("Title in English is required"),
  titleBn: yup
    .string("Add a title in Bengali")
    .min(1, "Title must have at least 1 character")
    .required("Title in Bengali is required"),
  titleEs: yup
    .string("Add a title in Danish")
    .min(1, "Title must have at least 1 character")
    .required("Title in Danish is required"),
  contentEn: yup
    .string("Add content in English")
    .min(1, "Content must have at least 1 character")
    .required("Content in English is required"),
  contentBn: yup
    .string("Add content in Bengali")
    .min(1, "Content must have at least 1 character")
    .required("Content in Bengali is required"),
  contentEs: yup
    .string("Add content in Danish")
    .min(1, "Content must have at least 1 character")
    .required("Content in Danish is required"),

  // starts
  addressEn: yup
    .string("Add a title in English")
    .min(1, "Title must have at least 1 character")
    .required("Title in English is required"),
  addressBn: yup
    .string("Add a title in Bengali")
    .min(1, "Title must have at least 1 character")
    .required("Title in Bengali is required"),
  addressEs: yup
    .string("Add a title in Danish")
    .min(1, "Title must have at least 1 character")
    .required("Title in Danish is required"),

  landAreaEn: yup
    .string("Add a title in English")
    .min(1, "Title must have at least 1 character")
    .required("Title in English is required"),
  landAreaBn: yup
    .string("Add a title in Bengali")
    .min(1, "Title must have at least 1 character")
    .required("Title in Bengali is required"),
  landAreaEs: yup
    .string("Add a title in Danish")
    .min(1, "Title must have at least 1 character")
    .required("Title in Danish is required"),

  floorsEn: yup
    .string("Add a title in English")
    .min(1, "Title must have at least 1 character")
    .required("Title in English is required"),
  floorsBn: yup
    .string("Add a title in Bengali")
    .min(1, "Title must have at least 1 character")
    .required("Title in Bengali is required"),
  floorsEs: yup
    .string("Add a title in Danish")
    .min(1, "Title must have at least 1 character")
    .required("Title in Danish is required"),

  apartmentFloorEn: yup
    .string("Add a title in English")
    .min(1, "Title must have at least 1 character")
    .required("Title in English is required"),
  apartmentFloorBn: yup
    .string("Add a title in Bengali")
    .min(1, "Title must have at least 1 character")
    .required("Title in Bengali is required"),
  apartmentFloorEs: yup
    .string("Add a title in Danish")
    .min(1, "Title must have at least 1 character")
    .required("Title in Danish is required"),

  sizeEn: yup
    .string("Add a title in English")
    .min(1, "Title must have at least 1 character")
    .required("Title in English is required"),
  sizeBn: yup
    .string("Add a title in Bengali")
    .min(1, "Title must have at least 1 character")
    .required("Title in Bengali is required"),
  sizeEs: yup
    .string("Add a title in Danish")
    .min(1, "Title must have at least 1 character")
    .required("Title in Danish is required"),

  bedroomEn: yup
    .string("Add a title in English")
    .min(1, "Title must have at least 1 character")
    .required("Title in English is required"),
  bedroomBn: yup
    .string("Add a title in Bengali")
    .min(1, "Title must have at least 1 character")
    .required("Title in Bengali is required"),
  bedroomEs: yup
    .string("Add a title in Danish")
    .min(1, "Title must have at least 1 character")
    .required("Title in Danish is required"),

  bathroomEn: yup
    .string("Add a title in English")
    .min(1, "Title must have at least 1 character")
    .required("Title in English is required"),
  bathroomBn: yup
    .string("Add a title in Bengali")
    .min(1, "Title must have at least 1 character")
    .required("Title in Bengali is required"),
  bathroomEs: yup
    .string("Add a title in Danish")
    .min(1, "Title must have at least 1 character")
    .required("Title in Danish is required"),

  launchDateEn: yup
    .string("Add a title in English")
    .min(1, "Title must have at least 1 character")
    .required("Title in English is required"),
  launchDateBn: yup
    .string("Add a title in Bengali")
    .min(1, "Title must have at least 1 character")
    .required("Title in Bengali is required"),
  launchDateEs: yup
    .string("Add a title in Danish")
    .min(1, "Title must have at least 1 character")
    .required("Title in Danish is required"),

  collectionNameEn: yup
    .string("Add a title in English")
    .min(1, "Title must have at least 1 character")
    .required("Title in English is required"),
  collectionNameBn: yup
    .string("Add a title in Bengali")
    .min(1, "Title must have at least 1 character")
    .required("Title in Bengali is required"),
  collectionNameEs: yup
    .string("Add a title in Danish")
    .min(1, "Title must have at least 1 character")
    .required("Title in Danish is required"),

  buildingTypeEn: yup
    .string("Add a title in English")
    .min(1, "Title must have at least 1 character")
    .required("Title in English is required"),
  buildingTypeBn: yup
    .string("Add a title in Bengali")
    .min(1, "Title must have at least 1 character")
    .required("Title in Bengali is required"),
  buildingTypeEs: yup
    .string("Add a title in Danish")
    .min(1, "Title must have at least 1 character")
    .required("Title in Danish is required"),

  // end
  category: yup.string("Select a category").required("Category is required"),
});

const CreateProject = () => {
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
      addressEn: "",
      addressBn: "",
      addressEs: "",
      landAreaEn: "",
      landAreaBn: "",
      landAreaEs: "",
      floorsEn: "",
      floorsBn: "",
      floorsEs: "",
      apartmentFloorEn: "",
      apartmentFloorBn: "",
      apartmentFloorEs: "",
      sizeEn: "",
      sizeBn: "",
      sizeEs: "",
      bedroomEn: "",
      bedroomBn: "",
      bedroomEs: "",
      bathroomEn: "",
      bathroomBn: "",
      bathroomEs: "",
      launchDateEn: "",
      launchDateBn: "",
      launchDateEs: "",
      collectionNameEn: "",
      collectionNameBn: "",
      collectionNameEs: "",
      buildingTypeEn: "",
      buildingTypeBn: "",
      buildingTypeEs: "",

      images: [],
      category: "", // New field for category selection
    },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      createNewProject(values);
      actions.resetForm();
    },
  });

  // const createNewProject = async (values) => {
  //   try {
  //     const {
  //       titleEn,
  //       titleBn,
  //       titleEs,
  //       contentEn,
  //       contentBn,
  //       contentEs,
  //       images,
  //       category,
  //     } = values;

  //     const data = {
  //       title: { en: titleEn, bn: titleBn, es: titleEs },
  //       content: { en: contentEn, bn: contentBn, es: contentEs },
  //       images: images,
  //       category, // Include category in the payload
  //     };

  //     const result = await axiosInstance.post(
  //       `${process.env.REACT_APP_API_URL}/api/project/create`,
  //       data
  //     );

  //     if (result?.data?.success === true) {
  //       toast.success("Project created");
  //       navigate("/admin/dashboard");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     toast.error(error.response?.data?.message || "Something went wrong!");
  //   }
  // };

  const createNewProject = async (values) => {
    try {
      const {
        titleEn,
        titleBn,
        titleEs,
        contentEn,
        contentBn,
        contentEs,
        addressEn,
        addressBn,
        addressEs,
        landAreaEn,
        landAreaBn,
        landAreaEs,
        floorsEn,
        floorsBn,
        floorsEs,
        apartmentFloorEn,
        apartmentFloorBn,
        apartmentFloorEs,
        sizeEn,
        sizeBn,
        sizeEs,
        bedroomEn,
        bedroomBn,
        bedroomEs,
        bathroomEn,
        bathroomBn,
        bathroomEs,
        launchDateEn,
        launchDateBn,
        launchDateEs,
        collectionNameEn,
        collectionNameBn,
        collectionNameEs,
        buildingTypeEn,
        buildingTypeBn,
        buildingTypeEs,

        category,
        images,
      } = values;

      const data = {
        title: { en: titleEn, bn: titleBn, es: titleEs },
        content: { en: contentEn, bn: contentBn, es: contentEs },
        address: { en: addressEn, bn: addressBn, es: addressEs },
        landArea: { en: landAreaEn, bn: landAreaBn, es: landAreaEs },
        floors: { en: floorsEn, bn: floorsBn, es: floorsEs },
        apartmentFloor: { en: apartmentFloorEn, bn: apartmentFloorBn, es: apartmentFloorEs },
        size: { en: sizeEn, bn: sizeBn, es: sizeEs },
        bedroom: { en: bedroomEn, bn: bedroomBn, es: bedroomEs },
        bathroom: { en: bathroomEn, bn: bathroomBn, es: bathroomEs },
        launchDate: { en: launchDateEn, bn: launchDateBn, es: launchDateEs },
        collectionName: { en: collectionNameEn, bn: collectionNameBn, es: collectionNameEs },
        buildingType: { en: buildingTypeEn, bn: buildingTypeBn, es: buildingTypeEs },
        category, // Include category
        images,
      };

      console.log("Payload:", data); // Debugging: Check the payload

      const result = await axiosInstance.post(
        `${process.env.REACT_APP_API_URL}/api/project/create`,
        data
      );

      if (result?.data?.success === true) {
        toast.success("Project created successfully!");
        navigate("/admin/dashboard");
      }
    } catch (error) {
      console.error("Error:", error.response?.data || error.message); // Debugging: Check the error response
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="bg-white p-5 w-full max-w-3xl mx-auto">
      <h5 className="pb-4 text-lg font-semibold">Add Project</h5>
      <form noValidate onSubmit={handleSubmit} className="mt-1">
        {/* Project Titles */}
        {["En", "Bn", "Es"].map((lang) => (
          <div className="mb-3" key={`title${lang}`}>
            <label
              htmlFor={`title${lang}`}
              className="block mb-1 text-sm font-medium"
            >
              Project Title ({lang})
            </label>
            <input
              id={`title${lang}`}
              name={`title${lang}`}
              placeholder={`Project title (${lang})`}
              value={values[`title${lang}`]}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                touched[`title${lang}`] && errors[`title${lang}`]
                  ? "border-red-500"
                  : ""
              }`}
            />
            {touched[`title${lang}`] && errors[`title${lang}`] && (
              <p className="text-red-500 text-sm">{errors[`title${lang}`]}</p>
            )}
          </div>
        ))}

        {/* Project Contents */}
        {["En", "Bn", "Es"].map((lang) => (
          <div className="mb-3" key={`content${lang}`}>
            <label
              htmlFor={`content${lang}`}
              className="block mb-1 text-sm font-medium"
            >
              Project Content ({lang})
            </label>
            <textarea
              id={`content${lang}`}
              name={`content${lang}`}
              placeholder={`Write project content (${lang})...`}
              rows={4}
              value={values[`content${lang}`]}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                touched[`content${lang}`] && errors[`content${lang}`]
                  ? "border-red-500"
                  : ""
              }`}
            />
            {touched[`content${lang}`] && errors[`content${lang}`] && (
              <p className="text-red-500 text-sm">{errors[`content${lang}`]}</p>
            )}
          </div>
        ))}


        {/* starts */}
        {/* Project address */}
        {["En", "Bn", "Es"].map((lang) => (
          <div className="mb-3" key={`address${lang}`}>
            <label
              htmlFor={`address${lang}`}
              className="block mb-1 text-sm font-medium"
            >
              Project address ({lang})
            </label>
            <textarea
              id={`address${lang}`}
              name={`address${lang}`}
              placeholder={`Write project address (${lang})...`}
              rows={4}
              value={values[`address${lang}`]}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                touched[`address${lang}`] && errors[`address${lang}`]
                  ? "border-red-500"
                  : ""
              }`}
            />
            {touched[`address${lang}`] && errors[`address${lang}`] && (
              <p className="text-red-500 text-sm">{errors[`address${lang}`]}</p>
            )}
          </div>
        ))}

        {/* Project landArea */}
        {["En", "Bn", "Es"].map((lang) => (
          <div className="mb-3" key={`landArea${lang}`}>
            <label
              htmlFor={`landArea${lang}`}
              className="block mb-1 text-sm font-medium"
            >
              Project landArea ({lang})
            </label>
            <textarea
              id={`landArea${lang}`}
              name={`landArea${lang}`}
              placeholder={`Write project landArea (${lang})...`}
              rows={4}
              value={values[`landArea${lang}`]}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                touched[`landArea${lang}`] && errors[`landArea${lang}`]
                  ? "border-red-500"
                  : ""
              }`}
            />
            {touched[`landArea${lang}`] && errors[`landArea${lang}`] && (
              <p className="text-red-500 text-sm">{errors[`landArea${lang}`]}</p>
            )}
          </div>
        ))}


        {/* Project floors */}
        {["En", "Bn", "Es"].map((lang) => (
          <div className="mb-3" key={`floors${lang}`}>
            <label
              htmlFor={`floors${lang}`}
              className="block mb-1 text-sm font-medium"
            >
              Project floors ({lang})
            </label>
            <textarea
              id={`floors${lang}`}
              name={`floors${lang}`}
              placeholder={`Write project floors (${lang})...`}
              rows={4}
              value={values[`floors${lang}`]}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                touched[`floors${lang}`] && errors[`floors${lang}`]
                  ? "border-red-500"
                  : ""
              }`}
            />
            {touched[`floors${lang}`] && errors[`floors${lang}`] && (
              <p className="text-red-500 text-sm">{errors[`floors${lang}`]}</p>
            )}
          </div>
        ))}



        {/* Project apartmentFloor */}
        {["En", "Bn", "Es"].map((lang) => (
          <div className="mb-3" key={`apartmentFloor${lang}`}>
            <label
              htmlFor={`apartmentFloor${lang}`}
              className="block mb-1 text-sm font-medium"
            >
              Project apartmentFloor ({lang})
            </label>
            <textarea
              id={`apartmentFloor${lang}`}
              name={`apartmentFloor${lang}`}
              placeholder={`Write project apartmentFloor (${lang})...`}
              rows={4}
              value={values[`apartmentFloor${lang}`]}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                touched[`apartmentFloor${lang}`] && errors[`apartmentFloor${lang}`]
                  ? "border-red-500"
                  : ""
              }`}
            />
            {touched[`apartmentFloor${lang}`] && errors[`apartmentFloor${lang}`] && (
              <p className="text-red-500 text-sm">{errors[`apartmentFloor${lang}`]}</p>
            )}
          </div>
        ))}



        {/* Project size */}
        {["En", "Bn", "Es"].map((lang) => (
          <div className="mb-3" key={`size${lang}`}>
            <label
              htmlFor={`size${lang}`}
              className="block mb-1 text-sm font-medium"
            >
              Project size ({lang})
            </label>
            <textarea
              id={`size${lang}`}
              name={`size${lang}`}
              placeholder={`Write project size (${lang})...`}
              rows={4}
              value={values[`size${lang}`]}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                touched[`size${lang}`] && errors[`size${lang}`]
                  ? "border-red-500"
                  : ""
              }`}
            />
            {touched[`size${lang}`] && errors[`size${lang}`] && (
              <p className="text-red-500 text-sm">{errors[`size${lang}`]}</p>
            )}
          </div>
        ))}



        {/* Project bedroom */}
        {["En", "Bn", "Es"].map((lang) => (
          <div className="mb-3" key={`bedroom${lang}`}>
            <label
              htmlFor={`bedroom${lang}`}
              className="block mb-1 text-sm font-medium"
            >
              Project bedroom ({lang})
            </label>
            <textarea
              id={`bedroom${lang}`}
              name={`bedroom${lang}`}
              placeholder={`Write project bedroom (${lang})...`}
              rows={4}
              value={values[`bedroom${lang}`]}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                touched[`bedroom${lang}`] && errors[`bedroom${lang}`]
                  ? "border-red-500"
                  : ""
              }`}
            />
            {touched[`bedroom${lang}`] && errors[`bedroom${lang}`] && (
              <p className="text-red-500 text-sm">{errors[`bedroom${lang}`]}</p>
            )}
          </div>
        ))}


        {/* Project bathroom */}
        {["En", "Bn", "Es"].map((lang) => (
          <div className="mb-3" key={`bathroom${lang}`}>
            <label
              htmlFor={`bathroom${lang}`}
              className="block mb-1 text-sm font-medium"
            >
              Project bathroom ({lang})
            </label>
            <textarea
              id={`bathroom${lang}`}
              name={`bathroom${lang}`}
              placeholder={`Write project bathroom (${lang})...`}
              rows={4}
              value={values[`bathroom${lang}`]}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                touched[`bathroom${lang}`] && errors[`bathroom${lang}`]
                  ? "border-red-500"
                  : ""
              }`}
            />
            {touched[`bathroom${lang}`] && errors[`bathroom${lang}`] && (
              <p className="text-red-500 text-sm">{errors[`bathroom${lang}`]}</p>
            )}
          </div>
        ))}


        {/* Project launchDate */}
        {["En", "Bn", "Es"].map((lang) => (
          <div className="mb-3" key={`launchDate${lang}`}>
            <label
              htmlFor={`launchDate${lang}`}
              className="block mb-1 text-sm font-medium"
            >
              Project launchDate ({lang})
            </label>
            <textarea
              id={`launchDate${lang}`}
              name={`launchDate${lang}`}
              placeholder={`Write project launchDate (${lang})...`}
              rows={4}
              value={values[`launchDate${lang}`]}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                touched[`launchDate${lang}`] && errors[`launchDate${lang}`]
                  ? "border-red-500"
                  : ""
              }`}
            />
            {touched[`launchDate${lang}`] && errors[`launchDate${lang}`] && (
              <p className="text-red-500 text-sm">{errors[`launchDate${lang}`]}</p>
            )}
          </div>
        ))}



        {/* Project collectionName */}
        {["En", "Bn", "Es"].map((lang) => (
          <div className="mb-3" key={`collectionName${lang}`}>
            <label
              htmlFor={`collectionName${lang}`}
              className="block mb-1 text-sm font-medium"
            >
              Project collectionName ({lang})
            </label>
            <textarea
              id={`collectionName${lang}`}
              name={`collectionName${lang}`}
              placeholder={`Write project collectionName (${lang})...`}
              rows={4}
              value={values[`collectionName${lang}`]}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                touched[`collectionName${lang}`] && errors[`collectionName${lang}`]
                  ? "border-red-500"
                  : ""
              }`}
            />
            {touched[`collectionName${lang}`] && errors[`collectionName${lang}`] && (
              <p className="text-red-500 text-sm">{errors[`collectionName${lang}`]}</p>
            )}
          </div>
        ))}



        {/* Project buildingType */}
        {["En", "Bn", "Es"].map((lang) => (
          <div className="mb-3" key={`buildingType${lang}`}>
            <label
              htmlFor={`buildingType${lang}`}
              className="block mb-1 text-sm font-medium"
            >
              Project buildingType ({lang})
            </label>
            <textarea
              id={`buildingType${lang}`}
              name={`buildingType${lang}`}
              placeholder={`Write project buildingType (${lang})...`}
              rows={4}
              value={values[`buildingType${lang}`]}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                touched[`buildingType${lang}`] && errors[`buildingType${lang}`]
                  ? "border-red-500"
                  : ""
              }`}
            />
            {touched[`buildingType${lang}`] && errors[`buildingType${lang}`] && (
              <p className="text-red-500 text-sm">{errors[`buildingType${lang}`]}</p>
            )}
          </div>
        ))}


        {/* ends */}

        {/* Category Dropdown */}
        {/* Category Dropdown */}
        <div className="mb-3">
          <label htmlFor="category" className="block mb-1 text-sm font-medium">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={values.category}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              touched.category && errors.category ? "border-red-500" : ""
            }`}
          >
            <option value="">Select a category</option>
            <option value="web-development">Web Development</option>
            <option value="design">Design</option>
            <option value="marketing">Marketing</option>
            {/* Add more categories as needed */}
          </select>
          {touched.category && errors.category && (
            <p className="text-red-500 text-sm">{errors.category}</p>
          )}
        </div>

        {/* Dropzone for Multiple Images */}
        <div className="border-2 border-dashed border-blue-500 p-2 mb-4">
          <Dropzone
            acceptedFiles=".jpg,.jpeg,.png"
            multiple
            onDrop={(acceptedFiles) => {
              const imagePromises = acceptedFiles.map((file) => {
                const reader = new FileReader();
                return new Promise((resolve) => {
                  reader.onload = () => resolve(reader.result);
                  reader.readAsDataURL(file);
                });
              });
              Promise.all(imagePromises).then((images) => {
                setFieldValue("images", images);
              });
            }}
          >
            {({ getRootProps, getInputProps, isDragActive }) => (
              <div
                {...getRootProps()}
                className={`p-4 ${
                  isDragActive ? "bg-blue-100" : "bg-gray-100"
                } hover:cursor-pointer`}
              >
                <input name="images" {...getInputProps()} />
                {isDragActive ? (
                  <p className="text-center text-sm">Drop here!</p>
                ) : (
                  <p className="text-center text-sm">
                    Drag and Drop or click to select images
                  </p>
                )}
              </div>
            )}
          </Dropzone>
          <div className="flex mt-2 gap-2">
            {values.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Preview ${index + 1}`}
                className="w-20 h-20 object-cover"
              />
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-700 text-white py-2 mt-3 mb-2 rounded-full transition duration-200"
        >
          Create Project
        </button>
      </form>
    </div>
  );
};

export default CreateProject;
