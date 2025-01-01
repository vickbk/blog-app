import { AppProps } from "next/app";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
    return <>
    <ToastContainer />
    <Component {...pageProps} />
    </>;
  }