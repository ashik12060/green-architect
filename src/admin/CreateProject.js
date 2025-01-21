
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

  frontRoadEn: yup
    .string("Add a title in English")
    .min(1, "Title must have at least 1 character")
    .required("Title in English is required"),
    frontRoadBn: yup
    .string("Add a title in Bengali")
    .min(1, "Title must have at least 1 character")
    .required("Title in Bengali is required"),
    frontRoadEs: yup
    .string("Add a title in Danish")
    .min(1, "Title must have at least 1 character")
    .required("Title in Danish is required"),
    unitsEn: yup
    .string("Add a title in English")
    .min(1, "Title must have at least 1 character")
    .required("Title in English is required"),
    unitsBn: yup
    .string("Add a title in Bengali")
    .min(1, "Title must have at least 1 character")
    .required("Title in Bengali is required"),
    unitsEs: yup
    .string("Add a title in Danish")
    .min(1, "Title must have at least 1 character")
    .required("Title in Danish is required"),

    parkingEn: yup
    .string("Add a title in English")
    .min(1, "Title must have at least 1 character")
    .required("Title in English is required"),
    parkingBn: yup
    .string("Add a title in Bengali")
    .min(1, "Title must have at least 1 character")
    .required("Title in Bengali is required"),
    parkingEs: yup
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
// next

mosqueEn: yup
    .string("Add a title in English")
    .min(1, "Title must have at least 1 character")
    .required("Title in English is required"),
    mosqueBn: yup
    .string("Add a title in Bengali")
    .min(1, "Title must have at least 1 character")
    .required("Title in Bengali is required"),
    mosqueEs: yup
    .string("Add a title in Danish")
    .min(1, "Title must have at least 1 character")
    .required("Title in Danish is required"),
// mosque, college, 
collegeEn: yup
    .string("Add a title in English")
    .min(1, "Title must have at least 1 character")
    .required("Title in English is required"),
    collegeBn: yup
    .string("Add a title in Bengali")
    .min(1, "Title must have at least 1 character")
    .required("Title in Bengali is required"),
    collegeEs: yup
    .string("Add a title in Danish")
    .min(1, "Title must have at least 1 character")
    .required("Title in Danish is required"),
    // school, 
    schoolEn: yup
    .string("Add a title in English")
    .min(1, "Title must have at least 1 character")
    .required("Title in English is required"),
    schoolBn: yup
    .string("Add a title in Bengali")
    .min(1, "Title must have at least 1 character")
    .required("Title in Bengali is required"),
    schoolEs: yup
    .string("Add a title in Danish")
    .min(1, "Title must have at least 1 character")
    .required("Title in Danish is required"),
    // market, 
    marketEn: yup
    .string("Add a title in English")
    .min(1, "Title must have at least 1 character")
    .required("Title in English is required"),
    marketBn: yup
    .string("Add a title in Bengali")
    .min(1, "Title must have at least 1 character")
    .required("Title in Bengali is required"),
    marketEs: yup
    .string("Add a title in Danish")
    .min(1, "Title must have at least 1 character")
    .required("Title in Danish is required"),
    // bank1, bank2, atm, busStop
  bank1En: yup
    .string("Add a title in English")
    .min(1, "Title must have at least 1 character")
    .required("Title in English is required"),
    bank1Bn: yup
    .string("Add a title in Bengali")
    .min(1, "Title must have at least 1 character")
    .required("Title in Bengali is required"),
    bank1Es: yup
    .string("Add a title in Danish")
    .min(1, "Title must have at least 1 character")
    .required("Title in Danish is required"),
    // bank2, 
    bank2En: yup
    .string("Add a title in English")
    .min(1, "Title must have at least 1 character")
    .required("Title in English is required"),
    bank2Bn: yup
    .string("Add a title in Bengali")
    .min(1, "Title must have at least 1 character")
    .required("Title in Bengali is required"),
    bank2Es: yup
    .string("Add a title in Danish")
    .min(1, "Title must have at least 1 character")
    .required("Title in Danish is required"),
    // atm,
    atmEn: yup
    .string("Add a title in English")
    .min(1, "Title must have at least 1 character")
    .required("Title in English is required"),
    atmBn: yup
    .string("Add a title in Bengali")
    .min(1, "Title must have at least 1 character")
    .required("Title in Bengali is required"),
    atmEs: yup
    .string("Add a title in Danish")
    .min(1, "Title must have at least 1 character")
    .required("Title in Danish is required"),
    // busStop
    busStopEn: yup
    .string("Add a title in English")
    .min(1, "Title must have at least 1 character")
    .required("Title in English is required"),
    busStopBn: yup
    .string("Add a title in Bengali")
    .min(1, "Title must have at least 1 character")
    .required("Title in Bengali is required"),
    busStopEs: yup
    .string("Add a title in Danish")
    .min(1, "Title must have at least 1 character")
    .required("Title in Danish is required"),


