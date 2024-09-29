import '@/styles/globals.css'
import { useEffect } from 'react';
import  AOS  from 'aos';
import 'aos/dist/aos.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import "./Board/Board.css"

export default function App({ Component, pageProps }) {
  useEffect(() => {
   
    AOS.init({
      useClassNames: true,
      initClassName: true,
      duration: 1000,
      easing: 'ease',
      delay:20,
      once: true,
      
    });

  }, []);
  return (
    <>
      <ToastContainer
      position="top-center"
      className="text-[12px]"
      autoClose={2000}
    />
      <Component {...pageProps} />
    </>
  );
}
