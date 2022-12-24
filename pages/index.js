import Head from "next/head";
import Header from '../components/Header/Header';
import HowToGet from '../components/HowToGet/HowToGet';
import ActionSection from "../components/ActionSection/ActionSection";
import About from "../components/About/About";
import Statistics from '../components/Statistics/Statistics';
import Reviews from "../components/Reviews/Reviews";
import Faq from "../components/Faq/Faq";
import Footer from "../components/Footer/Footer";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <Header />
    <HowToGet />
    <ActionSection />
    <About />
    <Statistics />
    <Reviews />
    <ActionSection />
    <Faq />
  </div>
)




export default Home;