mosqueNameEn: yup
    .string("Add a title in English")
    .min(1, "Title must have at least 1 character")
    .required("Title in English is required"),
    mosqueNameBn: yup
    .string("Add a title in Bengali")
    .min(1, "Title must have at least 1 character")
    .required("Title in Bengali is required"),
    mosqueNameEs: yup
    .string("Add a title in Danish")
    .min(1, "Title must have at least 1 character")
    .required("Title in Danish is required"),
// mosque, college, 
collegeNameEn: yup
    .string("Add a title in English")
    .min(1, "Title must have at least 1 character")
    .required("Title in English is required"),
    collegeNameBn: yup
    .string("Add a title in Bengali")
    .min(1, "Title must have at least 1 character")
    .required("Title in Bengali is required"),
    collegeNameEs: yup
    .string("Add a title in Danish")
    .min(1, "Title must have at least 1 character")
    .required("Title in Danish is required"),
    // school, 
    schoolNameEn: yup
    .string("Add a title in English")
    .min(1, "Title must have at least 1 character")
    .required("Title in English is required"),
    schoolNameBn: yup
    .string("Add a title in Bengali")
    .min(1, "Title must have at least 1 character")
    .required("Title in Bengali is required"),
    schoolNameEs: yup
    .string("Add a title in Danish")
    .min(1, "Title must have at least 1 character")
    .required("Title in Danish is required"),
    // market, 
    marketNameEn: yup
    .string("Add a title in English")
    .min(1, "Title must have at least 1 character")
    .required("Title in English is required"),
    marketNameBn: yup
    .string("Add a title in Bengali")
    .min(1, "Title must have at least 1 character")
    .required("Title in Bengali is required"),
    marketNameEs: yup
    .string("Add a title in Danish")
    .min(1, "Title must have at least 1 character")
    .required("Title in Danish is required"),
    // bank1, bank2, atm, busStop
  bank1NameEn: yup
    .string("Add a title in English")
    .min(1, "Title must have at least 1 character")
    .required("Title in English is required"),
    bank1NameBn: yup
    .string("Add a title in Bengali")
    .min(1, "Title must have at least 1 character")
    .required("Title in Bengali is required"),
    bank1NameEs: yup
    .string("Add a title in Danish")
    .min(1, "Title must have at least 1 character")
    .required("Title in Danish is required"),
    // bank2, 
    bank2NameEn: yup
    .string("Add a title in English")
    .min(1, "Title must have at least 1 character")
    .required("Title in English is required"),
    bank2NameBn: yup
    .string("Add a title in Bengali")
    .min(1, "Title must have at least 1 character")
    .required("Title in Bengali is required"),
    bank2NameEs: yup
    .string("Add a title in Danish")
    .min(1, "Title must have at least 1 character")
    .required("Title in Danish is required"),
    // atm,
    atmNameEn: yup
    .string("Add a title in English")
    .min(1, "Title must have at least 1 character")
    .required("Title in English is required"),
    atmNameBn: yup
    .string("Add a title in Bengali")
    .min(1, "Title must have at least 1 character")
    .required("Title in Bengali is required"),
    atmNameEs: yup
    .string("Add a title in Danish")
    .min(1, "Title must have at least 1 character")
    .required("Title in Danish is required"),
    // busStop
    busStopNameEn: yup
    .string("Add a title in English")
    .min(1, "Title must have at least 1 character")
    .required("Title in English is required"),
    busStopNameBn: yup
    .string("Add a title in Bengali")
    .min(1, "Title must have at least 1 character")
    .required("Title in Bengali is required"),
    busStopNameEs: yup
    .string("Add a title in Danish")
    .min(1, "Title must have at least 1 character")
    .required("Title in Danish is required"),

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
      frontRoadEn:"",
      frontRoadBn:"",
      frontRoadEs:"",
      unitsEn:"",
      unitsBn:"",
      unitsEs:"",
      parkingEn:"",
      parkingBn:"",
      parkingEs:"",
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

      mosqueEn: "",
      mosqueBn: "",
      mosqueEs: "",

      collegeEn: "",
      collegeBn: "",
      collegeEs: "",

      schoolEn: "",
      schoolBn: "",
      schoolEs: "",

      marketEn: "",
      marketBn: "",
      marketEs: "",

      bank1En: "",
      bank1Bn: "",
      bank1Es: "",
      
      bank2En: "",
      bank2Bn: "",
      bank2Es: "",

      atmEn: "",
      atmBn: "",
      atmEs: "",

      busStopEn: "",
      busStopBn: "",
      busStopEs: "",

  
      
      mosqueNameEn: "",
      mosqueNameBn: "",
      mosqueNameEs: "",

      collegeNameEn: "",
      collegeNameBn: "",
      collegeNameEs: "",

      schoolNameEn: "",
      schoolNameBn: "",
      schoolNameEs: "",

      marketNameEn: "",
      marketNameBn: "",
      marketNameEs: "",

      bank1NameEn: "",
      bank1NameBn: "",
      bank1NameEs: "",
      
      bank2NameEn: "",
      bank2NameBn: "",
      bank2NameEs: "",

      atmNameEn: "",
      atmNameBn: "",
      atmNameEs: "",

      busStopNameEn: "",
      busStopNameBn: "",
      busStopNameEs: "",

      images: [],
      overviewImages: [],
      category: "", // New field for category selection
    },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      createNewProject(values);
      actions.resetForm();
    },
  });

 

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
        frontRoadEn,
      frontRoadBn,
      frontRoadEs,
      unitsEn,
      unitsBn,
      unitsEs,
      parkingEn,
      parkingBn,
      parkingEs,
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

        mosqueEn,
        mosqueBn,
        mosqueEs,

        collegeEn,
        collegeBn,
        collegeEs,
  
        schoolEn,
        schoolBn,
        schoolEs,
  
        marketEn,
        marketBn,
        marketEs,
  
        bank1En,
        bank1Bn,
        bank1Es,

        bank2En,
        bank2Bn,
        bank2Es,
  
        atmEn,
        atmBn,
        atmEs,
  
        busStopEn,
        busStopBn,
        busStopEs,


        // start
        
        mosqueNameEn,
        mosqueNameBn,
        mosqueNameEs,

        collegeNameEn,
        collegeNameBn,
        collegeNameEs,
  
        schoolNameEn,
        schoolNameBn,
        schoolNameEs,
  
        marketNameEn,
        marketNameBn,
        marketNameEs,
  
        bank1NameEn,
        bank1NameBn,
        bank1NameEs,

        bank2NameEn,
        bank2NameBn,
        bank2NameEs,
  
        atmNameEn,
        atmNameBn,
        atmNameEs,
  
        busStopNameEn,
        busStopNameBn,
        busStopNameEs,

        // end

        category,
        images,
        overviewImages,
      } = values;

      const data = {
        title: { en: titleEn, bn: titleBn, es: titleEs },
        content: { en: contentEn, bn: contentBn, es: contentEs },
        address: { en: addressEn, bn: addressBn, es: addressEs },
        landArea: { en: landAreaEn, bn: landAreaBn, es: landAreaEs },
        floors: { en: floorsEn, bn: floorsBn, es: floorsEs },
        frontRoad: { en: frontRoadEn, bn: frontRoadBn, es: frontRoadEs },
        units: { en: unitsEn, bn: unitsBn, es: unitsEs },
        parking: { en: parkingEn, bn: parkingBn, es: parkingEs },
        apartmentFloor: { en: apartmentFloorEn, bn: apartmentFloorBn, es: apartmentFloorEs },
        size: { en: sizeEn, bn: sizeBn, es: sizeEs },
        bedroom: { en: bedroomEn, bn: bedroomBn, es: bedroomEs },
        bathroom: { en: bathroomEn, bn: bathroomBn, es: bathroomEs },
        launchDate: { en: launchDateEn, bn: launchDateBn, es: launchDateEs },
        collectionName: { en: collectionNameEn, bn: collectionNameBn, es: collectionNameEs },
        buildingType: { en: buildingTypeEn, bn: buildingTypeBn, es: buildingTypeEs },

        mosque: { en: mosqueEn, bn: mosqueBn, es: mosqueEs },
        college: { en: collegeEn, bn: collegeBn, es: collegeEs },
        school: { en: schoolEn, bn: schoolBn, es: schoolEs },
        market: { en: marketEn, bn:marketBn, es: marketEs },
        bank1: { en: bank1En, bn: bank1Bn, es: bank1Es },
        bank2: { en: bank2En, bn: bank2Bn, es: bank2Es },
        atm: { en: atmEn, bn: atmBn, es: atmEs },
        busStop: { en: busStopEn, bn: busStopBn, es: busStopEs },


        mosqueName: { en: mosqueNameEn, bn: mosqueNameBn, es: mosqueNameEs },
        collegeName: { en: collegeNameEn, bn: collegeNameBn, es: collegeNameEs },
        schoolName: { en: schoolNameEn, bn: schoolNameBn, es: schoolNameEs },
        marketName: { en: marketNameEn, bn:marketNameBn, es: marketNameEs },
        bank1Name: { en: bank1NameEn, bn: bank1NameBn, es: bank1NameEs },
        bank2Name: { en: bank2NameEn, bn: bank2NameBn, es: bank2NameEs },
        atmName: { en: atmNameEn, bn: atmNameBn, es: atmNameEs },
        busStopName: { en: busStopNameEn, bn: busStopNameBn, es: busStopNameEs },



        category, // Include category
        images,
        overviewImages,
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

  const handleFileUpload = (acceptedFiles, callback) => {
    const filePromises = acceptedFiles.map((file) => {
      const reader = new FileReader();
      return new Promise((resolve) => {
        reader.onload = () => resolve(reader.result);
        reader.readAsDataURL(file);
      });
    });
  
    Promise.all(filePromises).then(callback);
  };
  
  const ImageDropzone = ({ name, setFieldValue, values,placeholder  }) => (
    <div className="border-2 border-dashed border-blue-500 p-2 mb-4">
      <Dropzone
        acceptedFiles=".jpg,.jpeg,.png"
        multiple
        onDrop={(acceptedFiles) => {
          handleFileUpload(acceptedFiles, (images) => {
            setFieldValue(name, images);
          });
        }}
      >
        {({ getRootProps, getInputProps, isDragActive }) => (
          // <div
          //   {...getRootProps()}
          //   className={`p-4 ${
          //     isDragActive ? "bg-blue-100" : "bg-gray-100"
          //   } hover:cursor-pointer`}
          // >
          //   <input name={name} {...getInputProps()} />
          //   {isDragActive ? (
          //     <p className="text-center text-sm">Drop your image files here!</p>
          //   ) : (
          //     <p className="text-center text-sm">
          //       Drag and drop  or click to select images
          //     </p>
          //   )}
          // </div>
          <div
          {...getRootProps()}
          className={`p-4 ${isDragActive ? "bg-blue-100" : "bg-gray-100"} hover:cursor-pointer`}
        >
          <input name={name} {...getInputProps()} />
          {isDragActive ? (
            <p className="text-center text-sm">Drop your image files here!</p>
          ) : values[name]?.length === 0 ? (
            <p className="text-center text-sm">{placeholder}</p> // Display the custom placeholder text
          ) : (
            <p className="text-center text-sm">Click to upload more images</p>
          )}
        </div>
        )}
      </Dropzone>
      <div className="flex mt-2 gap-2">
        {values[name].map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Preview ${index + 1}`}
            className="w-20 h-20 object-cover"
          />
        ))}
      </div>
    </div>
  );
  

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
              placeholder={`Write project content  (${lang})...`}
             
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


        {/* Project Front road */}
        {["En", "Bn", "Es"].map((lang) => (
          <div className="mb-3" key={`frontRoad${lang}`}>
            <label
              htmlFor={`frontRoad${lang}`}
              className="block mb-1 text-sm font-medium"
            >
              Project Front Road ({lang})
            </label>
            <textarea
              id={`frontRoad${lang}`}
              name={`frontRoad${lang}`}
              placeholder={`Write project frontRoad (${lang})...`}
              
              value={values[`frontRoad${lang}`]}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                touched[`frontRoad${lang}`] && errors[`frontRoad${lang}`]
                  ? "border-red-500"
                  : ""
              }`}
            />
            {touched[`frontRoad${lang}`] && errors[`frontRoad${lang}`] && (
              <p className="text-red-500 text-sm">{errors[`frontRoad${lang}`]}</p>
            )}
          </div>
        ))}



        {/* Project units*/}
        {["En", "Bn", "Es"].map((lang) => (
          <div className="mb-3" key={`units${lang}`}>
            <label
              htmlFor={`units${lang}`}
              className="block mb-1 text-sm font-medium"
            >
              Number of Units ({lang})
            </label>
            <textarea
              id={`units${lang}`}
              name={`units${lang}`}
              placeholder={`Write project units (${lang})...`}
              
              value={values[`units${lang}`]}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                touched[`units${lang}`] && errors[`units${lang}`]
                  ? "border-red-500"
                  : ""
              }`}
            />
            {touched[`units${lang}`] && errors[`units${lang}`] && (
              <p className="text-red-500 text-sm">{errors[`units${lang}`]}</p>
            )}
          </div>
        ))}



        {/* Project parking*/}
        {["En", "Bn", "Es"].map((lang) => (
          <div className="mb-3" key={`parking${lang}`}>
            <label
              htmlFor={`parking${lang}`}
              className="block mb-1 text-sm font-medium"
            >
              Project parking ({lang})
            </label>
            <textarea
              id={`parking${lang}`}
              name={`parking${lang}`}
              placeholder={`Write project parking (${lang})...`}
              
              value={values[`parking${lang}`]}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                touched[`parking${lang}`] && errors[`parking${lang}`]
                  ? "border-red-500"
                  : ""
              }`}
            />
            {touched[`parking${lang}`] && errors[`parking${lang}`] && (
              <p className="text-red-500 text-sm">{errors[`parking${lang}`]}</p>
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

        {/* new starts */}
         {/* Project mosque */}
         {["En", "Bn", "Es"].map((lang) => (
          <div className="mb-3" key={`mosque${lang}`}>
            <label
              htmlFor={`mosque${lang}`}
              className="block mb-1 text-sm font-medium"
            >
              Project mosque distance ({lang})
            </label>
            <textarea
              id={`mosque${lang}`}
              name={`mosque${lang}`}
              placeholder={`Write project mosque (${lang})...`}
              
              value={values[`mosque${lang}`]}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                touched[`mosque${lang}`] && errors[`mosque${lang}`]
                  ? "border-red-500"
                  : ""
              }`}
            />
            {touched[`mosque${lang}`] && errors[`mosque${lang}`] && (
              <p className="text-red-500 text-sm">{errors[`mosque${lang}`]}</p>
            )}
          </div>
        ))}

         {/* Project college */}
         {["En", "Bn", "Es"].map((lang) => (
          <div className="mb-3" key={`college${lang}`}>
            <label
              htmlFor={`college${lang}`}
              className="block mb-1 text-sm font-medium"
            >
              Project college distance ({lang})
            </label>
            <textarea
              id={`college${lang}`}
              name={`college${lang}`}
              placeholder={`Write project college (${lang})...`}
              
              value={values[`college${lang}`]}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                touched[`college${lang}`] && errors[`college${lang}`]
                  ? "border-red-500"
                  : ""
              }`}
            />
            {touched[`college${lang}`] && errors[`college${lang}`] && (
              <p className="text-red-500 text-sm">{errors[`college${lang}`]}</p>
            )}
          </div>
        ))}

         {/* Project school */}
         {["En", "Bn", "Es"].map((lang) => (
          <div className="mb-3" key={`school${lang}`}>
            <label
              htmlFor={`school${lang}`}
              className="block mb-1 text-sm font-medium"
            >
              Project school distance({lang})
            </label>
            <textarea
              id={`school${lang}`}
              name={`school${lang}`}
              placeholder={`Write project school (${lang})...`}
              
              value={values[`school${lang}`]}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                touched[`school${lang}`] && errors[`school${lang}`]
                  ? "border-red-500"
                  : ""
              }`}
            />
            {touched[`school${lang}`] && errors[`school${lang}`] && (
              <p className="text-red-500 text-sm">{errors[`school${lang}`]}</p>
            )}
          </div>
        ))}


         {/* Project market */}
         {["En", "Bn", "Es"].map((lang) => (
          <div className="mb-3" key={`market${lang}`}>
            <label
              htmlFor={`market${lang}`}
              className="block mb-1 text-sm font-medium"
            >
              Project market distance({lang})
            </label>
            <textarea
              id={`market${lang}`}
              name={`market${lang}`}
              placeholder={`Write project market (${lang})...`}
              
              value={values[`market${lang}`]}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                touched[`market${lang}`] && errors[`market${lang}`]
                  ? "border-red-500"
                  : ""
              }`}
            />
            {touched[`market${lang}`] && errors[`market${lang}`] && (
              <p className="text-red-500 text-sm">{errors[`market${lang}`]}</p>
            )}
          </div>
        ))}

        

         {/* Project bank1 */}
         {["En", "Bn", "Es"].map((lang) => (
          <div className="mb-3" key={`bank1${lang}`}>
            <label
              htmlFor={`bank1${lang}`}
              className="block mb-1 text-sm font-medium"
            >
              First Bank distance({lang})
            </label>
            <textarea
              id={`bank1${lang}`}
              name={`bank1${lang}`}
              placeholder={`Write project bank1 (${lang})...`}
              
              value={values[`bank1${lang}`]}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                touched[`bank1${lang}`] && errors[`bank1${lang}`]
                  ? "border-red-500"
                  : ""
              }`}
            />
            {touched[`bank1${lang}`] && errors[`bank1${lang}`] && (
              <p className="text-red-500 text-sm">{errors[`bank1${lang}`]}</p>
            )}
          </div>
        ))}

         {/* Project bank2 */}
         {["En", "Bn", "Es"].map((lang) => (
          <div className="mb-3" key={`bank2${lang}`}>
            <label
              htmlFor={`bank2${lang}`}
              className="block mb-1 text-sm font-medium"
            >
              Second Bank distance ({lang})
            </label>
            <textarea
              id={`bank2${lang}`}
              name={`bank2${lang}`}
              placeholder={`Write project bank2 (${lang})...`}
              
              value={values[`bank2${lang}`]}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                touched[`bank2${lang}`] && errors[`bank2${lang}`]
                  ? "border-red-500"
                  : ""
              }`}
            />
            {touched[`bank2${lang}`] && errors[`bank2${lang}`] && (
              <p className="text-red-500 text-sm">{errors[`bank2${lang}`]}</p>
            )}
          </div>
        ))}

         {/* Project atm */}
         {["En", "Bn", "Es"].map((lang) => (
          <div className="mb-3" key={`atm${lang}`}>
            <label
              htmlFor={`atm${lang}`}
              className="block mb-1 text-sm font-medium"
            >
              ATM booth distance ({lang})
            </label>
            <textarea
              id={`atm${lang}`}
              name={`atm${lang}`}
              placeholder={`Write project atm (${lang})...`}
              
              value={values[`atm${lang}`]}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                touched[`atm${lang}`] && errors[`atm${lang}`]
                  ? "border-red-500"
                  : ""
              }`}
            />
            {touched[`atm${lang}`] && errors[`atm${lang}`] && (
              <p className="text-red-500 text-sm">{errors[`atm${lang}`]}</p>
            )}
          </div>
        ))}

         {/* Project busStop */}
         {["En", "Bn", "Es"].map((lang) => (
          <div className="mb-3" key={`busStop${lang}`}>
            <label
              htmlFor={`busStop${lang}`}
              className="block mb-1 text-sm font-medium"
            >
              Bus Stop distance ({lang})
            </label>
            <textarea
              id={`busStop${lang}`}
              name={`busStop${lang}`}
              placeholder={`Write project busStop (${lang})...`}
              
              value={values[`busStop${lang}`]}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                touched[`busStop${lang}`] && errors[`busStop${lang}`]
                  ? "border-red-500"
                  : ""
              }`}
            />
            {touched[`busStop${lang}`] && errors[`busStop${lang}`] && (
              <p className="text-red-500 text-sm">{errors[`busStop${lang}`]}</p>
            )}
          </div>
           ))}

         


          {/* Project mosqueName */}
         {["En", "Bn", "Es"].map((lang) => (
          <div className="mb-3" key={`mosqueName${lang}`}>
            <label
              htmlFor={`mosqueName${lang}`}
              className="block mb-1 text-sm font-medium"
            >
              Mosque Name ({lang})
            </label>
            <textarea
              id={`mosqueName${lang}`}
              name={`mosqueName${lang}`}
              placeholder={`Write project mosqueNameEs (${lang})...`}
              
              value={values[`mosqueName${lang}`]}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                touched[`mosqueName${lang}`] && errors[`mosqueName${lang}`]
                  ? "border-red-500"
                  : ""
              }`}
            />
            {touched[`mosqueName${lang}`] && errors[`mosqueName${lang}`] && (
              <p className="text-red-500 text-sm">{errors[`mosqueName${lang}`]}</p>
            )}
          </div>
           ))}


          {/* Project collegeNameEs */}
         {["En", "Bn", "Es"].map((lang) => (
          <div className="mb-3" key={`collegeName${lang}`}>
            <label
              htmlFor={`collegeName${lang}`}
              className="block mb-1 text-sm font-medium"
            >
               College Name ({lang})
            </label>
            <textarea
              id={`collegeName${lang}`}
              name={`collegeName${lang}`}
              placeholder={`Write project collegeName (${lang})...`}
              
              value={values[`collegeName${lang}`]}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                touched[`collegeName${lang}`] && errors[`collegeName${lang}`]
                  ? "border-red-500"
                  : ""
              }`}
            />
            {touched[`collegeName${lang}`] && errors[`collegeName${lang}`] && (
              <p className="text-red-500 text-sm">{errors[`collegeName${lang}`]}</p>
            )}
          </div>
           ))}


          {/* Project schoolNameEs */}
         {["En", "Bn", "Es"].map((lang) => (
          <div className="mb-3" key={`schoolName${lang}`}>
            <label
              htmlFor={`schoolName${lang}`}
              className="block mb-1 text-sm font-medium"
            >
               School Name ({lang})
            </label>
            <textarea
              id={`schoolName${lang}`}
              name={`schoolName${lang}`}
              placeholder={`Write project schoolName (${lang})...`}
              
              value={values[`schoolName${lang}`]}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                touched[`schoolName${lang}`] && errors[`schoolName${lang}`]
                  ? "border-red-500"
                  : ""
              }`}
            />
            {touched[`schoolName${lang}`] && errors[`schoolName${lang}`] && (
              <p className="text-red-500 text-sm">{errors[`schoolName${lang}`]}</p>
            )}
          </div>
          ))}


          {/* Project marketNameEs */}
         {["En", "Bn", "Es"].map((lang) => (
          <div className="mb-3" key={`marketName${lang}`}>
            <label
              htmlFor={`marketName${lang}`}
              className="block mb-1 text-sm font-medium"
            >
               Market Name ({lang})
            </label>
            <textarea
              id={`marketName${lang}`}
              name={`marketName${lang}`}
              placeholder={`Write project marketName (${lang})...`}
              
              value={values[`marketName${lang}`]}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                touched[`marketName${lang}`] && errors[`marketName${lang}`]
                  ? "border-red-500"
                  : ""
              }`}
            />
            {touched[`marketName${lang}`] && errors[`marketName${lang}`] && (
              <p className="text-red-500 text-sm">{errors[`marketName${lang}`]}</p>
            )}
          </div>
            ))}


          {/* Project bank1NameEs */}
         {["En", "Bn", "Es"].map((lang) => (
          <div className="mb-3" key={`bank1Name${lang}`}>
            <label
              htmlFor={`bank1Name${lang}`}
              className="block mb-1 text-sm font-medium"
            >
               First Bank Name ({lang})
            </label>
            <textarea
              id={`bank1Name${lang}`}
              name={`bank1Name${lang}`}
              placeholder={`Write project bank1Name(${lang})...`}
              
              value={values[`bank1Name${lang}`]}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                touched[`bank1Name${lang}`] && errors[`bank1Name${lang}`]
                  ? "border-red-500"
                  : ""
              }`}
            />
            {touched[`bank1Name${lang}`] && errors[`bank1Name${lang}`] && (
              <p className="text-red-500 text-sm">{errors[`bank1Name${lang}`]}</p>
            )}
          </div>
          ))}


          {/* Project bank2NameEs */}
         {["En", "Bn", "Es"].map((lang) => (
          <div className="mb-3" key={`bank2Name${lang}`}>
            <label
              htmlFor={`bank2Name${lang}`}
              className="block mb-1 text-sm font-medium"
            >
              Second Bank Name ({lang})
            </label>
            <textarea
              id={`bank2Name${lang}`}
              name={`bank2Name${lang}`}
              placeholder={`Write project bank2Name (${lang})...`}
              
              value={values[`bank2Name${lang}`]}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                touched[`bank2Name${lang}`] && errors[`bank2Name${lang}`]
                  ? "border-red-500"
                  : ""
              }`}
            />
            {touched[`bank2Name${lang}`] && errors[`bank2Name${lang}`] && (
              <p className="text-red-500 text-sm">{errors[`bank2Name${lang}`]}</p>
            )}
          </div>
          ))}


          {/* Project atmName */}
         {["En", "Bn", "Es"].map((lang) => (
          <div className="mb-3" key={`atmName${lang}`}>
            <label
              htmlFor={`atmName${lang}`}
              className="block mb-1 text-sm font-medium"
            >
              ATM Booth Name ({lang})
            </label>
            <textarea
              id={`atmName${lang}`}
              name={`atmName${lang}`}
              placeholder={`Write project atmName(${lang})...`}
              
              value={values[`atmName${lang}`]}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                touched[`atmName${lang}`] && errors[`atmName${lang}`]
                  ? "border-red-500"
                  : ""
              }`}
            />
            {touched[`atmName${lang}`] && errors[`atmName${lang}`] && (
              <p className="text-red-500 text-sm">{errors[`atmName${lang}`]}</p>
            )}
          </div>
          ))}


          {/* Project busStopName */}
         {["En", "Bn", "Es"].map((lang) => (
          <div className="mb-3" key={`busStopName${lang}`}>
            <label
              htmlFor={`busStopName${lang}`}
              className="block mb-1 text-sm font-medium"
            >
               Bus Stop Name ({lang})
            </label>
            <textarea
              id={`busStopName${lang}`}
              name={`busStopName${lang}`}
              placeholder={`Write project busStopName (${lang})...`}
              
              value={values[`busStopName${lang}`]}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                touched[`busStopName${lang}`] && errors[`busStopName${lang}`]
                  ? "border-red-500"
                  : ""
              }`}
            />
            {touched[`busStopName${lang}`] && errors[`busStopName${lang}`] && (
              <p className="text-red-500 text-sm">{errors[`busStopName${lang}`]}</p>
            )}
          </div>

          // end lastest
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
            <option value="commercial">COMMERCIAL 
            </option>
            <option value="healthcare">HEALTHCARE</option>
            <option value="residential">RESIDENTIAL</option>
            <option value="religious">RELIGIOUS</option>
            <option value="landscape">LANDSCAPE</option>
            {/* Add more categories as needed */}
          </select>
          {touched.category && errors.category && (
            <p className="text-red-500 text-sm">{errors.category}</p>
          )}
        </div>

        
{/* 
<ImageDropzone
    name="images"
    setFieldValue={setFieldValue}
    values={values}
    
  />
  <ImageDropzone
    name="overviewImages"
    setFieldValue={setFieldValue}
    values={values}
  />
 */}


<ImageDropzone
  name="images"
  setFieldValue={setFieldValue}
  values={values}
  placeholder="Drag and drop or click to select images for Project"
 />

<ImageDropzone
  name="overviewImages"
  setFieldValue={setFieldValue}
  values={values}
  placeholder="Drag and drop or click to select images for Overview"
/>




        {/* Dropzone for Multiple overviewImages */}
        {/* <div className="border-2 border-dashed border-blue-500 p-2 mb-4">
          <Dropzone
            acceptedFiles=".jpg,.jpeg,.png"
            multiple
            onDrop={(acceptedFiles) => {
              const imageOverviewPromises = acceptedFiles.map((file) => {
                const reader = new FileReader();
                return new Promise((resolve) => {
                  reader.onload = () => resolve(reader.result);
                  reader.readAsDataURL(file);
                });
              });
              Promise.all(imageOverviewPromises).then((overviewImages) => {
                setFieldValue("overviewImages", overviewImages);
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
                <input name="overviewImages" {...getInputProps()} />
                {isDragActive ? (
                  <p className="text-center text-sm">Drop overviewImages here!</p>
                ) : (
                  <p className="text-center text-sm">
                    Drag and Drop or click to select overviewImages
                  </p>
                )}
              </div>
            )}
          </Dropzone>
          <div className="flex mt-2 gap-2">
            {values.overviewImages.map((overviewImage, index) => (
              <img
                key={index}
                src={overviewImage}
                alt={`Preview ${index + 1}`}
                className="w-20 h-20 object-cover"
              />
            ))}
          </div>
        </div>

         */}

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
