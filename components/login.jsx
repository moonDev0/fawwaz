import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"; // Import eye icons
import React, { useState } from 'react'
import { LuUser } from "react-icons/lu";
import { FiLock } from "react-icons/fi";
import gate from "../public/assets/fut-new-gate.jpg"
import { useRouter } from "next/router";
import Link from 'next/link';
import Image from 'next/image';
import { auth, provider } from '../firebase';
import { signInWithPopup, signInWithEmailAndPassword, setPersistence, browserLocalPersistence } from 'firebase/auth';
import useUserStore from '@/store/useStore';
import { toast } from 'react-toastify';
import Spinner from '@/lib/spinner';
import { getDoc, doc } from 'firebase/firestore'; // Import Firestore functions
import { db } from '@/firebase'; // Import your Firestore instance


const LoginComponent = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { saveuser } = useUserStore();
  
const handleLoginWithEmail = async (e) => {
    e.preventDefault();
    
    try {
        setLoading(true);

        // Set auth persistence to local
        await setPersistence(auth, browserLocalPersistence);

        // Perform the email/password login
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
       

        if (!user) {
            throw new Error('User not found');
        }

        // Query Firestore to get the user's data
        console.log("User UID:", user.uid);
        const userDocRef = doc(db, 'users', user.uid);
        const userDoc = await getDoc(userDocRef);
        

        if (userDoc.exists()) {
            const userData = userDoc.data();
            // Save the user and the Firestore data into your store
            saveuser({ ...user, ...userData }); 
            toast.success(`Welcome ${userData.fullName || user.email}`);
        } else {
            throw new Error('User data not found in Firestore');
        }

        setLoading(false);
        router.push('/dashboard');
    } catch (error) {
        setError(error.message);
        setLoading(false);
        console.log('Error during email/password login:', error);
    }
};
    
    const handleLoginWithGoogle = async () => {
        try {
            await signInWithPopup(auth, provider);
            router.push("/dashboard");
        } catch (error) {
            console.log('Error during login with Google:', error);
        }
    };

  return (
    <div> 
      <div className='container mx-auto grid grid-cols-1 pt-32 mb-24 md:grid-cols-2'>
        <div className='justify-self-center hidden md:block'>
          <Image src={gate} alt='login Img' className=' rounded-tr-3xl rounded-bl-3xl' />
        </div>
        <div className='flex flex-col justify-center px-4 md:px-20 items-center'>
         
          <h1 className='text-black text-[30px] font-extrabold font-syne mt-[-30px] md:mb-10 text-center'>Login</h1>
          <form onSubmit={handleLoginWithEmail} className='w-full'>
            <div className='w-full bg-[#F3F1F1] flex items-center text-black rounded-br-lg border-2 border-[#BFBFBF] rounded-tl-lg'>
              <label htmlFor="email"></label>
              <i className='ml-5 z-10'>
                <LuUser />
              </i>
              <input 
                type="text" 
                required 
                name="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='w-full py-2 text-black px-5 outline-none bg-transparent' 
                placeholder='Password' 
                name="password" 
              />
              
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <button disabled={loading} className='mt-2 bg-secondary text-white w-full rounded-br-lg rounded-tl-lg py-2'>{loading ? "..." : "Login"}</button>
          </form>
        </div>      
      </div>
    </div>
  )
}

export default LoginComponent;