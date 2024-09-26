import { Avatar, Box } from '@mui/material'
import LockOpenIcon from '@mui/icons-material/LockOpen';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux'
import { userSignUpAction } from '../redux/actions/userAction'
import { Link } from 'react-router-dom';
import Header from '../components/Shared/Headers/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/Shared/Footer/Footer';

const validationSchema = yup.object({
    name: yup
        .string('Enter your complete name')
        .required('Name is required*'),
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required*'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required*'),
});



const Register = () => {
    const dispatch = useDispatch();


    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values, actions) => {
            //  alert(JSON.stringify(values, null, 2));
            dispatch(userSignUpAction(values));
            actions.resetForm();
        }

    })

    return (
        <>
            <Header />
            {/* <Box sx={{ height: '81vh', display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "primary.white" }}>


                <Box onSubmit={formik.handleSubmit} component="form" className='form_style border-style' >
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%",  }}>
                        <Avatar sx={{ m: 1, bgcolor: "primary.main", mb: 3 }}>
                            <LockOpenIcon />
                        </Avatar>
                        <TextField
                            sx={{
                                mb: 3,
                                "& .MuiInputBase-root": {
                                    color: 'text.secondary',
                                },
                                fieldset: { borderColor: "rgb(231, 235, 240)" }
                            }}
                            fullWidth
                            id="name"
                            label="Name"
                            name='name'
                            InputLabelProps={{
                                shrink: true,
                            }}

                            placeholder="Complete name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
                        />
                        <TextField
                            sx={{
                                mb: 3,
                                "& .MuiInputBase-root": {
                                    color: 'text.secondary',
                                },
                                fieldset: { borderColor: "rgb(231, 235, 240)" }
                            }}
                            fullWidth
                            id="email"
                            label="E-mail"
                            name='email'
                            InputLabelProps={{
                                shrink: true,
                            }}

                            placeholder="E-mail"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                        <TextField
                            sx={{
                                mb: 3,
                                "& .MuiInputBase-root": {
                                    color: 'text.secondary'
                                },
                                fieldset: { borderColor: "rgb(231, 235, 240)" }
                            }}
                            fullWidth
                            id="password"
                            name="password"
                            label="Password"
                            type="password"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="Password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                        />

                        <Button fullWidth variant="contained" type='submit' >Register</Button>
                        <Link to='/login' className='mt-2 fs-6'><u>Already Registered? Login</u></Link>
                    </Box>
                </Box>
            </Box> */}
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br ">
      <div className="bg-green-800  shadow-xl rounded-lg p-8 w-full max-w-md">
        {/* Avatar icon */}
        <div className="flex flex-col items-center mb-6">
          {/* <Avatar className="bg-red-600 mb-3">
            <LockOpenIcon  className='bg-red-500'/>
          </Avatar> */}
          <FontAwesomeIcon icon={faLock} className='bg-white px-4 py-4 rounded-full text-2xl text-green-700' />
          <h2 className="text-2xl font-bold text-white">Register</h2>
        </div>
        
        {/* Form */}
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="sr-only">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Complete name"
              className={`w-full px-4 py-3 border ${formik.touched.name && formik.errors.name ? 'border-white' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-white`}
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-400 text-sm mt-1">{formik.errors.name}</div>
            ) : null}
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="sr-only">E-mail</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="E-mail"
              className={`w-full px-4 py-3 border ${formik.touched.email && formik.errors.email ? 'border-white' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-white`}
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-400 text-sm mt-1">{formik.errors.email}</div>
            ) : null}
          </div>
          
          {/* Password Input */}
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              className={`w-full px-4 py-3 border ${formik.touched.password && formik.errors.password ? 'border-white-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-white`}
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-400 text-sm mt-1">{formik.errors.password}</div>
            ) : null}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-white text-green-900 font-bold text-xl py-3 rounded-md  transition-colors"
          >
            Register
          </button>

          {/* Link to Login */}
          <div className="text-center mt-2">
            <Link to="/login" className="text-white hover:underline">
              Already Registered? Login
            </Link>
          </div>
        </form>
      </div>
      
    </div>
    <Footer />
        </>
    )
}

export default Register