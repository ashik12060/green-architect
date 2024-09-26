

// import React from 'react';
// import './Sample.css'

// const SampleLogin = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-400 to-green-800 relative overflow-hidden">
//       {/* Background pattern */}
//       <div className="absolute inset-0 w-full h-full bg-pattern bg-opacity-20"></div>

//       {/* Login card */}
//       <div className="relative max-w-md w-full bg-white rounded-3xl shadow-2xl border-t-8 border-green-500 p-8 transform hover:scale-105 transition-transform duration-300 ease-in-out">
//         <div className="flex justify-center mb-6">
//           <img
//             className="w-16 h-16 rounded-full border-4 border-green-500 shadow-md"
//             src="https://via.placeholder.com/150"
//             alt="User avatar"
//           />
//         </div>
//         <h2 className="text-4xl font-bold text-center text-green-600">Welcome Back!</h2>
//         <p className="text-center text-gray-500 mb-6">Login to access your account</p>
        
//         {/* Form */}
//         <form className="space-y-6">
//           <div className="space-y-4">
//             <div>
//               <label htmlFor="email" className="sr-only">Email address</label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 required
//                 className="appearance-none rounded-xl w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-4 focus:ring-green-500 focus:border-green-500 transition-all duration-300 shadow-sm"
//                 placeholder="Email address"
//               />
//             </div>
//             <div>
//               <label htmlFor="password" className="sr-only">Password</label>
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 required
//                 className="appearance-none rounded-xl w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-4 focus:ring-green-500 focus:border-green-500 transition-all duration-300 shadow-sm"
//                 placeholder="Password"
//               />
//             </div>
//           </div>

//           {/* Remember me + Forgot password */}
//           <div className="flex items-center justify-between">
//             <div className="flex items-center">
//               <input
//                 id="remember_me"
//                 name="remember_me"
//                 type="checkbox"
//                 className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
//               />
//               <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
//                 Remember me
//               </label>
//             </div>

//             <div className="text-sm">
//               <a href="/" className="font-medium text-green-600 hover:text-green-500 transition duration-200">
//                 Forgot your password?
//               </a>
//             </div>
//           </div>

//           {/* Login Button */}
//           <div>
//             <button
//               type="submit"
//               className="w-full flex justify-center py-3 px-4 border border-transparent text-lg font-medium rounded-xl text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-offset-2 transition-all duration-300 shadow-lg transform hover:scale-105"
//             >
//               Sign In
//             </button>
//           </div>

          
//           <div className="text-center text-sm text-gray-600 mt-6">
//             Don’t have an account?{' '}
//             <a href="/signup" className="font-medium text-green-600 hover:text-green-500 transition duration-200">
//               Sign Up
//             </a>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SampleLogin;


import React from 'react';

const SampleLogin = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-300 via-green-500 to-green-700 relative overflow-hidden">
      {/* Optional Background Pattern */}
      {/* <div className="absolute inset-0 w-full h-full bg-pattern bg-opacity-20"></div> */}

      {/* Login card */}
      <div className="relative max-w-md w-full bg-white rounded-3xl shadow-2xl border-t-8 border-green-500 p-8 transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <div className="flex justify-center mb-6">
          <img
            className="w-16 h-16 rounded-full border-4 border-green-500 shadow-md"
            src="https://via.placeholder.com/150"
            alt="User avatar"
          />
        </div>
        <h2 className="text-4xl font-bold text-center text-green-600">Welcome Back!</h2>
        <p className="text-center text-gray-500 mb-6">Login to access your account</p>
        
        {/* Form */}
        <form className="space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none rounded-xl w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-4 focus:ring-green-500 focus:border-green-500 transition-all duration-300 shadow-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-xl w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-4 focus:ring-green-500 focus:border-green-500 transition-all duration-300 shadow-sm"
                placeholder="Password"
              />
            </div>
          </div>

          {/* Remember me + Forgot password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="/" className="font-medium text-green-600 hover:text-green-500 transition duration-200">
                Forgot your password?
              </a>
            </div>
          </div>

          {/* Login Button */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent text-lg font-medium rounded-xl text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-offset-2 transition-all duration-300 shadow-lg transform hover:scale-105"
            >
              Sign In
            </button>
          </div>

          {/* Social Media Buttons */}
          <div className="mt-6 flex justify-between items-center space-x-4">
            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-xl focus:ring-4 focus:ring-blue-500 transition-all duration-300 shadow-lg">
              <i className="fab fa-facebook-f mr-2"></i> Facebook
            </button>
            <button className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-xl focus:ring-4 focus:ring-red-500 transition-all duration-300 shadow-lg">
              <i className="fab fa-google mr-2"></i> Google
            </button>
          </div>

          <div className="text-center text-sm text-gray-600 mt-6">
            Don’t have an account?{' '}
            <a href="/signup" className="font-medium text-green-600 hover:text-green-500 transition duration-200">
              Sign Up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SampleLogin;
