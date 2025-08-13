
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function LoginForm({setIsLoggedIn}) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        emial: '',
        password: ''
    });

    const [showPassword, setShowPassword] = useState(false);

    const changeHandler = (e) => {
        const { name, value } = e.target;
       setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const submitHnadler = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        setIsLoggedIn(true);
        toast.success("Login successful!");
        navigate('/dashboard'); // Redirect to home page after login
    }

  return (
    <form onSubmit={submitHnadler}
          className='flex flex-col w-full gap-y-4 mt-6 ' >
        <label className='w-full  ' >
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Email address 
                <sup className='text-pink-200'>*</sup> 
            </p>
            <input
                type="email"
                value={formData.email}
                onChange={changeHandler}
                placeholder="Enter your email"
                required
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full
                p-[12px] '
            />    
        </label>

        <label className='w-full  relative ' >
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Password 
                <sup className='text-pink-200'>*</sup> </p>
            <input
                type= {showPassword ? ("text") : ("password")}
                name="password"
                value={formData.password}
                onChange={changeHandler}
                placeholder="Enter your password"
                required
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full
                p-[12px] '
            />

            <span 
            className="absolute right-3 top-[38px] cursor-pointer"
            onClick={() => setShowPassword(!showPassword)} >
                {showPassword ? 
                (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) : 
                (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)   }
            </span>

            <Link to="#" >
                <p className='text-blue-100 text-[0.875rem] leading-[1.375rem] mt-1 w-max ml-auto'> 
                    Forgot Password?
                </p>
            </Link>

        </label>

        <button className='w-full bg-yellow-50  font-medium 
        rounded-[8px] py-3 px-12  text-richblack-900 mt-6' >
            Sign In
        </button>


    </form>
  );
}
export default LoginForm;