
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
function SignupForm({setIsLoggedIn}) {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [showPassword, setShowPassword] = useState(false);
    const [accountType, setAccountType] = useState('student');

    function changeHandler(e) {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    function submitHnadler(e) {
        e.preventDefault();
        // Handle form submission logic here
        if(formData.password !== formData.confirmPassword){
            toast.error("Passwords do not match");
            return;
        }
        setIsLoggedIn(true);
        toast.success("Signup successful!");
        navigate('/dashboard'); // Redirect to dashboard after signup
        const finalData = {
            ...formData
        };
        console.log(finalData);
        // Redirect to dashboard or home page
    }

    return (
        <div>
            {/* student instructure tab */}
            <div className='flex bg-richblack-800 p-1 gap-x-1 my-6  rounded-full max-w-max w-max'>
                <button
                         className={`px-5 py-2 rounded-full  ${accountType === 'student' ?
                                         'bg-richblack-900 text-richblack-5' :
                                         'bg-transparent text-richblack-200'} duration-200`}

                    onClick={() => setAccountType('student')}
                   >
                    Student
                </button>
                <button
                    onClick={() => setAccountType('instructor')}
                    className={`px-5 py-2 rounded-full ${accountType === 'instructor' ?
                                         'bg-richblack-900 text-richblack-5' :
                                         'bg-transparent text-richblack-200'} duration-200`}
                  >
                    Instructor
                </button>    
            </div>

            <form onSubmit={submitHnadler}>

            {/* first name and last name */}
                <div className=' flex gap-x-4 mt-[20px] ' >          
                <label className='w-full '>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                        First Name<sup className='text-pink-200'>*</sup></p>
                     <input
                    type="text"
                    name="firstname"
                    placeholder="Enter your first name"
                    onChange={changeHandler}
                    value={formData.firstname}
                    required
                     className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full
                p-[12px] '
                />   
                </label>

                <label className='w-full '>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                        Last Name<sup className='text-pink-200'>*</sup></p>
                    <input
                        type="text"
                        name="lastname"
                        placeholder="Enter your last name"
                        onChange={changeHandler}
                        value={formData.lastname}
                        required
                         className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full
                p-[12px] '
                    />
                </label>
                </div>

                {/* email */}
                <div className='mt-[20px] ' >

                <label className='mt-[20px]'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                        Email address<sup className='text-pink-200'>*</sup></p>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        onChange={changeHandler}
                        value={formData.email}
                        required
                         className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full
                p-[12px] '
                    />
                </label>

                </div>

                {/* create and confirm password */}

                <div className='flex gap-x-4 mt-[20px] ' >
                <label className='relative w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                        Create Password<sup className='text-pink-200'>*</sup></p>
                    <input
                        type= {showPassword ? "text" :  "password" }
                        name="password"
                        placeholder="Create your password"
                        onChange={changeHandler}
                        value={formData.password}
                        required
                         className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full
                p-[12px] '
                    />
                    <span
                    className="absolute right-3 top-[38px] cursor-pointer"
                     onClick={() => setShowPassword(!showPassword)} >
                        {showPassword ? 
                        (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>) : 
                        (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>)}
                    </span>
                </label>

                <label className='relative w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                        Confirm Password<sup className='text-pink-200'>*</sup></p>
                    <input
                        type= {showPassword ? "text" :  "password" }
                        name="confirmPassword"
                        placeholder="Confirm your password"
                        onChange={changeHandler}
                        value={formData.confirmPassword}
                        required
                         className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full
                p-[12px] '
                    />
                    <span 
                    className="absolute right-3 top-[38px] cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)} >
                        {showPassword ? 
                        (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>) : 
                        (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>)}
                    </span>
                </label>

                </div>

                <button className='w-full bg-yellow-50  font-medium 
        rounded-[8px] py-3 px-12  text-richblack-900 mt-6'>
                    Create Account
                </button>
               
            </form> 

        </div>
    )
}
export default SignupForm;