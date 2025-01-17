import { AppProps } from "next/app";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import 'boxicons/css/boxicons.min.css'; 

export default function App({ Component, pageProps }: AppProps) {
    return <>
    <ToastContainer />
    <Component {...pageProps} />
    </>;
  }