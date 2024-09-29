import React, { useState } from 'react'
import { LuUser } from "react-icons/lu";
import { FiLock } from "react-icons/fi";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"; // Import eye icons
import Image from 'next/image'
import gate from "../public/assets/fut-new-gate.jpg"
import { useRouter } from "next/router";
import Link from 'next/link';

const LoginComponent = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); 
  const router = useRouter();

  const loginUser = async (e) => {
    // setIsLoading(true);
    // e.preventDefault();
    // await apiClient
    //   .post("v1/Login/login", formState)
    //   .then((res) => {
    //     saveUserProfile(res.data.userDetails);
    //     saveToken(res.data.token);
    //     saverole(res.data.userDetails.userRole);
    //     router.push("/dashboard");
    //     toast.success(`welcome ${res?.data?.userDetails.firstName}`);
    //     setIsLoading(false);
    //   })
    //   .catch((err) => {
    //     console.log("err", err);
    //     setIsLoading(false);
    //     // toast('something went wrong, try again');
    //     if (err?.response?.data?.message) {
    //       toast.error(`${err?.response?.data?.message}`);
    //     }
    //   });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div> 
      <div className='container mx-auto grid grid-cols-1 pt-32 mb-24 md:grid-cols-2'>
        <div className='justify-self-center hidden md:block'>
          <Image src={gate} alt='login Img' className=' rounded-tr-3xl rounded-bl-3xl' />
        </div>
        <div className='flex flex-col justify-center px-4 md:px-20 items-center'>
         
          <h1 className='text-black text-[30px] font-extrabold font-syne mt-[-30px] md:mb-10 text-center'>Login</h1>
          <form onSubmit={loginUser} className='w-full'>
            <div className='w-full bg-[#F3F1F1] flex items-center text-black rounded-br-lg border-2 border-[#BFBFBF] rounded-tl-lg'>
              <label htmlFor="email"></label>
              <i className='ml-5 z-10'>
                <LuUser />
              </i>
              <input 
                type="text" 
                required 
                name="email" 
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })} 
                className='w-full font-bold text-black outline-none px-5 bg-none bg-transparent py-2' 
                placeholder='Email' 
              />
            </div>

            <div className='mb-2 w-full flex items-center text-black mt-5 bg-[#F3F1F1] rounded-br-lg rounded-tl-lg border-2 border-[#BFBFBF] relative'>
              <label htmlFor="password"></label>
              <i className='ml-5 z-10'>
                <FiLock />
              </i>
              <input 
                type={showPassword ? "text" : "password"} 
                required
                value={formState.password}
                onChange={(e) => setFormState({ ...formState, password: e.target.value })}
                className='w-full py-2 text-black px-5 outline-none bg-transparent' 
                placeholder='Password' 
                name="password" 
              />
              <i onClick={togglePasswordVisibility} className='cursor-pointer text-[20px] text-[grey] absolute right-3 z-10'>
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </i>
            </div>
            <Link href="/forgotPassword" className="text-primary text-[14px]">Forgot Password</Link>
            <button disabled={isLoading} className='mt-2 bg-secondary text-white w-full rounded-br-lg rounded-tl-lg py-2'>{isLoading ? <Spinner /> : "Login"}</button>
          </form>
        </div>      
      </div>
    </div>
  )
}

export default LoginComponent;