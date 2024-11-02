// import React, { useRef, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import Header from '../Shared/Headers/Header';
// import Footer from '../Shared/Footer/Footer';
// import { useTranslation } from 'react-i18next';
// import { send } from '@emailjs/browser';
// import { toast } from 'react-toastify';

// const BuyForm = () => {

//    // email 
  
//    const [name, setName] = useState("");
//    const [email, setEmail] = useState("");
//    const [phone, setPhone] = useState("");
//    const [message, setMessages] = useState("");
 
//    const form = useRef();
 
//    const sendEmail = (e) => {
//      e.preventDefault();
 
//      send(
//        "service_zn8v5ha",
//        "template_1abfnbw",
//        {
//          user_name: name,
//          user_email: email,
//          user_phone: phone,
//          user_message: message,
//        },
//        "SV6akA8uF1spLD8Oj"
//      )
//        .then((result) => {
//          toast.success("Email sent successfully!");
//          console.log(result.text);
//          // Clear the form
//          setName("");
//          setEmail("");
//          setPhone("");
//          setMessages("");
//        })
//        .catch((error) => {
//          toast.error("Failed to send email.");
//          console.log(error.text);
//        });
//    };
 
 

//   const { i18n } = useTranslation(); 
//     const { t } = useTranslation('Home'); 
//   const query = new URLSearchParams(useLocation().search);
//   const product = query.get('products') || '';

//   return (
//     <div className='bg-gray-100'>
//     <Header />
//     <div className="container mx-auto p-4 mb-10 ">
//       <h2 className="text-2xl font-bold mb-6 text-center"><span className='border-b-4 border-green-700'>Purchase <span className='text-green-700 font-bold'> </span></span></h2>
     
      

// <form ref={form} onSubmit={sendEmail} className="space-y-6">
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium ">
//                   {t("yourName")}
//                 </label>
//                 <input
//                   id="name"
//                   type="text"
//                   name="user_name"
//                   onChange={(event) => setName(event.target.value)}
//                   value={name}
//                   required
//                   placeholder={t("namePlaceholder")}
//                   className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:ring-2 focus:ring-green-500 focus:outline-none"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium ">
//                   {t("yourEmail")}
//                 </label>
//                 <input
//                   id="email"
//                   type="email"
//                   name="user_email"
//                   onChange={(event) => setEmail(event.target.value)}
//                   value={email}
//                   required
//                   placeholder={t("emailPlaceholder")}
//                   className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:ring-2 focus:ring-green-500 focus:outline-none"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="number" className="block text-sm font-medium ">
//                   {t("yourPhoneNumber")}
//                 </label>
//                 <input
//                   id="phone"
//                   type="number"
//                   name="user_phone"
//                   onChange={(event) => setPhone(event.target.value)}
//                   value={phone}
//                   required
//                   // type="number"
//                   placeholder={t("phonePlaceholder")}
//                   // id="number"
//                   className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:ring-2 focus:ring-green-500 focus:outline-none"
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="projectDetails"
//                   className="block text-sm font-medium "
//                 >
//                   {t("projectDetails")}
//                 </label>
//                 <textarea
//                   onChange={(event) => setMessages(event.target.value)}
//                   value={message}
//                   id="message"
//                   name="user_message"
//                   rows="5"
//                   required
//                   placeholder={t("detailsPlaceholder")}
//                   className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:ring-2 focus:ring-green-500 focus:outline-none"
//                 ></textarea>
//               </div>
             
             

//               <button
//                 type="submit"
//                 className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition duration-300 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
               
//               >
//                 {t("submitRequest")}
//               </button>
             
//             </form>
//     </div>
//     <Footer/>
//     </div>
//   );
// };

// export default BuyForm;
