import React, { useState } from 'react';
import ChangingBg from '../components/ChanginBg';
import logo from '../assets/logo.png'
import { FaRegEye } from 'react-icons/fa';
import { RiEyeCloseLine } from "react-icons/ri";


const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [signChange, setSignChange] = useState('Login')
  const [errors, setErrors] = useState({});
  const [passwordVisible, setPasswordVisible] = useState('password');


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validate form fields
    if (!formData.name) {
      newErrors.name = 'Name is required';
    }
    if (!formData.username) {
        newErrors.username = 'Username is required';
      }
      if (!formData.email) {
        newErrors.email = 'Email is required';
      }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be greater than 6 characters';
    }
    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted successfully');
    }
  };

  const signIn = () =>{
    setSignChange('Sign Up')
  }

  return (
    <div className=" flex h-screen w-full  overflow-hidden relative"> 
    
        <div className='w-[50%]'>
        <img
              src={logo}
              className=' w-14 h-14 cursor-pointer absolute top-3 left-3 z-50'
            /> 
       
            
            <form action="" onSubmit={handleSubmit} className=' flex flex-col px-32 pt-24  justify-center gap-6' >
            <div className='mb-4'>
                <h1 className='text-4xl font-bold  '>Create an Account</h1>
                <p>Already have an account? <a href="" className='text-blue-500 underline pb-1'>Log in</a></p>
            </div>

            <div className='flex gap-4'>
            <div>
              {/* <label htmlFor="name">Name:</label> */}
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className='border-gray-200 rounded-full border px-3 py-1 w-full outline-none'
              />
              {errors.name && <p className="text-red-500">{errors.name}</p>}
            </div>
    
            <div>
              {/* <label htmlFor="username">Username:</label> */}
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                className='border-gray-200 rounded-full border px-3 py-1 w-full outline-none'
              />
              {errors.username && <p className="text-red-500 ">{errors.username}</p>}
            </div>
            </div>
            

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className='border-gray-200 rounded-full border px-3 py-1 w-full outline-none'
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>

            
    
            <div className='relative'>
              <input
                type={passwordVisible}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className='border-gray-200 rounded-full border px-3 py-1 w-full outline-none '
              />
                {passwordVisible === 'text' ? <FaRegEye className='absolute right-4 top-[10px] ' onClick={() => setPasswordVisible("password")}/> :
                                <RiEyeCloseLine className='absolute right-4 top-[10px] ' onClick={() => setPasswordVisible("text")}/>
}

              {errors.password && <p className="text-red-500">{errors.password}</p>}
            </div>
            <div>
              {/* <label htmlFor="confirmPassword">Confirm Password:</label> */}
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className='border-gray-200 rounded-full border px-3 py-1 w-full outline-none'
              />
              {errors.confirmPassword && (
                <p className="text-red-500">{errors.confirmPassword}</p>
              )}
            </div>

            <div className='flex gap-5 items-center '>
                <div className='flex gap-2 items-center '>
                    <input type="checkbox" name="designer" id="" />
                    <label htmlFor="designer">Designer</label>
                </div>

                <div className='flex gap-2 items-center '>
                    <input type="checkbox" name="model" id="" />
                    <label htmlFor="model">Model</label>
                </div>

            </div>


    {/* OnClick function */}
            <button type="submit"
             className='bg-orange-500 text-white w-full px-3 py-2 font-semibold rounded-full'
             onClick={signIn}>Create Account</button>
          </form> 
          
          
      <form action="" onSubmit={handleSubmit} className=' flex flex-col px-32 pt-24  justify-center gap-6' >
        <div className='mb-4'>
            <h1 className='text-4xl font-bold  '>Create an Account</h1>
            <p>Already have an account? <a href="" className='text-blue-500 underline pb-1'>Log in</a></p>
        </div>
        <div>
          {/* <label htmlFor="name">Name:</label> */}
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className='border-gray-200 rounded-full border px-3 py-1 w-full outline-none'
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>

        <div>
          {/* <label htmlFor="username">Username:</label> */}
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className='border-gray-200 rounded-full border px-3 py-1 w-full outline-none'
          />
          {errors.username && <p className="text-red-500">{errors.username}</p>}
        </div>

        <div>
          {/* <label htmlFor="password">Password:</label> */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className='border-gray-200 rounded-full border px-3 py-1 w-full outline-none'
          />
          {errors.password && <p className="text-red-500">{errors.password}</p>}
        </div>

        <div>
          {/* <label htmlFor="confirmPassword">Confirm Password:</label> */}
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className='border-gray-200 rounded-full border px-3 py-1 w-full outline-none'
          />
          {errors.confirmPassword && (
            <p className="text-red-500">{errors.confirmPassword}</p>
          )}
        </div>

        <button type="submit" className='bg-orange-500 text-white w-full px-3 py-2 font-semibold rounded-full'>Create Account</button>
      </form>

      
        </div>

      

        <div className='w-[50%] relative'>
          <ChangingBg title='' show=''/>
          <button className='absolute top-7 right-7 text-white border-orange-500 rounded-full py-1 px-4 border-2'>Sign In</button>
        </div>
        
    </div>
  );
};

export default RegistrationForm;
