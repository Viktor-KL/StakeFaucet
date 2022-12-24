import '../styles/globals.css';
import Head from "next/head";
import Layout from '../components/Layout';
import Header from '../components/Header/Header';





const MyApp = ({ Component, pageProps }) => (
  <Layout>
    
    <main>
      <Component {...pageProps} />
    </main>
    
  </Layout>
)

export default MyApp;